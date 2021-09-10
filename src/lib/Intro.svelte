<script>
  export let title;
</script>

<section class="wrapper">
  <div>
    <h1>{title}</h1>

    <slot />
  </div>
  <div class="visual"><slot name="visual" /></div>
</section>

<style>
  .wrapper {
    padding: 4rem var(--calculated-content-padding) 4.5rem;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
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
