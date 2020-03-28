<script>
  import ShortDivider from "./ShortDivider.svelte";
  import HoverImage from "./HoverImage.svelte";
  export let direction;
  export let imgSrc = "placeholder.jpg";
  export let title;
  export let text;
</script>

<style>
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
    text-align: justify;
    color: var(--text-color);
    opacity: 0.6;
    line-height: 30px;
  }

  @media (max-width: 500px) {
    img {
      width: 80%;
      height: 80%;
    }
    .container-normal,
    .container-reverse {
      flex-direction: column;
    }
  }
</style>

<div
  class={`container ${direction === 'left' ? 'container-normal' : 'container-reverse'}`}>
  <HoverImage src={imgSrc} alt="logo" width="250px" height="250px" />
  <div class="textContainer">
    <h1>{title}</h1>
    <ShortDivider />
    <p>{text}</p>
    <slot />
  </div>
</div>
