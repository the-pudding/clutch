<script>
	import Game from "$components/Game.svelte";
	import Scatter from "$components/Scatter.svelte";
	import dataNba from "$data/scatterplot-nba.csv";
	import dataWnba from "$data/scatterplot-wnba.csv";
</script>

<!-- <Game /> -->
<Scatter data={dataNba} />
<Scatter data={dataWnba} />
