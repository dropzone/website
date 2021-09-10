<script>
  import Intro from '$lib/Intro.svelte';
  import StyledLink from '$lib/StyledLink.svelte';
  import ContentSection from '$lib/ContentSection.svelte';
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

  <div slot="visual" class="visual" />
</Intro>
