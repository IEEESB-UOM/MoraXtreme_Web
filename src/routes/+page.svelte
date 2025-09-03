<script lang="ts">
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import AboutSection from "../components/AboutSection.svelte";
	import Gallery from "../components/Gallery.svelte";
	import Timeline from "../components/Timeline.svelte";
	import CountdownSection from "../components/CountdownSection.svelte";
    import ParallaxBg from "../components/ParallaxBg.svelte";

	let showError = false;

	onMount(() => {
		const error = $page.url.searchParams.get("error");
		if (error === "unauthorized") {
			showError = true;
			setTimeout(() => (showError = false), 5000);
		}
	});
</script>

{#if showError}
	<div
		class="alert alert-error fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-auto"
	>
		<span>Access denied. Admin privileges required.</span>
	</div>
{/if}

<ParallaxBg />
<div class="hero min-h-screen relative overflow-hidden w-screen">
	<div
		class="hero-content text-center text-white relative z-10 flex flex-col"
	>
		<h1
			class="text-7xl font-bold mb-8 drop-shadow-lg font-display text-white bg-gradient-to-r from-purple-400 via-blue-300 to-purple-500 bg-clip-text"
			style="text-shadow: 0 0 20px #8b5cf6, 0 0 40px #3b82f6, 0 0 60px #8b5cf6;"
		>
			MoraXtreme 10.0
		</h1>
		<p class="text-3xl mb-8 drop-shadow-md">
			Sri Lanka's Largest Technology Competition
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a
				href="/register"
				class="btn btn-primary btn-lg"
				style="box-shadow: 0 0 20px #8b5cf6ab, 0 0 40px #3b82f670;"
				>Register Now</a
			>
		</div>
	</div>
</div>

<div class="min-h-screen">
	<AboutSection />
	<CountdownSection />
	<Timeline />
	<Gallery />
</div>
