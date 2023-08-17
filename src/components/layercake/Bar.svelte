<script>
	import { getContext } from "svelte";

	const { data, x, xGet, yGet, xScale, yScale } = getContext("LayerCake");

	export let direction;
	export let fill;
</script>

<g>
	{#each $data as d, i}
		{@const x = direction === "right" ? $xScale(0) : $xScale($x(d)[0] * -1)}
		{@const y = $yGet(d)}
		{@const width =
			direction === "right"
				? $xGet(d)[1] - $xScale(0)
				: $xGet(d)[0] - $xScale(0)}
		{@const height = $yScale.bandwidth()}
		<rect data-id={i} {x} {y} {width} {height} {fill} />
	{/each}
</g>
