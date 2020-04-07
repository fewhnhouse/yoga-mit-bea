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
          einem Kreis von max. 10 Teilnehmer-inne-n. Es besteht die Möglichkeit,
          bei Bedarf den Kurstag oder die Kursstunde zu tauschen. Pro Jahr
          finden 3 Yogakurse statt und während der Schulferien ist Yogapause.
          Bitte kontaktiere mich, wenn du mitüben möchtest, ich freu mich auf
          dich!"
          direction="left" />
        <div class="flexContainer">
          <LocationCard />
          <DateCard
            day="Dienstag und Mittwoch"
            times={['9.00-10.30 Uhr', '18.00-19.00 Uhr', '19-15-20.30 Uhr', '20.45-22.00 Uhr']} />
          <PriceCard
            title="10er Kurs"
            prices={[{ duration: '60 min', price: '100€' }, { duration: '75 min', price: '110€' }, { duration: '90 min', price: '120€' }]} />
        </div>
      </div>
      <Divider />
      <div class="elementContainer">
        <Block
          imgSrc="placeholder.jpg"
          size="small"
          title="Yoga mit Bea in der Stube"
          text="Wir üben in einer kleinen Gruppe(max. 6 Teilnehmer-innen) in der
          gemütlichen Stube im Holzhaus im Wacholderweg in Deggingen. Die Kosten
          für den Kurs in kleiner Gruppe sind bei 10 Übungsterminen 120 Euro.
          Möchtest du mitüben? Du kannst gern zum kostenlosen Schnuppern kommen,
          ich freu mich auf dich!"
          direction="right" />
        <div class="flexContainer">
          <LocationCard
            location={{ name: 'Stube' }}
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2638.4910283231143!2d9.729781215443019!3d48.60044352678849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47999fda619c2b37%3A0xa54b1d6f14bac51!2sWacholderweg%2010%2C%2073326%20Deggingen!5e0!3m2!1sde!2sde!4v1586249599691!5m2!1sde!2sde" />
          <DateCard day="Freitag" times={['9.30-10.45 Uhr']} />
          <PriceCard
            title="10er Kurs"
            prices={[{ duration: '75 min', price: '120€' }]} />
        </div>
      </div>
    </div>
  </div>

</Container>
