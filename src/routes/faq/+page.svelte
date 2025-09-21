<script>
	import ParallaxBg from "../../components/ParallaxBg.svelte";

	const faqs = [
		{
			question: "What is the difference between MoraXtreme and IEEEXtreme?",
			answer: `MoraXtreme is a local preparatory competition for Sri Lankan university students, while IEEEXtreme is the global 24-hour hackathon organized by IEEE.`
		},
		{
			question: "Who can participate in MoraXtreme 10.0?",
			answer: `Any undergraduate student from a recognized Sri Lankan university.`
		},
		{
			question: "How to register for the competition?",
			answer: `Through the official registration form provided on the MoraXtreme 10.0 webpage.`
		},
		{
			question: "Is MoraXtreme 10.0 only for University of Moratuwa students?",
			answer: `No. It is open to students from all universities in Sri Lanka.`
		},
		{
			question: "Do I need a team to participate?",
			answer: `No.`
		},
	];
</script>

<svelte:head>
	<title>FAQ - MoraXtreme 10.0 | Frequently Asked Questions</title>
	<meta name="description" content="Find answers to frequently asked questions about MoraXtreme 10.0. Learn about registration, eligibility, competition format, teams, and prizes." />
	<meta name="keywords" content="MoraXtreme FAQ, frequently asked questions, registration, eligibility, competition format, teams, prizes, Sri Lanka coding competition" />
</svelte:head>

<ParallaxBg />

<div class="min-h-screen py-24">
	<div class="max-w-6xl mx-auto px-4">
		<div class="text-center mb-16">
			<h1 class="font-['Orbitron'] font-bold text-5xl text-white mb-8">
				FAQ
			</h1>
		</div>

		<div class="max-w-5xl mx-auto space-y-4">
			{#each faqs as { question, answer } (question)}
				<div
					class="collapse collapse-arrow glass-card glass-shadow glass-shadow-hover"
				>
					<input type="checkbox" name="faq-accordion" />
					<div class="collapse-title text-lg font-['Orbitron'] font-bold text-white p-6">
						{question}
					</div>
					<div class="collapse-content rounded-b-xl">
						<div class="p-6 pt-0">
							<p class="text-white font-sans text-base leading-relaxed">
								{@html answer}
							</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
