<script>
  import WhiteLogoSvg from './WhiteLogoSvg.svelte'
</script>

<footer>
  <nav>
    <div class="dropzone-home">
      <a href="/" class="logo"><WhiteLogoSvg /></a>
    </div>
    <div class="dropzone-js">
      <h3>Dropzone.js</h3>
      <ul>
        <li>
          <a sveltekit:prefetch href="/js/">Overview</a>
        </li>
        <li>
          <a class="secondary" href="https://docs.dropzone.dev">Documentation</a>
        </li>
        <li>
          <a class="secondary" href="https://github.com/dropzone/dropzone">GitHub</a>
        </li>
      </ul>
    </div>
    <div class="dropzone-plus">
      <h3>Dropzone Plus</h3>
      <ul>
        <li>
          <a sveltekit:prefetch href="/plus/">Overview</a>
        </li>
        <li>
          <a class="secondary" href="https://docs-plus.dropzone.dev">Documentation</a>
        </li>
        <li>
          <a class="secondary" href="https://plus.dropzone.dev">Dashboard</a>
        </li>
      </ul>
    </div>
    <div class="social">
      <h3>Social</h3>
      <ul>
        <li>
          <a href="https://twitter.com/dropzonedev">Twitter</a>
        </li>
        <li>
          <a href="https://blog.dropzone.dev">Blog</a>
        </li>
      </ul>
    </div>
    <div class="legal">
      <h3>Legal</h3>
      <ul>
        <li>
          <a sveltekit:prefetch href="/terms-of-service">Terms of Service</a>
        </li>
        <li>
          <a sveltekit:prefetch href="/privacy">Privacy Policy</a>
        </li>
      </ul>
    </div>
  </nav>
</footer>

<style>
  footer :global(svg) {
    height: 2rem;
  }
  footer {
    color: var(--title-color);
    text-align: center;
    margin-top: 9rem;
    padding: 0 var(--calculated-content-padding) 4rem;
    background: linear-gradient(to bottom, transparent, hsl(225deg 100% 70% / 10%));
  }
  a {
    color: inherit;
  }
  .logo {
    display: block;
    margin-bottom: 3rem;
  }

  nav {
    /* max-width: 40rem; */
    margin: 0 auto;
    text-align: left;
    font-size: 0.875rem;
    display: grid;
    gap: 1.5rem;
    line-height: 2;

    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'home home'
      'js plus'
      'social legal';
  }
  @media (min-width: 800px) {
    nav {
      grid-template-columns: repeat(5, 1fr);
      grid-template-areas: 'home js plus social legal';
    }
  }
  .dropzone-home {
    grid-area: home;
  }
  .dropzone-js {
    grid-area: js;
  }
  .dropzone-plus {
    grid-area: plus;
  }
  .social {
    grid-area: social;
  }
  .legal {
    grid-area: legal;
  }

  h3 {
    font-size: 1rem;
    margin: 0;
  }

  li {
    display: block;
  }
</style>
