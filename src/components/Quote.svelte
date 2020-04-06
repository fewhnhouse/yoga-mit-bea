<script>
  import Divider from "./Divider.svelte";
  export let quote = "Lorem ipsum";
</script>

<style>
  span {
    font-style: italic;
    font-size: 20px;
    text-align: center;
    margin: auto;
  }
  div {
    margin: 80px 0px;
    display: flex;
    justify-content: center;
  }
  @media (max-width: 800px) {
    div {
      margin: 20px;
    }
  }
</style>

<Divider />
<div>
  <span>{quote}</span>
</div>
<Divider />
