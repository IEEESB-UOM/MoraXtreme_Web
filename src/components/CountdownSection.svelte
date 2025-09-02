<script lang="ts">
    import { onMount, onDestroy } from 'svelte';

    const targetDate = new Date('2025-10-15T10:00:00');

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let interval: NodeJS.Timeout;

    function updateCountdown() {
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime();

        if (difference > 0) {
            days = Math.floor(difference / (1000 * 60 * 60 * 24));
            hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((difference % (1000 * 60)) / 1000);
        } else {
            days = hours = minutes = seconds = 0;
        }
    }
    
    onMount(() => {
        updateCountdown();
        interval = setInterval(updateCountdown, 1000);
    });
    
    onDestroy(() => {
        if (interval) clearInterval(interval);
    });
    
    function formatTime(value: number): string {
        return value.toString().padStart(2, '0');
    }
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Rajdhani:wght@400;500&display=swap" rel="stylesheet">
</svelte:head>

<div class="text-base-content py-24 px-6 md:px-20 bg-[#0c0a15]">
    
    <div class="max-w-7xl mx-auto text-center space-y-12">
        <div class="space-y-6">
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-display">
                THE COUNTDOWN BEGINS
            </h2>
            <p class="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                Mark your calendars! MoraXtreme 10.0 is approaching fast. Get ready for Sri Lanka's most challenging coding competition.
            </p>
        </div>

        <div class="flex items-center justify-center gap-8 flex-wrap md:gap-6 xs:gap-4">
            <!-- Days -->
            <div
                class="w-32 h-32 md:w-24 md:h-24 xs:w-20 xs:h-20 flex flex-col items-center justify-center rounded-xl 
                    bg-gradient-to-b from-[#2B0057] to-black border border-purple-700/20 
                    shadow-[0_8px_32px_rgba(160,32,240,0.3),0_4px_16px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] 
                    hover:shadow-[0_12px_48px_rgba(160,32,240,0.4),0_6px_24px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)] 
                    hover:-translate-y-0.5 transition-all duration-300 ease-in-out">
                <div class="font-orbitron font-bold text-5xl md:text-3xl xs:text-2xl text-white 
                    drop-shadow-[0_0_20px_rgba(160,32,240,0.3)] 
                    [filter:drop-shadow(0_0_20px_rgba(160,32,240,0.3))]">
                    {formatTime(days)}
                </div>
                <div class="text-gray-400 text-xs md:text-[0.75rem] xs:text-[0.625rem] uppercase tracking-wider mt-2 font-rajdhani font-medium">
                    Days
                </div>
            </div>

            <!-- Colon -->
            <div class="text-white font-orbitron font-bold text-5xl md:text-3xl xs:text-2xl 
                animate-pulse-glow">
                :
            </div>

            <!-- Hours -->
            <div
                class="w-32 h-32 md:w-24 md:h-24 xs:w-20 xs:h-20 flex flex-col items-center justify-center rounded-xl 
                    bg-gradient-to-b from-[#2B0057] to-black border border-purple-700/20 
                    shadow-[0_8px_32px_rgba(160,32,240,0.3),0_4px_16px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] 
                    hover:shadow-[0_12px_48px_rgba(160,32,240,0.4),0_6px_24px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)] 
                    hover:-translate-y-0.5 transition-all duration-300 ease-in-out">
                <div class="font-orbitron font-bold text-5xl md:text-3xl xs:text-2xl text-white 
                    drop-shadow-[0_0_20px_rgba(160,32,240,0.3)] 
                    [filter:drop-shadow(0_0_20px_rgba(160,32,240,0.3))]">
                    {formatTime(hours)}
                </div>
                <div class="text-gray-400 text-xs md:text-[0.75rem] xs:text-[0.625rem] uppercase tracking-wider mt-2 font-rajdhani font-medium">
                    Hours
                </div>
            </div>

            <div class="text-white font-orbitron font-bold text-5xl md:text-3xl xs:text-2xl animate-pulse-glow">:</div>

            <!-- Minutes -->
            <div
                class="w-32 h-32 md:w-24 md:h-24 xs:w-20 xs:h-20 flex flex-col items-center justify-center rounded-xl 
                    bg-gradient-to-b from-[#2B0057] to-black border border-purple-700/20 
                    shadow-[0_8px_32px_rgba(160,32,240,0.3),0_4px_16px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] 
                    hover:shadow-[0_12px_48px_rgba(160,32,240,0.4),0_6px_24px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)] 
                    hover:-translate-y-0.5 transition-all duration-300 ease-in-out">
                <div class="font-orbitron font-bold text-5xl md:text-3xl xs:text-2xl text-white 
                    drop-shadow-[0_0_20px_rgba(160,32,240,0.3)] 
                    [filter:drop-shadow(0_0_20px_rgba(160,32,240,0.3))]">
                    {formatTime(minutes)}
                </div>
                <div class="text-gray-400 text-xs md:text-[0.75rem] xs:text-[0.625rem] uppercase tracking-wider mt-2 font-rajdhani font-medium">
                    Minutes
                </div>
            </div>

            <div class="text-white font-orbitron font-bold text-5xl md:text-3xl xs:text-2xl animate-pulse-glow">:</div>

            <!-- Seconds -->
            <div
                class="w-32 h-32 md:w-24 md:h-24 xs:w-20 xs:h-20 flex flex-col items-center justify-center rounded-xl 
                    bg-gradient-to-b from-[#2B0057] to-black border border-purple-700/20 
                    shadow-[0_8px_32px_rgba(160,32,240,0.3),0_4px_16px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] 
                    hover:shadow-[0_12px_48px_rgba(160,32,240,0.4),0_6px_24px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)] 
                    hover:-translate-y-0.5 transition-all duration-300 ease-in-out">
                <div class="font-orbitron font-bold text-5xl md:text-3xl xs:text-2xl text-white 
                    drop-shadow-[0_0_20px_rgba(160,32,240,0.3)] 
                    [filter:drop-shadow(0_0_20px_rgba(160,32,240,0.3))]">
                    {formatTime(seconds)}
                </div>
                <div class="text-gray-400 text-xs md:text-[0.75rem] xs:text-[0.625rem] uppercase tracking-wider mt-2 font-rajdhani font-medium">
                    Seconds
                </div>
            </div>
        </div>

        <div class="space-y-6">
            <p class="text-gray-400 text-sm uppercase tracking-widest font-rajdhani">
                Registration Opens Soon
            </p>
            <a href="/register" class="btn btn-primary btn-lg hover:shadow-[0_0_40px_rgba(160,32,240,0.5)] transition-all duration-300">
                Register Now
            </a>
        </div>
    </div>
</div>

<style>
    @keyframes pulse-glow {
        from {
            text-shadow: 0 0 30px rgba(160, 32, 240, 0.6),
                0 0 60px rgba(160, 32, 240, 0.3),
                0 2px 4px rgba(0, 0, 0, 0.8);
        }
        to {
            text-shadow: 0 0 40px rgba(160, 32, 240, 0.8),
                0 0 80px rgba(160, 32, 240, 0.4),
                0 2px 4px rgba(0, 0, 0, 0.8);
        }
    }
    .animate-pulse-glow {
        animation: pulse-glow 2s ease-in-out infinite alternate;
    }
    .font-orbitron {
        font-family: 'Orbitron', monospace;
    }
    .font-rajdhani {
        font-family: 'Rajdhani', sans-serif;
    }
</style>