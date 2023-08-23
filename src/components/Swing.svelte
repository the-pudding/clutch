<script>
	import copy from "$data/copy.json";
	import TugOfWar from "$components/Swing.TugOfWar.svelte";
	import Video from "$components/Swing.Video.svelte";

	const chunks = copy.swing.map((d) => ({
		...d,
		start: +d.start,
		end: +d.end,
		pause: +d.pause
	}));
</script>

{#each chunks as { type, value, start, end, pause }}
	{#if type === "text"}
		<p>{@html value}</p>
	{:else}
		<Video {start} {end} {pause} />
	{/if}
{/each}

<TugOfWar />

<style>
</style>
