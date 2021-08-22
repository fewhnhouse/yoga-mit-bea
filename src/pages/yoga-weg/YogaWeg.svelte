<script>
  import Block from "../../components/Block.svelte";
  import Text from "../../components/Text.svelte";
  import Container from "../../components/Container.svelte";
  import HoverImage from "../../components/HoverImage.svelte";
  import Divider from "../../components/Divider.svelte";
  import mediaStore from "../../utils/mediaStore.js";

$: isMobile = mediaStore("(max-width: 1000px)");
$: isTablet = mediaStore("(max-width: 1200px)");

</script>

<style>
  .flexContainer {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }

  .mapContainer {
    margin-left: 40px;
    min-width: 600px;
    max-width: 600px;
  }
  @media (max-width: 1200px) {
    .mapContainer {
        margin-left: 40px;
        min-width: 400px;
        max-width: 600px;
      }
    }

    @media (max-width: 1000px) {
    .mapContainer {
        margin-left: 0px;
        min-width: 100%;
        max-width: 100%;
      }
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
      über das Tal. Nach ca. 800 Metern geht der Yoga-Weg in einen
      beschaulichen Waldweg über und bietet ruhige und geschützte
      Übungsplätze. Der Yoga-Weg endet nach ca. 2 km auf einer schönen
      Erhebung im Wald gegenüber dem Fohlenhaus. Von diesem Punkt
      aus gibt es verschiedene Möglichkeiten weiterzuwandern.
    </Text>

  </Block>
  <Divider/>
  <Container>
    <div class="flexContainer">
      <div class="mapContainer">
        <iframe title="Yoga Weg Karte" src="https://www.google.com/maps/embed?pb=!1m66!1m12!1m3!1d6517.233284418487!2d10.036420878556099!3d48.52020642334123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m51!3e2!4m5!1s0x47996956e2c0898f%3A0xa01bcddcfb8a1ace!2sBernstadt!3m2!1d48.5195113!2d10.0330376!4m5!1s0x47996957c87603d7%3A0x6895a54bc187cb36!2s89182%20Bernstadt!3m2!1d48.5217904!2d10.034367999999999!4m5!1s0x47996957e15e9a79%3A0x87e0c33537691711!2sBernstadt!3m2!1d48.5223576!2d10.0361266!4m5!1s0x479969586c5a2d47%3A0xab4b3cce35c28433!2s89182%20Bernstadt%2C%20Deutschland!3m2!1d48.521524!2d10.0389156!4m5!1s0x479969590195f7d7%3A0xe882a0910271e4e!2s89182%20Bernstadt%2C%20Deutschland!3m2!1d48.5191905!2d10.0395717!4m5!1s0x4799695f0b4d4ab1%3A0x40dccccaae82ebdb!2sBernstadt!3m2!1d48.5187424!2d10.0486025!4m3!3m2!1d48.5181373!2d10.0426827!4m3!3m2!1d48.5192681!2d10.0456451!4m5!1s0x4799695f0b4d4ab1%3A0x40dccccaae82ebda!2sBernstadt!3m2!1d48.5187424!2d10.0486025!5e1!3m2!1sde!2sde!4v1629624731896!5m2!1sde!2sde" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
    
    <Text>
      Im Yogasutra, dem grundlegendsten und wichtigsten Werk über
    Yoga, das vor fast 2000 Jahren von Patanjali verfasst wurde,
    beschreibt dieser die innere und äußere Entwicklung des
    Menschen hin zu einer körperlichen und geistigen Gesundheit.
    Patanjali beschreibt diese Entwicklung mit einem achtgliedrigen
    Yoga-Weg. Der Mensch wird ermutigt, seine persönliche Entwicklung selbst in die Hand zu nehmen.

    Die einzelnen Stationen des Yoga-Weges im Lonetal bringen uns
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
