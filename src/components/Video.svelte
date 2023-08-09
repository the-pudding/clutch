<script>
	import { onMount, createEventDispatcher } from "svelte";

	export let id;
	export let stop;
	export let answer;

	const dispatch = createEventDispatcher();
	const src = `assets/video/${id}.mp4`;

	let videoEl;
	let duration;
	let currentTime = 0;
	let paused = true;
	let loaded = false;
	let guessed = false;

	$: showOptions = paused && !guessed;
	$: if (loaded && currentTime >= stop && !paused && !guessed) {
		videoEl.pause();
		paused = true;
	}

	const guess = (userGuess) => {
		guessed = true;
		if (userGuess === answer) {
			console.log("correct");
		} else {
			console.log("incorrect");
		}
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
	/>
</div>
<div class="buttons" class:visible={showOptions}>
	<button on:click={() => guess(true)}>make</button>
	<button on:click={() => guess(false)}>miss</button>
</div>

<style>
	.video-wrapper {
		height: 300px;
	}
	video {
		height: 100%;
	}
	.buttons {
		visibility: hidden;
	}
	.buttons.visible {
		visibility: visible;
	}
</style>
