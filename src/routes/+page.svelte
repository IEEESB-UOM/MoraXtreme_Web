<script lang="ts">
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import AboutSection from "../components/AboutSection.svelte";
	import Gallery from "../components/Gallery.svelte";
	import Timeline from "../components/Timeline.svelte";
	import CountdownSection from "../components/CountdownSection.svelte";
	import ParallaxBg from "../components/ParallaxBg.svelte";
	import HeroSection from "../components/HeroSection.svelte";

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

<div class="snap-container">
	<section class="snap-section">
		<HeroSection />
	</section>
	<section class="snap-section">
		<AboutSection />
	</section>
	<section class="snap-section">
		<CountdownSection />
	</section>
	<section class="snap-section">
		<Timeline />
	</section>
	<section class="snap-section">
		<Gallery />
	</section>
	<footer class="footer footer-center p-10 bg-base text-base-content">
		<aside>
			<img src="/logo.avif" alt="MoraXtreme Logo" class="w-auto h-24" />
			<p class="font-bold">
				MoraXtreme 2025<br />The Ultimate Tech Competition
			</p>
			<p>Copyright © 2025 - All rights reserved</p>
		</aside>
	</footer>
</div>

<style>
	.snap-container {
		height: 100vh;
		overflow-y: scroll;
		scroll-snap-type: y mandatory;
		scroll-behavior: smooth;
	}

	.snap-section {
		min-height: 100vh;
		scroll-snap-align: start;
		scroll-snap-stop: always;
		position: relative;
	}
</style>
