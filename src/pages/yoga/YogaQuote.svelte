<script>
  import Divider from "../../components/Divider.svelte";

  export let word = "";
  export let parts = [
    { color: "#fff", text: "Test", translation: "Translation" }
  ];
</script>

<style>
  h2.title {
    font-style: italic;
    text-transform: none;
    font-size: 24px;
    text-align: center;
    margin: 20px auto;
  }
  .partContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .part {
    margin: 5px;
    font-size: 20px;
  }
  .translation {
    margin: 5px;
    font-size: 16px;
    opacity: 0.7;
  }
  .outerContainer {
    display: flex;
    padding: 20px;
    flex-direction: column;
  }
  .innerContainer {
    display: flex;
    padding: 20px;
    justify-content: space-around;
  }
</style>

<div class="outerContainer">
  <h2 class="title">{word}</h2>
  <div class="innerContainer">
    {#each parts as wordPart}
      <div class="partContainer">
        <span class="part" style={`color:${wordPart.color}`}>
          {wordPart.text}
        </span>
        <span class="translation">{wordPart.translation}</span>
      </div>
    {/each}
  </div>
</div>
