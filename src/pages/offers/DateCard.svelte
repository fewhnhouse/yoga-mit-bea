<script>
  import Card from "../../components/Card.svelte";
  import Divider from "../../components/Divider.svelte";
  import Button from "../../components/Button.svelte";

  export let day = "Montag";
  export let times = ["10:00 - 12:30", "14:00-16:00"];
</script>

<style>
  .dateCardContainer {
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
    flex-direction: column;
  }

  h4 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .innerPriceCard {
    padding: 20px;
    height: 260px;
  }
</style>

<div class="dateCardContainer">
  <Card>
    <div class="innerPriceCard">
      <h4>Termine</h4>
      <h5>{day}</h5>
      <div class="innerFlex">
        {#each times as time}
          <span class="duration">{time}</span>
        {/each}
      </div>
    </div>
  </Card>
</div>
