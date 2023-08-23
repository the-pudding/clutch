<script>
	import { getContext } from "svelte";

	const { stepI, timeOnClock, currentStep } = getContext("swing");

	$: wp1 = 50;
	$: wp2 = 50;
</script>

<div class="war">
	<h2 class="team1">
		Bulls
		<span>{wp1}% chance of winning</span>
	</h2>
	<div class="rope" />
	<div class="flag" />
	<h2 class="team2">Pacers <span>{wp2}% chance of winning</span></h2>
</div>

<style>
	.war {
		display: flex;
		width: 60%;
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
