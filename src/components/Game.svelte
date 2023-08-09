<script>
	import Video from "$components/Video.svelte";
	import videos from "$data/videos.csv";

	let current = 0;
	let started = false;
	let finished = false;

	const data = videos.map((d) => ({
		...d,
		id: +d.id,
		stop: +d.stop,
		made: d.made === "true"
	}));
	$: d = data.find((d) => +d.id === current);

	const onEnd = () => {
		if (current < data.length - 1) current += 1;
		else finished = true;
	};
</script>

<button on:click={() => (started = true)}>begin</button>

{#if started}
	<p>shot {current + 1} / {data.length}</p>
	{#key current}
		<Video id={d.id} stop={d.stop} answer={d.made} on:end={onEnd} />
	{/key}
{:else if finished}
	<p>now read the story</p>
{/if}

<style>
</style>
