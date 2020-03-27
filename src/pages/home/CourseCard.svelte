<script>
  import Divider from "../../components/Divider.svelte";
  import ShortDivider from "../../components/ShortDivider.svelte";
  import Button from "../../components/Button.svelte";
  import Card from "../../components/Card.svelte";

  export let title;
  export let description;
  export let link;
</script>

<style>
  .cardContent {
    min-width: 200px;
    padding: 20px;
    flex: 1;
    max-width: 300px;
  }

  p {
    color: var(--text-color);
    opacity: 0.6;
    line-height: 30px;
  }
</style>

<Card>
  <div class="cardContent">
    <h2>{title}</h2>
    <ShortDivider />
    <p>{description}</p>
    <Divider />
    <Button fullWidth>Weitere Infos</Button>
  </div>
</Card>
