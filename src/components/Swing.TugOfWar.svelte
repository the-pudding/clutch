<script>
</script>

<div class="wrapper">
	<div class="war">
		<h2 class="team1">Bulls</h2>
		<div class="rope" />
		<div class="flag" />
		<h2 class="team2">Pacers</h2>
	</div>
</div>

<style>
	.wrapper {
		position: sticky;
		bottom: 0;
		background: rgb(255, 255, 255, 0.95);
		width: 100%;
	}
	.war {
		display: flex;
		width: 100%;
		margin: auto;
		align-items: center;
		justify-content: space-between;
		position: relative;
	}
	h2 {
		padding: 0.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	h2 span {
		font-size: 1rem;
		text-align: center;
	}
	.team1 {
		color: var(--color-red);
		background: black;
	}
	.team2 {
		background: var(--color-yellow);
	}
	.rope {
		background: tan;
		height: 10px;
		width: 100%;
	}
	.flag {
		position: absolute;
		width: 20px;
		height: 30px;
		background: greenyellow;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -25%);
	}
</style>
