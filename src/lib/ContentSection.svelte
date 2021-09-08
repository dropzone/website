<script>
  import Block from './Block.svelte';

  export let backgroundColor;
</script>

<section class="wrapper">
  <div class="backdrop" style="background-color: {backgroundColor};" />
  <slot />
</section>

<style>
  .wrapper {
    position: relative;
    display: block;
    padding: 3rem var(--calculated-content-padding);
  }

  .backdrop {
    position: absolute;
    width: 100%;
    left: 0;
    top: -3rem;
    bottom: -3rem;
    transform: skew(0deg, var(--backdrop-skew-rotation));
    z-index: -1;
  }
</style>
