<script lang="ts">
  import Icon from './Icon.svelte';
  let {
    sections,
    offset = 50,
    tolerance = 0,
  }: {
    sections: string[];
    offset?: number;
    tolerance?: number;
  } = $props();

  let width: number = $state(0);
  let showNav = $state(true);
  let y = $state(0);
  let lastY = $state(0);
  let navMenuOpen = $state(false);

  const toggleNavMenu = () => {
    navMenuOpen = !navMenuOpen;
    window.document.body.classList.toggle('noscroll');
  };

  $effect(() => {
    const dy = lastY - y;
    lastY = y;
    if (y < offset) {
      showNav = true;
    } else if (Math.abs(dy) <= tolerance) {
      return;
    } else if (dy < 0) {
      showNav = false;
    } else {
      showNav = true;
    }
  });
</script>

<svelte:window bind:scrollY={y} bind:innerWidth={width} />
<button
  id="blur-filter"
  class="z-10 h-full w-1/3 fixed transition-all duration-300"
  class:open={navMenuOpen}
  onclick={() => {
    toggleNavMenu();
  }}
></button>
<div
  id="nav-menu"
  class="fixed transition-all duration-300 top-0 w-2/3 h-full z-20 flex flex-col items-center justify-center bg-black opacity-90"
  class:open={navMenuOpen}
>
  {#each sections as section}
    <div class="font-sans flex-col flex items-center text-md">
      <a
        onclick={() => {
          toggleNavMenu();
        }}
        href={`#${section.toLowerCase()}`}
        class="hover:text-gray-200 transition duration-300"
      >
        <p class="inline text-white text-lg">{section}</p>
      </a>
    </div>
  {/each}
</div>
<div
  id="header"
  class="-translate-y-full transform transition-transform duration-300 flex items-center justify-center gap-4 fixed top-0 w-full z-20"
  class:show={showNav || width < 768}
  class:at-top={y > 50}
  class:nav-closed={!navMenuOpen}
>
  {#if width < 768}
    {#key navMenuOpen}
      <spacer class="flex-grow"></spacer>
      <button
        aria-label="open menu"
        onclick={() => {
          toggleNavMenu();
        }}
        class="bg-black bg-opacity-80 p-1 rounded transition duration-3"
      >
        <Icon
          name={navMenuOpen ? 'close' : 'menu'}
          height={36}
          width={36}
          class="text-white z-30 cursor-pointer right-0"
        />
      </button>
    {/key}
  {:else}
    {#each sections as section}
      <a href={`#${section.toLowerCase()}`} class="text-xs font-sans py-2 hover:text-gray-200 transition duration-300">
        <p class="inline text-white">{section}</p>
      </a>
    {/each}
    <spacer></spacer>
  {/if}
</div>

<style lang="stylus">
  :global(body.noscroll) {
    overflow: hidden;
  }
  #header {
    & > :global(*) {
      @apply m-3;
    }
    &.show {
      @apply translate-y-0;
    }
    &.nav-closed {
      @media (min-width: 768px) {
        @apply bg-black bg-opacity-60;
        &.at-top {
          @apply shadow-lg;
        }
      }
    }
  }
  #blur-filter {
    left: -100%;
    &.open {
      /* @apply bg-black bg-opacity-50; */
    }
  }
  #nav-menu {
    right: -100%;
    /* background-color: #351e40; */
    &.open {
      @apply right-0;
    }
    & > :global(*) {
      @apply m-7;
    }
  }
</style>
