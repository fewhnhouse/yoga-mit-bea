<script>
  import axios from 'axios'
  import { onDestroy } from 'svelte'
  import Card from '../../components/Card.svelte'
  import Text from '../../components/Text.svelte'
  import Play from './Play.svelte'
  import Button from '../../components/Button.svelte'
  import Divider from '../../components/Divider.svelte'
  import PodcastCard from './PodcastCard.svelte'
  import LoadingIndicator from '../../components/LoadingIndicator.svelte'

  let isLoading = true

  onDestroy(() => {
    clearTimeout(timeout)
  })
</script>

<div class="outerContainer">
  <h1>Yoga Online</h1>
  <h4>Ab jetzt immer Montags von 18:00-19:15 Uhr</h4>
  <!-- <h4>Derzeit findet kein Online-Yoga statt.</h4> -->
  <div class="">
    <Text>
      Drücke
      <b
        ><a class="onlineLink" href="https://join.skype.com/fIUZqOL3JCxK"
          >hier</a
        ></b
      >, um meiner Skype-Gruppe Yoga mit Bea beizutreten. Melde dich entweder
      mit deinem Skype-Konto an, oder trete als Gast bei, falls du kein Konto
      hast.
      <br />
      Nachdem du beigetreten bist, kannst du an jeder Online Yoga-Stunde teilnehmen,
      sobald ich diese starte. Aufzeichnungen der Stunden lassen sich bis zu 30 Tage
      danach über den Chatverlauf abrufen.
      <br />
      Falls du einer Yogastunde beitrittst, ob live oder via Aufzeichnung, streiche
      bitte eine Yoga-Stunde auf deinem Block ab. Wenn du keinen Block hast, melde
      dich bitte bei mir.
    </Text>
    <Button>
      <a class="onlineLink" href="https://join.skype.com/fIUZqOL3JCxK"
        >Yoga mit Bea Online beitreten</a
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
