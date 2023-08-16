<script>
	import Toggle from "$components/helpers/Toggle.svelte";
	import Scatter from "$components/Scatter.svelte";
	import DotPlot from "$components/DotPlot.svelte";
	import playersNba from "$data/players-nba.csv";
	import playersWnba from "$data/players-wnba.csv";

	export let type;

	let league = "nba";

	$: playerData = league === "nba" ? playersNba : playersWnba;
</script>

<Toggle
	label="league"
	style="inner"
	bind:value={league}
	options={["nba", "wnba"]}
/>

{#if type === "scatter"}
	<Scatter data={playerData} />
{:else if type === "dot"}
	<DotPlot data={playerData} {league} />
{/if}
