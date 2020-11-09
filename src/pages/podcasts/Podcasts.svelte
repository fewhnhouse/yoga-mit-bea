<script>
  import axios from "axios";
  import { onDestroy } from "svelte";
  import Card from "../../components/Card.svelte";
  import Play from "./Play.svelte";
  import Button from "../../components/Button.svelte";
  import Divider from "../../components/Divider.svelte";
  import PodcastCard from "./PodcastCard.svelte";
  import LoadingIndicator from "../../components/LoadingIndicator.svelte";

  let isLoading = true;
  let podcasts = [];
  let timeout = "";

  const { apiUrl } = process.env;
  const t0 = performance.now();

  axios.get(`https://yoga-mit-bea-server.fewhnhouse.vercel.app/api/podcasts`).then(res => {
    const t1 = performance.now();
    podcasts = res.data.map(podcast => ({
      ...podcast,
      displayName: podcast.name.split(".")[0]
    }));
    if (t1 - t0 > 1000) {
      isLoading = false;
    } else {
      timeout = setTimeout(() => {
        isLoading = false;
      }, 1000);
    }
  });

  onDestroy(() => {
    clearTimeout(timeout);
  });
</script>

<style>
  .podcastContainer {
    display: flex;
    flex-wrap: wrap;
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
    <h1>Podcasts</h1>
    <div class="podcastContainer">
      {#each podcasts as podcast}
        <Card>
          <PodcastCard podcast={podcast} />
        </Card>
      {/each}
    </div>

  </div>
{/if}
