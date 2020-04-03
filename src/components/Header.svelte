<script>
  import { Link } from "svelte-routing";
  import Button from "./Button.svelte";
  import mediaStore from "../utils/mediaStore.js";
  import { getContext } from "svelte";
  import { ROUTER } from "svelte-routing/src/contexts";
  const { activeRoute } = getContext(ROUTER);
  let isMenuExpanded = false;
  let activePath = "/";
  $: {
    if ($activeRoute) {
      activePath = $activeRoute.uri;
    }
  }
  let url = "yoga2.png";
  let scroll = 0;
  window.addEventListener("scroll", function(event) {
    scroll = this.scrollY;
  });

  $: isMobile = mediaStore("(max-width: 800px)");

  const handleClick = () => {
    isMenuExpanded = !isMenuExpanded;
  };
</script>

<style>
  header {
    position: fixed;
    top: 0px;
    width: calc(100% - 20px);
    padding: 0px 10px;
    background: var(--white);
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    z-index: 100;
  }

  .buttonContainer {
    z-index: 200;
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
    color: var(--primary-color);
    text-decoration: none;
    letter-spacing: 2px;
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
    background-color: var(--primary-color);
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

  i {
    font-size: 20px;
    color: var(--primary-color);
  }

  @media (max-width: 800px) {
    nav {
      align-items: center;
      opacity: 0;
      flex-direction: column;
      position: absolute;
      z-index: 100;
      background: white;
      width: 100%;
      height: 0px;
      transition: height 0.3s ease-in-out, opacity 0.3s ease-in-out;
      top: 60px;
      left: 0px;
      pointer-events: none;
    }

    .nav-expanded {
      pointer-events: all;
      height: 100vh;
      opacity: 1;
    }

    .link {
      margin: 20px;
      padding-bottom: 5px;
      justify-content: center;
      width: 150px;
    }
  }
</style>

<header class={scroll !== 0 ? 'scrolled' : ''}>
  <a href="/">
    <img alt="logo" src={url} />
  </a>
  {#if $isMobile}
    <div class="buttonContainer">
      <Button on:click={handleClick}>
        {#if isMenuExpanded}
          <i class="fas fa-times" />
        {:else}
          <i class="fas fa-bars" />
        {/if}
      </Button>
    </div>
  {/if}
  <nav class:nav-expanded={isMenuExpanded}>
    <Link on:click={handleClick} to="/">
      <span class:active={activePath === '/'} class="link active">
        Übersicht
      </span>
    </Link>
    <Link on:click={handleClick} to="angebote">
      <span class:active={activePath === '/angebote'} class="link">
        Angebote
      </span>
    </Link>
    <Link on:click={handleClick} to="yoga">
      <span class:active={activePath === '/yoga'} class="link">Yoga</span>
    </Link>
    <Link on:click={handleClick} to="zum-mitueben">
      <span class:active={activePath === '/zum-mitueben'} class="link">
        Zum Mitüben
      </span>
    </Link>
    <Link on:click={handleClick} to="kontakt">
      <span class:active={activePath === '/kontakt'} class="link">Kontakt</span>
    </Link>
  </nav>

</header>
