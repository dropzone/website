<script type="ts">
  import Menu from './Menu.svelte';
  import MobileMenu from './MobileMenu.svelte';
</script>

<div class="backdrop" />

<header>
  <div class="menu">
    <Menu />
  </div>
  <div class="menu--mobile">
    <MobileMenu />
  </div>
</header>

<style>
  header {
    position: relative;
    padding-left: var(--calculated-content-padding);
    padding-right: var(--calculated-content-padding);
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;

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

  .menu,
  .menu--mobile {
    width: 100%;
  }

  @media (max-width: 900px) {
    .menu {
      display: none;
    }
    .menu--mobile {
      display: block;
    }
  }
  @media (min-width: 900px) {
    .menu {
      display: block;
    }
    .menu--mobile {
      display: none;
    }
  }
</style>
