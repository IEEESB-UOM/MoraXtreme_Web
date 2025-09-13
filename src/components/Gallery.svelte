<script>
  // Replace these with your own images
  const images = [
    { src: "/gallery/main.avif", caption: "Main Event Highlights" },
    { src: "/gallery/org.avif", caption: "Organization Team" },
    { src: "/gallery/champ.avif", caption: "Championship Winners" },
    { src: "/gallery/1st.avif", caption: "First Place Victory" },
    { src: "/gallery/2nd.avif", caption: "Second Place Achievement" },
    { src: "/gallery/1.avif", caption: "Winners" },
    { src: "/gallery/2.avif", caption: "Winners" },
  ];
</script>

<section
  id="gallery"
  class="text-base-content flex-col px-6 md:px-20 min-h-screen flex items-center justify-center relative py-20"
>
  <div class="flex flex-col items-center justify-center">
    <div class="container mx-auto px-4">
      <div class="flex flex-col items-center justify-center">
        <h2
          class="text-center text-4xl font-bold drop-shadow-lg font-display text-gradient text-shadow-glow"
        >
          GALLERY & PAST EVENTS
        </h2>
        <p class="text-base-content text-lg mt-4 text-center">
          Discover our journey through past competitions and memorable moments
        </p>
      </div>
    </div>
  </div>

  <div class="w-full max-w-5xl mx-auto p-4">
    <!-- Large Image -->
    <div
      class="mb-4 w-full aspect-[2/1] object-cover rounded-lg shadow-md overflow-hidden relative group"
    >
      <img
        src={images[0].src}
        alt={images[0].caption}
        class="group-hover:scale-105 transition duration-300 w-full h-full object-cover"
      />
      <div
        class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
      >
        <p class="text-white text-lg font-semibold p-4 w-full">
          {images[0].caption}
        </p>
      </div>
    </div>

    <!-- Small Grid Images -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {#each images.slice(1) as img}
        <div
          class="w-full aspect-[2/1] object-cover rounded-lg shadow-md overflow-hidden relative group"
        >
          <img
            src={img.src}
            alt={img.caption}
            class="group-hover:scale-110 transition duration-300 w-full h-full object-cover"
          />
          <div
            class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
          >
            <p class="text-white text-sm font-semibold p-2 w-full">
              {img.caption}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
