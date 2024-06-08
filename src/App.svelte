<script lang="ts">
  import Nav from './lib/Nav.svelte';
  import Hero from './lib/Hero.svelte';
  import Melissa from './lib/Melissa.svelte';
  import Plan from './lib/Plan.svelte';
  import StoryApproach from './lib/StoryApproach.svelte';
  import MarketAnalysis from './lib/MarketAnalysis.svelte';
  import Crew from './lib/Crew.svelte';
  import Budget from './lib/Budget.svelte';
  import Donate from './lib/Donate.svelte';
</script>

<Nav sections={['Story', 'Melissa', 'Plan', 'Crew', 'Budget', 'Donate']} />
<main>
  <Hero />
  <Melissa />
  <Plan />
  <StoryApproach />
  <MarketAnalysis />
  <Crew />
  <Budget />
  <Donate />
</main>

<style>
  main {
    font-family: 'Cardo-Bold' serif;
    font-weight: 800;
    font-feature-settings: 'wdth' 150;
  }
</style>
