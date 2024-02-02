<script>
  import Divider from '../../components/Divider.svelte'
  import Block from '../../components/Block.svelte'
  import PriceCard from './PriceCard.svelte'
  import DateCard from './DateCard.svelte'
  import LocationCard from './LocationCard.svelte'
  import Container from '../../components/Container.svelte'
  import Text from '../../components/Text.svelte'
</script>

<Container>
  <Container id="einzelkurse">
    <Block title="Yogatag im Wacholder" imgSrc="deggingen.jpg" direction="right">
      <Text>
        Termin folgt
      </Text>
    </Block>
  </Container>
</Container>

<style>
  .flexContainer {
    display: flex;
    width: calc(100% - 20px);
    overflow: auto;
    padding: 10px;
  }

  a {
    color: rgb(161, 75, 93);
  }
</style>

