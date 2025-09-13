<script>
	import ParallaxBg from "../../components/ParallaxBg.svelte";

	const faqs = [
		{
			question: "What is the difference between MoraXtreme and IEEEXtreme?",
			answer: `MoraXtreme is a national coding competition organized by the IEEE Student Branch of the University of Moratuwa, serving as a local preparatory event for Sri Lankan university students. IEEEXtreme is a global 24-hour programming competition organized by IEEE, featuring teams from universities worldwide.`
		},
		{
			question: "Who can participate in MoraXtreme 10.0?",
			answer: `Any undergraduate student enrolled in a recognized Sri Lankan university is eligible to participate. Additionally, students who have completed their 2024 Advanced Level (A/L) examinations and are awaiting university enrollment can also compete.`
		},
		{
			question: "How do I register for MoraXtreme 10.0?",
			answer: `Registration is done through the official registration form available on the MoraXtreme 10.0 official website.`
		},
		{
			question: "Is MoraXtreme 10.0 only for University of Moratuwa students?",
			answer: `No, the competition is open to undergraduate students from all universities across Sri Lanka.`
		},
		{
			question: "Do I need a team to participate in MoraXtreme?",
			answer: `Team participation is optional. Individual participation is allowed, or you can form a team of up to three members from the same university.`
		},
		{
			question: "What is the format of MoraXtreme 10.0?",
			answer: `MoraXtreme consists of two rounds: a 12-hour online elimination round followed by an 8-hour final round held physically at the University of Moratuwa for the top teams.`
		},
		{
			question: "What skills does MoraXtreme test?",
			answer: `The competition challenges participants' algorithmic, programming, and mathematical problem-solving skills.`
		},
		{
			question: "Are there any prizes or recognition for winners?",
			answer: `Yes, winners receive certificates of participation and awards, with promotional exposure for sponsors and partners during the event.`
		},
		{
			question: "Will there be workshops or preparatory sessions?",
			answer: `Yes, leading up to the competition, workshops and awareness sessions are held to prepare participants.`
		}
	];
</script>

<svelte:head>
	<title>FAQ - MoraXtreme</title>
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
					class="collapse collapse-arrow bg-white/5 backdrop-blur-xl backdrop-saturate-[2] backdrop-hue-rotate-[-357deg] border border-white/20 hover:bg-white/10 hover:backdrop-saturate-[2.5] hover:border-white/30 rounded-xl shadow-[0_0_32px_rgba(147,51,234,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_0_48px_rgba(147,51,234,0.5),inset_0_1px_0_rgba(255,255,255,0.15)] transition-all duration-300"
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
