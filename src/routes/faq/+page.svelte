<script>
	import ParallaxBg from "../../components/ParallaxBg.svelte";

	const faqs = [
		{
			question: "Who can participate in MoraXtreme 10.0?",
			answer: `All undergraduates enrolled in a recognized Sri Lankan university are eligible to participate. Students who have completed the 2024 Advanced Level (A/L) examinations and are awaiting university admission are also eligible to compete.`
		},
		{
			question: "What is the difference between MoraXtreme and IEEEXtreme?",
			answer: `MoraXtreme is a national coding competition organized by the IEEE Student Branch in collaboration with the IEEE Computer Society of the University of Moratuwa, serving as a local preparatory event for Sri Lankan university students. IEEEXtreme is a global 24-hour programming competition organized by IEEE, featuring teams from universities worldwide.`
		},
		{
			question: "How do I register for MoraXtreme 10.0?",
			answer: `Participants can register via the official form on the MoraXtreme 10.0 website.`
		},
		{
			question: "Is MoraXtreme 10.0 only for University of Moratuwa students?",
			answer: `No, the competition is open to undergraduates from all recognized universities across Sri Lanka.`
		},
		{
			question: "Do I need a team to participate in MoraXtreme?",
			answer: `Team participation is optional. Participants may compete individually or as part of a team of up to three members from the same university. However, we recommend team participation to encourage collaboration, enhance problem-solving, and compete more effectively.`
		},
		{
			question: "What is the structure of MoraXtreme 10.0?",
			answer: `MoraXtreme 10.0 consists of two rounds: a 12-hour online elimination round followed by an 8-hour final round held physically at the University of Moratuwa for the top teams.`
		},
		{
			question: "Do we need any prior knowledge, and what skills are tested?",
			answer: `The competition challenges participants' algorithmic, programming, and mathematical problem-solving skills. Beginners can get prepared through our specially designed preparatory workshops.`
		},
		{
			question: "What prizes or recognition are given to winners?",
			answer: `Winners will receive certificates of achievement and exciting cash prizes, along with exclusive recognition across MoraXtreme’s official platforms, showcasing their talent to a broad tech community and industry network.`
		},
		{
			question: "Will there be workshops or preparatory sessions?",
			answer: `Yes, leading up to the competition, workshops and awareness sessions are held to prepare participants.`
		},
		{
			question: "Can teams be formed with members from different universities?",
			answer: `No, all team members must be from the same university.`
		},
		{
			question: "Is there a registration fee for MoraXtreme 10.0?",
			answer: `No, registration is completely free of charge.`
		}
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
