<script>
  export let direction;
  export let title;
  export let text;
  $: console.log(direction)
</script>

<style>
  img {
    width: 200px;
    height: 200px;
    min-width: 200px;
    min-height: 200px;
  }
  .container {
    padding: 10px;
    display: flex;
    align-items: center;
  }

  .container-normal {
    flex-direction: row;
  }
  .container-reverse {
    flex-direction: row-reverse;
  }
  .textContainer {
    margin: 0px 40px;
  }

  p {
    display: block;
    color: var(--text-color);
    opacity: 0.6;
    line-height: 30px;
  }

  @media (max-width: 500px) {
    img {
      width: 80%;
      height: 80%
    }
    .container-normal, .container-reverse {
      flex-direction: column;
    }
  }
</style>

<div
  class={`container ${direction === 'left' ? 'container-normal' : 'container-reverse'}`}>
  <img src="placeholder.jpg" alt="logo" />
  <div class="textContainer">
    <h1>{title}</h1>
    <p>
      {text}
    </p>
  </div>
</div>
