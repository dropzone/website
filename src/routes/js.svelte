<script>
  import Intro from '$lib/Intro.svelte';
  import StyledLink from '$lib/StyledLink.svelte';
  import ContentSection from '$lib/ContentSection.svelte';
  import Heading from '$lib/Heading.svelte';
  import Actions from '$lib/Actions.svelte';
  import IoMdAdd from 'svelte-icons/io/IoMdAdd.svelte';
  import Dropzone from '$lib/Dropzone.svelte';
  import MainFeatures from '$lib/MainFeatures.svelte';
  import MainFeature from '$lib/MainFeature.svelte';
</script>

<svelte:head>
  <title>Dropzone.js</title>
</svelte:head>

<Intro title="File uploads made easy">
  <p>
    <strong>Dropzone.js</strong> is one of the most popular drag and drop JavaScript libraries. It
    is
    <strong>free</strong>, <strong>fully open source</strong>, and makes it easy for you to handle
    dropped files on your website.
  </p>

  <p>It's meant to look good by default, and is highly customizable.</p>

  <Actions>
    <StyledLink href="https://docs.dropzone.dev/" color="secondary">Documentation</StyledLink>
    <StyledLink
      href="https://github.com/dropzone/dropzone/releases/latest/download/dist.zip"
      color="secondary"
      variant="text">Download</StyledLink
    >
  </Actions>

  <Dropzone slot="visual" />
</Intro>
<ContentSection backgroundColor="white">
  <MainFeatures>
    <MainFeature title="Source code on GitHub">
      <img slot="icon" src="/images/icons/github.svg" alt="GitHub" />
      <p>
        You can get all the source code on GitHub, as well as installation instructions. If you
        encounter an issue with this library, this is the place to create an issue.
      </p>
      <StyledLink slot="actions" href="https://github.com/dropzone/dropzone">GitHub</StyledLink>
    </MainFeature>
    <MainFeature title="Documentation">
      <img slot="icon" src="/images/icons/gitbook.svg" alt="GitBook" />
      <p>
        All the documentation about Dropzone, and the multiple ways to configure and customise it,
        can be found on GitBook.
      </p>
      <StyledLink slot="actions" href="https://docs.dropzone.dev">Docs</StyledLink>
    </MainFeature>
    <MainFeature title="Questions and Support">
      <div slot="icon">
        <img src="/images/icons/stackoverflow.svg" alt="Stackoverflow" />
        <span class="plus-icon-container"><IoMdAdd /></span>
        <img src="/images/icons/github.svg" alt="GitHub" />
      </div>
      <p>
        If you need help, there are{' '}
        <a href="https://github.com/dropzone/dropzone/discussions"> GitHub Discussions </a>{' '}
        and Stackoverflow. Use the tag dropzonejs and there'll be plenty of people helping you out.
      </p>
      <StyledLink slot="actions" href="https://stackoverflow.com/questions/tagged/dropzone.js"
        >Stack Overflow</StyledLink
      >
    </MainFeature>
  </MainFeatures>
</ContentSection>

<style>
  .plus-icon-container {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    margin: 0 1rem;
    width: 2rem;
  }
</style>
