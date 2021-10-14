<script>
  export let title
</script>

<section class="wrapper">
  <div class="title-section">
    <h1>{title}</h1>

    <slot />
  </div>
  {#if $$slots.visual}
    <div class="visual"><slot name="visual" /></div>
  {/if}
</section>

<style>
  .wrapper {
    padding: 4rem var(--calculated-content-padding) 4.5rem;
    display: grid;
    grid-auto-flow: row;
    grid-auto-columns: 1fr;
    grid-gap: 4.5rem;
  }
  @media (min-width: 700px) {
    .wrapper {
      grid-auto-flow: column;
      grid-gap: 1.5rem;
    }
  }

  .title-section {
    max-width: 40rem;
  }
  h1 {
    font-size: linearClamp(tiny, huge, 3rem, 5rem);
    font-weight: bold;
    margin-bottom: 3rem;
    color: var(--intro-title-color);
    line-height: 90%;
  }

  .visual {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 16rem;
  }
</style>
