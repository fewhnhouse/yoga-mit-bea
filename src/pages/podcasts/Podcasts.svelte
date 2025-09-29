<script>
  import Text from '../../components/Text.svelte'
  import Button from '../../components/Button.svelte'

</script>

<div class="outerContainer">
  <h1>Yoga Online</h1>
  <h4>Ab jetzt immer Montags von 18:30-19:45 Uhr</h4>
  <!-- <h4>Derzeit findet kein Online-Yoga statt.</h4> -->
  <div class="">
    <Text>
      Drücke
      <b
        ><a class="onlineLink" href="https://meet.google.com/bfr-ptin-dha"
          >hier</a
        ></b
      >, um online dem Üben von Yoga mit Bea beizutreten. Melde dich entweder
      mit deinem Google-Konto an, oder trete als Gast bei, falls du kein Konto
      hast.
      <br />
      Gerne kannst du jederzeit auch direkt über diesen Link beitreten. Speichere dir den Google Meet Link hierzu einfach in deinen Favoriten ab.
      <br />
      Falls du einer Yogastunde beitrittst, streiche
      bitte eine Yoga-Stunde auf deiner Karte ab. Wenn du keine Karte hast, melde
      dich bei mir.
    </Text>
    <Button>
      <a class="onlineLink" href="https://meet.google.com/bfr-ptin-dha"
        >Yoga mit Bea Üben online beitreten</a
      >
    </Button>
  </div>
</div>

<style>
  .podcastContainer {
    display: flex;
    flex-wrap: wrap;
  }

  .onlineLink {
    color: var(--primary-color);
  }

  .loadingContainer {
    width: 100%;
    height: calc(100vh - 60px);
    padding-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .outerContainer {
    padding: 20px;
    padding-top: 80px;
    height: 100%;
    min-height: 100vh;
    overflow: hidden;
  }

  @media (max-width: 500px) {
    .podcastContainer {
      flex-direction: column;
      justify-content: center;
    }
  }
</style>
