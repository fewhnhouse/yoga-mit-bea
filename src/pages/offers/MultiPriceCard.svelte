<script>
  import Card from "../../components/Card.svelte";
  import Divider from "../../components/Divider.svelte";
  import Button from "../../components/Button.svelte";

  export let priceCategories = [];
</script>

<style>
  .priceCardContainer {
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

  .priceCategoriesContainer {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  .categoryContainer {
    flex: 1;
    min-width: 150px;
    margin: 0px 30px;
    margin: 0px 10px;
  }

  .categoryContainer:first-child {
    margin-left: 0px;
  }
  .categoryContainer:last-child {
    margin-right: 0px;
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

   h5 {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  .description {
    font-size: 12px;
    font-weight: lighter;
    margin-bottom: 20px;
  }
</style>

<div class="priceCardContainer">
  <Card>
    <div class="innerPriceCard">
      <h4>Preise</h4>
      <div class="priceCategoriesContainer">
        {#each priceCategories as category}
          <div class="categoryContainer">
            <h5>{category.title}</h5>
            <p class="description">{category.description}</p>
            <div>
              {#each category.prices as price}
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
        {/each}
      </div>
    </div>
  </Card>
</div>
