<script lang="ts">
	import { page } from "$app/stores";
	import { onMount } from "svelte";

	let mouseX = 0;
	let mouseY = 0;

	onMount(() => {
		const error = $page.url.searchParams.get("error");
	

		const handleMouseMove = (e: MouseEvent) => {
			const centerX = window.innerWidth / 2;
			const centerY = window.innerHeight / 8;
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

<div class="fixed inset-0 w-full h-full z-[-1]">
    <div
        class="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
        style="background-image: url('/parallax_bg.avif'); transform: {bgTransform}; width: 110%; height: 110%; top: -5%; left: -5%;"
    ></div>
    <div
        class="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
        style="background-image: url('/parallax_mg.avif'); transform: {mgTransform}; width: 110%; height: 110%; top: -5%; left: -5%;"
    ></div>
    <div
        class="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
        style="background-image: url('/parallax_fg.avif'); transform: {fgTransform}; width: 110%; height: 110%; top: -5%; left: -5%;"
    ></div>
    <div
        class="absolute inset-0 w-full h-full"
        style="background: radial-gradient(circle, rgba(31, 41, 48, 0.8) 0%, rgba(0, 0, 0, 0.9) 100%) 70%;"
    ></div>
</div>
