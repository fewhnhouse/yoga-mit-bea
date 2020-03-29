<script>
  import MovingImage from "../../components/MovingImage.svelte";
  import Card from "../../components/Card.svelte";
  import HoverImage from "../../components/HoverImage.svelte";
  import ShortDivider from "../../components/ShortDivider.svelte";
  import Divider from "../../components/Divider.svelte";
  import Block from "../../components/Block.svelte";
  import PriceCard from "./PriceCard.svelte";
  import LocationCard from "./LocationCard.svelte";
</script>

<style>
  .container {
    padding: 20px;
    padding-top: 80px;
    width: calc(100% - 40px);
  }

  .infoContainer {
    width: calc(100% - 80px);
    margin: 0px 40px;
  }

  .pricesContainer {
    display: flex;
    width: 100%;
    overflow: auto;
  }

  .elementContainer {
    padding: 20px 0px;
  }

  @media (max-width: 400px) {
    .container {
      padding: 10px;
      padding-top: 70px;
      width: calc(100% - 20px);
    }
  }
</style>

<div class="container">
  <div id="einzelkurse">
    <Block
      title="Einzelkurse"
      text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
      necessitatibus aperiam aliquid. Numquam hic rerum ullam optio quisquam
      voluptatum nemo, placeat quam harum labore cupiditate impedit omnis earum
      in voluptatibus? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Ad doloribus, a nemo commodi possimus cupiditate aliquid autem inventore
      officia est voluptas hic sit quibusdam eius esse amet deserunt aliquam
      dolor."
      direction="right" />

    <div class="infoContainer">
      <div class="elementContainer">
        <h2>Ort</h2>
        <LocationCard />
      </div>
      <div class="elementContainer">
        <h2>Preise</h2>
        <div class="pricesContainer">
          <PriceCard duration="60 min" title="Schnupperstunde" price="300€" />
          <PriceCard duration="90 min" title="Erfahrene Tiger" price="300€" />
          <PriceCard duration="20 min" title="Schneller Morgen" price="100€" />
        </div>
      </div>
    </div>
  </div>

  <Divider />
  <div id="gruppen">

    <Block
      title="Gruppen"
      text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
      necessitatibus aperiam aliquid. Numquam hic rerum ullam optio quisquam
      voluptatum nemo, placeat quam harum labore cupiditate impedit omnis earum
      in voluptatibus? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Ad doloribus, a nemo commodi possimus cupiditate aliquid autem inventore
      officia est voluptas hic sit quibusdam eius esse amet deserunt aliquam
      dolor."
      direction="right" />

    <div class="infoContainer">
      <div class="elementContainer">
        <h2>Ort</h2>
        <LocationCard />
      </div>
      <div class="elementContainer">
        <h2>Preise</h2>
        <div class="pricesContainer">
          <PriceCard duration="60 min" title="Schnupperstunde" price="300€" />
          <PriceCard duration="90 min" title="Erfahrene Tiger" price="300€" />
          <PriceCard duration="20 min" title="Schneller Morgen" price="100€" />
        </div>
      </div>
    </div>
  </div>

  <Divider />
  <div id="seminare">
    <Block
      title="Seminare"
      text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
      necessitatibus aperiam aliquid. Numquam hic rerum ullam optio quisquam
      voluptatum nemo, placeat quam harum labore cupiditate impedit omnis earum
      in voluptatibus? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Ad doloribus, a nemo commodi possimus cupiditate aliquid autem inventore
      officia est voluptas hic sit quibusdam eius esse amet deserunt aliquam
      dolor."
      direction="right" />

    <div class="infoContainer">
      <div class="elementContainer">
        <h2>Ort</h2>
        <LocationCard />
      </div>
      <div class="elementContainer">
        <h2>Preise</h2>
        <div class="pricesContainer">
          <PriceCard duration="60 min" title="Schnupperstunde" price="300€" />
          <PriceCard duration="90 min" title="Erfahrene Tiger" price="300€" />
          <PriceCard duration="20 min" title="Schneller Morgen" price="100€" />
        </div>
      </div>
    </div>
  </div>

</div>
