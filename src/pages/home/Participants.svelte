<script>
  import Carousel from "@beyonk/svelte-carousel";
</script>

<Carousel perPage={{ 800: 3, 500: 2 }} autoplay={3000} duration={500}>
  <div class="slide-content">
    <img src="deggingen.jpg" alt="test" />
  </div>
  <div class="slide-content">
    <img src="deggingen.jpg" alt="test" />
  </div>
  <div class="slide-content">
    <img src="deggingen.jpg" alt="test" />
  </div>
  <div class="slide-content">
    <img src="deggingen.jpg" alt="test" />
  </div>
</Carousel>
