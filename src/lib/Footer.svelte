<script>
  import InlineSvg from 'svelte-inline-svg';
</script>

<footer>
  <a href="/" class="logo"><InlineSvg src="/images/white_logo.svg" /></a>

  <ul>
    <li>
      <a sveltekit:prefetch href="/">Home</a>
    </li>
    <li>
      <a sveltekit:prefetch href="/js">Dropzone.js</a>
    </li>
    <li>
      <a sveltekit:prefetch href="/plus">Dropzone Plus</a>
    </li>
    <li>
      <a href="https://docs-plus.dropzone.dev">Dropzone Plus Docs</a>
    </li>
    <li>
      <a href="https://docs.dropzone.dev">Dropzone.js Docs</a>
    </li>
    <li>
      <a href="https://github.com/dropzone/dropzone">GitHub</a>
    </li>
    <li>
      <a href="mailhref:support@dropzone.dev">Support</a>
    </li>
    <li>
      <a sveltekit:prefetch href="/terms-of-service">Terms of Service</a>
    </li>
    <li>
      <a sveltekit:prefetch href="/privacy">Privacy Policy</a>
    </li>
  </ul>
</footer>

<style>
  footer {
    color: var(--title-color);
    text-align: center;
    margin-top: 24rem;
    padding: 0 1.5rem 9rem;
    background: linear-gradient(to bottom, transparent, hsl(225deg 100% 70% / 10%));
  }
  .logo {
    display: block;
    margin-bottom: 1.5rem;
  }

  li {
    font-weight: bold;
    font-size: 0.875rem;
    display: inline-block;
  }

  li:not(:last-of-type):after {
    content: '|';
    margin: 0 0.5em;
  }
</style>
