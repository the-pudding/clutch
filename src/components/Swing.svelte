<script>
	import { setContext } from "svelte";
	import { writable } from "svelte/store";
	import Scrolly from "$components/helpers/Scrolly.svelte";
	import copy from "$data/copy.json";
	import Video from "$components/Swing.Video.svelte";
	import Line from "$components/Swing.Line.svelte";
	import TugOfWar from "$components/Swing.TugOfWar.svelte";

	const stepI = writable(undefined);
	const currentStep = writable(undefined);
	const timeOnClock = writable(98);

	setContext("swing", {
		stepI,
		currentStep,
		timeOnClock
	});

	const steps = copy.steps.map((d) => ({
		...d,
		start: +d.start,
		end: +d.end,
		pause: +d.pause
	}));

	$: $currentStep = steps.find((d, j) => j === $stepI);
</script>

<section id="swing">
	<div class="sticky">
		<div class="horizontal">
			<Video />
			<Line />
		</div>
		<TugOfWar />
	</div>

	<div class="spacer" />

	<Scrolly bind:value={$stepI}>
		{#each steps as { text }, i}
			<div class="step">
				<p>{@html text}</p>
			</div>
		{/each}
	</Scrolly>

	<div class="spacer" />
</section>

<style>
	section#swing {
		margin: 0 2rem;
	}
	.sticky {
		position: sticky;
		top: 4em;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		z-index: -1;
		pointer-events: none;
	}
	.horizontal {
		display: flex;
		align-items: center;
		width: 100%;
	}
	.spacer {
		height: 75vh;
	}
	.step {
		margin: 90vh 0;
		background: var(--color-gray-100);
		text-align: center;
	}
	.step p {
		padding: 2rem;
	}
</style>
