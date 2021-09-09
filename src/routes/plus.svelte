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
    Use the free and Open Source JavaScript library Dropzone.js to handle drag and dropping of files
    into your form.
  </p>

  <p>
    If you don't want to maintain your own server, simply use{' '}
    <strong>Dropzone Plus</strong>, a hosted solution that will take care of the data for you.
  </p>

  <Actions>
    <StyledLink href="/plus" color="secondary">Get Started</StyledLink>
    <StyledLink href="/js" color="secondary" variant="text">Dropzone.js</StyledLink>
  </Actions>

  <div slot="visual" class="visual" />
</Intro>

c
