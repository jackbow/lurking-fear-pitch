<script lang="ts">
  import iain_macdonald_avif from '~/assets/images/crew/iain_macdonald.avif';
  import iain_macdonald_webp from '~/assets/images/crew/iain_macdonald.webp';
  import iain_macdonald_jpg from '~/assets/images/crew/iain_macdonald.jpg';
  import jordan_bjorklund_avif from '~/assets/images/crew/jordan_bjorklund.avif';
  import jordan_bjorklund_webp from '~/assets/images/crew/jordan_bjorklund.webp';
  import jordan_bjorklund_jpg from '~/assets/images/crew/jordan_bjorklund.jpg';
  import kristen_personius_avif from '~/assets/images/crew/kristen_personius.avif';
  import kristen_personius_webp from '~/assets/images/crew/kristen_personius.webp';
  import kristen_personius_jpg from '~/assets/images/crew/kristen_personius.jpg';
  import lauren_berger_avif from '~/assets/images/crew/lauren_berger.avif';
  import lauren_berger_webp from '~/assets/images/crew/lauren_berger.webp';
  import lauren_berger_jpg from '~/assets/images/crew/lauren_berger.jpg';
  import randy_lee_avif from '~/assets/images/crew/randy_lee.avif';
  import randy_lee_webp from '~/assets/images/crew/randy_lee.webp';
  import randy_lee_jpg from '~/assets/images/crew/randy_lee.jpg';
  import wilder_troxell_avif from '~/assets/images/crew/wilder_troxell.avif';
  import wilder_troxell_webp from '~/assets/images/crew/wilder_troxell.webp';
  import wilder_troxell_jpg from '~/assets/images/crew/wilder_troxell.jpg';
  import Picture from './Picture.svelte';

  const crew = [
    {
      name: 'Wilder Troxell',
      role: 'Director, Producer',
      bio: "Wilder Troxell has been making waves in the film industry since 2017. His directorial debut not only embarked on a global festival tour but also secured three Best Picture awards, notably from HBO's Action Showcase, Jim Thorpe Film Festival, and Oceanside Film Festival. Wilder's second feature, filmed in 2020, is set to hit streaming services next year. Beyond the realm of filmmaking, Wilder is a passionate rock climber, and this enthusiasm fueled his latest project. With almost a decade of experience in the film industry, Wilder has contributed his talents to renowned studios such as Netflix, Hulu, Paramount, HBO, Apple, and more. His diverse portfolio reflects not only his cinematic prowess but also his dedication to creating impactful stories within the industry and the communities he calls home.",
      avif: wilder_troxell_avif,
      webp: wilder_troxell_webp,
      jpg: wilder_troxell_jpg,
      object_area: 'center',
    },
    {
      name: 'Lauren Berger',
      role: 'Executive Producer',
      bio: "Lauren Berger is a producer with holistic unscripted experience in concept development, pre-production, field production, and post. Her adventures in docstyle storytelling have taken her from field producing Discovery Channel's #1 series Gold Rush in remote Yukon, Canada to learning conversational ASL to produce a digital doc about a hard-of-hearing local hero in DC. Her background at the likes of Nat Geo and PBS brings her projects a raw, values-first style that still packs a personality punch. If she’s not putting her left-brain, right-brain skills to use on location or in the edit, she’s probably on her snowboard, at the climbing gym, or petting a stranger’s dog without their permission.",
      avif: lauren_berger_avif,
      webp: lauren_berger_webp,
      jpg: lauren_berger_jpg,
      object_area: 'top',
    },
    {
      name: 'Randy Lee',
      role: 'Camera Operator',
      bio: 'Randy Lee grew up in rural Wisconsin until TV work took him to Atlanta, Los Angeles, an finally Alaska, where he settled and honed his craft in adventure filmmaking. He has been a Camera Operator, DIT and Producer, and now most often works as a DP for shows such as Deadliest Catch, Life Below Zero, and Gold Rush: White Water. In his free time, he has attempted Denali, soloed Triple Direct on El Capitan, and developed climbing routes in rural Alaska. These days Randy is putting his experience in wilderness adventures together with his film industry experience and is working on multiple adventure-focused documentaries, giving his all to get the shot and tell exciting stories.',
      avif: randy_lee_avif,
      webp: randy_lee_webp,
      jpg: randy_lee_jpg,
      object_area: 'top',
    },
    {
      name: 'Jordan Bjorklund',
      role: 'Camera Operator',
      bio: "Jordan Bjorklund is a California-based cinematographer who enjoys working on various kinds of projects including scripted work, reality television, surf and underwater photography, and documentary filmmaking. He likes to deeply embed with projects. He's spent the last three years shooting on Car Masters: Rust to Riches, but he is excited to take some time off to pursue independent projects like Lurking Fear.",
      avif: jordan_bjorklund_avif,
      webp: jordan_bjorklund_webp,
      jpg: jordan_bjorklund_jpg,
      object_area: 'bottom',
    },
    {
      name: 'Kristen Personius',
      role: 'Composer Option',
      bio: 'Kristen Personius is a Los Angeles based composer, producer and songwriter. Her composer credits include: Tyler Perry’s upcoming Zatima Season 2, Nick. Jr’s Face’s Music Party, and co-composer for James Cameron’s Super/Natural Planet and Netflix’s The ‘G’ Word, to name a few titles.',
      avif: kristen_personius_avif,
      webp: kristen_personius_webp,
      jpg: kristen_personius_jpg,
      object_area: 'top',
    },
    {
      name: 'Iain MacDonald',
      role: 'Locations Producer',
      bio: "Iain Macdonald's experience in independent documentary filmmaking and journalism has led him to working with the Emmy-award-winning, outdoor-adventure-filmmaking company Sender Films on numerous documentary shorts. In Los Angeles, Iain has worked as site representative on dozens of commercials and feature films. He has also directed and produced several climbing-focused documentary shorts.",
      avif: iain_macdonald_avif,
      webp: iain_macdonald_webp,
      jpg: iain_macdonald_jpg,
      object_area: 'center',
    },
  ];
</script>

<section id="crew" class="bg-black text-white">
  <div class="flex flex-col flex-wrap items-center justify-center px-4 md:px-8 lg:px-20 mx-auto">
    <h2 class="text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-sans font-extrabold pt-20 self-start">
      Production Crew
    </h2>
    <div class="flex justify-between flex-wrap gap-12 pt-4 md:pt-8 lg:pt-12">
      {#each crew as { name, role, bio, avif, webp, jpg, object_area }}
        <div class="h-fit w-full sm:w-2/3 lg:w-1/3 xl:w-1/4">
          <Picture class="h-[30rem] w-full object-cover object-{object_area}" {avif} {webp} {jpg} alt={name} />
          <div class="p-8 border-white border border-t-0">
            <h3 class="text-2xl font-extrabold">{name}</h3>
            <h3 class="text-lg pb-4">{role}</h3>
            <p class="font-normal">
              {bio}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style lang="stylus">

</style>
