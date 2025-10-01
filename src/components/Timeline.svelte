<script>
    const timelineEvents = [
        {
            month: "SEP",
            day: "7",
            title: "REGISTRATIONS",
            description:
                "Registration period for participants to join MoraXtreme 10.0 competition (Sep 7 – Oct 1, 2025)",
        },
        {
            month: "SEP",
            day: "7",
            title: "WORKSHOPS",
            description:
                "Skill-building workshops and mentoring sessions for all registered participants (Sep 7 – Oct 5, 2025)",
        },
        {
            month: "SEP",
            day: "15",
            title: "AWARENESS SESSION",
            description:
                "Informative session to brief participants on the competition format and guidelines (Sep 15, 2025)",
        },
        {
            month: "OCT",
            day: "8",
            title: "ELIMINATION ROUND",
            description:
                "The 12-hour online qualifying round to select the top 10 teams advancing to the finals",
        },
        {
            month: "OCT",
            day: "18",
            title: "GRAND FINALS AND THE AWARDS CEREMONY",
            description:
                "The final 8-hour in-person round where qualified teams compete for victory",
        },
        {
            month: "OCT",
            day: "25",
            title: "IEEEXTREME 19.0",
            description:
                "Global IEEE programming competition - the ultimate challenge",
        },
    ];
</script>

<section
    id="timeline"
    class="text-base-content px-4 md:px-20 min-h-screen flex flex-col items-center justify-center relative py-20"
>
    <div class="flex flex-col items-center justify-center">
        <div class="container mx-auto px-4">
            <div class="flex flex-col items-center justify-center">
                <h2
                    class="text-center text-4xl font-bold drop-shadow-lg font-display text-gradient text-shadow-glow"
                >
                    MoraXtreme Timeline
                </h2>
                <p class="text-base-content text-lg mt-4 text-center">
                    Discover the key milestones and events leading up to the
                    competition.
                </p>
            </div>
        </div>
    </div>
    <div class="w-full overflow-x-auto">
        <div class="min-w-full lg:px-8">
            <ul
                class="timeline timeline-vertical max-lg:timeline-compact lg:timeline-horizontal items-center py-16 lg:min-w-max"
            >
            {#each timelineEvents as event, index}
                <li class="min-w-[12rem] gap-x-8 gap-y-0 lg:gap-y-8 lg:gap-x-0">
                    {#if index > 0}
                        <hr class="rounded-full opacity-95 bg-white/20" />
                    {/if}
                    <div class="timeline-middle">
                        <div
                            class="w-16 h-16 rounded-full flex items-center justify-center z-100 bg-white/5 backdrop-blur-md backdrop-saturate-[2.5] backdrop-hue-rotate-[-357deg] ring-4 ring-white/20 ring-offset-2 ring-offset-transparent glass-shadow glass-shadow-hover transition-all duration-300"
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
                            : 'timeline-start'} timeline-box max-w-xs lg:max-w-[16rem] p-4 glass-card glass-shadow glass-shadow-hover"
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
    </div>
</section>
