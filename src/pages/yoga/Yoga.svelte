<script>
  import Block from "../../components/Block.svelte";
  import Divider from "../../components/Divider.svelte";
  import Quote from "../../components/Quote.svelte";
</script>

<style>
  .container {
    padding: 20px;
    padding-top: 80px;
  }
  img {
    width: 100%;
    height: 300px;
    object-fit: contain;
  }
</style>

<div class="container">
  <img src="morgengruss.jpg" alt="Morgengruß" />
  <Block
    imgSrc="runs-stone.jpg"
    title="Yoga Mutra"
    text="Beim Yoga Üben eine Körperhaltung zu finden, in der du stabil und
    kraftvoll und gleichzeitig angenehm und entspannt sein kannst, ist der
    Idealfall. So sieht meine „ideale Haltung“ wahrscheinlich anders aus als
    deine „ideale Haltung“. Es geht darum, die Haltung an den Menschen
    anzupassen und im Asana deine natürliche Form zu finden. In der idealen,
    natürlichen Haltung fließt der Atem angenehm, mühelos und leicht, „sukha“."
    direction="left" />
  <Quote quote='Die ideale Haltung ist stabil und leicht zugleich' />
  <Block
    imgSrc="runs-stone.jpg"
    title="Über mich"
    text="Im Gleichgewicht sein zwischen Kraft und Entspannung ist ein Ziel der
    körperlichen Yogapraxis. Das umsichtige Einfühlen in unseren Atem, der uns
    wie ein ganz guter Freund durchs Üben begleitet, lässt uns präsent im
    gegenwärtigen Moment sein. Der Atem verbindet uns mit unserem Körper und mit
    unserem Geist und lässt uns erfahren, was ist. In der „idealen Haltung“
    erfahren wir in unserem Geist ( Gedanken, Gefühle ) den Zustand von
    „sattva“. Der Geist ist klar, ruhig und friedvoll. Das ist der Idealfall.
    Yoga ist ein Erfahrungsweg. Im ersten Sutra sagt Patanjali: „atha
    yoganusasanam“ YS 1.1 atha nun, jetzt; ein glückverheißendes Wort anusasana
    das, was auf Erfahrung basiert Sriram übersetzt: „Jetzt folgt eine
    Einführung in Yoga, die auf Erfahrung beruht.“ Oder, frei nach Bea: „jetzt
    geht´s los mit der Erfahrung von Yoga“  Lasst uns mit dem Üben von Yoga
    beginnen mit dem Zauber von „atha“, der Verheißung von Glück Lasst uns
    erfahren was ist, immer wieder, in jedem Moment "
    direction="right" />

</div>
