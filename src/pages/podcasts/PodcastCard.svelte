<script>
  import axios from "axios";
  import Divider from "../../components/Divider.svelte";
  import Button from "../../components/Button.svelte";
  import { onMount } from "svelte";

  export let podcast;
  const { apiUrl } = process.env;

  let isPlaying = false;
  let audio;
  let audioSrc = "";
  let currentTime = "";
  let duration = "";

  const handleClick = () => {
    if (isPlaying) {
      audio.pause();
      isPlaying = false;
    } else {
      audio.play().then(() => {
        isPlaying = true;
      });
    }
  };

  const createDate = lastModified => {
    const date = new Date(lastModified);
    return date.toLocaleDateString();
  };

  onMount(() => {
    axios.get(`${apiUrl}/api/podcasts/${podcast.name}`).then(res => {
      audioSrc = res.data;
      audio.addEventListener(
        "timeupdate",
        event => {
          currentTime = Math.floor(audio.currentTime);
          duration = Math.floor(audio.duration);
        },
        false
      );
      audio.addEventListener(
        "loadeddata",
        event => {
          duration = Math.floor(audio.duration);
        },
        false
      );
    });
  });
</script>

<style>
  .cardContainer {
    padding: 20px;
    width: 200px;
  }

  .button {
    width: 80px;
  }

  .header {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-transform: uppercase;
    font-weight: 200;
    margin: 0;
  }

  .date {
    display: block;
    margin: 10px 0px;
    color: var(--text-color);
    opacity: 0.6;
    font-size: 12px;
  }
  i {
    margin-right: 10px;
  }

  .footerContainer {
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    width: calc(100% - 40px);
    align-items: center;
  }

  .progressContainer {
    background: var(--white);
    height: 1px;
    width: 100%;
  }

  .progress {
    height: 1px;
    background: var(--primiary-color);
  }
  progress[value] {
    /* Reset the default appearance */
    -webkit-appearance: none;
    appearance: none;

    width: 100%;
    height: 2px;
  }
  progress[value]::-webkit-progress-bar {
    background-color: #eee;
    border-radius: 2px;
  }
  progress[value]::-webkit-progress-value {
    background-color: var(--primary-color);
    border-radius: 2px;
  }
</style>

<div class="cardContainer">
  <h4 class="header">{podcast.displayName}</h4>
  <span class="date">
    <i class="far fa-calendar-alt" />
    {createDate(podcast.lastModified)}
  </span>
  <span class="date">
    <i class="far fa-clock" />
    {Math.floor(duration / 60)} min
  </span>
</div>
<progress value={currentTime} max={duration} />

<div class="footerContainer">

  <audio controls bind:this={audio} src={audioSrc} id="audio" />
</div>
