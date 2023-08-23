<script>
	import YouTubePlayer from "youtube-player";
	import { onMount } from "svelte";

	export let start;
	export let end;
	export let pause;

	let animationFrame;
	let playerEl;
	let player;
	let paused = true;
	let revealed = false;
	let currentTime = 0;

	onMount(() => {
		player = YouTubePlayer(playerEl, {
			videoId: "KFB1L9j7xPs",
			playerVars: { controls: 0, start: start }
		});
		playVideo();
		pauseVideo();
	});

	$: if (!revealed && currentTime >= pause) pauseVideo();
	$: if (currentTime >= end) restart();

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
	const reveal = () => {
		revealed = true;
		playVideo();
	};
</script>

<div class="wrapper">
	<button on:click={playVideo}>play</button>
	<div id="video" bind:this={playerEl} />
	<button on:click={reveal}>see what happens</button>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: start;
	}
</style>
