<script>
  import Intro from '$lib/Intro.svelte';
  import StyledLink from '$lib/StyledLink.svelte';
  import ContentSection from '$lib/ContentSection.svelte';
  import Heading from '$lib/Heading.svelte';
  import FeatureSet from '$lib/FeatureSet.svelte';
  import Feature from '$lib/Feature.svelte';
  import Actions from '$lib/Actions.svelte';
</script>

<svelte:head>
  <title>Dropzone</title>
</svelte:head>

<Intro title="Tools to build great forms">
  <p>
    Use the free and Open Source JavaScript library <strong>Dropzone.js</strong> to handle drag and dropping
    of files into your form.
  </p>

  <p>
    If you don't want to maintain your own server, simply use{' '}
    <strong>Dropzone Plus</strong>, a hosted solution that will take care of the data for you.
  </p>

  <Actions>
    <StyledLink href="/plus" color="secondary">Dropzone Plus</StyledLink>
    <StyledLink href="/js" color="secondary" variant="text">Dropzone.js</StyledLink>
  </Actions>

  <div slot="visual" class="visual">
    <img src="/images/dropzone-grid.png" alt="Dropzone example" />
  </div>
</Intro>

<ContentSection backgroundColor="white">
  <Heading subtitle="A subscription model for your forms"
    >Let us take care of processing your forms</Heading
  >
  <FeatureSet>
    <Feature title="Inexpensive">
      <p>
        Starting at just $4/month your form data is handled for you. No hidden costs, cancel any
        time.
      </p>
    </Feature>
    <Feature title="Easy setup">
      <p>Get started in just a few minutes. You won't even notice you're doing it.</p>
    </Feature>
    <Feature title="Secure & robust">
      <p>
        Our servers run on kubernetes clusters and scale to your demand. No downtime or slow uploads
        when you experience user spikes.
      </p>
    </Feature>
    <Feature title="Handle files">
      <p>
        Let your users send you files through a form on your website and get a link to them via
        email or access them in the dashboard.
      </p>
    </Feature>
  </FeatureSet>

  <Actions>
    <StyledLink href="https://plus.dropzone.dev/register" color="primary">Create account</StyledLink
    >
    <StyledLink href="/plus" color="primary" variant="text">Learn more</StyledLink>
  </Actions>
</ContentSection>

<ContentSection>
  <Heading subtitle="A JavaScript file upload library with image previews"
    >The drag'n'drop library you've come to love</Heading
  >
  <FeatureSet>
    <Feature title="Completely free">
      <p>
        Dropzone has always been and will always be{' '}
        <strong>open source</strong>, released under the{' '}
        <strong>MIT license</strong>.
      </p>
    </Feature>
    <Feature title="Image previews">
      <p>Show previews of the files being dragged in the browser with no line of code.</p>
    </Feature>
    <Feature title="7 years and going">
      <p>One of the first file drag'n'drop libraries and still maintained.</p>
    </Feature>
    <Feature title="Chunked uploads">
      <p>Upload big files in chunks instead of one big file.</p>
    </Feature>
    <Feature title="Wide browser support">
      <p>
        Tested and used in many different ecosystems and browsers. Even in the browser that shall
        remain unnamed.
      </p>
    </Feature>
    <Feature title="Good looking by default">
      <p>
        Dropzone has been created to look good out of the box. Want a different look? Everything's
        customizable.
      </p>
    </Feature>
    <Feature title="Fully customizable">
      <p>Dropzone is extremely customizable, and the look and feel can be changed completely.</p>
    </Feature>
    <Feature title="Trusted by millions">
      <p>
        With over 15k stars on GitHub, and over 300.000 downloads{' '}
        <strong>a week</strong> on npm, Dropzone is quite popular.
      </p>
    </Feature>

    <Feature title="Inexpensive">
      <p>
        Starting at just $4/month your form data is handled for you. No hidden costs, cancel any
        time.
      </p>
    </Feature>
    <Feature title="Easy setup">
      <p>Get started in just a few minutes. You won't even notice you're doing it.</p>
    </Feature>
    <Feature title="Secure & robust">
      <p>
        Our servers run on kubernetes clusters and scale to your demand. No downtime or slow uploads
        when you experience user spikes.
      </p>
    </Feature>
    <Feature title="Handle files">
      <p>Let your users send you files through a form on your website and get them via email.</p>
    </Feature>
  </FeatureSet>

  <Actions>
    <StyledLink href="/js" color="primary">Learn more</StyledLink>
    <StyledLink href="https://docs.dropzone.dev" color="primary" variant="text"
      >Documentation</StyledLink
    >
  </Actions>
</ContentSection>

<style>
  .visual {
    background: white;
    padding: 2.5rem;
    border-radius: 3rem;
    box-shadow: 0 0.625rem 1.25rem rgba(0, 0, 0, 0.1);
  }
  .visual img {
    max-width: 100%;
    width: 270px;
    display: block;
  }
</style>
