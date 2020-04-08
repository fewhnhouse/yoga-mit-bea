<script>
  import mediaStore from "../utils/mediaStore.js";
  export let src = "placeholder.png";
  export let alt = "image";
  export let height = "100%";
  export let width = "100%";

  $: isMobile = mediaStore("(max-width: 800px)");
</script>

<style>
  .imageContainer {
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    transform: scale(1);
    object-fit: cover;
    transition: transform 0.5s ease-in-out;
  }
  img:hover {
    transform: scale(1.05);
  }

  @media (max-width: 800px) {
    .imageContainer {
      margin: 0px 40px;
    }
  }
</style>

<div
  class="imageContainer"
  style={`width: ${$isMobile ? 'calc(100% - 80px)' : width}; height: ${height}; min-width: ${width}; min-height: ${height};`}>
  <img {src} {alt} />
</div>
