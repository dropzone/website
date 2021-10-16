<script>
  import Actions from '$lib/Actions.svelte'
  import ContentSection from '$lib/ContentSection.svelte'
  import Intro from '$lib/Intro.svelte'
  import MainFeature from '$lib/MainFeature.svelte'
  import MainFeatures from '$lib/MainFeatures.svelte'
  import PricingPlans from '$lib/PricingPlans.svelte'
  import Seo from '$lib/Seo.svelte'
  import StyledLink from '$lib/StyledLink.svelte'
</script>

<Seo
  title="Dropzone Plus"
  description="Dropzone Plus is a service that handles your form uploades. It not only handles the data but can also handle submitted files."
/>

<Intro title="We handle your forms" backgroundImage="/images/backdrops/plus.jpg">
  <p>
    Instead of writing your own server logic to handle the submitted data of your forms, use <strong
      >Dropzone Plus</strong
    > to handle it for you.
  </p>

  <p>
    With a few clicks you'll have a form endpoint that accepts your data and stores it securily —
    even files.
  </p>

  <Actions>
    <StyledLink href="https://plus.dropzone.dev" color="white">Create account</StyledLink>
    <StyledLink href="https://docs-plus.dropzone.dev" color="white" variant="text"
      >Documentation</StyledLink
    >
  </Actions>

  <div slot="visual" class="visual">
    <img src="/images/dropzone-plus.png" alt="Dropzone Plus logo" />
  </div>
</Intro>

<ContentSection backgroundColor="white">
  <MainFeatures>
    <MainFeature title="Works with any form">
      <p>
        Whether you already have a form that's ready to go, or you're just starting building one,
        Dropzone Plus will handle it.
      </p>

      <p>
        It works well with <a href="/js/">Dropzone.js</a> but you can use any other JavaScript library
        to submit your files.
      </p>
      <StyledLink slot="actions" href="https://docs-plus.dropzone.dev/how-to-submit-data"
        >Read the docs</StyledLink
      >
    </MainFeature>
    <MainFeature title="Get started with just $4/month">
      <p>
        With only $4/month you'll be able to send your data to Dropzone Plus — no hidden fees, no
        surprises, no Dropzone branding.
      </p>
      <p>Cancel any time and upgrade if you need to handle more than 100 submissions/month.</p>
      <StyledLink slot="actions" href="https://plus.dropzone.dev">Try for free</StyledLink>
    </MainFeature>
    <MainFeature title="Documentation">
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

<ContentSection>
  <PricingPlans />
  <div class="pricing-actions">
    <StyledLink color="secondary" href="https://plus.dropzone.dev">Try for free</StyledLink>
  </div>
</ContentSection>

<ContentSection backgroundColor="white">
  <div class="faqs">
    <h1>FAQ</h1>

    <div class="questions">
      <div class="question">
        <h2>What happens if I receive more submissions?</h2>
        <p>
          If your project exceeds the allowed quota / month, then these submissions will still be
          stored but you will not be able to access the data. These submissions will either be
          unlocked in your next billing period, or you can upgrade your account to unlock them
          immediately.
        </p>
      </div>
      <div class="question">
        <h2>What happens if I exceed my allowed file storage?</h2>
        <p>
          Submissions will still be accepted and the files will still be stored. To get access to
          your files you have to either delete old submissions, or upgrade your account. Note: if
          you are already on the Premium plan then you need to delete old submissions or contact
          support.
        </p>
      </div>
      <div class="question">
        <h2>Can I upgrade or cancel my account any time?</h2>
        <p>
          Yes of course. You only have monthly subscriptions at Dropzone Plus, and you can cancel or
          upgrade your subscription whenever you want.\nWhen you upgrade you only pay the pro-rated
          amount.
        </p>
      </div>
      <div class="question">
        <h2>What happens if I miss a payment?</h2>
        <p>
          Don't worry we'll still collect your submissions. Just update your payment info to get
          access to your data again.
        </p>
      </div>
      <div class="question">
        <h2>Where are my credit card data stored?</h2>
        <p>
          Dropzone partners with Stripe to handle your payment and store your data. Dropzone never
          stores or sees your payment details.
        </p>
      </div>
      <div class="question">
        <h2>Is my data secure?</h2>
        <p>
          Yes! We take great care of making sure our infrastructure meets all modern security
          requirements.
        </p>
      </div>
    </div>
  </div>
</ContentSection>

<style>
  .visual img {
    width: 100%;
  }
  .faqs h1 {
    font-size: 2.5rem;
    color: var(--title-color);
    margin-bottom: 3rem;
  }
  .pricing-actions {
    margin-top: 3rem;
    text-align: center;
  }
  .questions {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    grid-gap: 1.5rem;
  }
  .question h2 {
    font-weight: bold;
  }
</style>
