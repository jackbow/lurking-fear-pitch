<script lang="ts">
  import Header from './lib/Header.svelte';
  import Hero from './lib/Hero.svelte';
  import Melissa from './lib/Melissa.svelte';
  import Plan from './lib/Plan.svelte';
  import StoryApproach from './lib/StoryApproach.svelte';
  import MarketAnalysis from './lib/MarketAnalysis.svelte';
</script>

<Header />
<main>
  <Hero />
  <Melissa />
  <Plan />
  <StoryApproach />
  <MarketAnalysis />
</main>

<style>
  div {
    font-family: 'Cardo-Bold' serif;
    font-weight: 800;
    font-feature-settings: 'wdth' 150;
  }
</style>
