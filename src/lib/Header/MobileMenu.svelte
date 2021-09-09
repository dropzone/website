<script>
  import IoMdMenu from 'svelte-icons/io/IoMdMenu.svelte';
  import IoMdClose from 'svelte-icons/io/IoMdClose.svelte';
  import Menu from './Menu.svelte';

  let isOpen = false;

  function toggle() {
    isOpen = !isOpen;
  }
</script>

<button class="toggle" on:click={toggle}><IoMdMenu /></button>

<nav class:open={isOpen}>
  <button class="close" on:click={() => (isOpen = false)}><IoMdClose /></button>

  <Menu
    mobile
    --menu-color="black"
    --menu-hover-bg-color="rgba(0, 0, 0, 0.1)"
    --menu-border-color="black"
  />
</nav>

<style>
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
  }
  nav {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
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
    top: 3rem;
    right: 3rem;
  }
</style>
