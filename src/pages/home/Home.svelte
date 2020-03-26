<script>
  import Divider from "./Divider.svelte";
  import Block from "./Block.svelte";
  import CardContainer from "./CardContainer.svelte";
</script>

<style>
  img {
    width: 100%;
    height: calc(100vh - 100px);
    object-fit: cover;
  }
  @media (max-width: 500px) {
    img {
      height: 60%;
    }
  }
</style>

<img src="deggingen.jpg" alt="logo" />
<Block
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
<Divider />
<CardContainer title="Kurse" />
<Divider />
<Block
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
<Divider />
<CardContainer title="Podcasts" />
