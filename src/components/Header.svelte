<script>
  import { Link } from "svelte-routing";
  import Button from "./Button.svelte";
  import mediaStore from "../utils/mediaStore.js";
  import { getContext, onDestroy } from "svelte";
  import { ROUTER } from "svelte-routing/src/contexts";
  const { activeRoute } = getContext(ROUTER);
  let isMenuExpanded = false;
  let activePath = "/";
  $: {
    if ($activeRoute) {
      activePath = $activeRoute.uri;
    }
  }
  let url = "logo-color.png";
  let scroll = 0;
  let openSubmenu = false;

  window.addEventListener("click", e => {
    if (openSubmenu) {
      openSubmenu = false;
    }
  });

  const handleOffersClick = e => {
    e.stopPropagation();
    openSubmenu = !openSubmenu;
  };
  window.addEventListener("scroll", function(event) {
    scroll = this.scrollY;
  });

  $: isMobile = mediaStore("(max-width: 800px)");

  const handleClick = () => {
    isMenuExpanded = $isMobile ? !isMenuExpanded : false;
  };

  onDestroy(() => {
    window.removeEventListener("scroll");
    window.removeEventListener("click");
  });
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

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  header.scrolled {
    opacity: 1;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 15px 0px;
    transition: box-shadow 0.3s ease-in-out;
  }
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

  .submenu {
    padding: 10px;
    position: absolute;
    top: 40px;
    width: 200px;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 5px 10px 0px;
    transition: box-shadow 0.3s ease-in-out;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .submenu .link {
    margin: 10px;
  }

  .submenu:hover {
    box-shadow: rgba(0, 0, 0, 0.12) 0px 5px 10px 10px;
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
    <Link on:click={handleClick} to="bea">
      <span class:active={activePath === '/bea'} class="link">Bea</span>
    </Link>
    <Link on:click={handleClick} to="yoga">
      <span class:active={activePath === '/yoga'} class="link">Yoga</span>
    </Link>
    {#if $isMobile}
    <Link on:click={handleClick} to="individuell">
      <span class:active={activePath === '/individuell'} class="link">
        Individuell
      </span>
    </Link>
    <Link on:click={handleClick} to="gruppen">
      <span class:active={activePath === '/gruppen'} class="link">
        Yoga Gruppen
      </span>
    </Link>
    <Link on:click={handleClick} to="seminare">
      <span class:active={activePath === '/seminare'} class="link">
        Yoga Leben
      </span>
    </Link>
    <Link on:click={handleClick} to="yoga-weg">
      <span class:active={activePath === '/yoga-weg'} class="link">Yoga-Weg</span>
    </Link>
    {:else}
      <span
        on:click={handleOffersClick}
        class:active={activePath === '/angebote'}
        class="link">
        Angebote
        {#if openSubmenu}
          <div class="submenu">
            <Link on:click={handleClick} to="individuell">
              <span class:active={activePath === '/individuell'} class="link">
                Yoga Individuell
              </span>
            </Link>
            <Link on:click={handleClick} to="gruppen">
              <span class:active={activePath === '/gruppen'} class="link">
                Yoga Gruppen
              </span>
            </Link>
            <Link on:click={handleClick} to="seminare">
              <span class:active={activePath === '/seminare'} class="link">
                Yoga Leben
              </span>
            </Link>
            <Link on:click={handleClick} to="yoga-weg">
              <span class:active={activePath === '/yoga-weg'} class="link">Yoga-Weg</span>
            </Link>
          </div>
        {/if}

      </span>
    {/if}
    <Link on:click={handleClick} to="zum-mitueben">
      <span class:active={activePath === '/zum-mitueben'} class="link">
        Zum Mitüben
      </span>
    </Link>

  </nav>

</header>
