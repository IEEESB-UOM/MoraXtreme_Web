<script>
  // Replace these with your own images
  const images = [
    "./parallax_bg.avif",
    "./parallax_bg.avif",
    "./parallax_bg.avif",
    "./parallax_bg.avif",
    "./parallax_bg.avif",
    "./parallax_bg.avif",
    "./parallax_bg.avif"
  ];
</script>

<div class="w-full max-w-5xl mx-auto p-4">
    
  <!-- Large Image -->
  <div class="mb-4">
    <img
      src={images[0]}
      alt="Large"
      class="w-full h-80 object-cover rounded-lg shadow-md"
    />
  </div>

  <!-- Small Grid Images -->
  <div class="grid grid-cols-3 gap-3">
    {#each images.slice(1) as img}
      <img
        src={img}
        alt="Gallery item"
        class="w-full h-40 object-cover rounded-lg shadow-md hover:scale-105 transition"
      />
    {/each}
  </div>
</div>
