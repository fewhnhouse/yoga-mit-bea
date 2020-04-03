<script>
  import MovingImage from "../../components/MovingImage.svelte";
  import Card from "../../components/Card.svelte";
  import HoverImage from "../../components/HoverImage.svelte";
  import ShortDivider from "../../components/ShortDivider.svelte";
  import Divider from "../../components/Divider.svelte";
  import Block from "../../components/Block.svelte";
  import PriceCard from "./PriceCard.svelte";
  import DateCard from "./DateCard.svelte";
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

  .flexContainer {
    display: flex;
    width: 100%;
    overflow: auto;
    padding: 10px;
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
      title="Yoga mit Bea im Schloss"
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
        <div class="flexContainer">
          <LocationCard />
        </div>
      </div>
      <div class="elementContainer">
        <h2>Termine</h2>
        <div class="flexContainer">
          <DateCard
            day="Dienstag"
            times={['9.00-10.30 Uhr', '18.00-19.00 Uhr', '19-15-20.30 Uhr', '20.45-22.00 Uhr']} />
          <DateCard
            day="Mittwoch"
            times={['9.00-10.30 Uhr', '18.00-19.00 Uhr', '19-15-20.30 Uhr', '20.45-22.00 Uhr']} />
        </div>
      </div>
      <div class="elementContainer">
        <h2>Preise</h2>
        <div class="flexContainer">
          <PriceCard duration="60 min" title="10er Kurs" price="100€" />
          <PriceCard duration="75 min" title="10er Kurs" price="110€" />
          <PriceCard duration="90 min" title="10er Kurs" price="120€" />
        </div>
      </div>
    </div>
  </div>

  <Divider />
  <div id="gruppen">

    <Block
      title="Yoga mit Bea in der Stube"
      text="Wir üben in einer kleinen Gruppe (max. 6 Teilnehmer-innen) in der
      gemütlichen Stube im Holzhaus im Wacholderweg."
      direction="right" />

    <div class="infoContainer">
      <div class="elementContainer">
        <h2>Ort</h2>
        <LocationCard />
      </div>
      <div class="elementContainer">
        <h2>Termine</h2>
        <div class="flexContainer">
          <DateCard day="Dienstag" times={['9.30-10.45 Uhr']} />
        </div>
      </div>
      <div class="elementContainer">
        <h2>Preise</h2>
        <div class="flexContainer">
          <PriceCard
            duration="75 min"
            title="10er Kurs (6 Teilehmer-innen)"
            price="120€" />
        </div>
      </div>
    </div>
  </div>

  <Divider />
  <div id="seminare">
    <Block
      title="Yoga mit Bea für dich"
      text="Das Yogawochenende verbringen wir in einer kleinen Gruppe (max. 6
      Teilnehmer-innen) im gemütlichen Holzhaus im Wacholdergarten. Franzi
      verwöhnt uns mit leichter und leckerer und bunter vegetarischer Küche. "
      direction="right" />

    <div class="infoContainer">
      <div class="elementContainer">
        <h2>Ort</h2>
        <LocationCard />
      </div>
      <div class="elementContainer">
        <h2>Preise</h2>
        <div class="flexContainer">
          <PriceCard duration="60 min" title="Schnupperstunde" price="300€" />
          <PriceCard duration="90 min" title="Erfahrene Tiger" price="300€" />
          <PriceCard duration="20 min" title="Schneller Morgen" price="100€" />
        </div>
      </div>
    </div>
  </div>

</div>
