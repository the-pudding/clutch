<script>
	export let score;
</script>

<div class="score">
	{#each score as d}
		{#if d === true}
			<span class="correct">✅</span>
		{:else if d === false}
			<span class="incorrect">❌</span>
		{:else}
			<span class="unanswered">❓</span>
		{/if}
	{/each}
</div>

<style>
	.score {
		display: flex;
		margin: 1rem 0;
	}
</style>
