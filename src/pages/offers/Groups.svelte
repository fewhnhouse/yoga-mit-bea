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
  import Container from "../../components/Container.svelte";
</script>

<style>
  .flexContainer {
    display: flex;
    width: 100%;
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
      title="Yogakurse"
      text="In den Gruppenkursen üben wir eine ausgewogene Yogapraxis mit dem
      Ziel, unseren Körper und unseren Geist ins Gleichgewicht zu bringen. Wir
      erfahren den Körper kraftvoll und stabil, „sthira“ und zugleich entspannt
      und leicht, sukha“. Dabei werde ich dich darin unterstützen, in den
      Haltungen deine natürliche Form zu finden und die für dich „ideale
      Haltung“ einzunehmen. Die natürliche Verbindung von Körper, Atem und Geist
      nutzen wir und richten die Körperbewegungen mit umsichtigem Einfühlen auf
      unseren Atem aus. So wie sich der Atem beim Üben beruhigt, so beruhigt
      sich auch der Geist. Atemübungen (Pranayama) ergänzen das körperliche Üben
      und unterstützen uns, die Ruhe und Klarheit in unserem Geist zu erfahren."
      direction="right" />
    <Divider />
    <div>
      <div class="elementContainer">
        <Block
          imgSrc="placeholder.jpg"
          size="small"
          title="Yoga mit Bea im Schloss"
          text="Der schöne, ehrwürdige historische Saal ganz oben im Bernstadter
          Schloss gibt uns ein wunderbares Ambiente um Yoga zu üben. Wir üben in
          einem Kreis von max. 10 Teilnehmer-inne-n."
          direction="left" />
        <div class="flexContainer">
          <LocationCard />
          <DateCard
            day="Dienstag und Mittwoch"
            times={['9.00-10.30 Uhr', '18.00-19.00 Uhr', '19-15-20.30 Uhr', '20.45-22.00 Uhr']} />
          <PriceCard
            title="10er Kurs"
            prices={[{ duration: '60 min', price: '110€' }, { duration: '75 min', price: '120€' }, { duration: '90 min', price: '130€' }]} />
        </div>
      </div>
      <Divider />
      <div class="elementContainer">
        <Block
          imgSrc="placeholder.jpg"
          size="small"
          title="Yoga mit Bea in der Stube"
          text="Wir üben in einer kleinen Gruppe(max. 6 Teilnehmer-innen) in der
          gemütlichen Stube im Holzhaus im Wacholderweg in Deggingen."
          direction="right" />
        <div class="flexContainer">
          <LocationCard />
          <DateCard
            day="Dienstag und Mittwoch"
            times={['9.00-10.30 Uhr', '18.00-19.00 Uhr', '19-15-20.30 Uhr', '20.45-22.00 Uhr']} />
          <PriceCard
            title="10er Kurs"
            prices={[{ duration: '60 min', price: '110€' }, { duration: '75 min', price: '120€' }, { duration: '90 min', price: '130€' }]} />
        </div>
      </div>
    </div>
  </div>

</Container>
