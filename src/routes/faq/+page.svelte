<script>
	import ParallaxBg from "../../components/ParallaxBg.svelte";

	const faqs = [
		{
			question: "What is MoraXtreme?",
			answer: `MoraXtreme is the premier technology competition at University of Moratuwa, featuring challenges in programming. It brings together the brightest minds to compete for a RS 50,000 prize pool.`
		},
		{
			question: "When does the event take place?",
			answer: `MoraXtreme 10.0 will take place during October. The preliminary rounds begin with online submissions, followed by the final competition on University. Specific dates and venues will be announced to registered participants.`
		},
		{
			question: "How do I register for MoraXtreme 10.0?",
			answer: `Registration is simple! Visit our registration form, fill in your details, and submit. You can register as a team of up to 4 members. Registration is completely free and open to all university students.`
		},
		{
			question: "Is there a registration fee?",
			answer: `No! Participation in MoraXtreme is completely <strong>FREE</strong>. We believe in making technology competitions accessible to all students. There are no hidden costs or registration fees - just bring your skills and passion for technology!`
		},
		{
			question: "Where does MoraXtreme happen?",
			answer: `MoraXtreme takes place at the University of Moratuwa campus. The preliminary rounds are conducted online, while the final competition will be held in our state-of-the-art computer labs and auditoriums. Specific venue details will be provided to qualified participants.`
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
