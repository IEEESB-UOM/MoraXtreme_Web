<script lang="ts">
	let { data } = $props();
	
	function formatDate(date: Date | null) {
		if (!date) return 'TBA';
		return new Intl.DateTimeFormat('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		}).format(date);
	}
</script>

<svelte:head>
	<title>Competition Details - MoraXtreme</title>
</svelte:head>

<div class="min-h-screen bg-base-200 py-8">
	<div class="max-w-6xl mx-auto px-4">
		<div class="text-center mb-8">
			<h1 class="text-4xl font-bold mb-4">Competition Details</h1>
			<p class="text-lg text-base-content/70">Live updates, time slots, and important links</p>
		</div>

		<div class="alert alert-info mb-8">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
			</svg>
			<span>This page will be updated with live competition details as they become available.</span>
		</div>

		{#if data.competitions.length > 0}
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
				{#each data.competitions as comp}
					<div class="card bg-base-100 shadow-xl">
						<div class="card-body">
							<h2 class="card-title text-2xl">{comp.title}</h2>
							{#if comp.description}
								<p class="text-base-content/80 mb-4">{comp.description}</p>
							{/if}
							
							<div class="space-y-3">
								{#if comp.timeSlot}
									<div class="flex items-center gap-2">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
											<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
										</svg>
										<span><strong>Time:</strong> {formatDate(comp.timeSlot)}</span>
									</div>
								{/if}

								{#if comp.location}
									<div class="flex items-center gap-2">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
											<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
											<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
										</svg>
										<span><strong>Location:</strong> {comp.location}</span>
									</div>
								{/if}

								{#if comp.maxParticipants}
									<div class="flex items-center gap-2">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
											<path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
										</svg>
										<span><strong>Max Participants:</strong> {comp.maxParticipants}</span>
									</div>
								{/if}
							</div>

							{#if comp.hackerrankLink}
								<div class="card-actions justify-end mt-4">
									<a href={comp.hackerrankLink} target="_blank" rel="noopener noreferrer" class="btn btn-primary">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
											<path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
										</svg>
										Access Competition
									</a>
								</div>
							{/if}

							{#if !comp.isActive}
								<div class="badge badge-error">Inactive</div>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		{:else}
			<div class="card bg-base-100 shadow-xl">
				<div class="card-body text-center py-16">
					<div class="mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 mx-auto text-base-content/50">
							<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</div>
					<h2 class="text-2xl font-bold mb-2">Competition Details Coming Soon</h2>
					<p class="text-base-content/70 mb-6">
						Competition schedules, links, and time slots will be posted here as they become available.
						Make sure you're registered to receive updates!
					</p>
					<div class="join">
						<a href="/register" class="btn btn-primary join-item">Register Now</a>
						<a href="/contact" class="btn btn-outline join-item">Contact Us</a>
					</div>
				</div>
			</div>
		{/if}

		<div class="card bg-base-100 shadow-xl mt-8">
			<div class="card-body">
				<h2 class="card-title text-2xl mb-4">Important Announcements</h2>
				<div class="space-y-4">
					<div class="alert alert-warning">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z"></path>
						</svg>
						<span><strong>Registration Deadline:</strong> Make sure to complete your registration before the deadline!</span>
					</div>
					
					<div class="alert alert-info">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
						</svg>
						<span><strong>Updates:</strong> Check back regularly for competition links and schedule updates.</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>