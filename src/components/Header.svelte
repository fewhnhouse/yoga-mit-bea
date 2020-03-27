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
    margin: 0px 20px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    position: relative;
  }

  .link:before,
  .link:after {
    content: "";
    position: absolute;
    bottom: -5px;
    width: 0px;
    height: 2px;
    margin: 5px 0 0;
    transition: all 0.2s ease-in-out;
    opacity: 0;
    background-color: white;
  }

  .active:before,
  .active:after {
    width: 50%;
    opacity: 1;
  }

  .link:before {
    left: 50%;
  }

  .link:after {
    right: 50%;
  }

  .link:hover:before {
    opacity: 1;
    width: 50%;
  }

  .link:hover:after {
    opacity: 1;
    width: 50%;
  }

  .link:hover {
    border-bottom: 1px sol;
  }

  a:hover {
    color: var(--white);
    font-weight: 300;
  }
</style>

<header class={scroll !== 0 ? 'scrolled' : ''}>
  <a href="/">
    <img alt="logo" src={url} />
  </a>
  <nav>
    <Link to="/">
      <span class="link active">Home</span>
    </Link>
    <Link to="angebote">
      <span class="link">Angebote</span>
    </Link>
    <Link to="yoga">
      <span class="link">Yoga</span>
    </Link>
    <Link to="podcasts">
      <span class="link">Zum Mitüben</span>
    </Link>
  </nav>
  <a href="/contact">
    <Button inverted>Contact me</Button>
  </a>

</header>
