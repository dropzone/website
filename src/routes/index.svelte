<script>
  import Intro from '$lib/Intro.svelte';
  import StyledLink from '$lib/StyledLink.svelte';
  import ContentSection from '$lib/ContentSection.svelte';
  import Heading from '$lib/Heading.svelte';
</script>

<Intro title="Tools to build great forms">
  <p>
    Use the free and Open Source JavaScript library Dropzone.js to handle drag and dropping of files
    into your form.
  </p>

  <p>
    If you don't want to maintain your own server, simply use{' '}
    <strong>Dropzone Plus</strong>, a hosted solution that will take care of the data for you.
  </p>

  <div class="actions">
    <StyledLink href="/plus" color="secondary">Get Started</StyledLink>
    <StyledLink href="/js" color="secondary" variant="text">Dropzone.js</StyledLink>
  </div>

  <div slot="visual" class="visual">
    <img src="/images/dropzone-grid.png" alt="Dropzone example" />
  </div>
</Intro>

<ContentSection backgroundColor="white">
  <Heading subtitle="A subscription model for your forms"
    >Let us take care of processing your forms</Heading
  >
</ContentSection>

<style>
  .actions {
    margin: 1.5rem -0.2rem 0;
  }
  .actions :global(a) {
    margin: 0 0.2rem;
    font-weight: bold;
  }

  .visual {
    background: white;
    padding: 2.5rem;
    border-radius: 3rem;
    box-shadow: 0 0.625rem 1.25rem rgba(0, 0, 0, 0.1);
  }
  .visual img {
    width: 270px;
    height: 270px;
    display: block;
  }
</style>
