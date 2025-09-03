<script>
    const timelineEvents = [
        {
            month: "OCT",
            day: "1",
            title: "Training Session",
            description:
                "Workshops and mentoring sessions for all registered teams",
        },
        {
            month: "OCT",
            day: "5",
            title: "Training Session",
            description:
                "Workshops and mentoring sessions for all registered teams",
        },
        {
            month: "OCT",
            day: "10",
            title: "Launch Day",
            description:
                "Official kick-off of MoraXtreme Participants register and teams form",
        },
        {
            month: "OCT",
            day: "15",
            title: "Launch Day",
            description:
                "Official kick-off of MoraXtreme Participants register and teams form",
        },
        {
            month: "OCT",
            day: "25",
            title: "Launch Day",
            description:
                "Official kick-off of MoraXtreme Participants register and teams form",
        },
    ];
</script>

<div class="flex flex-col items-center justify-center">
    <div class="container mx-auto px-4">
        <div class="flex flex-col items-center justify-center">
            <h2
                class="text-4xl font-bold drop-shadow-lg font-display text-white bg-gradient-to-r from-purple-400 via-blue-300 to-purple-500 bg-clip-text"
                style="text-shadow: 0 0 20px #8b5cf6, 0 0 40px #3b82f6, 0 0 60px #8b5cf6;"
            >
                MoraXtreme Timeline
            </h2>
            <p class="text-base-content text-lg mt-4 text-center">
                Humanity's journey to understand and explore the Red Planet
                spans decades of scientific achievement.
            </p>
        </div>
    </div>
</div>
<div class="flex justify-center items-center w-full">
    <ul
        class="timeline timeline-vertical max-lg:timeline-compact lg:timeline-horizontal items-center py-16"
    >
        {#each timelineEvents as event, index}
            <li class="min-w-[12rem] gap-x-8 gap-y-0 lg:gap-y-8 lg:gap-x-0">
                {#if index > 0}
                    <hr class="rounded-full opacity-95 bg-white/20" />
                {/if}
                <div class="timeline-middle">
                    <div
                        class="w-16 h-16 rounded-full flex items-center justify-center z-100
 bg-white/5 backdrop-blur-md backdrop-saturate-[2.5] backdrop-hue-rotate-[-357deg]
 ring-4 ring-white/20 ring-offset-2 ring-offset-transparent
 shadow-[0_0_24px_rgba(147,51,234,0.8),0_0_48px_rgba(124,58,237,0.6),inset_0_6px_12px_rgba(255,255,255,0.15)]
 hover:shadow-[0_0_36px_rgba(147,51,234,1),0_0_72px_rgba(124,58,237,0.8)] transition-all duration-300"
                    >
                        <div
                            class="text-center text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                        >
                            <div
                                class="text-[10px] font-semibold tracking-widest opacity-95 text-white/90"
                            >
                                {event.month}
                            </div>
                            <div
                                class="text-xl font-extrabold leading-none text-white"
                            >
                                {event.day}
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="{index % 2 === 0
                        ? 'timeline-end'
                        : 'timeline-start'} timeline-box max-w-xs lg:max-w-[16rem] p-4 rounded-xl
 bg-white/5 backdrop-blur-xl backdrop-saturate-[2] backdrop-hue-rotate-[-357deg]
 border border-white/20 hover:border-white/30
 shadow-[0_0_32px_rgba(147,51,234,0.4),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.1)]
 hover:shadow-[0_0_48px_rgba(147,51,234,0.6),0_0_24px_rgba(168,85,247,0.4),inset_0_1px_0_rgba(255,255,255,0.15)]
 transition-all duration-300 hover:bg-white/10 hover:backdrop-saturate-[2.5]"
                >
                    <h3
                        class="text-base font-bold mb-2 text-center text-white/95 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
                    >
                        {event.title}
                    </h3>
                    <p
                        class="text-sm text-white/75 text-center leading-relaxed"
                    >
                        {event.description}
                    </p>
                </div>
                {#if index < timelineEvents.length - 1}
                    <hr class="rounded-full opacity-95 bg-white/20" />
                {/if}
            </li>
        {/each}
    </ul>
</div>
