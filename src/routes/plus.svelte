<script>
  import Intro from '$lib/Intro.svelte';
  import StyledLink from '$lib/StyledLink.svelte';
  import ContentSection from '$lib/ContentSection.svelte';
  import MainFeatures from '$lib/MainFeatures.svelte';
  import MainFeature from '$lib/MainFeature.svelte';
  import Heading from '$lib/Heading.svelte';
  import Actions from '$lib/Actions.svelte';
</script>

<svelte:head>
  <title>Dropzone Plus</title>
</svelte:head>

<Intro title="We handle your forms">
  <p>
    Instead of writing your own server logic to handle the submitted data of your forms, use <strong
      >Dropzone Plus</strong
    > to handle it for you.
  </p>

  <p>
    With a few clicks you'll you have a form endpoint that accepts your data and stores it securily
    — even files.
  </p>

  <Actions>
    <StyledLink href="https://plus.dropzone.dev" color="secondary">Create account</StyledLink>
    <StyledLink href="https://docs-plus.dropzone.dev" color="secondary" variant="text"
      >Documentation</StyledLink
    >
  </Actions>

  <div slot="visual" class="visual">
    <img src="/images/dashboard.png" alt="Screenshot of dashboard" />
  </div>
</Intro>

<ContentSection backgroundColor="white">
  <MainFeatures>
    <MainFeature title="Works with any form">
      <img slot="icon" src="/images/icons/github.svg" alt="GitHub" />
      <p>
        Whether you already have a form that's ready to go, or you're just starting building one,
        Dropzone Plus will handle it.
      </p>

      <p>
        It works well with <a href="/js">Dropzone.js</a> but you can use any other JavaScript library
        to submit your files.
      </p>
      <StyledLink slot="actions" href="https://docs-plus.dropzone.dev/how-to-submit-data"
        >Read the docs</StyledLink
      >
    </MainFeature>
    <MainFeature title="Get started with just $4/month">
      <div slot="icon">
        <img src="/images/icons/stackoverflow.svg" alt="Stackoverflow" />
      </div>
      <p>
        With only $4/month you'll be able to send your data to Dropzone Plus — no hidden fees, no
        surprises, no Dropzone branding.
      </p>
      <p>Cancel any time and upgrade if you need to handle more than 100 submissions/month.</p>
      <StyledLink slot="actions" href="https://plus.dropzone.dev">Create Account</StyledLink>
    </MainFeature>
    <MainFeature title="Documentation">
      <img slot="icon" src="/images/icons/gitbook.svg" alt="GitBook" />
      <p>
        Head on over to our documentation to read more about how <strong>Dropzone Plus</strong> works
        and how you integrate it on your site.
      </p>
      <p>
        We have examples on how to use it with simple static HTML forms and with more complex
        JavaScript implementations.
      </p>
      <StyledLink slot="actions" href="https://docs-plus.dropzone.dev">Documentation</StyledLink>
    </MainFeature>
  </MainFeatures>
</ContentSection>

<style>
  .visual img {
    width: 100%;
  }
</style>
