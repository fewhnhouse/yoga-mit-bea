<script>
  import { Link } from "svelte-routing";
  import Button from "./Button.svelte";

  let url = "yoga_solo.png";
  let scroll = 0;
  window.addEventListener("scroll", function(event) {
    scroll = this.scrollY;
  });
</script>

<style>
  header {
    position: fixed;
    width: calc(100% - 20px);
    padding: 0px 10px;
    background: var(--primary-color);
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    z-index: 100;
  }

  header.scrolled {
    opacity: 0.9;
    backdrop-filter: blur(4px);
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 15px 0px;
    transition: box-shadow 0.3s ease-in-out;
  }
  img {
    height: 60px;
  }

  nav {
    display: flex;
  }
  .link {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-weight: 200;
    color: var(--white);
    text-decoration: none;
    margin: 0px 10px;
  }

  a:hover {
    color: var(--white);
    font-weight: 300;
  }
  button {
    background: var(--white);
    margin: 0;
    color: var(--primary-color);
    text-transform: uppercase;
    padding: 10px;
  }
</style>

<header class={scroll !== 0 ? 'scrolled' : ''}>
  <a href="/">
    <img alt="logo" src={url} />
  </a>
  <nav>
    <Link to="einzelunterricht">
      <span class="link">Einzelunterricht</span>
    </Link>
    <Link to="gruppen">
      <span class="link">Gruppen</span>
    </Link>
    <Link to="seminare">
      <span class="link">Seminare</span>
    </Link>
    <Link to="podcasts">
      <span class="link">Podcasts</span>
    </Link>
  </nav>
  <a href="/contact">
    <Button inverted>Contact me</Button>
  </a>

</header>
