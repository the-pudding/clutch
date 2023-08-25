<script>
	import { scaleLinear } from "d3";
	import { onDestroy, onMount } from "svelte";

	export let start = undefined;
	export let end = undefined;
	export let make = undefined;
	export let miss = undefined;

	let interval;
	let width;
	let value = start;
	let height = 150;
	let padding = {
		top: 25,
		right: 25,
		bottom: 10,
		left: 25
	};
	let usableHeight = height - padding.top - padding.bottom;
	let flagSize = 30;

	$: usableWidth = width - padding.left - padding.right;
	$: xScale = scaleLinear().domain([0, 100]).range([0, usableWidth]);

	onMount(() => {
		if (end) {
			interval = setInterval(() => {
				if (value === start) {
					value = end;
				} else {
					value = start;
				}
			}, 3000);
		}
	});
	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div class="container" bind:clientWidth={width}>
	<svg {height}>
		<g transform={`translate(${padding.left}, ${padding.top})`}>
			{#if make && miss}
				<rect
					class="ghost"
					height={flagSize}
					width={flagSize}
					x={xScale(make)}
					y={usableHeight / 2}
					fill="var(--color-green)"
				/>
				<text x={xScale(make)} y={usableHeight / 2}>make</text>

				<rect
					class="ghost"
					height={flagSize}
					width={flagSize}
					x={xScale(miss)}
					y={usableHeight / 2}
					fill="var(--color-red)"
				/>
				<text x={xScale(miss)} y={usableHeight / 2}>miss</text>

				<line
					class="swing"
					x1={xScale(miss)}
					x2={xScale(miss)}
					y1={usableHeight / 2 + flagSize}
					y2={usableHeight / 2 + flagSize + 10}
				/>
				<line
					class="swing"
					x1={xScale(make)}
					x2={xScale(make)}
					y1={usableHeight / 2 + flagSize}
					y2={usableHeight / 2 + flagSize + 10}
				/>
				<line
					class="swing"
					x1={xScale(miss) - 0.8}
					x2={xScale(make) + 0.8}
					y1={usableHeight / 2 + flagSize + 10}
					y2={usableHeight / 2 + flagSize + 10}
				/>
				<text x={xScale((make + miss) / 2)} y={usableHeight}
					>{make - miss}% swing</text
				>
			{/if}

			<rect
				class="flag"
				height={flagSize}
				width={flagSize}
				x={xScale(value)}
				y={usableHeight / 2}
			/>

			<g class="axes">
				{#each [0, 50, 100] as d}
					<line x1={xScale(d)} x2={xScale(d)} y1={0} y2={usableHeight} />
					<text x={xScale(d)} y={-5}>{d === 50 ? 50 : 100}%</text>
				{/each}
			</g>
		</g>
	</svg>
</div>

<style>
	.container {
		width: 100%;
	}
	svg {
		background: var(--color-gray-100);
		margin: 1rem 0;
		width: 100%;
		font-family: var(--mono);
	}
	.flag {
		fill: var(--color-gray-600);
		transform-box: fill-box;
		transform: translate(-50%, -50%);
		transition: x 1s;
	}
	.ghost {
		opacity: 0.5;
		transform-box: fill-box;
		transform: translate(-50%, -50%);
		transition: x 1s;
	}
	.axes line {
		stroke: var(--color-gray-600);
		stroke-width: 2px;
		stroke-dasharray: 4;
	}
	line.swing {
		stroke: var(--color-gray-800);
		stroke-width: 2px;
	}
	text {
		text-anchor: middle;
		font-size: 0.8rem;
	}
</style>
