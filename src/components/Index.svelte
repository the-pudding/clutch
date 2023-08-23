<script>
	import ToggleableChart from "$components/ToggleableChart.svelte";
	import Swing from "$components/Swing.svelte";
	import Game from "$components/Game.svelte";
	import copy from "$data/copy.json";
</script>

<article>
	<p>{copy.preGame}</p>
	<Game />

	<Swing />

	<ToggleableChart type="scatter" />
	<ToggleableChart type="dot" />
	<ToggleableChart type="bar" />
</article>

<style>
	article {
		max-width: 700px;
		margin: auto;
	}
</style>
