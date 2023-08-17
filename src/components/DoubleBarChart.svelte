<script>
	import { LayerCake, Svg } from "layercake";
	import { scaleBand } from "d3-scale";
	import Bar from "$components/layercake/Bar.svelte";
	import AxisX from "$components/layercake/AxisX.svg.svelte";
	import AxisY from "$components/layercake/AxisY.svg.svelte";
	import _ from "lodash";

	export let data;
	export let league;

	const xKey = ["losses", "wins"];
	const yKey = "team";

	$: {
		data.forEach((d) => {
			xKey.forEach((name) => {
				d[name] = +d[name];
			});
			if (league === "wnba") {
				d.defunct = d.defunct === true || d.defunct === "True";
			}
			d.ratio = +d.ratio;
		});
	}

	$: sortedData = _.orderBy(data, (d) => d.ratio, "asc");
	$: teams = data.map((d) => d[yKey]);
	$: min = Math.max(...data.map((d) => d.losses)) * -1;
	$: max = Math.max(...data.map((d) => d.wins));
	$: formatName = (name) => {
		if (league === "wnba") {
			const team = data.find((d) => d[yKey] === name);
			if (team && team.defunct) return `${name} (defunct)`;
		}
		return name;
	};
</script>

<div class="chart-container">
	<LayerCake
		padding={{ top: 0, bottom: 20, left: 75 }}
		x={xKey}
		y={yKey}
		yScale={scaleBand().paddingInner(0.05)}
		xDomain={[min, max]}
		data={sortedData}
	>
		<Svg>
			<AxisX gridlines={true} baseline={true} snapTicks={true} />
			<AxisY gridlines={false} ticks={teams} formatTick={formatName} />
			<Bar direction={"left"} fill={"var(--color-red)"} />
			<Bar direction={"right"} fill={"var(--color-green"} />
		</Svg>
	</LayerCake>
</div>

<style>
	.chart-container {
		max-width: 800px;
		margin: auto;
		height: 500px;
	}
</style>
