<script>
  export let label = "";
  export let fullWidth = false;
  export let inverted = false;
</script>

<style>
  button {
    background: var(--white);
    color: var(--primary-color);
    border: 1px solid #eaeaea;
    border-radius: 4px;
    cursor: pointer;
    padding: 10px;
    font-size: 16px;
    font-weight: 300;
    opacity: 0.8;
  }

  button:hover {
    border-color: var(--dark-grey);
    opacity: 1;
  }

  .fullWidth {
    width: 100%;
  }

  .inverted {
    background: var(--primary-color);
    color: var(--white);
    border: 1px solid #eaeaea;
  }

  .inverted:hover {
      color: var(--dark-grey);
  }
</style>

<button class={`${fullWidth ? 'fullWidth' : ''} ${inverted ? 'inverted' : ''}`}>
  {label}
  <slot />
</button>
