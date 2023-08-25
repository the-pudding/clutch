<script>
	import copy from "$data/copy.json";
	import TugOfWar from "$components/Swing.TugOfWar.svelte";

	const chunks = copy.swing.map((d) => ({
		...d,
		start: +d.start,
		end: +d.end,
		pause: +d.pause
	}));
</script>

{#each chunks as { type, value, id, start, end, make, miss }}
	{#if type === "text"}
		<p>{@html value}</p>
	{:else if type === "clip"}
		<video {id} src={`assets/video/${id}.mp4`} controls={true} />
	{:else if type === "tug"}
		<TugOfWar start={+start} end={+end} make={+make} miss={+miss} />
	{/if}
{/each}

<!-- <TugOfWar /> -->

<style>
</style>
