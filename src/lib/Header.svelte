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
  let showHeader = $state(true);
  let y = $state(0);
  let lastY = $state(0);
  let navMenuOpen = $state(false);

  const toggleNavMenu = () => {
    navMenuOpen = !navMenuOpen;
    window.document.body.classList.toggle('noscroll');
  };

  const updateClass = (y: number): 'show' | 'hide' | boolean => {
    const dy = lastY - y;
    lastY = y;
    if (y < offset) {
      return 'show';
    } else if (Math.abs(dy) <= tolerance) {
      return showHeader;
    } else if (dy < 0) {
      return 'hide';
    } else {
      return 'show';
    }
  };

  $effect(() => {
    showHeader = updateClass(y) === 'show';
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
  class="fixed transition-all duration-300 top-0 w-2/3 h-full z-20 flex flex-col items-center justify-center"
  class:open={navMenuOpen}
>
  {#each sections as section}
    <div class="font-sans flex-col flex items-center text-md">
      <a
        onclick={() => {
          toggleNavMenu();
        }}
        href={`#${section.toLowerCase()}`}
        class="hover:text-gray-400 transition duration-300"
      >
        <p class="inline text-white text-lg">{section}</p>
      </a>
    </div>
  {/each}
</div>
<div
  id="header"
  class="-translate-y-full transform transition-transform duration-300 flex items-center justify-center gap-4 fixed top-0 w-full z-20"
  class:show={showHeader}
  class:at-top={y > 50}
  class:nav-closed={!navMenuOpen}
>
  {#if width < 768}
    {#key navMenuOpen}
      <button
        aria-label="open menu"
        onclick={() => {
          toggleNavMenu();
        }}
      >
        <Icon name={navMenuOpen ? 'close' : 'menu'} class="text-gray-400 text-5xl z-30 cursor-pointer right-0" />
      </button>
    {/key}
  {:else}
    {#each sections as section}
      <a href={`#${section.toLowerCase()}`} class="text-xs font-sans py-2 hover:text-gray-400 transition duration-300">
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
      @apply bg-black bg-opacity-50;
      /* @apply backdrop-blur-lg backdrop-filter bg-black bg-opacity-10; */
      &.at-top {
        @apply shadow-lg;
      }
    }
  }
  #blur-filter {
    left: -100%;
    &.open {
      @apply: backdrop-filter backdrop-blur-lg left-0;
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
