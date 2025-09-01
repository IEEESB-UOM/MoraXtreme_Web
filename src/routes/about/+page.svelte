<svelte:head>
	<title>About MoraXtreme - Competition Info</title>
</svelte:head>

<div class="min-h-screen bg-base-200 py-8">
	<div class="max-w-4xl mx-auto px-4">
		<div class="hero bg-primary text-primary-content rounded-lg mb-8">
			<div class="hero-content text-center py-16">
				<div class="max-w-md">
					<h1 class="text-5xl font-bold">MoraXtreme</h1>
					<p class="py-6 text-lg">The Ultimate Tech Competition for Innovation and Excellence</p>
				</div>
			</div>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
			<div class="card bg-base-100 shadow-xl">
				<div class="card-body">
					<h2 class="card-title text-2xl">What is MoraXtreme?</h2>
					<p>
						MoraXtreme is a premier technology competition that brings together the brightest minds 
						in programming, design, cybersecurity, and data science. Participants compete in various 
						categories to showcase their skills and win exciting prizes.
					</p>
				</div>
			</div>

			<div class="card bg-base-100 shadow-xl">
				<div class="card-body">
					<h2 class="card-title text-2xl">Competition Categories</h2>
					<div class="space-y-2">
						<div class="badge badge-primary badge-lg">Programming</div>
						<div class="badge badge-secondary badge-lg">UI/UX Design</div>
						<div class="badge badge-accent badge-lg">Cybersecurity</div>
						<div class="badge badge-neutral badge-lg">Data Science</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card bg-base-100 shadow-xl mb-8">
			<div class="card-body">
				<h2 class="card-title text-2xl mb-4">Event Timeline</h2>
				<div class="timeline timeline-vertical">
					<div class="timeline-item">
						<div class="timeline-middle">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.236 4.53L8.93 10.7a.75.75 0 00-1.06 1.061l1.884 1.884a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
						</div>
						<div class="timeline-start md:text-end mb-10">
							<time class="font-mono italic">Week 1</time>
							<div class="text-lg font-black">Registration Opens</div>
							<div>Open registration for all categories</div>
						</div>
						<hr/>
					</div>
					<div class="timeline-item">
						<hr/>
						<div class="timeline-middle">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.236 4.53L8.93 10.7a.75.75 0 00-1.06 1.061l1.884 1.884a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
						</div>
						<div class="timeline-end mb-10">
							<time class="font-mono italic">Week 3</time>
							<div class="text-lg font-black">Preliminary Round</div>
							<div>Online preliminary tests and submissions</div>
						</div>
						<hr/>
					</div>
					<div class="timeline-item">
						<hr/>
						<div class="timeline-middle">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.236 4.53L8.93 10.7a.75.75 0 00-1.06 1.061l1.884 1.884a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
						</div>
						<div class="timeline-start md:text-end mb-10">
							<time class="font-mono italic">Week 4</time>
							<div class="text-lg font-black">Finals</div>
							<div>On-campus final competition and awards ceremony</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
			<div class="stat bg-base-100 shadow rounded-lg">
				<div class="stat-title">Prize Pool</div>
				<div class="stat-value text-primary">$10,000</div>
				<div class="stat-desc">Total prizes across all categories</div>
			</div>
			<div class="stat bg-base-100 shadow rounded-lg">
				<div class="stat-title">Participants</div>
				<div class="stat-value text-secondary">500+</div>
				<div class="stat-desc">Expected participants</div>
			</div>
			<div class="stat bg-base-100 shadow rounded-lg">
				<div class="stat-title">Duration</div>
				<div class="stat-value text-accent">4 weeks</div>
				<div class="stat-desc">From registration to finals</div>
			</div>
		</div>

		<div class="card bg-base-100 shadow-xl">
			<div class="card-body">
				<h2 class="card-title text-2xl mb-4">Eligibility & Rules</h2>
				<div class="prose max-w-none">
					<ul class="list-disc pl-6 space-y-2">
						<li>Open to all university students with valid student ID</li>
						<li>Teams can have 1-4 members for most categories</li>
						<li>Individual participation allowed for all categories</li>
						<li>Original work only - plagiarism will result in disqualification</li>
						<li>All submissions must be made before the specified deadlines</li>
						<li>Participants must attend the final round if selected</li>
					</ul>
				</div>
				<div class="card-actions justify-end mt-6">
					<a href="/register" class="btn btn-primary">Register Now</a>
				</div>
			</div>
		</div>
	</div>
</div>