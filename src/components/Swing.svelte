<script>
	import copy from "$data/copy.json";
	import TugOfWar from "$components/Swing.TugOfWar.svelte";
	import Video from "$components/Swing.Video.svelte";
</script>

{#each copy.swing as { type, value, start, end, preText, postText }}
	{#if type === "text"}
		<p>{@html value}</p>
	{:else}
		<Video {start} {end} />
	{/if}
{/each}

<TugOfWar />

<style>
</style>
