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

<HeroSection />
<AboutSection />
<CountdownSection />
<Timeline />
<Gallery />
<footer class="footer footer-center p-10 bg-base text-base-content">
	<aside>
		<img src="/logo.avif" alt="MoraXtreme Logo" class="w-auto h-24" />
		<p class="font-bold">
			MoraXtreme 2025<br />Sri Lanka's Largest Algorithmic Coding Competition
		</p>
		<p>Copyright © 2025 - All rights reserved</p>
	</aside>
</footer>
