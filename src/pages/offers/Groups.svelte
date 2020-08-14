<script>
  import MovingImage from "../../components/MovingImage.svelte";
  import Card from "../../components/Card.svelte";
  import HoverImage from "../../components/HoverImage.svelte";
  import ShortDivider from "../../components/ShortDivider.svelte";
  import Divider from "../../components/Divider.svelte";
  import Block from "../../components/Block.svelte";
  import MultiPriceCard from "./MultiPriceCard.svelte";
  import DateCard from "./DateCard.svelte";
  import MultiDateCard from "./MultiDateCard.svelte";
  import LocationCard from "./LocationCard.svelte";
  import Container from "../../components/Container.svelte";
  import Text from "../../components/Text.svelte";
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
      title="Yogakurse"
      text="In den Gruppenkursen üben wir eine ausgewogene Yogapraxis mit dem
      Ziel, unseren Körper und unseren Geist ins Gleichgewicht zu bringen. Wir
      erfahren den Körper kraftvoll und stabil, „sthira“ und zugleich entspannt
      und leicht, „sukha“. Dabei werde ich dich darin unterstützen, in den
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
          size="small"
          imgSrc="placeholder.jpg"
          title="Yoga mit Bea im Schloss"
          direction="left">
          <Text>
            Der schöne, ehrwürdige historische Saal ganz oben im Bernstadter
            Schloss gibt uns ein wunderbares Ambiente um Yoga zu üben. Wir üben
            in einem Kreis von max. 10 Teilnehmer-inne-n.
            <br />
            Die Yogakurse finden fortlaufend statt und du hast jederzeit die
            Möglichkeit zu beginnen. Pausen gebe ich rechtzeitig bekannt. Bei
            Bedarf und nach voriger Absprache kann der Übungstermin auch mal
            getauscht werden.
            <br />
            Die Yogaeinheiten mit 60 Minuten "Yoga sanft" sind auch sehr gut für
            Yogaeinsteiger-innen geeignet und beinhalten eine ausgewogene
            körperliche Praxis und Atemübungen.
            <br />
            Die Yogaeinheiten mit 75 und 90 Minuten "Yoga für alle" sind etwas
            intensiver beim körperlichen Üben und beinhalten Atemübungen und
            Meditation.
          </Text>
        </Block>
        <div class="flexContainer">
          <LocationCard
            location={{ name: 'Schloss Bernstadt', address: 'Schmiedgasse 5', city: '89182 Bernstadt' }} />
          <MultiDateCard
            days={[{ title: 'Dienstag', times: ['17.30-18.30', '18.45-20.00', '20.15-21.30'] }, { title: 'Mittwoch', times: ['9.00-10.30', '10.45-11.45', '17.30-18.30', '18.45-20.15'] }]} />
          <MultiPriceCard
            priceCategories={[{ title: '8er Block', description: '8x Üben in 12 Wochen', prices: [{ duration: '60 min', price: '100€' }, { duration: '75 min', price: '110€' }, { duration: '90 min', price: '120€' }] }, { title: '3er Block', description: '3x Üben in 5 Wochen', prices: [{ duration: '60 min', price: '40€' }, { duration: '75 min', price: '45€' }, { duration: '90 min', price: '50€' }] }, { title: '1 Mal Üben', description: 'Flexibel', prices: [{ duration: '60 min', price: '14€' }, { duration: '75 min', price: '16€' }, { duration: '90 min', price: '18€' }] }]} />
        </div>
      </div>
      <Divider />
      <div class="elementContainer">
        <Block
          size="small"
          imgSrc="gruppe.jpg"
          title="Yoga mit Bea in der Stube"
          text="Wir üben in einer kleinen Gruppe(max. 6 Teilnehmer-innen) in der
          gemütlichen Stube im Holzhaus im Wacholderweg in Deggingen. Möchtest
          du mitüben? Bitte kontaktiere mich, ich freu mich auf dich!"
          direction="right" />
        <div class="flexContainer">
          <LocationCard
            location={{ name: 'Stube im Holzhaus', address: 'Wacholderweg 10', city: '73326 Deggingen' }}
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2638.4910283231143!2d9.729781215443019!3d48.60044352678849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47999fda619c2b37%3A0xa54b1d6f14bac51!2sWacholderweg%2010%2C%2073326%20Deggingen!5e0!3m2!1sde!2sde!4v1586249599691!5m2!1sde!2sde" />
          <MultiDateCard
            days={[{ title: 'Freitag', times: ['9.30-10.45 Uhr'] }]} />
          <MultiPriceCard
            priceCategories={[{ title: '8er Block', description: '8x Üben in 12 Wochen', prices: [{ duration: '75 min', price: '110€' }] }]} />
        </div>
      </div>
    </div>
  </div>

</Container>
