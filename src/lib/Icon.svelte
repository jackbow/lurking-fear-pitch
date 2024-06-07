<script lang="ts">
  const {
    name,
    width = 24,
    height = 24,
    strokeWidth = 2,
    class: classes = '',
  }: { name: string; width?: number; height?: number; strokeWidth?: number; class?: string } = $props();
  const icons: { [key: string]: (width: number, height: number, strokeWidth: number) => string } = {
    heart: (width: number, height: number, strokeWidth: number) =>
      `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="${width}" height="${height}" viewBox="0 0 24 24" stroke-width="${strokeWidth}" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path></svg>`,
    'external-link': (width: number, height: number, strokeWidth: number) =>
      `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="${width}" height="${height}" viewBox="0 0 24 24" stroke-width="${strokeWidth}" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"></path><line x1="10" y1="14" x2="20" y2="4"></line><polyline points="15 4 20 4 20 9"></polyline></svg>`,
    link: (width: number, height: number, strokeWidth: number) =>
      `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link" width="${width}" height="${height}" viewBox="0 0 24 24" stroke-width="${strokeWidth}" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 15l6 -6" /><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" /><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" /></svg>`,
    menu: (width: number, height: number, strokeWidth: number) =>
      `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="${width}" height="${height}" viewBox="0 0 24 24" stroke-width="${strokeWidth}" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>`,
    close: (width: number, height: number, strokeWidth: number) =>
      `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="${width}" height="${height}" viewBox="0 0 24 24" stroke-width="${strokeWidth}" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>`,
  };
</script>

<span class={classes}>
  {@html icons[name](width, height, strokeWidth)}
</span>
