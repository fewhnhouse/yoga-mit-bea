<script>
  import Block from "../../components/Block.svelte";
  import Divider from "../../components/Divider.svelte";
</script>

<style>
  .container {
    padding: 20px;
    padding-top: 80px;
  }
  img {
      width: 100%;
      height: 300px;
      object-fit: contain;
  }
</style>

<div class="container">
  <img src="morgengruss.jpg" alt="Morgengruß"/>
  <Block
    imgSrc="runs-stone.jpg"
    title="Yoga Mutra"
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
    direction="right" />
</div>
