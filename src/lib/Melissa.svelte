<script lang="ts">
  import story_webp from '~/assets/images/story.webp';
  import story_avif from '~/assets/images/story.avif';
  import story_jpg from '~/assets/images/story.jpg';
  import melissa_1_webp from '~/assets/images/melissa_1.webp';
  import melissa_1_avif from '~/assets/images/melissa_1.avif';
  import melissa_1_jpg from '~/assets/images/melissa_1.jpg';
  import melissa_3_webp from '~/assets/images/melissa_3.webp';
  import melissa_3_avif from '~/assets/images/melissa_3.avif';
  import melissa_3_jpg from '~/assets/images/melissa_3.jpg';
  import melissa_5_webp from '~/assets/images/melissa_5.webp';
  import melissa_5_avif from '~/assets/images/melissa_5.avif';
  import melissa_5_jpg from '~/assets/images/melissa_5.jpg';
  import Picture from './Picture.svelte';
</script>

<section id="story" class="min-h-fit bg-black text-gray-100 pt-32 xl:pl-40 space-y-20">
  <!-- "Story" -->
  <div
    class="relative container px-8 sm:px-8 xl:px-0 mx-auto max-w-screen-md xl:max-w-max justify-items-end flex flex-col justify-center xl:grid items-center gap-0 xl:gap-2 h-full"
  >
    <h2 class="text-8xl font-bold mb-4 xl:hidden place-content-start self-start pl-4 -top-16 absolute xl:static">
      Story
    </h2>
    <div class="picture-left">
      <!-- <div class="picture-left 2xs:px-4 xs:px-8 md:px-0 pr-0"> -->
      <Picture
        class="object-cover object-center"
        avif={story_avif}
        webp={story_webp}
        jpg={story_jpg}
        alt="Portrait of Melissa Ruiz"
      />
    </div>
    <div
      class="content-right space-y-4 xl:place-content-start self-start z-2 md:z-auto pr-0 xl:pr-28 xl:absolute xl:-top-16"
    >
      <!-- class="content-right space-y-4 xl:place-content-start self-start z-2 md:z-auto 2xs:px-4 xs:px-8 md:px-0 pr-0 xl:pr-28 xl:absolute xl:-top-16" -->
      <h2 class="text-8xl font-bold mb-4 hidden xl:block">Story</h2>
      <div class="space-y-2 p-0 font-normal">
        <p>
          Melissa Ruiz is one of the best paraclimbers in the world. She put a harness on for the first time in 2018 and
          she's already competing at the highest levels of the sport, having just won silver at the 2023 IFSC World
          Championship. She holds five other medals and she's gearing up for the 2024 Finals in Italy. But she's not
          satisfied staying indoors.
        </p>
        <p>
          Melissa's biggest outdoor venture to date will be climbing the route 'Lurking Fear' on El Capitan: the
          tallest, sheerest granite cliff in the world.
        </p>
        <p>If she succeeds, Melissa will be the first person with cerebral palsy to lead this climb.</p>
      </div>
    </div>
  </div>
  <!-- "Meet Melissa" -->
</section>
<section id="melissa" class="bg-black text-gray-100 pt-32 xl:pl-40 space-y-20 pb-32">
  <div
    class="relative container px-8 sm:px-8 xl:px-0 mx-auto max-w-screen-md xl:max-w-max justify-items-end xl:grid flex flex-col flex-wrap sm:flex-row justify-center sm:justify-start xl:justify-center sm:items-start gap-0 sm:gap-4 xl:gap-2 h-full"
  >
    <h2
      class="text-7xl md:text-8xl font-bold xl:hidden place-content-start self-start pl-4 sm:pl-0 -top-16 xs:-top-14 sm:-top-20 md:-top-24 w-screen sm:w-1/2 absolute z-20"
    >
      Meet Melissa
    </h2>
    <div class="col-start-8 col-span-6 row-start-1 row-span-8 z-10 sm:w-1/2 xl:w-auto">
      <Picture
        class="object-cover object-center"
        avif={melissa_1_avif}
        webp={melissa_1_webp}
        jpg={melissa_1_jpg}
        alt="Portrait of Melissa Ruiz"
      />
    </div>
    <div class="flex-1 content-left xl:space-y-2 place-content-start xl:mr-40 z-20 pt-2 sm:pt-0 md:z-20 px-2">
      <h2 class="text-8xl font-bold mb-4 hidden xl:block xl:min-w-max">Meet Melissa</h2>
      <div class="space-y-2 font-normal">
        <p>
          Melissa's cerebral palsy mostly affects her legs, her core, her vision… and her memory (she's actually not
          sure if that last one is the CP, or just her). Movies take too long and it's hard to follow the plot, so she
          sticks to TikTok instead. But she can memorize a route and her personalized approach to it, no problem.
        </p>
        <p>
          While she's a paraclimbing powerhouse, it's also fair to say that Melissa is a bit of an… oddball. She's been
          known to change the color of her hair depending on her mood. She went to college for Childhood Education, but
          doesn't really like working with kids. She grew up in New York City's foster care system and had five adopted
          brothers and sisters. Her humor is dark, but she's got a smile that lights up the room.
        </p>
      </div>
    </div>
    <div class="col-start-1 col-span-8 row-start-7 row-span-7 z-0 pr-8 hidden xl:block">
      <Picture
        class="object-cover object-center"
        avif={melissa_3_avif}
        webp={melissa_3_webp}
        jpg={melissa_3_jpg}
        alt="Portrait of Melissa Ruiz"
      />
    </div>
    <div class="col-start-6 col-span-5 row-start-11 row-span-7 z-20 hidden xl:block">
      <Picture
        class="object-cover object-center"
        avif={melissa_5_avif}
        webp={melissa_5_webp}
        jpg={melissa_5_jpg}
        alt="Portrait of Melissa Ruiz"
      />
    </div>
  </div>
</section>

<style lang="stylus">
.container {
  grid-template-columns: repeat(16, 1fr);
  grid-template-columns: repeat(16, 1fr);
}
.content-right {
    grid-area: 1 / 9 / -1 / -1;
}
.content-left {
    grid-area: 2 / 2 / -1 / 11;
}
.picture-right {
    grid-area: 1 / 6 / 10 / 15;
}
.picture-left {
    grid-area: 3 / 1 / -1 / 12;
}
.content-desc {
  @media (min-width: 768px) {
    background: #322B55;
    color: rgb(168, 178, 209);
  }
}
</style>
