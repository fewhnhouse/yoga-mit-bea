<script>
  import axios from "axios";
  import Card from "../../components/Card.svelte";
  import Play from "./Play.svelte";
  let src = "favicon.png";
  let audio;

  let audioSrc = "";
  let currentPodcast = "";
  let podcasts = [];
  let isPlaying = false;
  axios.get("http://localhost:3000/api/podcasts").then(res => {
    console.log(res);
    podcasts = res.data;
  });
  const handleClick = podcast => () => {
    if (currentPodcast === podcast) {
      if (isPlaying) {
        audio.pause();
        isPlaying = false;
      } else {
        audio.play();
        isPlaying = true;
      }
    } else {
      axios.get(`http://localhost:3000/api/podcasts/${podcast}`).then(res => {
        audioSrc = res.data;
        currentPodcast = podcast;
        isPlaying = true;
      });
    }
  };
</script>

<style>
  .podcastContainer {
    display: flex;
  }
  .outerContainer {
    height: 100%;
    min-height: 100vh;
    overflow: hidden;
  }
  .audioContainer {
    display: flex;
    align-items: center;
    padding: 0px 10px;
    position: fixed;
    bottom: 0px;
    left: 0px;
    height: 60px;
    width: 100%;
    background: var(--dark-grey);
  }
</style>

<div class="outerContainer">
  <div class="podcastContainer">
    {#each podcasts as podcast}
      <Card>
        <div>
          <h1>{podcast.name}</h1>
          <button on:click={handleClick(podcast.name)}>
            {podcast.name === currentPodcast ? (isPlaying ? 'Pause' : 'Play') : 'Listen'}
          </button>
        </div>
      </Card>
    {/each}
  </div>
</div>
<div class="audioContainer">
  <Play {isPlaying} />
  <audio autoplay bind:this={audio} src={audioSrc} id="audio" />
</div>
