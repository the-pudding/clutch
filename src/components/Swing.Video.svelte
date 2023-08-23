<script>
	import { getContext } from "svelte";
	import YouTubePlayer from "youtube-player";
	import { onMount } from "svelte";

	export let start;
	export let end;

	let animationFrame;
	let playerEl;
	let player;
	let paused = true;
	let currentTime = 0;

	onMount(() => {
		player = YouTubePlayer(playerEl, {
			videoId: "KFB1L9j7xPs",
			playerVars: { controls: 0, start: start }
		});
		playVideo();
		pauseVideo();
	});

	$: if (currentTime >= end) {
		restart();
	}

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
	<button on:click={paused ? playVideo : pauseVideo}
		>{paused ? "play" : "pause"}</button
	>
	<button on:click={restart}>restart</button>
	<div id="video" bind:this={playerEl} />
</div>

<style>
</style>
