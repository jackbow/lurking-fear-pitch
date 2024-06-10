<script lang="ts">
  import hero_jpg from '~/assets/images/hero.jpg';
  import vp9 from '~/assets/videos/melissa_2_vp9.webm';
</script>

<video poster={hero_jpg} autoplay muted loop class="h-screen w-screen object-cover object-center">
  <source src={vp9} type="video/webm" />
</video>
<div
  class="text-white absolute top-0 text-center left-0 w-full h-screen bg-black bg-opacity-30 flex flex-col justify-center items-center gap-4"
>
  <h1 class="josefin-sans">LURKING FEAR</h1>
  <h2 class="opacity-70 cardo">THE MELISSA RUIZ STORY</h2>
</div>
