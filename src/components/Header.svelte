<script>
  import { Link } from "svelte-routing";
  let url = "yoga_solo.png";
  let scroll = 0;
  window.addEventListener("scroll", function(event) {
    scroll = this.scrollY;
  });
</script>

<style>
  header {
    position: fixed;
    width: 100%;
    background: var(--primary-color);
    padding: 0px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    z-index: 100;
  }

  header.scrolled {
    opacity: 0.9;
    backdrop-filter: blur(4px);
    box-shadow: 0px 3px 3px 0px var(--dark-grey);
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
    <Link to="about">
      <span class="link">About me</span>
    </Link>
    <Link to="podcasts">
      <span class="link">Podcasts</span>
    </Link>
  </nav>
  <a href="/contact">
    <button>Contact me</button>
  </a>

</header>
