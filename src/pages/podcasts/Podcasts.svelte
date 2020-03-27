<script>
  import axios from "axios";
  import Card from "../../components/Card.svelte";
  import Play from "./Play.svelte";
  import Button from "../../components/Button.svelte";
  import Divider from "../../components/Divider.svelte";

  let src = "favicon.png";
  let audio;

  let audioSrc = "";
  let currentPodcast = "";
  let podcasts = [];
  let isPlaying = false;
  axios.get("http://localhost:3000/api/podcasts").then(res => {
    podcasts = res.data.map(podcast => ({
      ...podcast,
      name: podcast.name.split(".")[0]
    }));
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

  $: console.log(currentPodcast)

  const createDate = lastModified => {
    const date = new Date(lastModified);
    return date.toLocaleDateString();
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

  .cardContainer {
    padding: 20px;
    width: 200px;
  }
  .footerContainer {
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    width: calc(100% - 40px);
    align-items: center;
  }

  .button {
    width: 80px;
  }

  h2 {
    margin: 0px;
  }

  .date {
    color: var(--text-color);
    opacity: 0.6;
    font-size: 12px;
  }
  i {
    margin-right: 10px;
  }
</style>

<div class="outerContainer">
  <div class="podcastContainer">
    {#each podcasts as podcast}
      <Card>
        <div class="cardContainer">
          <h2>{podcast.name}</h2>
        </div>
        <Divider margin={5} />
        <div class="footerContainer">
          <Button class="button" on:click={handleClick(podcast.name)}>
            <i
              class={`fas ${isPlaying && podcast.name === currentPodcast ? 'fa-pause' : 'fa-play'}`} />
            {podcast.name === currentPodcast ? (isPlaying ? 'Pause' : 'Play') : 'Listen'}
          </Button>
          <span class="date">{createDate(podcast.lastModified)}</span>
        </div>
      </Card>
    {/each}
  </div>
</div>
<div class="audioContainer">
  <Play {isPlaying} />
  <audio autoplay bind:this={audio} src={audioSrc} id="audio" />
</div>
