<script>
  export let subtitle = null
</script>

<h1><slot /></h1>

{#if subtitle}
  <h2>{subtitle}</h2>
{/if}

<style>
  h1 {
    font-size: 2.375rem;
    font-weight: bold;
    color: var(--title-color);
    line-height: 3rem;
  }
  h2 {
    font-size: inherit;
    font-weight: bold;
    color: var(--primary-color);
    line-height: 1.5rem;
    margin-bottom: 3rem;
  }
</style>
