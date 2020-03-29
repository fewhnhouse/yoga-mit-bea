<script>
  import axios from "axios";
  import { onDestroy } from "svelte";
  import Card from "../../components/Card.svelte";
  import Play from "./Play.svelte";
  import Button from "../../components/Button.svelte";
  import Divider from "../../components/Divider.svelte";
  import PodcastCard from "./PodcastCard.svelte";
  import LoadingIndicator from "../../components/LoadingIndicator.svelte";

  let audio;
  let audioSrc = "";
  let currentTime = "";
  let duration = "";
  let currentPodcast = null;
  let isLoading = true;
  let podcasts = [];
  let isPlaying = false;
  let timeout = "";

  const t0 = performance.now();

  axios.get("http://localhost:3000/api/podcasts").then(res => {
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

  const handleClick = podcast => () => {
    if (currentPodcast && currentPodcast.etag === podcast.etag) {
      if (isPlaying) {
        audio.pause();
        isPlaying = false;
      } else {
        audio.play().then(() => {
          isPlaying = true;
        });
      }
    } else {
      axios
        .get(`http://localhost:3000/api/podcasts/${podcast.name}`)
        .then(res => {
          audioSrc = res.data;
          currentPodcast = podcast;
          isPlaying = true;
          audio.addEventListener(
            "timeupdate",
            event => {
              currentTime = Math.floor(audio.currentTime);
              duration = Math.floor(audio.duration);
            },
            false
          );
        });
    }
  };

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
          <PodcastCard
            currentTime={currentPodcast && currentPodcast.etag === podcast.etag ? currentTime : 0}
            duration={currentPodcast && currentPodcast.etag === podcast.etag ? duration : 0}
            {isPlaying}
            {handleClick}
            {podcast}
            {currentPodcast} />
        </Card>
      {/each}
    </div>
    <h1>Videos</h1>

  </div>
{/if}
<audio autoplay bind:this={audio} src={audioSrc} id="audio" />
