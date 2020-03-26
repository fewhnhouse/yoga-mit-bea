<script>
  import { onDestroy } from "svelte";
  export let isPlaying;
  let heights = [20, 20, 20];
  const interval = setInterval(() => {
    heights = heights.map(val => (isPlaying ? Math.random() * 25 + 10 : 20));
  }, 500);
  onDestroy(() => clearInterval(interval));
</script>

<style>
  .container {
    border: 1px solid white;
    border-radius: 1px;
    display: flex;
    width: 40px;
    height: 40px;
    justify-content: space-around;
    align-items: flex-end;
  }
  .bar {
    height: 30px;
    width: 8px;
    background: var(--white);
    transition: height 0.5s ease-in-out;
  }
</style>

<div class="container">
  {#each heights as height}
    <div class="bar" style={`height:${height}px`} />
  {/each}
</div>
