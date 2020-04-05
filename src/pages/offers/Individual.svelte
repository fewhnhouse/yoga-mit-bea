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
      title="Yoga Individuell"
      text="Die Yoga Einzelstunden sind eine wunderbare Möglichkeit, zeitlich
      flexibel deine persönliche Yogapraxis zu üben und wenn dir aus
      körperlichen oder anderen Gründen das Üben in der Gruppe, vielleicht auch
      vorübergehend, nicht entspricht. In der Einzelstunde entwickeln wir eine
      individuelle Yogapraxis, um dich in deinem Leben und Menschsein positiv zu
      unterstützen. Dabei werden wir deine körperliche und geistige Situation
      und auch deine zeitlichen Möglichkeiten zu üben und Yoga in deinen Alltag
      zu integrieren, berücksichtigen. In der ersten Stunde (75 min) werden wir
      über dich und deine Bedürfnisse sprechen und anschließend eine für dich
      passende Yogapraxis entwickeln. Du bekommst eine Anleitung mit zum daheim
      Üben  In den eventuell folgenden Stunden (60 min) wird die Praxis
      gegebenenfalls verändert, erweitert und angepasst. "
      direction="right" />
    <Divider />
    <Block
      title="Yoga mit Bea für dich"
      size="small"
      imgSrc="placeholder.jpg"
      text="Du kannst gern in meinem Yogaraum im Holzhaus im Wacholderweg mit
      mir üben. Es besteht auch die Möglichkeit, dass ich zu dir nach Hause
      komme und wir dort üben. Je nach Anfahrtsweg würde ich die Fahrtkosten
      berechnen. Ich freu mich auf das Üben mit dir!"
      direction="right" />
    <div class="flexContainer">
      <LocationCard />
      <DateCard
        day="Dienstag und Mittwoch"
        times={['9.00-10.30 Uhr', '18.00-19.00 Uhr', '19-15-20.30 Uhr', '20.45-22.00 Uhr']} />
      <PriceCard duration="60 min" title="10er Kurs" price="100€" />
    </div>

  </div>
</div>
