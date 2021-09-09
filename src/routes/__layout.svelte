<script lang="ts">
  import Header from '$lib/Header/index.svelte';
  import '../style/reset.css';
  import '../style/fonts.css';
  import '@fontsource/heebo/400.css';
  import '@fontsource/heebo/700.css';

  import '../style/app.css';
  import Footer from '$lib/Footer.svelte';

  import { page } from '$app/stores';

  let section;
  let headerImage;
  $: {
    section = $page.path.split('/')[1];

    if (['js', 'plus'].includes(section)) headerImage = `url(/images/backdrops/${section}.jpg)`;
    else headerImage = null;
  }
</script>

<Header --header-backdrop-image={headerImage} />

<main class:white-title={section == 'js'}>
  <slot />
</main>

<Footer />

<style>
  main {
    position: relative;
    flex: 1;
  }
  main.white-title {
    --intro-title-color: white;
  }
</style>
