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
  let podcasts = []
  let timeout = ''

  const { apiUrl } = process.env
  const t0 = performance.now()

  axios.get(`https://yoga-mit-bea-server.now.sh/api/podcasts`).then((res) => {
    const t1 = performance.now()
    podcasts = res.data.map((podcast) => ({
      ...podcast,
      displayName: podcast.name.split('.')[0],
    }))
    if (t1 - t0 > 1000) {
      isLoading = false
    } else {
      timeout = setTimeout(() => {
        isLoading = false
      }, 1000)
    }
  })

  onDestroy(() => {
    clearTimeout(timeout)
  })
</script>

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

{#if isLoading}
  <div class="loadingContainer">
    <LoadingIndicator />
  </div>
{:else}
  <div class="outerContainer">
    <h1>Yoga Online</h1>
    <div class="podcastContainer">
      <Text>
        Drücke
        <b><a
            class="onlineLink"
            href="https://join.skype.com/fIUZqOL3JCxK">hier</a></b>, um meiner
        Skype-Gruppe Yoga mit Bea beizutreten. Melde dich entweder mit deinem
        Skype-Konto an, oder trete als Gast bei, falls du kein Konto hast.
        <br />
        Nachdem du beigetreten bist, kannst du an jeder Online Yoga-Stunde
        teilnehmen, sobald ich diese starte. Aufzeichnungen der Stunde lassen
        sich bis zu 30 Tage danach über den Chatverlauf abrufen.
        <br />
        Falls du einer Yogastunde beitrittst, ob live oder via Aufzeichnung,
        streiche bitte eine Yoga-Stunde auf deinem Block ab.
      </Text>
      <Button>
        <a class="onlineLink" href="https://join.skype.com/fIUZqOL3JCxK">Yoga
          mit Bea Online beitreten</a>
      </Button>
    </div>
    <h1>Podcasts</h1>
    <div class="podcastContainer">
      {#each podcasts as podcast}
        <Card>
          <PodcastCard {podcast} />
        </Card>
      {/each}
    </div>
  </div>
{/if}
