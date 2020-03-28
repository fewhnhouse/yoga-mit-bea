<script>
  import { onDestroy } from "svelte";
  export let src = "";
  export let height = "200px";
  export let width = "200px";
  let scale = 1.0;
  const timeout = setTimeout(() => (scale += 0.1), 500);
  onDestroy(() => {
    clearTimeout(timeout);
  });
</script>

<style>
  img {
    width: 100%;
    height: 100%;
    transition: transform 8s linear;
    object-fit: cover;
  }

  .imageContainer {
    overflow: hidden;
  }
</style>

<div class="imageContainer" style={`width:${width}; height:${height};`}>
  <img {src} style={`transform: scale(${scale});`} alt="logo" />
  <slot />
</div>
