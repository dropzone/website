<script type="ts">
  // Once the dropzone library is loaded (in the browser) we set the action
  // that is going to be used on the dropzone element.
  let dropzoneAction: (node: HTMLDivElement) => void;

  import loadDropzoneAction from './dropzone-action';

  (async function () {
    dropzoneAction = await loadDropzoneAction();
  })();
</script>

<div class="dropzone-container">
  {#if dropzoneAction}
    <div class="dropzone" use:dropzoneAction>
      <div class="dz-message">
        <h1>Try it out!</h1>
        <p>Drag and drop files here</p>
        <p class="comment">
          This is just a demo Dropzone.
          <br />
          Dropped files are <strong>not</strong> actually uploaded.
        </p>
      </div>
    </div>
  {/if}
</div>

<style>
  .dropzone-container {
    border-radius: 2.5rem;
    border: 3px solid white;
    background: white;
    max-width: 100%;
    width: 21.875rem;
    height: 21.875rem;
    margin: auto;
    box-shadow: 0 0.625rem 1.25rem rgba(0, 0, 0, 0.1);
  }
  .dropzone {
    display: block;
    height: 100%;
    width: 100%;
    padding: 1.5rem;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
  }

  .dropzone:global(.dz-drag-hover) {
    border-style: dashed;
    border-color: var(--primary-color);
  }

  .dropzone:global(.dz-started) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1rem;
  }
  :global(.dz-preview) {
    margin: auto;
  }
  :global(.dz-preview.dz-image) {
    background: transparent;
  }

  .dz-message {
    text-align: center;
  }
  .dz-message h1 {
    font-size: 2.375rem;
    font-weight: bold;
    color: var(--title-color);
  }

  .dropzone .comment {
    font-size: 0.75rem;
    opacity: 0.5;
    margin-bottom: 0;
  }
</style>
