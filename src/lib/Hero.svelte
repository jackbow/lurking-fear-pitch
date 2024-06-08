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
<div
  class="text-white absolute top-0 text-center left-0 w-full h-screen bg-black bg-opacity-30 flex flex-col justify-center items-center gap-4"
>
  <h1 class="josefin-sans">LURKING FEAR</h1>
  <h2 class="opacity-70 cardo">THE MELISSA RUIZ STORY</h2>
</div>
