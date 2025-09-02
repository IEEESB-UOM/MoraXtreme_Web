<svelte:head>
	<title>FAQ - MoraXtreme</title>
</svelte:head>

<div class="min-h-screen bg-[#0D1126] py-24">
	<div class="max-w-6xl mx-auto px-4">
		<div class="text-center mb-16">
			<h1 class="font-['Orbitron'] font-bold text-5xl text-white mb-8">FAQ</h1>
		</div>

		<div class="max-w-5xl mx-auto space-y-8">
			<div class="collapse">
				<input type="radio" name="faq-accordion" />
				<div class="collapse-title bg-purple-900/10 hover:bg-purple-900/20 transition-colors duration-300 rounded-xl p-6 cursor-pointer shadow-[0px_4px_16px_rgba(15,15,35,0.4),0px_2px_8px_rgba(123,44,191,0.2),0px_1px_0px_rgba(255,255,255,0.1)]">
					<div class="flex items-center justify-between">
						<span class="font-['Orbitron'] font-bold text-lg text-white">What is MoraXtreme?</span>
						<span class="text-[#7B2CBF] text-2xl font-bold transition-transform duration-300">+</span>
					</div>
				</div>
				<div class="collapse-content p-0">
					<div class="bg-purple-900/10 rounded-xl p-6 shadow-[0px_4px_16px_rgba(15,15,35,0.4),0px_2px_8px_rgba(123,44,191,0.2),0px_1px_0px_rgba(255,255,255,0.1)]">
						<div class="flex items-start justify-between mb-4">
							<h3 class="font-['Orbitron'] font-bold text-lg text-white">What is MoraXtreme?</h3>
							<button class="text-[#7B2CBF] text-xl font-bold hover:text-purple-300 transition-colors duration-300" on:click={() => {
								const checkedInput = document.querySelector('input[name="faq-accordion"]:checked');
								if (checkedInput) checkedInput.checked = false;
							}}>×</button>
						</div>
						<p class="text-white font-['Orbitron'] text-sm leading-relaxed">MoraXtreme is the premier technology competition at University of Moratuwa, featuring challenges in programming. It brings together the brightest minds to compete for a RS 50,000 prize pool.</p>
					</div>
				</div>
			</div>

			<div class="collapse">
				<input type="radio" name="faq-accordion" />
				<div class="collapse-title bg-purple-900/10 hover:bg-purple-900/20 transition-colors duration-300 rounded-xl p-6 cursor-pointer shadow-[0px_4px_16px_rgba(15,15,35,0.4),0px_2px_8px_rgba(123,44,191,0.2),0px_1px_0px_rgba(255,255,255,0.1)]">
					<div class="flex items-center justify-between">
						<span class="font-['Orbitron'] font-bold text-lg text-white">When does the event take place?</span>
						<span class="text-[#7B2CBF] text-2xl font-bold transition-transform duration-300">+</span>
					</div>
				</div>
				<div class="collapse-content p-0">
					<div class="bg-purple-900/10 rounded-xl p-6 shadow-[0px_4px_16px_rgba(15,15,35,0.4),0px_2px_8px_rgba(123,44,191,0.2),0px_1px_0px_rgba(255,255,255,0.1)]">
						<div class="flex items-start justify-between mb-4">
							<h3 class="font-['Orbitron'] font-bold text-lg text-white">When does the event take place?</h3>
							<button class="text-[#7B2CBF] text-xl font-bold hover:text-purple-300 transition-colors duration-300" on:click={() => {
								const checkedInput = document.querySelector('input[name="faq-accordion"]:checked');
								if (checkedInput) checkedInput.checked = false;
							}}>×</button>
						</div>
						<p class="text-white font-['Orbitron'] text-sm leading-relaxed">MoraXtreme 10.0 will take place during October. The preliminary rounds begin with online submissions, followed by the final competition on Univercity. Specific dates and venues will be announced to registered participants.</p>
					</div>
				</div>
			</div>

			<div class="collapse">
				<input type="radio" name="faq-accordion" />
				<div class="collapse-title bg-purple-900/10 hover:bg-purple-900/20 transition-colors duration-300 rounded-xl p-6 cursor-pointer shadow-[0px_4px_16px_rgba(15,15,35,0.4),0px_2px_8px_rgba(123,44,191,0.2),0px_1px_0px_rgba(255,255,255,0.1)]">
					<div class="flex items-center justify-between">
						<span class="font-['Orbitron'] font-bold text-lg text-white">How do I register for MoraXtreme 10.0</span>
						<span class="text-[#7B2CBF] text-2xl font-bold transition-transform duration-300">+</span>
					</div>
				</div>
				<div class="collapse-content p-0">
					<div class="bg-purple-900/10 rounded-xl p-6 shadow-[0px_4px_16px_rgba(15,15,35,0.4),0px_2px_8px_rgba(123,44,191,0.2),0px_1px_0px_rgba(255,255,255,0.1)]">
						<div class="flex items-start justify-between mb-4">
							<h3 class="font-['Orbitron'] font-bold text-lg text-white">How do I register for MoraXtreme 10.0</h3>
							<button class="text-[#7B2CBF] text-xl font-bold hover:text-purple-300 transition-colors duration-300" on:click={() => {
								const checkedInput = document.querySelector('input[name="faq-accordion"]:checked');
								if (checkedInput) checkedInput.checked = false;
							}}>×</button>
						</div>
						<p class="text-white font-['Orbitron'] text-sm leading-relaxed">Registration is simple! Visit our registration form,  fill in your details, and submit. You can register  as a team of up to 4 members. Registration is completely free and open to all university students.</p>
					</div>
				</div>
			</div>

			<div class="collapse">
				<input type="radio" name="faq-accordion" />
				<div class="collapse-title bg-purple-900/10 hover:bg-purple-900/20 transition-colors duration-300 rounded-xl p-6 cursor-pointer shadow-[0px_4px_16px_rgba(15,15,35,0.4),0px_2px_8px_rgba(123,44,191,0.2),0px_1px_0px_rgba(255,255,255,0.1)]">
					<div class="flex items-center justify-between">
						<span class="font-['Orbitron'] font-bold text-lg text-white">Is there a registration fee?</span>
						<span class="text-[#7B2CBF] text-2xl font-bold transition-transform duration-300">+</span>
					</div>
				</div>
				<div class="collapse-content p-0">
					<div class="bg-purple-900/10 rounded-xl p-6 shadow-[0px_4px_16px_rgba(15,15,35,0.4),0px_2px_8px_rgba(123,44,191,0.2),0px_1px_0px_rgba(255,255,255,0.1)]">
						<div class="flex items-start justify-between mb-4">
							<h3 class="font-['Orbitron'] font-bold text-lg text-white">Is there a registration fee?</h3>
							<button class="text-[#7B2CBF] text-xl font-bold hover:text-purple-300 transition-colors duration-300" on:click={() => {
								const checkedInput = document.querySelector('input[name="faq-accordion"]:checked');
								if (checkedInput) checkedInput.checked = false;
							}}>×</button>
						</div>
						<p class="text-white font-['Orbitron'] text-sm leading-relaxed">No! Participation in MoraXtreme is completely <strong>FREE</strong>. We believe in making technology competitions accessible to all students. There are no hidden costs or registration fees - just bring your skills and passion for technology!</p>
					</div>
				</div>
			</div>

			<div class="collapse">
				<input type="radio" name="faq-accordion" />
				<div class="collapse-title bg-purple-900/10 hover:bg-purple-900/20 transition-colors duration-300 rounded-xl p-6 cursor-pointer shadow-[0px_4px_16px_rgba(15,15,35,0.4),0px_2px_8px_rgba(123,44,191,0.2),0px_1px_0px_rgba(255,255,255,0.1)]">
					<div class="flex items-center justify-between">
						<span class="font-['Orbitron'] font-bold text-lg text-white">Where is MoraXtreme happen?</span>
						<span class="text-[#7B2CBF] text-2xl font-bold transition-transform duration-300">+</span>
					</div>
				</div>
				<div class="collapse-content p-0">
					<div class="bg-purple-900/10 rounded-xl p-6 shadow-[0px_4px_16px_rgba(15,15,35,0.4),0px_2px_8px_rgba(123,44,191,0.2),0px_1px_0px_rgba(255,255,255,0.1)]">
						<div class="flex items-start justify-between mb-4">
							<h3 class="font-['Orbitron'] font-bold text-lg text-white">Where is MoraXtreme happen?</h3>
							<button class="text-[#7B2CBF] text-xl font-bold hover:text-purple-300 transition-colors duration-300" on:click={() => {
								const checkedInput = document.querySelector('input[name="faq-accordion"]:checked');
								if (checkedInput) checkedInput.checked = false;
							}}>×</button>
						</div>
						<p class="text-white font-['Orbitron'] text-sm leading-relaxed">MoraXtreme takes place at the University of Moratuwa campus. The preliminary rounds are conducted online, while the final competition will be held in our state-of-the-art computer labs and auditoriums. Specific venue details will be provided to qualified participants.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.collapse-title span:last-child {
		transform: rotate(0deg);
		transition: transform 0.3s ease;
	}
	
	.collapse:has(input:checked) .collapse-title span:last-child {
		transform: rotate(45deg);
	}
	
	.collapse:has(input:checked) .collapse-title {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		display: none;
	}
</style>