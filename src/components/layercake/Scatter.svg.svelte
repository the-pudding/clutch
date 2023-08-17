<script>
	import { getContext } from "svelte";

	const { data, xGet, yGet, rGet } = getContext("LayerCake");

	export let fill = "#ccc";
	export let stroke = "#000";
	export let strokeWidth = 0;
	export let highlight;
</script>

<g>
	{#each $data as d}
		{@const cx = $xGet(d)}
		{@const cy = $yGet(d)}
		{@const radius = $rGet(d)}
		<circle
			{cx}
			{cy}
			r={radius}
			{fill}
			{stroke}
			stroke-width={strokeWidth}
			class:highlight={d.pid === highlight}
		/>
	{/each}
</g>

<style>
	circle {
		opacity: 0.8;
	}
	.highlight {
		opacity: 1;
		fill: lime;
	}
</style>
