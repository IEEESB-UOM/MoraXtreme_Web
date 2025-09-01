<script lang="ts">
	import { enhance } from '$app/forms';

	let { form } = $props();
</script>

<svelte:head>
	<title>Contact Us - MoraXtreme</title>
</svelte:head>

<div class="min-h-screen bg-base-200 py-8">
	<div class="max-w-6xl mx-auto px-4">
		<div class="text-center mb-8">
			<h1 class="text-4xl font-bold mb-4">Contact Us</h1>
			<p class="text-lg text-base-content/70">Get in touch with the MoraXtreme team</p>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
			<div class="card bg-base-100 shadow-xl">
				<div class="card-body">
					<h2 class="card-title text-2xl mb-6">Send us a Message</h2>
					
					{#if form?.error}
						<div class="alert alert-error mb-4">
							<span>{form.error}</span>
						</div>
					{/if}

					{#if form?.success}
						<div class="alert alert-success mb-4">
							<span>Message sent successfully! We'll get back to you soon.</span>
						</div>
					{:else}
						<form method="POST" use:enhance class="space-y-4">
							<div class="form-control">
								<label class="label" for="name">
									<span class="label-text">Name *</span>
								</label>
								<input
									type="text"
									id="name"
									name="name"
									class="input input-bordered"
									required
									value={form?.data?.name ?? ''}
								/>
							</div>

							<div class="form-control">
								<label class="label" for="email">
									<span class="label-text">Email *</span>
								</label>
								<input
									type="email"
									id="email"
									name="email"
									class="input input-bordered"
									required
									value={form?.data?.email ?? ''}
								/>
							</div>

							<div class="form-control">
								<label class="label" for="subject">
									<span class="label-text">Subject *</span>
								</label>
								<input
									type="text"
									id="subject"
									name="subject"
									class="input input-bordered"
									required
									value={form?.data?.subject ?? ''}
								/>
							</div>

							<div class="form-control">
								<label class="label" for="message">
									<span class="label-text">Message *</span>
								</label>
								<textarea
									id="message"
									name="message"
									class="textarea textarea-bordered h-32"
									placeholder="Tell us how we can help you..."
									required
									value={form?.data?.message ?? ''}
								></textarea>
							</div>

							<div class="form-control mt-6">
								<button type="submit" class="btn btn-primary">
									Send Message
								</button>
							</div>
						</form>
					{/if}
				</div>
			</div>

			<div class="space-y-6">
				<div class="card bg-base-100 shadow-xl">
					<div class="card-body">
						<h3 class="card-title text-xl mb-4">Contact Information</h3>
						<div class="space-y-4">
							<div class="flex items-center gap-3">
								<div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-primary-content">
										<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 2.25l-10.72 6.33a2.25 2.25 0 01-2.56 0L1.5 9M12 12.75h.007v.008H12v-.008z" />
									</svg>
								</div>
								<div>
									<p class="font-medium">Email</p>
									<p class="text-sm text-base-content/70">info@moraxtreme.com</p>
								</div>
							</div>

							<div class="flex items-center gap-3">
								<div class="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-secondary-content">
										<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
									</svg>
								</div>
								<div>
									<p class="font-medium">Phone</p>
									<p class="text-sm text-base-content/70">+1 (555) 123-4567</p>
								</div>
							</div>

							<div class="flex items-center gap-3">
								<div class="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-accent-content">
										<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
										<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
									</svg>
								</div>
								<div>
									<p class="font-medium">Location</p>
									<p class="text-sm text-base-content/70">University Campus<br>Main Auditorium</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="card bg-base-100 shadow-xl">
					<div class="card-body">
						<h3 class="card-title text-xl mb-4">Quick Links</h3>
						<div class="space-y-2">
							<a href="/register" class="btn btn-outline btn-primary w-full justify-start">
								Register for Competition
							</a>
							<a href="/about" class="btn btn-outline btn-secondary w-full justify-start">
								Competition Information
							</a>
							<a href="/competition" class="btn btn-outline btn-accent w-full justify-start">
								Competition Details
							</a>
						</div>
					</div>
				</div>

				<div class="card bg-primary text-primary-content">
					<div class="card-body">
						<h3 class="card-title text-xl mb-4">Office Hours</h3>
						<div class="space-y-2 text-sm">
							<div class="flex justify-between">
								<span>Monday - Friday:</span>
								<span>9:00 AM - 6:00 PM</span>
							</div>
							<div class="flex justify-between">
								<span>Saturday:</span>
								<span>10:00 AM - 4:00 PM</span>
							</div>
							<div class="flex justify-between">
								<span>Sunday:</span>
								<span>Closed</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>