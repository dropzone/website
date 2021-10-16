<script type="ts">
  export let backgroundImage: string = null
  export let backgroundColor: string = null
  export let additionalHeight: string = null

  let style = backgroundImage
    ? `background-image: url("${backgroundImage}");`
    : `background-color: ${backgroundColor};`

  style += `--additional-height: ${additionalHeight};`
</script>

<div class="backdrop" {style} class:additional-height={additionalHeight != null} />

<style>
  :global(:root) {
    --additional-height: 0px;
  }

  .backdrop {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    transform: skew(0deg, var(--backdrop-skew-rotation));
    z-index: -1;
    background-size: cover;
    background-position: var(--backdrop-position);
  }
  .backdrop.additional-height {
    --height: calc(100% + var(--additional-height));
    height: calc(var(--height) + 50vw * var(--backdrop-skew-tan));
  }
</style>
