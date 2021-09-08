<script lang="ts">
  import Header from '$lib/Header/index.svelte';
  import '../style/reset.css';
  import '../style/fonts.css';
  import '@fontsource/heebo/400.css';
  import '@fontsource/heebo/700.css';

  import '../style/app.css';
  import Footer from '$lib/Footer.svelte';
</script>

<Header />

<main>
  <slot />
</main>

<Footer />

<style>
  main {
    position: relative;
    flex: 1;
  }

  footer {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 40px 0;
    }
  }
</style>
