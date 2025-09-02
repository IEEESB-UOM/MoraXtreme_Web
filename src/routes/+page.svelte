<script lang="ts">
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import Gallery from '../components/Gallery.svelte';

	let showError = false;
	let mouseX = 0;
	let mouseY = 0;

	onMount(() => {
		const error = $page.url.searchParams.get("error");
		if (error === "unauthorized") {
			showError = true;
			setTimeout(() => (showError = false), 5000);
		}

		const handleMouseMove = (e: MouseEvent) => {
			const centerX = window.innerWidth / 2;
			const centerY = window.innerHeight/8;
			mouseX = e.clientX - centerX;
			mouseY = e.clientY - centerY;
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	});

	$: bgTransform = `translate(${mouseX * -0.02}px, ${mouseY * -0.02}px)`;
	$: mgTransform = `translate(${mouseX * -0.05}px, ${mouseY * -0.05}px)`;
	$: fgTransform = `translate(${mouseX * -0.1}px, ${mouseY * -0.1}px)`;
</script>

{#if showError}
	<div
		class="alert alert-error fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-auto"
	>
		<span>Access denied. Admin privileges required.</span>
	</div>
{/if}

<div class="hero min-h-screen relative overflow-hidden w-screen">
	<div class="absolute inset-0 w-full h-full">
		<div
			class="absolute inset-0 w-full h-full bg-cover bg-center"
			style="background-image: url('/parallax_bg.avif'); transform: {bgTransform}; width: 110%; height: 110%; top: -5%; left: -5%;"
		></div>
		<div
			class="absolute inset-0 w-full h-full bg-cover bg-center"
			style="background-image: url('/parallax_mg.avif'); transform: {mgTransform}; width: 110%; height: 110%; top: -5%; left: -5%;"
		></div>
		<div
			class="absolute inset-0 w-full h-full bg-cover bg-center"
			style="background-image: url('/parallax_fg.avif'); transform: {fgTransform}; width: 110%; height: 110%; top: -5%; left: -5%;"
		></div>
		<div
			class="absolute inset-0 w-full h-full"
			style="background: radial-gradient(circle, rgba(24, 0, 45, 0.2) 0%, rgba(0, 0, 0, 0.8) 100%) 70%;"
		></div>
	</div>
	<div class="hero-content text-center text-white relative z-10 flex flex-col">
		<h1 class="text-7xl font-bold mb-8 drop-shadow-lg font-display text-white bg-gradient-to-r from-purple-400 via-blue-300 to-purple-500 bg-clip-text" style="text-shadow: 0 0 20px #8b5cf6, 0 0 40px #3b82f6, 0 0 60px #8b5cf6;">
			MoraXtreme 10.0
		</h1>
		<p class="text-3xl mb-8 drop-shadow-md">
			Sri Lanka's Largest Technology Competition
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a href="/register" class="btn btn-primary btn-lg" style="box-shadow: 0 0 20px #8b5cf6ab, 0 0 40px #3b82f670;">Register Now</a>
		</div>
	</div>
</div>

<div class="min-h-screen bg-[#0c0a15]">
	<div class="py-16">
		<div class="max-w-6xl mx-auto px-4">
			<h2 class="text-3xl font-bold text-center mb-12">
				Competition Categories
			</h2>
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

	<div class="py-16">
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
					<p>
						Connect with fellow students and industry professionals
					</p>
				</div>
				<div class="space-y-4">
					<div class="text-4xl">📈</div>
					<h3 class="text-xl font-bold">Grow Skills</h3>
					<p>Challenge yourself and learn new technologies</p>
				</div>
			</div>
		</div>
	</div>

	<div class="py-16 bg-neutral text-neutral-content">
		<div class="max-w-4xl mx-auto px-4 text-center">
			<h2 class="text-3xl font-bold mb-4">Ready to Compete?</h2>
			<p class="text-xl mb-8">
				Registration is free and open to all university students
			</p>
			<a href="/register" class="btn btn-accent btn-lg"
				>Start Your Journey</a
			>
		</div>
	</div>
	<Gallery />
</div>
