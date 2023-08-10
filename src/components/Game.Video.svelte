<script>
	import { onMount, createEventDispatcher } from "svelte";

	export let id;
	export let pause;
	export let stop;

	const dispatch = createEventDispatcher();
	const src = `assets/video/${id}.mp4`;

	let videoEl;
	let duration;
	let currentTime = 0;
	let paused = true;
	let loaded = false;
	let guessed = false;

	$: showOptions = loaded && paused && !guessed;
	$: if (loaded && !paused && !guessed && currentTime >= pause) {
		videoEl.pause();
		paused = true;
	}
	$: if (stop && currentTime >= stop && guessed) {
		videoEl.pause();
		paused = true;
		dispatch("end");
	}

	const onEnd = () => {
		dispatch("end");
	};

	const guess = (userGuess) => {
		guessed = true;
		dispatch("guess", { content: userGuess });
		videoEl.play();
		paused = false;
	};

	onMount(() => {
		const request = new XMLHttpRequest();
		request.open("GET", src, true);

		request.responseType = "blob";
		request.onload = function () {
			if (this.status === 200) {
				const videoBlob = this.response;
				const videoUrl = URL.createObjectURL(videoBlob);
				videoEl.src = videoUrl;
				loaded = true;
				videoEl.play();
				paused = false;
			}
		};
		request.send();
	});
</script>

<div class="video-wrapper">
	<video
		playsinline
		poster=""
		bind:this={videoEl}
		bind:currentTime
		bind:duration
		on:ended={onEnd}
		class:blurred={showOptions}
	/>
</div>

<div class="buttons" class:visible={showOptions}>
	<button on:click={() => guess(true)}>make</button>
	<button on:click={() => guess(false)}>miss</button>
</div>

<style>
	.video-wrapper {
		position: relative;
		margin: auto;
		max-width: 700px;
	}
	video {
		width: 100%;
		margin: auto;
		transition: opacity calc(var(--1s) * 0.5);
	}
	video.blurred {
		opacity: 0.5;
	}
	.buttons {
		visibility: hidden;
		margin-top: 2rem;
	}
	button {
		background: var(--color-green);
	}
	.buttons.visible {
		visibility: visible;
	}
</style>
