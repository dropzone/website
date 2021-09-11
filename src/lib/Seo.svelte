<script>
  export let title = 'Dropzone';
  export let description = 'Tools to build great forms.';
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />

  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content="/images/opengraph.jpg" />

  <meta
    name="keywords"
    value="javascript dragndrop drag and drop drag'n'drop file upload image preview"
  />
</svelte:head>
