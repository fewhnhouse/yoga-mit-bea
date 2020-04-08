<script>
  import Card from "../../components/Card.svelte";
  import Divider from "../../components/Divider.svelte";
  import Button from "../../components/Button.svelte";

  export let title = "Title";
  export let prices = [];
</script>

<style>
  .priceCardContainer {
    width: 300px;
    height: 300px;
    min-width: 200px;
  }

  .duration {
    opacity: 0.6;
    font-size: 14px;
    margin: 5px 0px;
  }

  .innerFlex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .price {
    opacity: 0.8;
    font-size: 14px;
    margin: 5px 0px;
  }

  h4 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .innerPriceCard {
    height: 260px;
    padding: 20px;
  }
</style>

<div class="priceCardContainer">
  <Card>
    <div class="innerPriceCard">
      <h4>Preise</h4>
      <h5>{title}</h5>
      <div>
        {#each prices as price}
          <div class="innerFlex">
            <span class="duration">
              <i class="far fa-clock" />
              {price.duration}
            </span>
            <span class="price">{price.price}</span>
          </div>
          <Divider margin={10} />
        {/each}
      </div>
    </div>
  </Card>
</div>
