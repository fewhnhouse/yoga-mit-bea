<script>
  import Divider from "./Divider.svelte";
  export let quote = "Lorem ipsum";
  export let author = "";
</script>

<style>
  .quote {
    font-style: italic;
    font-size: 20px;
    text-align: center;
    margin: auto;
  }
  div {
    margin: 60px 0px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .author {
    width: 100%;
    text-align: right;
    opacity: 0.6;
    font-size: 18px;
    position: relative;
    float: right;
    top: -30px;
  }
  @media (max-width: 800px) {
    div {
      margin: 40px 0px;
    }
  }
</style>

<div>
  <span class="quote">{quote}</span>
</div>
<span class="author">{author}</span>
