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
  import Text from "../../components/Text.svelte";
</script>

<style>
  .flexContainer {
    display: flex;
    width: calc(100% - 20px);
    overflow: auto;
    padding: 10px;
  }
</style>

<Container>
  <div id="einzelkurse">
    <Block title="Yoga Leben" imgSrc="placeholder.jpg" direction="right">
      <Text>
        Wir verbringen gemeinsam einen Yogatag im Schloss oder im Holzhaus in
        Deggingen. Im Sommer werden wir im schönen Wacholdergarten üben.
        <br />
        Das Yogawochenende verbringen wir in einer kleinen Gruppe (max. 6
        Teilnehmer-innen) im gemütlichen Holzhaus, umgeben von Wacholderheide
        und dem nahen Wald. Wir werden verwöhnt mit leichter, leckerer und
        bunter vegetarischer Küche. Termin und Thema und Kosten werden immer
        aktuell bekanntgegeben.
      </Text>

    </Block>
    <Divider />

    <div class="flexContainer">
      <LocationCard
        location={{ name: 'Holzhaus', address: 'Wacholderweg 10', city: '73326 Deggingen' }}
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2638.4910283231143!2d9.729781215443019!3d48.60044352678849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47999fda619c2b37%3A0xa54b1d6f14bac51!2sWacholderweg%2010%2C%2073326%20Deggingen!5e0!3m2!1sde!2sde!4v1586249599691!5m2!1sde!2sde" />
      <DateCard day="Wird aktuell bekannt gegeben." times={[]} />
      <PriceCard title="Wird aktuell bekannt gegeben." price="-" />
    </div>

  </div>
</Container>
