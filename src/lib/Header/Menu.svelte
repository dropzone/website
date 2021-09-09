<script type="ts">
  import IoLogoGithub from 'svelte-icons/io/IoLogoGithub.svelte';
  import IoMdBook from 'svelte-icons/io/IoMdBook.svelte';
  import { page } from '$app/stores';
  $: section = $page.path.split('/')[1];

  export let mobile = false;
</script>

<nav class:mobile>
  <ul>
    <li>
      <a sveltekit:prefetch href="/js" class:active={section === 'js'} class="with-docs"
        >Dropzone.js

        <a href="http://docs.dropzone.dev" target="_blank" rel="nofollow" class="docs">
          <span class="icon"><IoMdBook /></span>
        </a>
      </a>
    </li>
    <li>
      <a sveltekit:prefetch href="/plus" class:active={section === 'plus'} class="with-docs"
        >Dropzone Plus

        <a href="http://docs-plus.dropzone.dev" target="_blank" rel="nofollow" class="docs">
          <span class="icon"><IoMdBook /></span>
        </a>
      </a>
    </li>
    <li>
      <a href="https://github.com/dropzone/dropzone" target="_blank" rel="nofollow">
        <span class="icon"><IoLogoGithub /></span>
      </a>
    </li>
  </ul>
</nav>

<style>
  :global(:root) {
    --menu-color: white;
    --menu-hover-bg-color: rgba(255, 255, 255, 0.1);
    --menu-border-color: white;
  }
  nav {
    color: var(--menu-color);
  }
  ul {
    display: flex;
    align-items: center;
    margin: 0 -1.5rem;
  }

  nav.mobile ul {
    flex-direction: column;
  }
  li {
    margin: 0 1.5rem;
  }

  nav.mobile li {
    margin: 1.5rem 0;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 3px solid transparent;
    height: 2.25rem;
    line-height: calc(2.25rem - 6px);
    border-radius: 3rem;
    padding: 0rem 1rem;
    white-space: nowrap;
  }
  a.with-docs {
    padding-right: 0;
  }
  a:hover {
    background: var(--menu-hover-bg-color);
  }
  a.active {
    border-color: var(--menu-border-color);
  }
  a.active a.docs {
    border-left: 1px solid var(--menu-border-color);
  }
  a.docs {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    padding-left: 0.25rem;
    padding-right: 0rem;
    margin-left: 0.5rem;
  }

  .icon {
    width: 1.5em;
    height: 1.5em;
    margin-right: 0.4em;
  }
</style>
