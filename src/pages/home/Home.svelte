<script>
  import Divider from "../../components/Divider.svelte";
  import Block from "../../components/Block.svelte";
  import MovingImage from "../../components/MovingImage.svelte";
  import CardContainer from "./CardContainer.svelte";
  import Card from "../../components/Card.svelte";
  import Quote from "../../components/Quote.svelte";
  import Participants from "./Participants.svelte";
  import { onDestroy } from "svelte";
  import { navigate } from "svelte-routing";

  let bgImage = "background2.jpg";
  let scrolled = false;

  const link = path => () => navigate(path);

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
    /* Set a specific height */
    min-height: calc(100vh - 220px);

    object-fit: cover;

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
    justify-content: space-between;
    align-items: center;
  }

  .container {
    padding: 20px;
    padding-top: 0px;
  }
  img {
    object-fit: contain;
    width: 400px;
    height: 200px;
  }

  @media (max-width: 400px) {
    .container {
      padding: 10px;
    }

    .parallax {
      background-attachment: scroll;
    }

    img {
      width: 100%;
    }
  }
</style>

<div class="parallax" style="background-image: url('{bgImage}')" />

<div class="logoContainer">
  <img src="logo-color.png" alt="Yoga mit Bea" />
  {#if !scrolled}
    <i class="fas fa-angle-down" />
  {/if}
</div>
<div class="container">
  <Block
    imgSrc="runs-yoga.jpeg"
    title="Bea"
    text="Durch Yoga gehst du nur auf dich selbst zu, nirgendwo anders hin kann
    es gehen."
    more
    action={link('/bea')}
    direction="left" />
  <Divider />
  <CardContainer />
  <Divider />
  <Block
    imgSrc="patanjali.jpg"
    title="Yoga"
    text="Mein Verständnis von Yoga"
    more
    action={link('/yoga')}
    direction="right" />
  <Divider />
  <Participants />
</div>
