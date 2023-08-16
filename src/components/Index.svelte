<script>
	import Game from "$components/Game.svelte";
	import Scatter from "$components/Scatter.svelte";
	import FreeThrows from "$components/FreeThrows.svelte";
	import nba from "$data/players-nba.csv";
	import wnba from "$data/players-wnba.csv";
</script>

<!-- <Game /> -->
<Scatter data={nba} />
<Scatter data={wnba} />

<!-- <FreeThrows data={nba} />
<FreeThrows data={wnba} /> -->
