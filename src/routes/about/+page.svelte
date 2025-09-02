<svelte:head>
	<title>About MoraXtreme - Competition Info</title>
</svelte:head>

<script>
	// No interactivity needed yet
</script>

<div class="min-h-screen bg-base-100 text-base-content px-6 md:px-20 py-16">
	<div class="max-w-7xl mx-auto space-y-20">
		<!-- Header Section -->
		<div class="text-center space-y-4">
			<h1 class="text-4xl md:text-5xl tracking-wider font-display">
				<span class="font-light">ABOUT</span>
				<!-- Using primary color from the theme -->
				<span class="font-bold text-primary">MoraXtreme</span>
			</h1>
			<!-- Using base content color with slight opacity for subtitle -->
			<p class="text-base md:text-lg text-base-content/80 max-w-3xl mx-auto mt-10">
				Sri Lanka's largest algorithmic coding hackathon, hosted by IEEE Computer Society at the
				University of Moratuwa.
			</p>
		</div>

		<!-- "What is MoraXtreme?" Section -->
		<div class="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
			<div class="lg:col-span-2 flex justify-center lg:justify-start">
				<img
					src="/logo.png"
					alt="MoraXtreme Logo - Algorithmic Coding Competition"
					class="w-full max-w-xs sm:max-w-sm lg:max-w-full"
				/>
			</div>

			<div class="lg:col-span-3 space-y-6 text-center lg:text-left">
				<h2 class="text-3xl md:text-4xl font-bold font-display">What is MoraXtreme?</h2>
				<p class="text-base md:text-lg leading-relaxed text-base-content/80 mt-10">
					MoraXtreme is Sri Lanka’s premier annual algorithmic coding hackathon, proudly organized
					by the IEEE Computer Society of the University of Moratuwa. Designed as a 12-hour online
					coding battle, MoraXtreme brings together the brightest minds from universities across the
					country to showcase their expertise in algorithmic and mathematical problem-solving.
				</p>
			</div>
		</div>

		<!-- Highlights Section -->
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
			<!-- Using base-200 for card backgrounds -->
			<div class="bg-base-200/40 backdrop-blur-md border border-base-content/10 p-6 rounded-xl flex items-center justify-center h-full min-h-[150px]">
				<p class="font-bold">Annual 12-hour<br />online coding competition</p>
			</div>
			<div class="bg-base-200/40 backdrop-blur-md border border-base-content/10 p-6 rounded-xl flex items-center justify-center h-full min-h-[150px]">
				<p class="font-bold">For university<br />coders nationwide</p>
			</div>
			<div class="bg-base-200/40 backdrop-blur-md border border-base-content/10 p-6 rounded-xl flex items-center justify-center h-full min-h-[150px]">
				<p class="font-bold">Challenges crafted by top<br />algorithmic minds</p>
			</div>
			<div class="bg-base-200/40 backdrop-blur-md border border-base-content/10 p-6 rounded-xl flex items-center justify-center h-full min-h-[150px]">
				<p class="font-bold">Practice ground<br />for global contests like<br />IEEEXtreme</p>
			</div>
		</div>

		<!-- Core Values, Participation, and Impact Section -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			<div class="bg-base-200/40 backdrop-blur-md border border-base-content/10 p-8 rounded-xl space-y-4">
				<h3 class="text-xl font-bold font-display">Core Values</h3>
				<ul class="list-disc list-inside space-y-2 text-base-content/80">
					<li>Creative problem-solving</li>
					<li>Team synergy &amp; collaboration</li>
					<li>Continuous skill growth</li>
				</ul>
			</div>

			<div class="bg-base-200/40 backdrop-blur-md border border-base-content/10 p-8 rounded-xl space-y-4">
				<h3 class="text-xl font-bold font-display">Why Participate?</h3>
				<ul class="list-disc list-inside space-y-2 text-base-content/80">
					<li>Experience challenging, fun algorithmic puzzles</li>
					<li>Enhance coding &amp; analytical skills</li>
					<li>Network with like-minded peers and experts</li>
				</ul>
			</div>

			<div class="bg-base-200/40 backdrop-blur-md border border-base-content/10 p-8 rounded-xl space-y-4">
				<h3 class="text-xl font-bold font-display">MoraXtreme Impact</h3>
				<ul class="list-disc list-inside space-y-2 text-base-content/80">
					<li>Largest algorithmic hackathon in Sri Lanka</li>
					<li>Builds a competitive coding community</li>
					<li>Stepping stone to international coding contests</li>
				</ul>
			</div>
		</div>
	</div>
</div>