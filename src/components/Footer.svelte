<style>
  footer {
    background: var(--primary-color);
    padding: 10px;
    height: 100px;
    color: var(--white);
    display: flex;
    justify-content: space-between;
  }
  h1 {
    margin: 0;
  }
  .copyright {
    font-size: 12px;
    position: absolute;
    bottom: 0px;
    left: 0px;
  }

  .contact {
    display: flex;
    flex-direction: column;
  }

  .container {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .contact p {
    margin: 0;
  }

  img {
    object-fit: contain;
    width: 60px;
    height: 60px;
  }

  .titleContainer {
    height: 100%;
    display: flex;
    align-items: center;
  }

  p {
    line-height: 20px;
  }
  h4 {
    margin: 5px 0px;
  }
</style>

<footer>
  <div class="container">
    <div class="titleContainer">
      <img src="herzchakra.png" alt="logo" />
      <h1>Yoga mit Bea</h1>
    </div>
    <span class="copyright">© Felix Wohnhaas 2020</span>
    <div class="contact">
      <h4>Beate Ilg-Wohnhaas</h4>
      <p>Wacholderweg 10</p>
      <p>73326 Deggingen</p>
      <p>
        <i class="far fa-envelope" />
        beate.wohnhaas@t-online.de
      </p>
    </div>
  </div>
</footer>
