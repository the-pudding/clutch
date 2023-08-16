<script>
	import ClevelandDotPlot from "$components/layercake/todo/ClevelandDotPlot.svelte";
	import AxisX from "$components/layercake/AxisX.svg.svelte";
	import AxisY from "$components/layercake/AxisY.svg.svelte";
	import { LayerCake, Svg } from "layercake";
	import { scaleBand, scaleOrdinal } from "d3-scale";

	export let data;

	const yKey = "name";
	const xKey = ["ft_pct_all", "ft_pct_clutch"];
	const seriesColors = ["grey", "gold"];
	const names = data.map((d) => d.name);

	data.forEach((d) => {
		xKey.forEach((name) => {
			d[name] = +d[name];
		});
	});
	data.sort((a, b) => {
		const aDiff = a[xKey[0]] - a[xKey[1]];
		const bDiff = b[xKey[0]] - b[xKey[1]];
		return bDiff - aDiff;
	});
</script>

<div class="chart-container">
	<LayerCake
		padding={{ right: 10, bottom: 20, left: 30 }}
		x={xKey}
		y={yKey}
		yScale={scaleBand().paddingInner(0.05).round(true)}
		xDomain={[0, null]}
		xPadding={[10, 0]}
		zScale={scaleOrdinal()}
		zDomain={xKey}
		zRange={seriesColors}
		{data}
	>
		<Svg>
			<AxisX />
			<AxisY ticks={names} />
			<ClevelandDotPlot />
		</Svg>
	</LayerCake>
</div>

<style>
	.chart-container {
		max-width: 900px;
		margin: auto;
		height: 5000px;
	}
</style>
