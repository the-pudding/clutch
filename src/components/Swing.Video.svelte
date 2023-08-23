<script>
	import { getContext } from "svelte";
	import YouTubePlayer from "youtube-player";
	import { onMount } from "svelte";

	const { stepI, timeOnClock, currentStep } = getContext("swing");

	let animationFrame;
	let playerEl;
	let player;
	let paused = true;
	let currentTime = 0;

	onMount(() => {
		player = YouTubePlayer(playerEl, {
			videoId: "KFB1L9j7xPs",
			playerVars: { controls: 0, start: 0 }
		});
		player.on("stateChange", (event) => {
			if (event.data === 2) {
				paused = true;
			} else if (event.data === 1) {
				paused = false;
				trackTime();
			}
		});
	});

	$: $timeOnClock = 98 - currentTime; // TODO: but sometimes there's stoppage
	$: start = $currentStep?.start || undefined;
	$: end = $currentStep?.end || undefined;
	$: pause = $currentStep?.pause || undefined;
	$: $stepI, newStep();
	$: if (currentTime >= end) restart();
	$: if (currentTime >= pause) pauseVideo();

	const newStep = () => {
		if (!player) return;
		if (start !== undefined) {
			currentTime = start;
			player.seekTo(start);
			if (paused) playVideo();
		}
	};
	const restart = () => {
		player.seekTo(start);
	};
	const playVideo = () => {
		player.playVideo();
		paused = false;
		trackTime();
	};
	const pauseVideo = () => {
		player.pauseVideo();
		paused = true;
	};
	const trackTime = async () => {
		if (!paused) {
			currentTime = await player.getCurrentTime();
			animationFrame = requestAnimationFrame(trackTime);
		} else {
			cancelAnimationFrame(animationFrame);
		}
	};
</script>

<div class="wrapper">
	<div id="video" bind:this={playerEl} />
	<p>video time: {currentTime.toFixed(2)}s</p>
	<p>time on clock (this is off): {$timeOnClock.toFixed(2)}s</p>
</div>

<style>
	.wrapper {
		flex: 2;
	}
</style>
