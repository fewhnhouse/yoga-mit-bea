<script>
  import ShortDivider from "../../components/ShortDivider.svelte";
  export let direction;
  export let imgSrc = 'placeholder.jpg'
  export let title;
  export let text;
  $: console.log(direction);
</script>

<style>
  .imageContainer {
    width: 250px;
    height: 250px;
    min-width: 250px;
    min-height: 250px;
    overflow: hidden;
  }
  img {
    width: 100%;
    height: 100%;
    transform: scale(1);
    object-fit: cover;
  }
  img:hover {
    transform: scale(1.1);
    transition: transform 1s ease-in-out;
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
  <div class="imageContainer">
    <img src={imgSrc} alt="logo" />
  </div>
  <div class="textContainer">
    <h1>{title}</h1>
    <ShortDivider />
    <p>{text}</p>
  </div>
</div>
