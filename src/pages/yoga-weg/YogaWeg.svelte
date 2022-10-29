<script>
  import Block from '../../components/Block.svelte'
  import Text from '../../components/Text.svelte'
  import HoverImage from '../../components/HoverImage.svelte'
  import Divider from '../../components/Divider.svelte'
  import Button from '../../components/Button.svelte'
  import PriceCard from '../offers/PriceCard.svelte'
  import DateCard from '../offers/DateCard.svelte'
  import LocationCard from '../offers/LocationCard.svelte'
</script>

<div class="page">
  <Block
    imgSrc="fohlenhaus.jpeg"
    title="Der Yoga-Weg im Lonetal ..."
    text=" "
    direction="left"
  >
    <Text>
      ... beginnt am Parkplatz Salzbühl. Dieser ist ca. 2 Kilometer von
      Bernstadt entfernt, gut erreichbar und ein idealer Ausgangs- punkt für
      Unternehmungen aller Art im Lonetal. Unser gemeinsamer Weg verläuft
      zunächst in einem schönen Bogen auf der linken Talseite am Waldrand mit
      teils weitem Blick über das Tal. Nach ca. 800 Metern geht der Yoga-Weg in
      einen beschaulichen Waldweg über und bietet ruhige und geschützte
      Übungsplätze. Der Yoga-Weg endet nach ca. 2 km auf einer schönen Erhebung
      im Wald gegenüber dem Fohlenhaus. Von diesem Punkt aus gibt es
      verschiedene Möglichkeiten weiterzuwandern.
    </Text>
  </Block>

  <Divider />
  <div class="flexContainer">
    <HoverImage
      mobileWidth="100%"
      width="50%"
      height="300px"
      src="weg.jpeg"
      alt="logo"
    />
    <Block>
      <Text>
        Im Yogasutra, dem grundlegendsten und wichtigsten Werk über Yoga, das
        vor fast 2000 Jahren von Patanjali verfasst wurde, beschreibt dieser die
        innere und äußere Entwicklung des Menschen hin zu einer körperlichen und
        geistigen Gesundheit. Patanjali beschreibt diese Entwicklung mit einem
        achtgliedrigen Yoga-Weg. Der Mensch wird ermutigt, seine persönliche
        Entwicklung selbst in die Hand zu nehmen. Die einzelnen Stationen des
        Yoga-Weges im Lonetal bringen uns die wesentlichen Inhalte dieser
        »Achtgliedrigkeit« auf eine einfache und verständliche Weise nah. Der
        respektvolle Umgang mit allem, was lebt und ein freundliches sowie
        verständnisvolles soziales Miteinander werden ebenso vermittelt wie der
        achtsame und freundliche Umgang mit uns selbst. Lass’ dich von mir
        mitnehmen auf eine achtsame und schöne Wanderung der besonderen Art.
        Allein, zu zweit oder in Gruppen ...
      </Text>
      <a target="_blank" href="https://goo.gl/maps/vXGWZKbFMBaqRWrh7">
        <Button>In Google Maps anschauen</Button>
      </a>
    </Block>
  </div>

  <div class="flexCardContainer">
    <LocationCard
      location={{
        name: 'Parkplatz Salzbühl',
        address: '',
        city: '89182 Bernstadt',
      }}
      url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10571.26818367823!2d10.0338777!3d48.5175718!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5a3dec573e66fdcb!2sParkplatz%20Salzb%C3%BChl!5e0!3m2!1sde!2sde!4v1638132313418!5m2!1sde!2sde"
    />
    <DateCard day="Flexibel" times={[]} />
    <PriceCard
      title="Yoga-Weg"
      prices={[
        {
          duration: 'ca. 2 Stunden, 6-10 TeilnehmerInnen',
          price: '25€ pro Person',
        },
        {
          duration: 'ca. 2 Stunden, ab 11 TeilnehmerInnen',
          price: '20€ pro Person',
        },
      ]}
    />
  </div>
</div>

<style>
  .flexContainer {
    width: 100%;
    margin: 0 !important;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }

  .flexCardContainer {
    display: flex;
    width: calc(100% - 20px);
    overflow: auto;
    padding: 10px;
  }

  .page {
    margin-top: 80px;
    min-height: 100vh;
  }

  @media (max-width: 1000px) {
    .flexContainer {
      margin: 0px 10px;
      flex-direction: column;
    }
  }
</style>
