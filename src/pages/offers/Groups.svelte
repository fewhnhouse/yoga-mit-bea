<script>
  import Divider from '../../components/Divider.svelte'
  import Block from '../../components/Block.svelte'
  import MultiPriceCard from './MultiPriceCard.svelte'
  import MultiDateCard from './MultiDateCard.svelte'
  import LocationCard from './LocationCard.svelte'
  import Container from '../../components/Container.svelte'
  import Text from '../../components/Text.svelte'
</script>

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
      direction="right"
    />
    <Divider />
    <div>
      <div class="elementContainer">
        <Block
          size="small"
          imgSrc="schloss.jpg"
          title="Yoga mit Bea im Schloss"
          direction="left"
        >
          <Text>
            Der schöne, ehrwürdige historische Saal ganz oben im Bernstadter
            Schloss gibt uns ein wunderbares Ambiente um Yoga zu üben. Wir üben
            in einem Kreis von max. 10 TeilnehmerInnen.
            <br />
            Die Yogakurse finden fortlaufend statt und du hast jederzeit die Möglichkeit
            zu beginnen. Pausen gebe ich rechtzeitig bekannt. Bei Bedarf und nach
            voriger Absprache kann der Übungstermin auch mal getauscht werden.
            <br />
            Die Yogaeinheiten mit 60 Minuten "Yoga sanft" sind auch sehr gut für
            Yogaeinsteiger-innen geeignet und beinhalten eine ausgewogene körperliche
            Praxis und Atemübungen.
            <br />
            Die Yogaeinheiten mit 75 Minuten "Yoga für alle" sind etwas intensiver
            beim körperlichen Üben und beinhalten Atemübungen und Meditation.
          </Text>
        </Block>
        <div class="flexContainer">
          <LocationCard
            location={{
              name: 'Schloss Bernstadt',
              address: 'Schmiedgasse 5',
              city: '89182 Bernstadt',
            }}
          />
          <MultiDateCard
            days={[
              { title: 'Dienstag', times: ['17.30-18.30', '18.45-20.00'] },
              {
                title: 'Mittwoch',
                times: ['17.30-18.30', '18.45-20.00'],
              },
            ]}
          />
          <MultiPriceCard
            priceCategories={[
              {
                title: '8er Karte',
                description: '8x Üben in 10 Wochen',
                prices: [
                  { duration: '60 min', price: '110€' },
                  { duration: '75 min', price: '120€' },
                ],
              },
              {
                title: '5er Karte Flex',
                description: '5x Üben flexibel',
                prices: [
                  { duration: '60 min', price: '80€' },
                  { duration: '75 min', price: '90€' },
                ],
              },
            ]}
          />
        </div>
      </div>
      <Divider />
      <div class="elementContainer">
        <Block
          size="small"
          imgSrc="wacholder.jpg"
          title="Yoga mit Bea im Wacholder"
          text="Wir üben in einer kleinen Gruppe (max. 8 Teilnehmer-innen) im schönen Yogaraum im Holzhaus im Wacholderweg in Deggingen. Möchtest
          du mitüben? Bitte kontaktiere mich, ich freu mich auf dich!"
          direction="right"
        />
        <div class="flexContainer">
          <LocationCard
            location={{
              name: 'Yogaraum',
              address: 'Wacholderweg 10',
              city: '73326 Deggingen',
            }}
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2638.4910283231143!2d9.729781215443019!3d48.60044352678849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47999fda619c2b37%3A0xa54b1d6f14bac51!2sWacholderweg%2010%2C%2073326%20Deggingen!5e0!3m2!1sde!2sde!4v1586249599691!5m2!1sde!2sde"
          />
          <MultiDateCard
            days={[
              { title: 'Montag', times: ['18.00-19.15', '19.30-20.45'] },
            ]}
          />
          <MultiPriceCard
            priceCategories={[
              {
                title: '8er Karte',
                description: '8x Üben in 10 Wochen',
                prices: [
                  { duration: '75 min', price: '120€' },
                ],
              },
              {
                title: '5er Karte Flex',
                description: '5x Üben flexibel',
                prices: [
                  { duration: '75 min', price: '90€' },
                ],
              },
            ]}
          />
        </div>
      </div>
    </div>
  </div>
</Container>

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
