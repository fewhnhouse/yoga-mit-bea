<script>
  import Divider from "../../components/Divider.svelte";
  import Block from "../../components/Block.svelte";
  import PriceCard from "./PriceCard.svelte";
  import DateCard from "./DateCard.svelte";
  import LocationCard from "./LocationCard.svelte";
  import Container from "../../components/Container.svelte";
</script>

<style>
  .flexContainer {
    display: flex;
    width: calc(100% - 20px);
    overflow: auto;
    padding: 10px;
  }

  .elementContainer {
    padding: 20px 0px;
  }
</style>

<Container>
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
      Üben. In den eventuell folgenden Stunden (60 min) wird die Praxis
      gegebenenfalls verändert, erweitert und angepasst. "
      direction="right" />
    <Divider />
    <Block
      title="Yoga mit Bea für dich"
      imgSrc="mutra.jpeg"
      text="Du kannst gern in meinem Yogaraum im Holzhaus im Wacholderweg mit
      mir üben. Es besteht auch die Möglichkeit, dass ich zu dir nach Hause
      komme und wir dort üben. Je nach Anfahrtsweg würde ich die Fahrtkosten
      berechnen. Ich freu mich auf das Üben mit dir!"
      direction="right" />
    <div class="flexContainer">
      <LocationCard
        location={{ name: 'Holzhaus', address: 'Wacholderweg 10', city: '73326 Deggingen' }}
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2638.4910283231143!2d9.729781215443019!3d48.60044352678849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47999fda619c2b37%3A0xa54b1d6f14bac51!2sWacholderweg%2010%2C%2073326%20Deggingen!5e0!3m2!1sde!2sde!4v1586249599691!5m2!1sde!2sde" />
      <DateCard day="Flexibel" times={[]} />
      <PriceCard
        title="Yoga mit Bea für dich"
        prices={[{ duration: '75 min', price: '70€' }, { duration: '60 min', price: '60€' }]} />
    </div>

  </div>
</Container>
