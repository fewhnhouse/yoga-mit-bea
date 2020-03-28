<script>
  export let src = "placeholder.png";
  export let alt = "image";
  export let height = "100%";
  export let width = "100%";
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
</style>

<div
  class="imageContainer"
  style={`width: ${width}; height: ${height}; min-width: ${width}; min-height: ${height};`}>
  <img {src} {alt} />
</div>
