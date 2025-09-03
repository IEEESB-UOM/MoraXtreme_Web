<script lang="ts">
    import { onMount, onDestroy } from "svelte";

    const targetDate = new Date("2025-10-15T10:00:00");

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
            hours = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            );
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
        return value.toString().padStart(2, "0");
    }
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Rajdhani:wght@400;500&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<section
    id="countdown"
    class="text-base-content px-6 md:px-20 min-h-screen flex flex-col items-center justify-center relative"
>
    <div class="max-w-7xl mx-auto text-center space-y-12">
        <div class="flex flex-col items-center justify-center py-20">
            <div class="container mx-auto px-4">
                <div class="flex flex-col items-center justify-center">
                    <h2
                        class="text-4xl font-bold drop-shadow-lg font-display text-white bg-gradient-to-r from-purple-400 via-blue-300 to-purple-500 bg-clip-text"
                        style="text-shadow: 0 0 20px #8b5cf6, 0 0 40px #3b82f6, 0 0 60px #8b5cf6;"
                    >
                        THE COUNTDOWN BEGINS
                    </h2>
                    <p class="text-base-content text-lg mt-4 text-center">
                        Mark your calendars! MoraXtreme 10.0 is approaching
                        fast. Get ready for Sri Lanka's most challenging coding
                        competition.
                    </p>
                </div>
            </div>
        </div>

        <div
            class="flex items-center justify-center gap-8 flex-wrap md:gap-6 xs:gap-4"
        >
            <!-- Days -->
            <div
                class="w-40 h-40 md:w-36 md:h-36 sm:w-32 sm:h-32 xs:w-28 xs:h-28 flex flex-col items-center justify-center rounded-xl
                    bg-white/5 backdrop-blur-xl backdrop-saturate-[2] backdrop-hue-rotate-[-357deg] border border-white/20
                    shadow-[0_8px_32px_rgba(160,32,240,0.3),0_4px_16px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]
                    hover:shadow-[0_12px_48px_rgba(160,32,240,0.4),0_6px_24px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)]
                    hover:bg-white/10 hover:backdrop-saturate-[2.5] hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
            >
                <div
                    class="font-orbitron font-bold text-6xl md:text-5xl sm:text-4xl xs:text-3xl text-white"
                >
                    {formatTime(days)}
                </div>
                <div
                    class="text-base-content text-sm md:text-xs sm:text-[0.75rem] xs:text-[0.625rem] uppercase tracking-wider mt-2 font-rajdhani font-bold"
                >
                    Days
                </div>
            </div>

            <!-- Colon -->
            <div
                class="text-white font-orbitron font-bold text-6xl md:text-5xl sm:text-4xl xs:text-3xl
                animate-pulse-glow"
            >
                :
            </div>

            <!-- Hours -->
            <div
                class="w-40 h-40 md:w-36 md:h-36 sm:w-32 sm:h-32 xs:w-28 xs:h-28 flex flex-col items-center justify-center rounded-xl
                    bg-white/5 backdrop-blur-xl backdrop-saturate-[2] backdrop-hue-rotate-[-357deg] border border-white/20
                    shadow-[0_8px_32px_rgba(160,32,240,0.3),0_4px_16px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]
                    hover:shadow-[0_12px_48px_rgba(160,32,240,0.4),0_6px_24px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)]
                    hover:bg-white/10 hover:backdrop-saturate-[2.5] hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
            >
                <div
                    class="font-orbitron font-bold text-6xl md:text-5xl sm:text-4xl xs:text-3xl text-white"
                >
                    {formatTime(hours)}
                </div>
                <div
                    class="text-base-content text-sm md:text-xs sm:text-[0.75rem] xs:text-[0.625rem] uppercase tracking-wider mt-2 font-rajdhani font-bold"
                >
                    Hours
                </div>
            </div>

            <div
                class="text-white font-orbitron font-bold text-6xl md:text-5xl sm:text-4xl xs:text-3xl animate-pulse-glow"
            >
                :
            </div>

            <!-- Minutes -->
            <div
                class="w-40 h-40 md:w-36 md:h-36 sm:w-32 sm:h-32 xs:w-28 xs:h-28 flex flex-col items-center justify-center rounded-xl
                    bg-white/5 backdrop-blur-xl backdrop-saturate-[2] backdrop-hue-rotate-[-357deg] border border-white/20
                    shadow-[0_8px_32px_rgba(160,32,240,0.3),0_4px_16px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]
                    hover:shadow-[0_12px_48px_rgba(160,32,240,0.4),0_6px_24px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)]
                    hover:bg-white/10 hover:backdrop-saturate-[2.5] hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
            >
                <div
                    class="font-orbitron font-bold text-6xl md:text-5xl sm:text-4xl xs:text-3xl text-white"
                >
                    {formatTime(minutes)}
                </div>
                <div
                    class="text-base-content text-sm md:text-xs sm:text-[0.75rem] xs:text-[0.625rem] uppercase tracking-wider mt-2 font-rajdhani font-bold"
                >
                    Minutes
                </div>
            </div>

            <div
                class="text-white font-orbitron font-bold text-6xl md:text-5xl sm:text-4xl xs:text-3xl animate-pulse-glow"
            >
                :
            </div>

            <!-- Seconds -->
            <div
                class="w-40 h-40 md:w-36 md:h-36 sm:w-32 sm:h-32 xs:w-28 xs:h-28 flex flex-col items-center justify-center rounded-xl
                    bg-white/5 backdrop-blur-xl backdrop-saturate-[2] backdrop-hue-rotate-[-357deg] border border-white/20
                    shadow-[0_8px_32px_rgba(160,32,240,0.3),0_4px_16px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]
                    hover:shadow-[0_12px_48px_rgba(160,32,240,0.4),0_6px_24px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)]
                    hover:bg-white/10 hover:backdrop-saturate-[2.5] hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
            >
                <div
                    class="font-orbitron font-bold text-6xl md:text-5xl sm:text-4xl xs:text-3xl text-white"
                >
                    {formatTime(seconds)}
                </div>
                <div
                    class="text-base-content text-sm md:text-xs sm:text-[0.75rem] xs:text-[0.625rem] uppercase tracking-wider mt-2 font-rajdhani font-bold"
                >
                    Seconds
                </div>
            </div>
        </div>

        <div class="space-y-6">
            <p
                class="text-base-content text-lg font-bold uppercase tracking-widest font-rajdhani"
            >
                Registration Opens Soon
            </p>
            <a
                href="/register"
                class="btn btn-primary btn-lg hover:shadow-[0_0_40px_rgba(160,32,240,0.5)] transition-all duration-300"
            >
                Register Now
            </a>
        </div>
    </div>
</section>

<style>
    @keyframes pulse-glow {
        from {
            text-shadow:
                0 0 30px rgba(160, 32, 240, 0.6),
                0 0 60px rgba(160, 32, 240, 0.3),
                0 2px 4px rgba(0, 0, 0, 0.8);
        }
        to {
            text-shadow:
                0 0 40px rgba(160, 32, 240, 0.8),
                0 0 80px rgba(160, 32, 240, 0.4),
                0 2px 4px rgba(0, 0, 0, 0.8);
        }
    }
    .animate-pulse-glow {
        animation: pulse-glow 2s ease-in-out infinite alternate;
    }
    .font-orbitron {
        font-family: "Orbitron", monospace;
    }
    .font-rajdhani {
        font-family: "Rajdhani", sans-serif;
    }
</style>
