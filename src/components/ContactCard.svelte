<script>
  export let contact;
</script>

<style>
  .hover-scale {
    transition: transform 0.3s ease;
  }
  .hover-scale:hover {
    transform: scale(1.05);
  }
</style>

<div
  class="flex flex-col sm:flex-row items-center w-full max-w-xs sm:max-w-md mx-auto hover-scale p-4 glass-card glass-shadow glass-shadow-hover"
>
  <img
    src={contact.imageUrl}
    alt={contact.name}
    class="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover shadow-lg z-10 shrink-0"
  />

  <div
    class="timeline-end  max-w-xs lg:max-w-[18rem] p-4 glass-shadow glass-shadow-hover
           w-full pt-10 sm:pt-4 sm:pl-10 -mt-8 sm:mt-0 sm:-ml-6 text-center sm:text-left"
  >
    <h3 class="text-lg font-bold text-white-900">{contact.name}</h3>
    <p class="text-sm font-semibold text-white-300 pt-1">{contact.role}</p>

    <!-- <div class="text-white-600 text-sm mb-4">
      {#if Array.isArray(contact.organization)}
        {#each contact.organization as line}
          <p>{line}</p>
        {/each}
      {:else}
        <p>{contact.organization}</p>
      {/if}
    </div> -->

    <!-- <a
      href={"mailto:" + contact.email}
      class="flex items-center justify-center sm:justify-start text-xs text-white-700 hover:text-yellow-600 transition-colors"
    >
      <svg class="w-4 h-4 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
      <span class="truncate">{contact.email}</span>
    </a> -->

    <a
      href={"tel:" + contact.phone.replace(/\s+/g, "")}
      class="flex pt-4 items-center justify-center sm:justify-start text-xs text-white-700 hover:text-yellow-600 transition-colors"
    >
      <svg class="w-4 h-4 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path
          d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
        />
      </svg>
      <span>{contact.phone}</span>
    </a>
  </div>
</div>
