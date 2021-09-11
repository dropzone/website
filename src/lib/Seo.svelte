<script>
  import { seo } from '$lib/stores';
</script>

<svelte:head>
  <title>{$seo.title}</title>
  <meta name="description" content={$seo.description} />

  <meta property="og:title" content={$seo.title} />
  <meta property="og:description" content={$seo.description} />
  <meta property="og:image" content="/images/opengraph.jpg" />

  <meta
    name="keywords"
    value="javascript dragndrop drag and drop drag'n'drop file upload image preview"
  />
</svelte:head>
