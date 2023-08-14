<script>
	import { LayerCake, Svg, Canvas } from "layercake";
	import AxisX from "$components/layercake/AxisX.svg.svelte";
	import AxisY from "$components/layercake/AxisY.svg.svelte";
	import Voronoi from "$components/layercake/Voronoi.svelte";
	import ScatterSvg from "$components/layercake/Scatter.svg.svelte";
	import data from "$data/scatterplot.csv";

	const padding = 10;
	const xKey = "swg_made_per_game";
	const yKey = "pct_adjusted";
	const rKey = "total_shots_taken";
	let tooltipData = undefined;
	let tooltipX = 0;
	let tooltipY = 0;
	let highlight;

	data.forEach((d) => {
		d[xKey] = +d[xKey];
		d[yKey] = +d[yKey];
		d[rKey] = +d[rKey];
		d.pid = +d.pid;
		d.highlight = false;
	});

	const tooltipChange = (d) => {
		tooltipData = d.detail.data;
		tooltipX = d.detail[0];
		tooltipY = d.detail[1];
		highlight = d.detail.data.pid;
	};
</script>

<div class="chart-container">
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
			<AxisX gridlines={false} />
			<AxisY gridlines={false} ticks={4} />
		</Svg>

		<Svg>
			<ScatterSvg fill={"var(--color-green)"} {highlight} />
			<Voronoi on:voronoi-mouseover={tooltipChange} />
		</Svg>
	</LayerCake>

	<div class="tooltip" class:visible={tooltipData}>
		<div class="name">{tooltipData?.name}</div>
		<div>{tooltipData?.[xKey].toFixed(2)} average swing made / game</div>
		<div>{tooltipData?.[rKey]} clutch shots taken</div>
	</div>
</div>

<style>
	.chart-container {
		position: relative;
		width: 100%;
		height: 500px;
	}
	.tooltip {
		position: absolute;
		visibility: hidden;
		background: var(--color-gray-100);
		padding: 0.3rem;
	}
	.name {
		font-size: 1.5rem;
		font-weight: bold;
	}
	.tooltip.visible {
		visibility: visible;
	}
</style>
