<script>
  import Card from "../../components/Card.svelte";
  export let title;
</script>

<style>
  .cardContainer {
    width: 100%;
    display: flex;
    margin: 20px 0px;
    justify-content: space-between;
  }

  .outerContainer {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
</style>

<div class="outerContainer">
  <h1>{title}</h1>
  <div class="cardContainer">
    <Card>Content</Card>
    <Card>Content</Card>
    <Card>Content</Card>
  </div>
</div>
