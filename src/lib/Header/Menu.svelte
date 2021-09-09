<script type="ts">
  import IoLogoGithub from 'svelte-icons/io/IoLogoGithub.svelte';
  import IoMdBook from 'svelte-icons/io/IoMdBook.svelte';
  import { page } from '$app/stores';
  $: section = $page.path.split('/')[1];
</script>

<nav>
  <ul>
    <li>
      <a sveltekit:prefetch href="/js" class:active={section === 'js'}>Dropzone.js</a>
    </li>
    <li>
      <a sveltekit:prefetch href="/plus" class:active={section === 'plus'}>Dropzone Plus</a>
    </li>
    <li>|</li>
    <li>
      <a href="http://docs-plus.dropzone.dev" target="_blank" rel="nofollow">
        <span class="icon"><IoMdBook /></span>
        Documentation
      </a>
    </li>
    <li>
      <a href="https://github.com/dropzone/dropzone" target="_blank" rel="nofollow">
        <span class="icon"><IoLogoGithub /></span>
        GitHub
      </a>
    </li>
  </ul>
</nav>

<style>
  ul {
    display: flex;
    align-items: center;
    margin: 0 -1.5rem;
  }
  li {
    margin: 0 1.5rem;
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
  a:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  a.active {
    border-color: white;
  }

  .icon {
    width: 1.5em;
    height: 1.5em;
    margin-right: 0.4em;
  }
</style>
