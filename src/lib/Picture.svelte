<script lang="ts">
  const {
    avif,
    webp,
    jpg,
    fetchpriority = 'auto',
    loading = 'lazy',
    alt,
    class: classes = 'object-cover object-center',
  }: {
    avif: string;
    webp: string;
    jpg: string;
    fetchpriority?: 'auto' | 'high' | 'low' | null | undefined;
    loading?: 'lazy' | 'eager' | null | undefined;
    alt: string;
    class?: string;
  } = $props();
</script>

<picture>
  <source type="image/avif" srcset={avif} />
  <source type="image/webp" srcset={webp} />
  <img {fetchpriority} {loading} class={classes} {alt} src={jpg} />
</picture>
