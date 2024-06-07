<script lang="ts">
  import story_webp from '~/assets/images/story.webp';
  import story_avif from '~/assets/images/story.avif';
  import story_jpg from '~/assets/images/story.jpg';
  import melissa_1_webp from '~/assets/images/melissa_1.webp';
  import melissa_1_avif from '~/assets/images/melissa_1.avif';
  import melissa_1_jpg from '~/assets/images/melissa_1.jpg';
  // import melissa_2_webp from '~/assets/images/melissa_2.webp';
  // import melissa_2_avif from '~/assets/images/melissa_2.avif';
  // import melissa_2_jpg from '~/assets/images/melissa_2.jpg';
  import melissa_3_webp from '~/assets/images/melissa_3.webp';
  import melissa_3_avif from '~/assets/images/melissa_3.avif';
  import melissa_3_jpg from '~/assets/images/melissa_3.jpg';
  import melissa_5_webp from '~/assets/images/melissa_5.webp';
  import melissa_5_avif from '~/assets/images/melissa_5.avif';
  import melissa_5_jpg from '~/assets/images/melissa_5.jpg';
  // import melissa_6_webp from '~/assets/images/melissa_6.webp';
  // import melissa_6_avif from '~/assets/images/melissa_6.avif';
  // import melissa_6_jpg from '~/assets/images/melissa_6.jpg';
  import Picture from './Picture.svelte';
</script>

<section id="story" class=" min-h-fit bg-black text-gray-100 pt-20 pl-40 space-y-20">
  <!-- "Story" -->
  <div class="container justify-items-end grid items-center gap-2 h-full">
    <div class="picture-left">
      <!-- TODO: mobile layout using object-cover/center -->
      <Picture
        class="object-cover object-center"
        avif={story_avif}
        webp={story_webp}
        jpg={story_jpg}
        alt="Portrait of Melissa Ruiz"
      />
    </div>
    <div
      class="content-right space-y-4 place-content-start mr-40 self-start z-2 p-5 md:z-auto px-2 2xs:px-4 xs:px-8 sm:px-10 md:px-0"
    >
      <h2 class="text-8xl font-bold mb-4">Story</h2>
      <!-- <p>
        Melissa Ruiz is a 28-year-old rock climber with cerebral palsy. She competes at the highest levels in
        paraclimbing, having just won silver at the 2023 IFSC World Championship- but she's not satisfied to stay
        indoors. Melissas next venture will be to climb the route 'Lurking Fear' on El Capitan: the tallest, sheerest
        granite cliff in the world. Melissa will be the first person with Cerebral Palsy to lead this climb.
      </p> -->
      <span class="space-y-2">
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
      </span>
    </div>
  </div>
  <!-- "Meet Melissa" -->
  <div class="container justify-items-end grid gap-2 w-full h-[80rem] items-start">
    <div class="col-start-8 col-span-6 row-start-1 row-span-8 z-10">
      <!-- <div class="picture-right"> -->
      <!-- TODO: mobile layout using object-cover/center -->
      <Picture
        class="object-cover object-center"
        avif={melissa_1_avif}
        webp={melissa_1_webp}
        jpg={melissa_1_jpg}
        alt="Portrait of Melissa Ruiz"
      />
    </div>
    <div
      class="content-left space-y-2 place-content-start mr-40 z-20 p-5 md:z-20 px-2 2xs:px-4 xs:px-8 sm:px-10 md:px-0"
    >
      <h2 class="text-8xl font-bold mb-4">Meet Melissa</h2>
      <span class="space-y-2">
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
      </span>
    </div>
    <div class="col-start-1 col-span-8 row-start-7 row-span-7 z-0 pr-8">
      <!-- TODO: mobile layout using object-cover/center -->
      <Picture
        class="object-cover object-center"
        avif={melissa_3_avif}
        webp={melissa_3_webp}
        jpg={melissa_3_jpg}
        alt="Portrait of Melissa Ruiz"
      />
    </div>
    <!-- TODO: mobile layout using object-cover/center -->
    <!-- <div class="col-start-7 col-span-4 row-start-7 row-span-6 z-30 pt-12">
      <Picture
        class="object-cover object-center"
        avif={melissa_2_avif}
        webp={melissa_2_webp}
        jpg={melissa_2_jpg}
        alt="Portrait of Melissa Ruiz"
      />
    </div> -->
    <!-- TODO: mobile layout using object-cover/center -->
    <div class="col-start-6 col-span-5 row-start-11 row-span-7 z-20">
      <Picture
        class="object-cover object-center"
        avif={melissa_5_avif}
        webp={melissa_5_webp}
        jpg={melissa_5_jpg}
        alt="Portrait of Melissa Ruiz"
      />
    </div>
    <!-- TODO: add more photos? -->
    <!-- TODO: mobile layout using object-cover/center -->
    <!-- <div class="col-start-7 col-span-4 row-start-7 row-span-6 z-0 pt-12">
      <Picture
        class="object-cover object-center"
        avif={melissa_5_avif}
        webp={melissa_5_webp}
        jpg={melissa_5_jpg}
        alt="Portrait of Melissa Ruiz"
      />
    </div> -->
  </div>
</section>

<style lang="stylus">
.container {
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: repeat(16, 1fr);
}
.container-2 {
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: repeat(16, 1fr);
}
.content-right {
  grid-area: 1 / 1 / -1 / -1;
  @media (min-width: 768px) {
    // @apply text-right;
    grid-area: 1 / 9 / -1 / -1;
  }
}
.content-left {
  grid-area: 1 / 1 / -1 / -1;
  @media (min-width: 768px) {
    grid-area: 2 / 2 / -1 / 11;
  }
}
.picture-right {
  grid-area: 1 / 1 / -1 / -1;
  @media (min-width: 768px) {
    grid-area: 1 / 6 / 10 / 15;
  }
}
.picture-left {
  grid-area: 1 / 1 / -1 / -1;
  @media (min-width: 768px) {
    grid-area: 3 / 1 / -1 / 12;
  }
}
.content-desc {
  @media (min-width: 768px) {
    background: #322B55;
    color: rgb(168, 178, 209);
  }
}
</style>
