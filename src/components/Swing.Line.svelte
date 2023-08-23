<script>
	import { getContext } from "svelte";
	import { LayerCake, Svg } from "layercake";
	import data from "$data/0022100530_wp.csv";
	import { extent } from "d3-array";
	import AxisX from "$components/layercake/AxisX.svg.svelte";
	import AxisY from "$components/layercake/AxisY.svg.svelte";
	import MultiLine from "$components/layercake/todo/MultiLine.svelte";
	import { scaleOrdinal } from "d3";
	import { tweened } from "svelte/motion";

	const { stepI, timeOnClock } = getContext("swing");

	const xKey = "time_remaining_overall";
	const yKey = "win_probability";
	const zKey = "team";
	const colors = ["black", "var(--color-yellow)"];

	data.forEach((d) => {
		d[yKey] = +d[yKey];
	});

	const groupedData = [
		{ team: "team1", values: data },
		{
			team: "team2",
			values: data.map((d) => ({
				...d,
				win_probability: 100 - d.win_probability
			}))
		}
	];
	const flatData = groupedData.reduce(
		(acc, cur) => [...acc, ...cur.values],
		[]
	);
	const strToSeconds = (timeString) => {
		const parts = timeString.split(":");
		return +parts[0] * 60 + +parts[1];
	};
	const secondsToStr = (seconds) => {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return (
			(minutes < 10 ? "0" : "") +
			minutes +
			":" +
			(remainingSeconds < 10 ? "0" : "") +
			remainingSeconds
		);
	};
	const xDomain = tweened(
		extent(data, (d) => strToSeconds(d[xKey])).reverse(),
		{ duration: 1500 }
	);

	$: zoom = $stepI >= 2;
	$: displayData = groupedData.map((d) => ({
		...d,
		values: d.values.filter((d) =>
			zoom
				? strToSeconds(d[xKey]) <= 98 && strToSeconds(d[xKey]) >= $timeOnClock
				: true
		)
	}));
	$: $xDomain = zoom
		? [98, 0]
		: extent(data, (d) => strToSeconds(d[xKey])).reverse();
</script>

<div class="chart-container">
	<LayerCake
		padding={{ top: 8, right: 10, bottom: 20, left: 25 }}
		x={(d) => strToSeconds(d[xKey])}
		y={yKey}
		z={zKey}
		xDomain={$xDomain}
		yNice={4}
		yDomain={[0, null]}
		zScale={scaleOrdinal()}
		zRange={colors}
		{flatData}
		data={displayData}
	>
		<Svg>
			<AxisX formatTick={(d) => secondsToStr(d)} ticks={6} />
			<AxisY ticks={4} formatTick={(d) => (d === 100 ? `${d}%` : d)} />
			<MultiLine visible={$stepI !== undefined} />
		</Svg>
	</LayerCake>
</div>

<style>
	.chart-container {
		width: 100%;
		height: 250px;
		flex: 1;
	}
</style>
