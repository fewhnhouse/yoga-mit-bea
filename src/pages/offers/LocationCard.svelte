<script>
  import Card from "../../components/Card.svelte";
  import Divider from "../../components/Divider.svelte";

  export let location = {
    name: "Schloss Bernstadt"
  };
  export let url =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6999301071755!2d10.019379215439603!3d48.50064573378284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799693437c52223%3A0x4dcdf2e663cc6e4f!2sRathaus%20%2F%20Gemeindeverwaltung!5e0!3m2!1sde!2sde!4v1585409445708!5m2!1sde!2sde";
</script>

<style>
  .gmapsCardContainer {
    width: 600px;
  }

  .locationInnerContainer {
    display: flex;
  }

  .locationTextContainer {
    margin: 0px 20px;
  }

  @media (max-width: 400px) {
    iframe {
      width: 0px;
    }

    .gmapsCardContainer {
      width: 100%;
    }
  }
</style>


<div class="gmapsCardContainer">
  <Card>
    <div class="locationInnerContainer">
      <iframe
        title="Google Maps"
        style="border-top-left-radius: 8px; border-bottom-left-radius: 8px;"
        src={url}
        width="300"
        height="300"
        frameborder="0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0" />
      <div class="locationTextContainer">
        <h4>{location.name}</h4>
      </div>
    </div>

  </Card>
</div>
