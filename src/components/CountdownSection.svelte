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
    class="text-base-content px-4 sm:px-6 md:px-20 min-h-screen flex flex-col items-center justify-center relative"
>
    <div class="max-w-7xl mx-auto text-center space-y-8 sm:space-y-12">
        <div class="flex flex-col items-center justify-center py-10 sm:py-16 md:py-20">
            <div class="container mx-auto px-2 sm:px-4">
                <div class="flex flex-col items-center justify-center">
                    <h2
                        class="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg font-display text-gradient text-shadow-glow px-2"
                    >
                        THE COUNTDOWN BEGINS
                    </h2>
                    <p class="text-base-content text-xs sm:text-sm md:text-lg mt-3 sm:mt-4 text-center px-2 sm:px-0">
                        Mark your calendars! MoraXtreme 10.0 is approaching
                        fast. Get ready for Sri Lanka's most challenging coding
                        competition.
                    </p>
                </div>
            </div>
        </div>

        <div
            class="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 flex-wrap"
        >
            <!-- Days -->
            <div
                class="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 flex flex-col items-center justify-center glass-card glass-shadow glass-shadow-hover hover:-translate-y-0.5 ease-in-out"
            >
                <div
                    class="font-orbitron font-bold text-xl xs:text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white"
                >
                    {formatTime(days)}
                </div>
                <div
                    class="text-base-content text-[10px] xs:text-xs sm:text-sm md:text-sm uppercase tracking-wider mt-0.5 sm:mt-1 font-rajdhani font-bold"
                >
                    Days
                </div>
            </div>

            <!-- Colon -->
            <div
                class="text-white font-orbitron font-bold text-xl xs:text-2xl sm:text-3xl md:text-5xl lg:text-6xl animate-pulse-glow"
            >
                :
            </div>

            <!-- Hours -->
            <div
                class="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 flex flex-col items-center justify-center glass-card glass-shadow glass-shadow-hover hover:-translate-y-0.5 ease-in-out"
            >
                <div
                    class="font-orbitron font-bold text-xl xs:text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white"
                >
                    {formatTime(hours)}
                </div>
                <div
                    class="text-base-content text-[10px] xs:text-xs sm:text-sm md:text-sm uppercase tracking-wider mt-0.5 sm:mt-1 font-rajdhani font-bold"
                >
                    Hours
                </div>
            </div>

            <div
                class="text-white font-orbitron font-bold text-xl xs:text-2xl sm:text-3xl md:text-5xl lg:text-6xl animate-pulse-glow"
            >
                :
            </div>

            <!-- Minutes -->
            <div
                class="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 flex flex-col items-center justify-center glass-card glass-shadow glass-shadow-hover hover:-translate-y-0.5 ease-in-out"
            >
                <div
                    class="font-orbitron font-bold text-xl xs:text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white"
                >
                    {formatTime(minutes)}
                </div>
                <div
                    class="text-base-content text-[10px] xs:text-xs sm:text-sm md:text-sm uppercase tracking-wider mt-0.5 sm:mt-1 font-rajdhani font-bold"
                >
                    Minutes
                </div>
            </div>

            <div
                class="text-white font-orbitron font-bold text-xl xs:text-2xl sm:text-3xl md:text-5xl lg:text-6xl animate-pulse-glow hidden sm:block"
            >
                :
            </div>

            <!-- Seconds -->
            <div
                class="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 flex flex-col items-center justify-center glass-card glass-shadow glass-shadow-hover hover:-translate-y-0.5 ease-in-out"
            >
                <div
                    class="font-orbitron font-bold text-xl xs:text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white"
                >
                    {formatTime(seconds)}
                </div>
                <div
                    class="text-base-content text-[10px] xs:text-xs sm:text-sm md:text-sm uppercase tracking-wider mt-0.5 sm:mt-1 font-rajdhani font-bold"
                >
                    Seconds
                </div>
            </div>
        </div>

        <div class="space-y-4 sm:space-y-6">
            <a
                href="https://forms.gle/jiF6QXNBAh4wedrE8"
                class="btn btn-primary btn-sm sm:btn-md md:btn-lg btn-glow-hover transition-all duration-300 text-sm sm:text-base"
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
                0 0 30px oklch(var(--color-glow-primary) / 0.6),
                0 0 60px oklch(var(--color-glow-primary) / 0.3),
                0 2px 4px rgba(0, 0, 0, 0.8);
        }
        to {
            text-shadow:
                0 0 40px oklch(var(--color-glow-primary) / 0.8),
                0 0 80px oklch(var(--color-glow-primary) / 0.4),
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
