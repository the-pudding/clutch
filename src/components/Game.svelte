<script>
	import Video from "$components/Video.svelte";
	import videos from "$data/videos.csv";

	let currentI = 0;
	let correct = 0;
	let started = false;
	let finished = false;

	const data = videos.map((d) => ({
		...d,
		id: +d.id,
		stop: +d.stop,
		made: d.made === "true"
	}));
	$: d = data.find((d) => +d.id === currentI);

	const onGuess = (e) => {
		const userGuess = e.detail.content;
		if (userGuess === d.made) correct += 1;
	};
	const onEnd = () => {
		if (currentI < data.length - 1) currentI += 1;
		else finished = true;
	};
</script>

<button on:click={() => (started = true)}>begin</button>

{#if started}
	<p>shot {currentI + 1} / {data.length}</p>
	<p>correct: {correct} / {data.length}</p>
	{#key currentI}
		<Video id={d.id} stop={d.stop} on:guess={onGuess} on:end={onEnd} />
	{/key}
{/if}

<style>
</style>
