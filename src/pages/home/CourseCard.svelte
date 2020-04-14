<script>
  import Divider from "../../components/Divider.svelte";
  import ShortDivider from "../../components/ShortDivider.svelte";
  import Button from "../../components/Button.svelte";
  import Card from "../../components/Card.svelte";
  import { Link } from "svelte-routing";

  export let title;
  export let description;
  export let link;
</script>

<style>
  .cardContent {
    padding: 20px;
    min-width: 200px;
    max-width: 300px;
    height: 270px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  p {
    color: var(--text-color);
    opacity: 0.6;
    line-height: 30px;
  }

  .cardContainer {
    flex: 1;
    max-width: 300px;
    height: 320px;
  }
</style>

<div class="cardContainer">

  <Card>
    <div class="cardContent">
      <h2>{title}</h2>
      <ShortDivider />
      <p>
        {#if description}
          {description}
        {:else}
          <slot />
        {/if}
      </p>

      <Divider />
      <Link to={link}>
        <Button fullWidth>Weitere Infos</Button>
      </Link>
    </div>
  </Card>
</div>
