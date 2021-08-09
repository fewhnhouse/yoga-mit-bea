<script>
  import Block from "../../components/Block.svelte";
  import Text from "../../components/Text.svelte";
  import YogaQuote from "../yoga/YogaQuote.svelte";
  import Container from "../../components/Container.svelte";
import HoverImage from "../../components/HoverImage.svelte";
import Divider from "../../components/Divider.svelte";
</script>

<style>
  .flexContainer {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }

  .page {
    min-height: 100vh;
  }

  @media (max-width: 1000px) {
    .flexContainer {
      margin: 0px 10px;
      flex-direction: column;
    }
  }
</style>

<div class="page">

<Container>
  <Block imgSrc="fohlenhaus.jpeg" title="Der Yoga-Weg im Lonetal ..." text=" " direction="left">
    <Text>
      ... beginnt am Parkplatz Salzbühl. Dieser ist ca. 2 Kilometer
      von Bernstadt entfernt, gut erreichbar und ein idealer Ausgangs-
      punkt für Unternehmungen aller Art im Lonetal.
      Unser gemeinsamer Weg verläuft zunächst in einem schönen
      Bogen auf der linken Talseite am Waldrand mit teils weitem Blick
      über das Tal. Nach ca. 800 Metern geht der YogaWeg in einen
      beschaulichen Waldweg über und bietet ruhige und geschützte
      Übungsplätze. Der YogaWeg endet nach ca. 2 km auf einer schönen
      Erhebung im Wald gegenüber dem Fohlenhaus. Von diesem Punkt
      aus gibt es verschiedene Möglichkeiten weiterzuwandern.
    </Text>

  </Block>
  <Divider/>
  <Container>
    <div class="flexContainer">
    <HoverImage 
      mobileWidth="1000px"
      width="50%" 
      height="300px" 
      src="weg.jpeg"
      alt="logo"/>
    <Text>
      Im Yogasutra, dem grundlegendsten und wichtigsten Werk über
    Yoga, das vor fast 2000 Jahren von Patanjali verfasst wurde,
    beschreibt dieser die innere und äußere Entwicklung des
    Menschen hin zu einer körperlichen und geistigen Gesundheit.
    Patanjali beschreibt diese Entwicklung mit einem achtgliedrigen
    YogaWeg. Der Mensch wird ermutigt, seine persönliche Entwick-
    lung selbst in die Hand zu nehmen.

    Die einzelnen Stationen des YogaWeges im Lonetal bringen uns
    die wesentlichen Inhalte dieser »Achtgliedrigkeit« auf eine
    einfache und verständliche Weise nah.

    Der respektvolle Umgang mit allem, was lebt und ein freundliches sowie
    verständnisvolles soziales Miteinander werden ebenso vermittelt wie der
    achtsame und freundliche Umgang mit uns selbst.

    Lass’ dich von mir mitnehmen auf eine achtsame und schöne
    Wanderung der besonderen Art. Allein, zu zweit oder in Gruppen ...
    </Text>
  </div>

  </Container>
</Container>
</div>
