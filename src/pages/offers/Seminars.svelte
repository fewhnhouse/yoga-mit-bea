<script>
  import Divider from '../../components/Divider.svelte'
  import Block from '../../components/Block.svelte'
  import PriceCard from './PriceCard.svelte'
  import DateCard from './DateCard.svelte'
  import LocationCard from './LocationCard.svelte'
  import Container from '../../components/Container.svelte'
  import Text from '../../components/Text.svelte'
</script>

<Container>
  <Container id="einzelkurse">
    <Block title="OPEN-AIR YOGA FÜR ALLE" imgSrc="deggingen.jpg" direction="right">
      <Text>
        Ab 23.6. bis 03.08.2023
        <br />
        Bei gutem Wetter üben wir jeden Donnerstag von 18-19.15 Uhr auf der Wacholderheide (Wacholderweg 10, Deggingen).
        <br />
        Wetterinfo: 16-17 Uhr <a href="tel:01601578254">0160-1578254</a>
        <br />
        Einfach vorbeikommen und 15 Euro und Matte mitbringen.
      </Text>
    </Block>
    <Divider />

    <Block
      title="YOGA IM GARTEN FÜR ALLE"
      imgSrc="deggingen.jpg"
      direction="left"
    >
      <Text>
        Ab 13.6. bis 01.08.2023
        <br />
        Bei gutem Wetter üben wir jeden Dienstag von 17.30-18.30 Uhr und von 18.45-20 Uhr im schönen Yoga-Garten in Bernstadt ( Platzgasse 30/1).
        <br />
        Wetterinfo: 15-16 Uhr <a href="tel:01601578254">0160-1578254</a>
        <br />
        Einfach vorbeikommen und 15 Euro und Matte mitbringen.
      </Text>
    </Block>
  </Container>
</Container>

<style>
  .flexContainer {
    display: flex;
    width: calc(100% - 20px);
    overflow: auto;
    padding: 10px;
  }

  a {
    color: rgb(161, 75, 93);
  }
</style>

