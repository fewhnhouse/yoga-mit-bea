<script>
  import Divider from "../../components/Divider.svelte";
  import Button from "../../components/Button.svelte";

  export let podcast;
  export let currentPodcast;
  export let handleClick;
  export let isPlaying;
  export let currentTime = 0;
  export let duration = 1;

  const createDate = lastModified => {
    const date = new Date(lastModified);
    return date.toLocaleDateString();
  };
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
</div>
<progress value={currentTime} max={duration} />

<div class="footerContainer">
  <Button class="button" on:click={handleClick(podcast)}>
    <i
      class={`fas ${isPlaying && currentPodcast && podcast.etag === currentPodcast.etag ? 'fa-pause' : 'fa-play'}`} />
    {currentPodcast && podcast.etag === currentPodcast.etag ? (isPlaying ? 'Pause' : 'Play') : 'Zuhören'}
  </Button>
</div>
