<script>
  export let margin = 30;
</script>

<style>
  div {
    width: 100%;
    height: 1px;
    margin: 30px 0px;
    background: #eaeaea;
  }

  @media (max-width: 800px) {
    div {
      margin: 10px 0px;
    }
  }
</style>

<div style={`margin: ${margin}px 0px`} />
