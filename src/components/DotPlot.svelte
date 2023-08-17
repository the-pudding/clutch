<script>
	import ClevelandDotPlot from "$components/layercake/todo/ClevelandDotPlot.svelte";
	import AxisX from "$components/layercake/AxisX.svg.svelte";
	import AxisY from "$components/layercake/AxisY.svg.svelte";
	import { LayerCake, Svg } from "layercake";
	import { scaleBand, scaleOrdinal } from "d3-scale";
	import _ from "lodash";

	export let data;
	export let league;

	const yKey = "name";
	const xKey = ["ft_pct_all", "ft_pct_clutch"];
	const seriesColors = ["var(--color-gray-200)", "var(--color-green)"];
	const ftaThreshold = { nba: 50, wnba: 15 };

	$: {
		data.forEach((d) => {
			xKey.forEach((name) => {
				d[name] = +d[name];
			});
			d.fta_clutch = +d.fta_clutch;
		});
	}
	$: sorted = _.sortBy(
		data.filter((d) => d.fta_clutch > ftaThreshold[league]),
		(d) => d[xKey[0]] - d[xKey[1]]
	);
	$: displayData = [..._.take(sorted, 10), ..._.takeRight(sorted, 10)];
	$: names = displayData.map((d) => d.name);
</script>

<div class="chart-container">
	<LayerCake
		padding={{ top: 30, right: 10, bottom: 20, left: 120 }}
		x={xKey}
		y={yKey}
		yScale={scaleBand().paddingInner(0.05).round(true)}
		xDomain={[0, null]}
		xPadding={[10, 0]}
		zScale={scaleOrdinal()}
		zDomain={xKey}
		zRange={seriesColors}
		data={displayData}
	>
		<Svg>
			<AxisX />
			<AxisY
				ticks={names}
				formatTick={(d) =>
					`${d} (${
						displayData.find((x) => x.name === d)?.fta_clutch
					} clutch FTA)`}
			/>
			<ClevelandDotPlot />
		</Svg>
	</LayerCake>
</div>

<style>
	.chart-container {
		max-width: 900px;
		margin: auto;
		height: 600px;
	}
</style>
