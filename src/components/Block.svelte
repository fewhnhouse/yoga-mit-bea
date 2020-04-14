<script>
  import ShortDivider from "./ShortDivider.svelte";
  import HoverImage from "./HoverImage.svelte";
  import Text from "./Text.svelte";
  import Button from "./Button.svelte";

  export let direction;
  export let imgSrc = "";
  export let title = "";
  export let text = "";
  export let size = "normal";
  export let more;
  export let action;
  export let fit;

  const handleClick = e => action(e);
</script>

<style>
  .container {
    padding: 10px;
    width: calc(100% - 20px);
    display: flex;
    align-items: center;
  }

  .container-normal {
    flex-direction: row;
  }
  .container-reverse {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  .textContainer {
    margin: 0px 40px;
    width: calc(100% - 80px);
  }

  @media (max-width: 800px) {
    .container-normal,
    .container-reverse {
      width: 100%;
      flex-direction: column;
    }

    .container {
      padding: 0px;
    }
  }
</style>

<div
  class={`container ${direction === 'left' ? 'container-normal' : 'container-reverse'}`}>
  {#if imgSrc}
    <HoverImage
      {fit}
      src={imgSrc}
      alt="logo"
      width={'250px'}
      height={'250px'} />
  {/if}
  <div class="textContainer">
    {#if size === 'small'}
      <h2>{title}</h2>
    {:else}
      <h1>{title}</h1>
      <ShortDivider />
    {/if}
    <Text>{text}</Text>
    <slot />
    {#if more}
      <Button on:click={handleClick}>Mehr erfahren</Button>
    {/if}
  </div>
</div>
