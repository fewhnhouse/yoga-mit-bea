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
</style>

<Container>
  <div id="einzelkurse">
    <Block
      title="Yoga Leben"
      text="Wir verbringen gemeinsam einen Yogatag im Schloss oder im Holzhaus
      in Deggingen. Im Sommer werden wir im schönen Wacholdergarten üben . Das
      Yogawochenende verbringen wir in einer kleinen Gruppe (max. 6
      Teilnehmer-innen) im gemütlichen Holzhaus, umgeben von Wacholderheide und
      dem nahen Wald. Franzi verwöhnt uns mit leichter, leckerer und bunter
      vegetarischer Küche. Termin und Thema und Kosten werden immer aktuell
      bekanntgegeben  Link Aktuelles oder hier??? Ich freu mich auf eine
      Begegnung mit dir "
      imgSrc="placeholder.jpg"
      direction="right" />
    <Divider />

    <div class="flexContainer">
      <LocationCard />
      <DateCard
        day="Dienstag und Mittwoch"
        times={['9.00-10.30 Uhr', '18.00-19.00 Uhr', '19-15-20.30 Uhr', '20.45-22.00 Uhr']} />
      <PriceCard duration="60 min" title="10er Kurs" price="100€" />
    </div>

  </div>
</Container>
