<script>
  import Card from "../../components/Card.svelte";
  import Divider from "../../components/Divider.svelte";
  import Button from "../../components/Button.svelte";

  export let days = [
    { title: "Montag", times: ["10:00 - 12:30", "14:00-16:00"] }
  ];
</script>

<style>
  .dateCardContainer {
    min-width: 300px;
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

  .daysContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  .dayContainer {
    margin: 0px 10px;
    width: 100px;
  }

  .dayContainer:first-child,
  .dayContainer:last-child {
    margin: 0;
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
      <div class="daysContainer">
        {#each days as day}
          <div class="dayContainer">
            <h5>{day.title}</h5>
            {#each day.times as time}
              <div class="innerFlex">
                <span class="duration">{time}</span>
              </div>
            {/each}
          </div>
        {/each}
      </div>
    </div>
  </Card>
</div>
