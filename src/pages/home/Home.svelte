<script>
  import Divider from "../../components/Divider.svelte";
  import Block from "../../components/Block.svelte";
  import MovingImage from "../../components/MovingImage.svelte";
  import CardContainer from "./CardContainer.svelte";
  import Card from "../../components/Card.svelte";
  import Quote from "../../components/Quote.svelte";
  import { onDestroy } from "svelte";

  let bgImage = "deggingen.jpg";
  let scrolled = false;

  window.addEventListener("scroll", function(event) {
    scrolled = this.scrollY !== 0;
  });
  let scale = 1.0;
  const timeout = setTimeout(() => (scale += 0.1), 500);
  onDestroy(() => {
    clearTimeout(timeout);
  });
</script>

<style>
  .parallax {
    /* The image used */
    background-image: url("deggingen.jpg");

    /* Set a specific height */
    min-height: calc(100vh - 220px);

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  i {
    color: var(--primary-color);
    font-size: 20px;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
    transform: translateY(0px);
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      transform: translateY(-5px);
    }

    75% {
      transform: translateY(0px);
    }

    100% {
      transform: translateY(-5px);
    }
  }
  .logoContainer {
    height: 220px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .container {
    padding: 20px;
    padding-top: 0px;
  }

  img {
    object-fit: cover;
    width: 400px;
    height: 200px;
  }
</style>

<div class="parallax" style="background-image: url('{bgImage}')" />

<div class="logoContainer">
  <img src="yoga2.png" alt="Yoga mit Bea" />
  {#if !scrolled}
    <i class="fas fa-angle-down" />
  {/if}
</div>
<div class="container">
  <Block
    imgSrc="runs-stone.jpg"
    title="Über mich"
    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
    necessitatibus aperiam aliquid. Numquam hic rerum ullam optio quisquam
    voluptatum nemo, placeat quam harum labore cupiditate impedit omnis earum in
    voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
    perferendis, optio velit minima quae non quia voluptates, architecto, natus
    magni unde? Quibusdam blanditiis voluptatem quo velit. Aliquam quis debitis
    dolore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
    commodi quidem porro, molestiae mollitia accusantium laborum vitae corporis
    rem. Quam alias nemo cumque dolor, vero totam animi impedit tempora nobis."
    direction="left" />
  <Quote quote="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
  <CardContainer title="Kurse" />
  <Divider />
  <Block
    imgSrc="runs-stone.jpg"
    title="Über andere"
    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
    necessitatibus aperiam aliquid. Numquam hic rerum ullam optio quisquam
    voluptatum nemo, placeat quam harum labore cupiditate impedit omnis earum in
    voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
    perferendis, optio velit minima quae non quia voluptates, architecto, natus
    magni unde? Quibusdam blanditiis voluptatem quo velit. Aliquam quis debitis
    dolore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
    commodi quidem porro, molestiae mollitia accusantium laborum vitae corporis
    rem. Quam alias nemo cumque dolor, vero totam animi impedit tempora nobis."
    direction="right" />
</div>
