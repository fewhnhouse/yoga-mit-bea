<script>
  import Card from "../../components/Card.svelte";
  import Divider from "../../components/Divider.svelte";
  import Button from "../../components/Button.svelte";

  export let duration = "60min";
  export let title = "Title";
  export let price = "0€";
</script>

<style>
  .priceCardContainer {
    width: 220px;
  }

  .duration {
    opacity: 0.6;
    font-size: 14px;
    margin: 5px 0px;
  }

  .innerFlex {
    display: flex;
    flex-direction: column;
  }

  .price {
    font-size: 20px;
    margin: 5px 0px;
  }

  .innerPriceCard {
    padding: 20px;
  }
</style>

<div class="priceCardContainer">
  <Card>
    <div class="innerPriceCard">
      <h4>{title}</h4>
      <div class="innerFlex">
        <span class="duration">
          <i class="far fa-clock" />
          {duration}
        </span>
        <span class="price">{price}</span>
      </div>
      <Divider margin={10} />
      <Button fullWidth label="Kontakt"></Button>
    </div>
  </Card>
</div>
