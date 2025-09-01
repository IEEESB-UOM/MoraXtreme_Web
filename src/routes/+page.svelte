<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	
	let showError = false;
	
	onMount(() => {
		const error = $page.url.searchParams.get('error');
		if (error === 'unauthorized') {
			showError = true;
			setTimeout(() => showError = false, 5000);
		}
	});
</script>

<div class="min-h-screen bg-base-200">
	{#if showError}
		<div class="alert alert-error fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-auto">
			<span>Access denied. Admin privileges required.</span>
		</div>
	{/if}

	<div class="hero min-h-screen bg-gradient-to-r from-primary to-secondary">
		<div class="hero-content text-center text-primary-content">
			<div class="max-w-md">
				<h1 class="text-5xl font-bold mb-8">MoraXtreme</h1>
				<p class="text-xl mb-8">The Ultimate Technology Competition</p>
				<p class="mb-8">
					Join hundreds of students in the most exciting tech competition of the year. 
					Compete in Programming, UI/UX Design, Cybersecurity, and Data Science categories.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a href="/register" class="btn btn-accent btn-lg">Register Now</a>
					<a href="/about" class="btn btn-outline btn-lg text-primary-content border-primary-content hover:bg-primary-content hover:text-primary">Learn More</a>
				</div>
			</div>
		</div>
	</div>

	<div class="py-16 bg-base-100">
		<div class="max-w-6xl mx-auto px-4">
			<h2 class="text-3xl font-bold text-center mb-12">Competition Categories</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				<div class="card bg-base-200 shadow-xl">
					<div class="card-body text-center">
						<div class="text-4xl mb-4">💻</div>
						<h3 class="card-title justify-center">Programming</h3>
						<p>Algorithm challenges and competitive coding</p>
					</div>
				</div>
				<div class="card bg-base-200 shadow-xl">
					<div class="card-body text-center">
						<div class="text-4xl mb-4">🎨</div>
						<h3 class="card-title justify-center">UI/UX Design</h3>
						<p>User interface and experience design</p>
					</div>
				</div>
				<div class="card bg-base-200 shadow-xl">
					<div class="card-body text-center">
						<div class="text-4xl mb-4">🔒</div>
						<h3 class="card-title justify-center">Cybersecurity</h3>
						<p>Security challenges and ethical hacking</p>
					</div>
				</div>
				<div class="card bg-base-200 shadow-xl">
					<div class="card-body text-center">
						<div class="text-4xl mb-4">📊</div>
						<h3 class="card-title justify-center">Data Science</h3>
						<p>Data analysis and machine learning</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="py-16 bg-base-200">
		<div class="max-w-4xl mx-auto px-4 text-center">
			<h2 class="text-3xl font-bold mb-8">Why Participate?</h2>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div class="space-y-4">
					<div class="text-4xl">🏆</div>
					<h3 class="text-xl font-bold">Win Prizes</h3>
					<p>$10,000 total prize pool across all categories</p>
				</div>
				<div class="space-y-4">
					<div class="text-4xl">🤝</div>
					<h3 class="text-xl font-bold">Network</h3>
					<p>Connect with fellow students and industry professionals</p>
				</div>
				<div class="space-y-4">
					<div class="text-4xl">📈</div>
					<h3 class="text-xl font-bold">Grow Skills</h3>
					<p>Challenge yourself and learn new technologies</p>
				</div>
			</div>
		</div>
	</div>

	<div class="py-16 bg-primary text-primary-content">
		<div class="max-w-4xl mx-auto px-4 text-center">
			<h2 class="text-3xl font-bold mb-4">Ready to Compete?</h2>
			<p class="text-xl mb-8">Registration is free and open to all university students</p>
			<a href="/register" class="btn btn-accent btn-lg">Start Your Journey</a>
		</div>
	</div>
</div>

