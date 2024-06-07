<script lang="ts">
  import hero_webp from '~/assets/images/hero.webp';
  import hero_avif from '~/assets/images/hero.avif';
  import hero_jpg from '~/assets/images/hero.jpg';
  import Picture from './Picture.svelte';
</script>

<Picture
  class="h-screen w-screen object-cover object-center"
  avif={hero_avif}
  webp={hero_webp}
  jpg={hero_jpg}
  alt="Melissa Ruiz climbing, shot from above"
  loading="eager"
  fetchpriority="high"
/>
<div class="text-white absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 pl-20 pt-40 font-extrabold space-y-0">
  <h1 class="text-9xl">LURKING FEAR</h1>
  <h2 class="text-4xl opacity-60">THE MELISSA RUIZ STORY</h2>
</div>
