<script lang="ts">
  import hero_webp from '~/assets/images/hero.webp';
  import hero_avif from '~/assets/images/hero.avif';
  import hero_jpg from '~/assets/images/hero.jpg';
  import Header from './lib/Header.svelte';
</script>

<Header />
<main>
  <picture>
    <source type="image/avif" srcset={hero_avif} />
    <source type="image/webp" srcset={hero_webp} />
    <img class="h-screen w-screen object-cover object-center" alt="The project logo" src={hero_jpg} />
  </picture>
  <div
    class="text-white absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 pl-20 pt-40 font-extrabold space-y-0"
  >
    <h1 class="text-9xl">LURKING FEAR</h1>
    <h2 class="text-4xl opacity-60">THE MELISSA RUIZ STORY</h2>
  </div>
</main>

<style>
  div {
    font-family: 'Cardo-Bold' serif;
    font-weight: 800;
    font-feature-settings: 'wdth' 150;
  }
</style>
