<script>
  import Intro from '$lib/Intro.svelte';
  import StyledLink from '$lib/StyledLink.svelte';
  import ContentSection from '$lib/ContentSection.svelte';
  import Heading from '$lib/Heading.svelte';

  import { onDestroy, onMount } from 'svelte';
  import { headerImage, titleColor } from '$lib/stores';

  onMount(() => {
    headerImage.set('js.jpg');
    titleColor.set('white');
  });
  onDestroy(() => {
    headerImage.set(null);
    titleColor.set(null);
  });
</script>

<svelte:head>
  <title>Dropzone.js</title>
</svelte:head>

<Intro title="File uploads made easy">
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

  <div slot="visual" class="visual" />
</Intro>
