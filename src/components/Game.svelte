<script>
	import Video from "$components/Game.Video.svelte";
	import Score from "$components/Game.Score.svelte";
	import videos from "$data/intro-game.csv";
	import { range } from "d3-array";
	import _ from "lodash";

	const unshuffledData = videos.map((d) => ({
		...d,
		id: +d.id,
		pause: +d.pause,
		stop: +d.stop,
		made: d.made === "true"
	}));
	const startingBatch = [
		..._.sampleSize(
			unshuffledData.filter((d) => d.made),
			startingBatchSize / 2
		),
		..._.sampleSize(
			unshuffledData.filter((d) => !d.made),
			startingBatchSize / 2
		)
	];
	if (startingBatchSize % 2 === 1) {
		const existingIds = startingBatch.map((d) => d.id);
		startingBatch.push(
			_.sample(unshuffledData.filter((d) => !existingIds.includes(d.id)))
		);
	}
	const shuffledData = [
		...startingBatch,
		..._.shuffle(unshuffledData.filter((d) => !startingBatch.includes(d)))
	];

	const startingBatchSize = 3;
	let currentI = 0;
	let lastIndex = startingBatchSize - 1;
	let score = range(lastIndex + 1).map((d) => undefined);
	let started = false;
	let finished = false;

	$: d = shuffledData[currentI];

	const onGuess = (e) => {
		const userGuess = e.detail.content;
		score[currentI] = userGuess === d.made;
	};
	const onEnd = () => {
		if (currentI < lastIndex) currentI += 1;
		else finished = true;
	};

	const more = () => {
		lastIndex = shuffledData.length - 1;
		currentI += 1;
		const numNew = shuffledData.length - score.length;
		score = [...score, ...range(numNew).map((d) => undefined)];
		finished = false;
	};
</script>

<div class="game">
	<button on:click={() => (started = true)}>begin</button>

	{#if started}
		<Score {score} />

		{#key currentI}
			<Video
				id={d.id}
				pause={d.pause}
				stop={d.stop}
				on:guess={onGuess}
				on:end={onEnd}
			/>
		{/key}
	{/if}

	{#if finished}
		<button on:click={more}>play more?</button>
	{/if}
</div>

<style>
	.game {
		max-width: 700px;
		margin: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
