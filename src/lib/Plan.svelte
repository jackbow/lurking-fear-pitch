<script lang="ts">
  import el_capitan_webp from '~/assets/images/el_capitan.webp';
  import el_capitan_avif from '~/assets/images/el_capitan.avif';
  import el_capitan_jpg from '~/assets/images/el_capitan.jpg';
  import melissa_jugging_webp from '~/assets/images/melissa_jugging.webp';
  import melissa_jugging_avif from '~/assets/images/melissa_jugging.avif';
  import melissa_jugging_jpg from '~/assets/images/melissa_jugging.jpg';
  import melissa_leading_webp from '~/assets/images/melissa_leading.webp';
  import melissa_leading_avif from '~/assets/images/melissa_leading.avif';
  import melissa_leading_jpg from '~/assets/images/melissa_leading.jpg';
  import melissa_7_webp from '~/assets/images/melissa_7.webp';
  import melissa_7_avif from '~/assets/images/melissa_7.avif';
  import melissa_7_jpg from '~/assets/images/melissa_7.jpg';
  import Picture from './Picture.svelte';
</script>

<section id="plan">
  <section class="relative">
    <Picture
      class="w-screen object-cover object-left-top h-[50rem]"
      avif={el_capitan_avif}
      webp={el_capitan_webp}
      jpg={el_capitan_jpg}
      alt="El Capitan, with the Lurking Fear route highlighted."
    />
    <div
      class="text-white text-left absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex flex-col items-center pt-40 pl-80 pr-96 font-extrabold gap-8"
    >
      <h2 class="text-9xl capitalize opacity-50 text-left self-start">EL CAPITAN</h2>
      <span class="opacity-80 text-lg space-y-12 pr-12 pl-2">
        <p>
          If Yosemite National Park is the world mecca of climbing, El Capitan is the crown jewel. People have been
          climbing and breaking records on the 3,000 foot monster since 1958. In 1993, Lynn Hill made history as the
          first person to free climb the route known as 'The Nose'. In 2001, Chelsea Griffie became the first Black
          woman to ascend El Cap. And of course, climbing legend Alex Honnold Free Solo'd the route 'Freerider' in 2016.
        </p>
        <p>
          But the climbing community in Yosemite has a unique and turbulent history, one which has led the atmosphere
          today to be one of insularity and exclusion. Though this culture isn’t always specifically ableist, it gives
          rise to a preconceived notion of who belongs – who should be able to climb, and who shouldn’t. To have someone
          like Melissa attempting this climb represents a cultural shift and will spark the types of clashes necessary
          for change.
        </p>
      </span>
    </div>
  </section>
  <div class="bg-black h-[60rem] text-white pl-40 pt-24">
    <h2 class="text-8xl font-extrabold">Jugging El Cap</h2>
    <p class="py-4">
      A handful of disabled ascents have been made on El Cap. The vast majority of them have been jugged.
    </p>
    <div class="flex w-3/4 gap-12 pt-2">
      <div>
        <p class="pb-8">
          <strong>JUGGING:</strong> Using a tool called an ascender to pull yourself up a rope that has been set in place,
          or fixed, by a leader. This is the most common form used by people who are either new to big wall climbing or unable
          to lead. It is a legitimate way to reach the top, but some with a more traditional or ableist mindset argue it
          "doesn't count".
        </p>
        <Picture
          avif={melissa_jugging_avif}
          webp={melissa_jugging_webp}
          jpg={melissa_jugging_jpg}
          alt="Melissa jugging."
        />
      </div>
      <div>
        <p class="pb-8">
          <strong>LEADING:</strong> Being the first climber in a group to climb up the wall, placing protective gear as you
          go. This person is the most at risk for injury due to the length they can fall if they make a mistake or lose strength.
          Melissa is wants to lead Lurking Fear, which will be a huge challenge — but groundbreaking for the paraclimbing
          community.
        </p>
        <Picture
          avif={melissa_leading_avif}
          webp={melissa_leading_webp}
          jpg={melissa_leading_jpg}
          alt="Melissa lead climbing."
        />
      </div>
    </div>
  </div>
  <div class="flex flex-row h-[60rem]">
    <div class="w-1/2 p-8 mt-20">
      <h2 class="text-9xl">Time is slipping</h2>
      <div class="mt-12 space-y-6 px-10">
        <p>
          Melissa wants to join the ranks of the outdoor climbing elite with a "first" on El Capitan. Although Melissa
          is dominating her sport indoors, only about 50% of the hundreds of climbers who attempt El Cap successfully
          complete the venture. Even when a climber is successful, their project can take a lifetime.
        </p>
        <p>
          Unfortunately, Melissa doesn't have a lifetime. Her cerebral palsy is alreading leading to muscle
          deterioration and increasing physical limitations, and it will only get worse. Her visual impairment
          intensifies every year as well. So, Melissa climbs every day like it might be her last chance to do so. She
          has grown rapidly while training in Yosemite, Zion, The Gunks, and at her home gym, Movement Gowanus, in
          Brooklyn. This is the toughest training she's ever gone through, physically and mentally, but it'll all be
          worth it when she tops out on Lurking Fear.
        </p>
      </div>
    </div>
    <Picture
      class="object-cover object-left-top w-full h-[60rem]"
      avif={melissa_7_avif}
      webp={melissa_7_webp}
      jpg={melissa_7_jpg}
      alt="Portrait of Melissa."
    />
  </div>
</section>

<!-- <section id="story" class=" min-h-fit bg-black text-gray-100 pt-20 pl-40 pb-40">
  <div class="container justify-items-end grid items-center gap-2 h-full">
    <div class="picture-left">
      <picture>
        <source type="image/avif" srcset={story_avif} />
        <source type="image/webp" srcset={story_webp} />
        <img
          fetchpriority="high"
          loading="eager"
          class="object-cover object-center"
          alt="The project logo"
          src={story_jpg}
        />
      </picture>
    </div>
    <div
      class="content-right space-y-2 place-content-start mr-40 self-start z-2 p-5 md:z-auto px-2 2xs:px-4 xs:px-8 sm:px-10 md:px-0"
    >
      <h2 class="text-8xl font-bold">El Capitan</h2>
      <p>
        If Yosemite National Park is the world mecca of climbing, El Capitan is the crown jewel. People have been
        climbing and breaking records on the 3,000 foot monster since 1958. In 1993, Lynn Hill made history as the first
        person to free climb the route known as 'The Nose'. In 2001, Chelsea Griffie became the first Black woman to
        ascend El Cap. And of course, climbing legend Alex Honnold Free Solo'd the route 'Freerider' in 2016.
      </p>
      <p>
        But the climbing community in Yosemite has a unique and turbulent history, one which has led the atmosphere
        today to be one of insularity and exclusion. Though this culture isn’t always specifically ableist, it gives
        rise to a preconceived notion of who belongs – who should be able to climb, and who shouldn’t. To have someone
        like Melissa attempting this climb represents a cultural shift and will spark the types of clashes necessary for
        change.
      </p>
    </div>
  </div>
</section> -->

<style>
</style>
