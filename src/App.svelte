<script>
  import { Router, Route } from "svelte-routing";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Yoga from "./pages/yoga/Yoga.svelte";
  import YogaWeg from "./pages/yoga-weg/YogaWeg.svelte";
  import Home from "./pages/home/Home.svelte";
  import Podcasts from "./pages/podcasts/Podcasts.svelte";
  import Contact from "./pages/contact/Contact.svelte";
  import Groups from "./pages/offers/Groups.svelte";
  import Seminars from "./pages/offers/Seminars.svelte";
  import Individual from "./pages/offers/Individual.svelte";
  import Impressum from "./pages/impressum/Impressum.svelte";

  import Bea from "./pages/bea/Bea.svelte";
</script>

<style>
  :global(:root) {
    --primary-color: rgb(161, 75, 93);
    --dark-grey: #2f3640;
    --white: white;
    --black: black;
    --text-color: rgba(26, 27, 31, 0.6);
    --light-grey: #eaeaea;
    --light-background: #fafafa;
  }
</style>

<Router>
  <Header />
  <main>
    <Route path="zum-mitueben">
      <Podcasts />
    </Route>
    <Route path="gruppen">
      <Groups />
    </Route>
    <Route path="individuell">
      <Individual />
    </Route>
    <Route path="seminare">
      <Seminars />
    </Route>
    <Route path="yoga">
      <Yoga />
    </Route>
    <Route path="yoga-weg">
      <YogaWeg />
    </Route>

    <Route path="bea">
      <Bea />
    </Route>

    <Route path="kontakt">
      <Contact />
    </Route>
    <Route path="/impressum">
      <Impressum />
    </Route>
    <Route path="/">
      <Home />
    </Route>

  </main>
  <Footer />
</Router>
