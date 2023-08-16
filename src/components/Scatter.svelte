<script>
	import { LayerCake, Svg, Canvas } from "layercake";
	import AxisX from "$components/layercake/AxisX.svg.svelte";
	import AxisY from "$components/layercake/AxisY.svg.svelte";
	import Voronoi from "$components/layercake/Voronoi.svelte";
	import ScatterSvg from "$components/layercake/Scatter.svg.svelte";
	import Tooltip from "$components/layercake/Tooltip.html.svelte";

	export let data;

	const padding = 10;
	const xKey = "swg_made_per_game";
	const yKey = "pct_clutch_adjusted";
	const rKey = "total_clutch_shots";

	let evt;
	let highlight;

	$: {
		data.forEach((d) => {
			d[xKey] = +d[xKey];
			d[yKey] = +d[yKey];
			d[rKey] = +d[rKey];
			d.pid = +d.pid;
			d.highlight = false;
		});
	}

	const tooltipChange = (e) => {
		evt = e;
		highlight = e.detail.data.pid;
	};
</script>

<div class="chart-container" on:mouseleave={() => (evt = undefined)} role="img">
	<LayerCake
		padding={{ top: 10, right: 5, bottom: 20, left: 25 }}
		x={xKey}
		y={yKey}
		r={rKey}
		xPadding={[padding, padding]}
		yPadding={[padding, padding]}
		{data}
	>
		<Svg>
			<AxisX gridlines={true} />
			<AxisY gridlines={true} />
		</Svg>

		<Svg>
			<ScatterSvg fill={"var(--color-green)"} {highlight} />
			<Voronoi on:voronoi-mouseover={tooltipChange} />
		</Svg>
	</LayerCake>

	{#if evt}
		<Tooltip {evt} let:data>
			<div class="name">{data.name}</div>
			<div>Adj. shooting %: {data.pct_clutch_adjusted.toFixed(1)}</div>
			<div>Swing made per game: {data.swg_made_per_game.toFixed(3)}</div>
			<div>Clutch shots: {data.total_clutch_shots}</div>
		</Tooltip>
	{/if}
</div>

<style>
	.chart-container {
		position: relative;
		max-width: 900px;
		margin: auto;
		height: 500px;
	}
	.name {
		font-size: 1.5rem;
		font-weight: bold;
	}
</style>
