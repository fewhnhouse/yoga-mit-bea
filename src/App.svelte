<script>
  import { Router, Route } from "svelte-routing";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";

  import Home from "./pages/home/Home.svelte";
  import Podcasts from "./pages/podcasts/Podcasts.svelte";
  import Offers from './pages/offers/Offers.svelte';
  export let url = "";
</script>

<style>
  :global(:root) {
    --primary-color: rgb(161, 75, 93);
    --dark-grey: #2f3640;
    --white: white;
    --black: black;
    --text-color: #1a1b1f;
    --light-grey: #eaeaea;
    --light-background: #fafafa;
  }
</style>

<Router {url}>
  <Header />
  <main>
    <Route path="podcasts">
      <Podcasts />
    </Route>
    <Route path="angebote">
      <Offers />
    </Route>
    <Route path="/">
      <Home />
    </Route>

  </main>
  <Footer />
</Router>
