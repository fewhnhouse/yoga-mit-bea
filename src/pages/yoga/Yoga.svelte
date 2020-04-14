<script>
  import Block from "../../components/Block.svelte";
  import Text from "../../components/Text.svelte";
  import Divider from "../../components/Divider.svelte";
  import Quote from "../../components/Quote.svelte";
  import YogaQuote from "./YogaQuote.svelte";
  import Container from "../../components/Container.svelte";
</script>

<style>
  .textContainer {
    margin: 0px 40px;
  }
</style>

<Container>
  <Block imgSrc="patanjali.jpg" title="Yoga" text=" " direction="left">
    <Text>
      Die Quelle für ein tiefes und inniges Verständnis von Yoga ist das
      YOGASUTRA von Patanjali. Im YOGASUTRA, übersetzt „Leitfaden des Yoga“
      formulierte Patanjali vor mehr als 2000 Jahren sein Verständnis von Yoga.
      Die tiefe Weisheit in seinen Worten und ihre Kraft und Klarheit vermag die
      Menschen zu berühren und gab und gibt den Menschen zu jeder Zeit und auch
      heute in unserer modernen Welt eine wunderbare Anleitung für ein freies
      und friedvolles Leben und Menschsein.
      <br />
      Im YOGASUTRA 2.46 gibt uns Patanjali diese Anleitung fürs Yoga Üben:
    </Text>

  </Block>
  <YogaQuote
    word="sthirasukhamasanam"
    parts={[{ color: '#c27686', text: 'sthira', translation: 'stabil, fest' }, { color: '#76c2a2', text: 'sukha', translation: 'angenehm, leicht, das Wohlgefühl fördernd' }, { color: '#acc276', text: 'asanam', translation: 'Haltung' }]} />
  <div class="textContainer">

    <Text>
      Sriram übersetzt das Sutra so: „Die ideale Haltung ist stabil und leicht
      zugleich.“ Beim Yoga Üben eine Körperhaltung zu finden, in der du stabil
      und kraftvoll,
      <span style="color: #c27686">sthira</span>
      und gleichzeitig angenehm und entspannt,
      <span style="color: #76c2a2">sukha</span>
      sein kannst, ist der Idealfall. So sieht meine „ideale Haltung“
      wahrscheinlich anders aus als deine „ideale Haltung“. Es geht darum, die
      Haltung an den Menschen anzupassen und im
      <span style="color: #acc276">Asana</span>
      deine natürliche Form zu finden.
      <br />
      Im Gleichgewicht zu sein zwischen Kraft und Entspannung ist ein Ziel der
      körperlichen Yogapraxis. Das umsichtige Einfühlen in unseren Atem, der uns
      durchs Üben begleitet, lässt uns präsent im gegenwärtigen Moment sein und
      verbindet uns mit unserem Körper und mit unserem Geist. In der „idealen
      Haltung“ fließt der Atem angenehm, mühelos und leicht und wir erfahren in
      unserem Geist (unsere Gedanken und Gefühle) den Zustand von „sattva“. Der
      Geist ist dann klar, ruhig und friedvoll.
      <br />
      Yoga ist ein Erfahrungsweg. Ganz am Anfang, im ersten Sutra, sagt
      Patanjali:
    </Text>
  </div>

  <YogaQuote
    word="atha yoganusasanam"
    parts={[{ color: '#c27686', text: 'atha', translation: 'nun, jetzt; ein Glück verheißendes Wort' }, { color: '#76c2a2', text: 'yoga', translation: '' }, { color: '#acc276', text: 'anusasana', translation: 'das, was auf Erfahrung basiert' }]} />
  <div class="textContainer">

    <Text>
      In der Übersetzung von Sriram heißt es: „Jetzt folgt eine Einführung in
      Yoga, die auf Erfahrung beruht.“ Oder, frei nach Bea: „Jetzt geht´s los
      mit der Erfahrung von Yoga“. Lasst uns Yoga Üben mit dem Zauber von
      <span style="color: #c27686">atha</span>
      , der Verheißung von Glück. Lasst uns Üben, jetzt und immer wieder jetzt.
      <br />
      Lasst uns erfahren was ist, immer wieder, in jedem Moment.
      <br />
      Das ist die Erfahrung von Yoga.
    </Text>
  </div>
</Container>
