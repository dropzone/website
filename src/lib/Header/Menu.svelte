<script type="ts">
  import { page } from '$app/stores'
  import StyledLink from '$lib/StyledLink.svelte'
  import WhiteLogoSvg from '$lib/WhiteLogoSvg.svelte'
  import LogoMedium from 'svelte-icons/fa/FaMedium.svelte'
  import LogoGithub from 'svelte-icons/io/IoLogoGithub.svelte'
  import LogoTwitter from 'svelte-icons/io/IoLogoTwitter.svelte'
  import IoMdBook from 'svelte-icons/io/IoMdBook.svelte'
  $: section = $page.path.split('/')[1]

  export let mobile = false
</script>

<nav class:mobile class:desktop={!mobile}>
  <a class="link" href="/"><WhiteLogoSvg /></a>

  <div class="menu__main">
    <span class="link link--pill link--with-docs" class:link--active={section === 'js'}>
      <a sveltekit:prefetch href="/js/" class="link__text">Dropzone.js </a>
      <a href="http://docs.dropzone.dev" target="_blank" rel="nofollow" class="link__docs">
        <span class="link__icon"><IoMdBook /></span>
      </a>
    </span>
    <span class="link link--pill link--with-docs" class:link--active={section === 'plus'}>
      <a sveltekit:prefetch href="/plus/" class="link__text">Dropzone Plus </a>
      <a href="http://docs-plus.dropzone.dev" target="_blank" rel="nofollow" class="link__docs">
        <span class="link__icon"><IoMdBook /></span>
      </a>
    </span>
  </div>

  <div class="menu__actions">
    <a
      class="link link--pill link--icon"
      href="https://github.com/dropzone/dropzone"
      target="_blank"
      rel="nofollow"
    >
      <span class="link__icon"><LogoGithub /></span>
    </a>
    <a
      class="link link--pill link--icon"
      href="https://twitter.com/dropzonedev"
      target="_blank"
      rel="nofollow"
    >
      <span class="link__icon"><LogoTwitter /></span>
    </a>
    <a
      class="link link--pill link--icon"
      href="https://blog.dropzone.dev"
      target="_blank"
      rel="nofollow"
    >
      <span class="link__icon"><LogoMedium /></span>
    </a>
    <span /><!-- spacer -->
    <StyledLink href="https://plus.dropzone.dev" variant="contained">Sign in</StyledLink>
  </div>
</nav>

<style>
  :global(:root) {
    --menu-color: white;
    --menu-hover-bg-color: rgba(255, 255, 255, 0.1);
    --menu-border-color: white;
  }
  nav {
    color: var(--menu-color);
    --border-width: 3px;
    --icon-size: 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav.desktop {
    margin: 0 -1rem;
    height: var(--menu-item-height);
  }
  nav.desktop > * {
    margin: 0 1rem;
  }
  nav.mobile {
    flex-direction: column;
  }
  nav.mobile > * {
    margin: 2rem 0;
  }

  a {
    color: inherit;
  }

  /* All links in the menu */
  .link {
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--menu-item-height);
    line-height: calc(var(--menu-item-height) - var(--border-width) * 2);
    white-space: nowrap;
  }
  .link--pill {
    border: var(--border-width) solid transparent;
    border-radius: 3rem;
    padding: 0rem 1rem;
  }
  .link--pill:hover,
  .link__docs:hover {
    background: var(--menu-hover-bg-color);
  }
  .link--pill.link--active {
    border-color: var(--menu-border-color);
  }

  .link--icon {
    padding: 0 calc((var(--menu-item-height) - var(--icon-size)) / 2 - var(--border-width));
  }
  .link--icon:not(:last-child) {
    margin-right: 0.5rem;
  }
  .link--with-docs {
    padding-right: 0;
  }
  .link__docs {
    border-top-right-radius: 3rem;
    border-bottom-right-radius: 3rem;
    padding-left: 0.25rem;
    padding-right: 0.75rem;
    margin-left: 0.5rem;
    margin-right: calc(0px - var(--border-width));
    height: calc(100% + var(--border-width) * 2);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: calc(0px - var(--border-width));
    margin-bottom: calc(0px - var(--border-width));
  }

  .link__icon {
    display: block;
    width: var(--icon-size);
    height: var(--icon-size);
  }

  .menu__main {
    display: flex;
  }
  .menu__main > :not(:last-child) {
    margin-right: 1.5rem;
  }
  nav.mobile .menu__main {
    flex-direction: column;
    align-items: center;
  }
  nav.mobile .menu__main > * {
    margin: 1rem 0;
  }

  .menu__actions {
    display: flex;
    margin: 0 -0.5rem;
  }
  .menu__actions > * {
    margin: 0 0.5rem;
  }
</style>
