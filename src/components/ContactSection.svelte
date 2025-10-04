<script>
  import ContactCard from "./ContactCard.svelte";

  const contacts = [
    {
      name: "Sanjula Gathsara",
      role: "Chairman - IEEE student branch UOM",
      organization: [""],
      email: "sanjulagathsara@ieee.org",
      phone: " +94 70 776 4126",
      imageUrl: "/Contact/sanjula.avif",
    },
    {
      name: "Ameera Weerasuriya",
      role: "CS Chapter Chairman",
      organization: [""],
      email: "Ameerathiwanka@ieee.org",
      phone: "+94 71 135 6855",
      imageUrl: "/Contact/ameera.avif",
    },
    {
      name: "Sonath Kirindage",
      role: "Event Chairperson - MoraXtreme 10.0 & IEEEXtreme 19.0",
      organization: "",
      email: "sonath.sanvida@gmail.com",
      phone: "+94 710 338 048",
      imageUrl: "/Contact/sonath.avif",
    },
    {
      name: "Mindiya Karunasinghe",
      role: "Event Vice Chairperson - MoraXtreme 10.0 & IEEEXtreme 19.0",
      organization: "",
      email: "mindiya@ieee.org",
      phone: "+94 71 232 8775",
      imageUrl: "/Contact/mindiya.avif",
    },
    {
      name: "Thamalu Bambaravanage",
      role: "Event Chairperson - MoraXtreme 10.0 & IEEEXtreme 19.0",
      organization: [""],
      email: "thamalu.bambaravanage@ieee.org",
      phone: " +94 707 806 767",
      imageUrl: "/Contact/thamalu.avif",
    },
    {
      name: "Hasaruvi Kodithuwakku",
      role: "Delegate Handling Lead",
      organization: [""],
      email: "hasaruvikodithuwakku@gmail.com",
      phone: " +94 70 776 4126",
      imageUrl: "/Contact/hasaruvi.avif",
    },
    
  ];
</script>

<div>
  <h2 class="text-4xl md:text-5xl font-bold text-center mb-6">
    <span
      class="text-center text-4xl font-bold drop-shadow-lg font-display text-gradient text-shadow-glow"
    >
      Contact Us
    </span>

  </h2>
    <p class="text-base-content text-lg mt-4 text-center">
      For any inquiries or assistance, please don't hesitate to reach out to our dedicated event coordinators.
        </p>

  <section class="relative overflow-hidden py-16 sm:py-24 px-4 bg-transparent">
    <div class="relative z-10 max-w-7xl mx-auto px-4 space-y-12">

      <!-- Row 1 -->
      <div class="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-1 w-full">
        {#each contacts.slice(0, 2) as contact}
          <ContactCard {contact} />
        {/each}
      </div>

      <!-- Row 2 -->
      <div class="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-1 w-full ">
        {#each contacts.slice(2, 4) as contact}
          <ContactCard {contact} />
        {/each}
      </div>
            <div class="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-1 w-full ">
        {#each contacts.slice(4, 6) as contact}
          <ContactCard {contact} />
          
        {/each}
      </div>

      <!-- Row 3 -->
      <!-- <div class="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-1 w-full">
        {#each contacts.slice(3, 6) as contact}
          <ContactCard {contact} />
        {/each}
      </div> -->
    </div>
  </section>
</div>
