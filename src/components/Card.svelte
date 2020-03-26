<style>
  .cardContainer {
    background: var(--white);
    border-radius: 4px;
    padding: 20px;
    margin: 10px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 5px 10px 0px;
    transition: box-shadow 0.3s ease-in-out;
  }

  .cardContainer:hover {
    box-shadow: rgba(0, 0, 0, 0.12) 0px 5px 10px 10px;
  }
</style>

<div class="cardContainer">
  <slot />
</div>
