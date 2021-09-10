<script type="ts">
  import { page } from '$app/stores';
  import { onDestroy } from 'svelte';
  import IoMdClose from 'svelte-icons/io/IoMdClose.svelte';
  import IoMdMenu from 'svelte-icons/io/IoMdMenu.svelte';
  import InlineSvg from 'svelte-inline-svg';
  import Menu from './Menu.svelte';

  let isOpen = false;

  function toggle() {
    isOpen = !isOpen;
  }

  let unsubscribe = page.subscribe(() => (isOpen = false));
  onDestroy(unsubscribe);
</script>

<div class="mobile-menu">
  <a href="/"><InlineSvg src="/images/white_logo.svg" /></a>

  <button class="toggle" on:click={toggle}><IoMdMenu /></button>
</div>

<nav class:open={isOpen}>
  <button class="close" on:click={() => (isOpen = false)}><IoMdClose /></button>

  <Menu
    mobile
    --menu-color="black"
    --menu-hover-bg-color="rgba(0, 0, 0, 0.1)"
    --menu-border-color="black"
    --button-contained-background="black"
    --button-contained-background-hover="rgba(0, 0, 0, 0.8)"
    --color="black"
  />
</nav>

<style>
  a {
    color: inherit;
  }
  .mobile-menu {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: var(--menu-item-height);
  }
  .mobile-menu a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  button {
    display: inline-block;
    padding: 0;
    outline: none;
    border: none;
    background: none;
    color: white;
    cursor: pointer;
  }
  .toggle {
    height: 1.5rem;
    width: 1.5rem;
  }
  nav {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 3rem;
    background: white;
    justify-content: center;
    align-items: center;
  }
  nav.open {
    display: flex;
    z-index: 10000;
  }
  .close {
    color: black;
    height: 3rem;
    width: 3rem;
    position: absolute;
    top: 1.5rem;
    right: 2.25rem;
  }
</style>
