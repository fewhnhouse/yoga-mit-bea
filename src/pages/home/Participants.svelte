<script>
  import Carousel from "@beyonk/svelte-carousel";
  import { onMount } from "svelte";
  import mediaStore from "../../utils/mediaStore.js";
  $: isMobile = mediaStore("(max-width: 800px)");
</script>

<style>
  .slideContainer {
    padding: 0px 40px 80px 40px;
    width: 70%;
    margin: auto;
  }
  .text {
    text-align: justify;
    line-height: 25px;
    color: var(--text-color);
  }
  h1 {
    text-align: center;
  }

  .author {
    float: right;
  }

  i {
    font-size: 20px;
    color: var(--light-grey);
  }
</style>

<h1>Teilnehmerstimmen</h1>

<Carousel
  perPage={{ 1600: 3, 1000: 2, 500: 1 }}
  autoplay={$isMobile ? 0 : 48000}
  duration={500}>
  <span class="control" slot="left-control">
    <i class="fas fa-chevron-left" />
  </span>
  <div class="slideContainer slide-content">
    <p class="text">
      An Deinen Yogastunden gefällt mir die Ruhe, mit der Du die Stunden
      gestaltest. Mir hilft auch sehr, dass Du die Übungen immer lange ansagst,
      bevor wir alleine üben können. Somit kann man immer wieder einsteigen,
      wenn man einmal mit den Gedanken abgewandert ist. Sehr gut ist auch, dass
      Du immer wieder sagst „jeder übt so gut er kann“, es gibt keinen
      Leistungsdruck.
    </p>
    <span class="author">Ursula</span>

  </div>
  <div class="slideContainer slide-content">
    <p class="text">
      Ich geniese Bea live in der Gruppe im Bernstadter Schloss schon viele,
      viele Jahre! Selbst mit grösseren Verletzungen und körperlichen
      Einschränkungen hast du mich liebe Bea durch die Yogastunden geführt und
      ich konnte schnelle Genesung erleben! DANKE
      <br />
       „Was von Herzen kommt soll auf Herzen wirken.“
      <br />
      ALI - atmen lächeln ( auch mit dem Herzen) innehalten - ist für mich zum
      liebevollen Alltagsbegleiter geworden. Ergänzend möchte ich den
      wundervollen Text von Mandy Hale zitieren:
      <br />
      „Du musst nicht immer einen Plan haben. Manchmal musst du nur atmen,
      vertrauen, loslassen und schauen was passiert.“
      <br />
      Von ganzem Herzen  DANKESCHÖN liebe Bea für die wundervollen
      Yogaeinheiten!
    </p>
    <span class="author">Annette</span>
  </div>
  <div class="slideContainer slide-content">
    <p class="text">Yoga mit Bea macht glücklich.</p>
    <span class="author">Brigitte</span>
  </div>
  <div class="slideContainer slide-content">
    <p class="text">
      Bea deine Yogastunden sind phantastisch! Durch deine empathische,
      empfindsame, ruhige, besonnene, herzliche Art fühle ich mich nach deinen
      Yogastunden immer mit mir in einem Gleichgewicht! Auch im Alltag versuche
      ich durch deine gezeigten Atemübungen wieder zur Ruhe zu kommen!
      <br />
      Durch deine Yogastunden hat sich meine Sensibilität für meinen Körper,
      meinen Atem, meine Gedanken im Kopf („Affen im Kopf“, wie du immer so
      schön sagst) und auch für den Umgang mit meinen Mitmenschen unsagbar
      positiv erweitert!  Jede Yogastunde ist eine unermessliche Bereicherung
      für mich!
    </p>
    <span class="author">Dagmar</span>
  </div>
  <div class="slideContainer slide-content">
    <p class="text">
      Für mich hat diese späte Yoga Stunde eine ganz eigene Qualität, da ich
      meinen Tag damit abschließe, entschleunige, zur Ruhe komme, mich intensiv
      auf meinen Atem, meine Bewegungen auf mich selber, meinen Körper
      konzentriere. Das Ambiente in dem schönen Schloßzimmer, gibt mir das
      Gefühl,  in einem ganz besonders geschützten Raum zu sein. Ich freue mich
      auf die nächste Yogastunde.
    </p>
    <span class="author">Heidrun</span>
  </div>
  <div class="slideContainer slide-content">
    <p class="text">
      Jeden Dienstag gehe ich komplett anders aus der Stunde hinaus als ich
      hereingekommen bin. Wahnsinn. Jeden Dienstag aufs Neue. Als kritischer
      Mensch hinein. Als selbstliebender hinaus.
      <br />
      Dafür danke ich dir sehr!!  Doof, dass man diese Haltung nach einer Woche
      vergessen hat. Oder vielmehr vielleicht auch verdrängt. Denn oft lässt der
      Alltag solche Selbst-Wertschätzung nicht zu. Weiter. Schneller. Höher. Das
      ist das, was man oft leisten musst. Und dann muss man ja auch noch auf
      seine Ernährung achten. Achja und Sport!! Sport sollte auch nicht zu kurz
      kommen. Wer sagt das eigentlich? Wer bestimmt das? Jeden Dienstag nach
      deiner Yogastunde bestimme wieder ICH, was ich möchte. Mir guttut. Und auf
      was ich Hunger habe ;-) Diese innere Stimme ist dann noch eine Weile bei
      mir. Und ab und zu.. höre ich sie auch im Alltag. Und sage „Stopp!!“ „ A
      little letting go“ Und das hilft mir dann bis zur nächsten Yogastunde am
      Dienstagabend… :) Ich übe es. Und werde besser. Auf weiteres Üben mit dir
      freue ich mich sehr.
    </p>
    <span class="author">Annika</span>
  </div>
  <div class="slideContainer slide-content">
    <p class="text">
      In meinen öfteren und langen Aufenthalten in Indien habe ich selber aus
      dem Land des Yogaursprungs vieles über Yoga gelernt und erfahren. Sehr
      wichtig ist, dass die Praktizierenden unterstützt werden, durch die Asanas
      ihren persönlichen Weg zu entwickeln,  in Kontakt zu kommen mit ihrer
      innersten,  heilen Essenz aus der sie dann bewusst und frei leben können.
      <br />
      Beate hat in ihrer Art die Yogaübungen anzuleiten spürbar diesen
      Hintergrund. Die Asanas sind wichtig. Beate leitet sie verständlich und
      korrekt an und gleichzeitig vermittelt sie durch ihre wertfreie
      Einfühlsamkeit in jeden Praktizierenden in seiner Entwicklungsebene, dass
      jeder individuelle Weg die Asanas zu üben immer bestmöglich für die
      betreffende Person im Moment ist. Jeder wird damit in der eigenen
      Kompetenz ermächtigt, den persönlichen Weg zum innersten Selbst zu finden.
    </p>
    <span class="author">Cornelia</span>
  </div>
  <div class="slideContainer slide-content">
    <p class="text">
      Bea-Poesie ✿ ✺ ॐ ❊ ❂ ❁ ❀ ✿ ✺ ॐ ❊ ❂ ❁ ❀
      <br />
      <br />
      Unser Atem führt uns durch jede Stunde und wir erfahren ihn in gemeinsamer
      Runde.
      <br />
      Wir atmen ein und atmen aus und kommen aus unserem Alltag raus.
      <br />
      Wir hören Deine Stimme und geben ab, was unsere Seele an Ballast hat.
      Sobald wir unsere Augen schließen,  atmen, dehnen, strecken, fließen, sind
      wir auf einmal ganz achtsam im Hier, lassen Gedanken los und folgen Dir.
      <br />
      So finden wir das kleine Glück, immer leichter, Stück für Stück.
      <br />
      Heute wollen wir diese Zeit nicht mehr missen, mit Blumen und Kerzenschein
      auf unseren Matten und Kissen.
      <br />
      Wir lernen nicht nur die Sonne und den Mond zu grüßen, sondern stehen auch
      jedes Mal ein bisschen fester auf den eigenen Füßen.
      <br />
      Dafür danken wir Dir! Aber auch für Deine Energie, Deine Herzlichkeit und
      Dein Lachen und wir hoffen sehr, dass wir noch lange so weitermachen. ♡
    </p>
    <span class="author">Caro</span>
  </div>
  <div class="slideContainer slide-content">
    <p class="text">
      Yoga mit
      <br />
      B  eruhigend
      <br />
      E  ntspannend
      <br />
      A  usgleichend
    </p>
    <span class="author">Karin</span>
  </div>
  <span class="control" slot="right-control">
    <i class="fas fa-chevron-right" />
  </span>
</Carousel>
