<script type="ts">
  import StyledLink from '$lib/StyledLink.svelte';
  import Menu from './Menu.svelte';
  import InlineSvg from 'svelte-inline-svg';
</script>

<div class="backdrop" />

<header>
  <a href="/"><InlineSvg src="/images/white_logo.svg" /></a>
  <Menu />
  <StyledLink href="https://plus.dropzone.dev" variant="contained">Sign in</StyledLink>
</header>

<style>
  header {
    position: relative;
    padding-left: var(--calculated-content-padding);
    padding-right: var(--calculated-content-padding);
    height: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: var(--button-font-size);
    font-family: var(--font-header);
    font-weight: 600;
    color: white;

    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0));
  }

  .backdrop {
    --height: 18rem;
    background-image: var(--header-backdrop-image);
    background-position: var(--header-backdrop-position);
    background-size: cover;
    transform: skew(0deg, var(--backdrop-skew-rotation));
    position: absolute;
    bottom: calc(100% - var(--height));
    left: 0;
    width: 100%;
    height: calc(var(--height) + 50vw * var(--backdrop-skew-tan));
  }
</style>
