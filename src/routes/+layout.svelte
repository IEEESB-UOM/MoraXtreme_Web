<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { onMount, tick } from 'svelte';
	
	let { children } = $props();
	
	const siteUrl = 'https://moraxtreme.lk';
	const currentUrl = $derived(`${siteUrl}${page.url.pathname}`);
	const metaTitle = 'MoraXtreme - Sri Lanka\'s Largest Algorithmic Coding Competition';
	const metaDescription = 'Join MoraXtreme, Sri Lanka\'s premier algorithmic coding competition. Test your programming skills, compete with the best, and win exciting prizes.';

	const scrollRoutes = ['about', 'timeline', 'gallery', 'contact']; // in-page sections

	let activePath = '';

	onMount(() => {
		activePath = window.location.pathname;
	});

	async function handleNav(e: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement; }, route: string) {
		e.preventDefault();

		if (scrollRoutes.includes(route)) {
			// If not in home page, navigate to home first
			if (window.location.pathname !== '/') await goto('/');
			activePath = '/' + route;
			await tick();
			console.log(activePath);
			
			setTimeout(() => {
				const el = document.getElementById(route);
				if (el) el.scrollIntoView({ behavior: 'smooth' });
			}, 100); // small delay to ensure element is rendered
		} else {
			goto('/' + route);
		}
	}	
</script>

<svelte:head>
	<!-- Basic meta tags -->
	<title>{metaTitle}</title>
	<meta name="description" content={metaDescription} />
	<meta name="keywords" content="programming competition, algorithmic coding, Sri Lanka, MoraXtreme, coding contest, competitive programming" />
	<meta name="author" content="MoraXtreme Team" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href={currentUrl} />
	
	<!-- Favicon and icons -->
	<link rel="icon" type="image/x-icon" href="{siteUrl}/favicon.ico" />
	<link rel="icon" type="image/png" sizes="16x16" href="{siteUrl}/favicon-16x16.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="{siteUrl}/favicon-32x32.png" />
	<link rel="apple-touch-icon" sizes="180x180" href="{siteUrl}/apple-touch-icon.png" />
	<link rel="manifest" href="{siteUrl}/site.webmanifest" />
	
	<!-- Open Graph meta tags -->
	<meta property="og:title" content={metaTitle} />
	<meta property="og:description" content={metaDescription} />
	<meta property="og:image" content="{siteUrl}/cover.png" />
	<meta property="og:image:alt" content="MoraXtreme - Sri Lanka's Largest Algorithmic Coding Competition" />
	<meta property="og:url" content={currentUrl} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="MoraXtreme" />
	<meta property="og:locale" content="en_US" />
	
	<!-- Twitter Card meta tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={metaTitle} />
	<meta name="twitter:description" content={metaDescription} />
	<meta name="twitter:image" content="{siteUrl}/cover.png" />
	<meta name="twitter:image:alt" content="MoraXtreme - Sri Lanka's Largest Algorithmic Coding Competition" />
	
	<!-- Structured Data (JSON-LD) -->
	{@html `<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Event",
		"name": "MoraXtreme",
		"description": "${metaDescription}",
		"url": "${currentUrl}",
		"image": "${siteUrl}/cover.png",
		"organizer": {
			"@type": "Organization",
			"name": "MoraXtreme Team",
			"url": "${siteUrl}"
		},
		"location": {
			"@type": "Country",
			"name": "Sri Lanka"
		},
		"eventStatus": "https://schema.org/EventScheduled",
		"eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode"
	}
	</script>`}
</svelte:head>

<div class="drawer">
	<input id="drawer-toggle" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<div class="navbar fixed z-100 top-0 left-0 w-full backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg">
			<div class="navbar-start">
				<div class="dropdown">
					<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
						</svg>
					</div>
					<ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-base-content">
						<li><a href="/" style="{page.url.pathname === '/' ? 'background-color: var(--color-neutral);' : ''};">Home</a></li>
						<!-- <li><a href="https://forms.gle/jiF6QXNBAh4wedrE8">Register</a></li> -->
						<li><span class="text-gray-400 font-semibold">Registrations Closed</span></li>
						<li><button onclick={(e) => handleNav(e, 'about')}>About</button></li>
						<li><button onclick={(e) => handleNav(e, 'timeline')}>Timeline</button></li>
						<li><button onclick={(e) => handleNav(e, 'gallery')}>Gallery</button></li>
						<li><button onclick={(e) => handleNav(e, 'contact')}>Contact</button></li>
						<li><a href="/competition" style="{page.url.pathname === '/competition' ? 'background-color: var(--color-neutral);' : ''};">Competition</a></li>
						<li><a href="/faq" style="{page.url.pathname === '/faq' ? 'background-color: var(--color-neutral);' : ''};">FAQ</a></li>

					</ul>
				</div>
				<a href="/" class="btn btn-ghost">
					<img src="/logo.avif" alt="MoraXtreme Logo" class="w-auto h-16" />
				</a>
			</div>
			<div class="navbar-center hidden lg:flex">
				<ul class="menu menu-horizontal px-1">
					<li><a href="/" style="{page.url.pathname === '/' ? 'background-color: var(--color-neutral);' : ''};">Home</a></li>
					<li><button onclick={(e) => handleNav(e, 'about')}>About</button></li>
					<li><button onclick={(e) => handleNav(e, 'timeline')}>Timeline</button></li>
					<li><button onclick={(e) => handleNav(e, 'gallery')}>Gallery</button></li>
					<li><button onclick={(e) => handleNav(e, 'contact')}>Contact</button></li>
					<li><a href="/competition" style="{page.url.pathname === '/competition' ? 'background-color: var(--color-neutral);' : ''};">Competition</a></li>
					<li><a href="/faq" style="{page.url.pathname === '/faq' ? 'background-color: var(--color-neutral);' : ''};">FAQ</a></li>
				</ul>
			</div>
			<div class="navbar-end">
				<!-- <a href="https://forms.gle/jiF6QXNBAh4wedrE8" class="btn btn-primary hidden lg:flex">Register</a> -->
				<span class="text-gray-400 font-semibold hidden lg:flex">Registrations Closed</span>
			</div>
		</div>

		<main class="flex-1">
			{@render children?.()}
		</main>
	</div>
</div>
