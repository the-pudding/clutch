<script>
	import { onMount, createEventDispatcher } from "svelte";

	export let id;
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
	$: if (loaded && currentTime >= stop && !paused && !guessed) {
		videoEl.pause();
		paused = true;
	}

	const guess = (userGuess) => {
		guessed = true;

		dispatch("guess", { content: userGuess });

		videoEl.play();
		paused = false;
	};

	const onEnd = () => {
		dispatch("end");
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

	<div class="overlay" class:visible={showOptions}>
		<div>
			<button on:click={() => guess(true)}>make</button>
			<button on:click={() => guess(false)}>miss</button>
		</div>
	</div>
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
		opacity: 0.2;
	}
	.overlay {
		opacity: 0;
		transition: opacity calc(var(--1s) * 0.5);
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: rgb(144, 144, 144, 0.5);
		height: 100%;
		width: 100%;
	}
	button {
		background: var(--color-green);
	}
	.overlay.visible {
		opacity: 1;
	}
</style>
