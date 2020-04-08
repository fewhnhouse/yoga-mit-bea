<style>
  footer {
    background: var(--primary-color);
    padding: 10px;
    width: calc(100% - 20px);
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
    margin: 0px 20px;
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
    line-height: 30px;
    font-weight: 200;
  }
  i {
    margin-right: 5px;
  }
  .infoContainer {
    display: flex;
    flex-direction: row;
  }

  @media (max-width: 800px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
    footer {
      min-height: 350px;
    }
    .infoContainer {
      flex-direction: column;
    }

    .contact {
      margin: 10px;
    }
  }
</style>

<footer>
  <div class="container">
    <div class="titleContainer">
      <img src="herzchakra.png" alt="logo" />
      <h1>Yoga mit Bea</h1>
    </div>
    <div class="infoContainer">
      <div class="contact">
        <h3>Beate Ilg-Wohnhaas</h3>
        <p>Wacholderweg 10</p>
        <p>73326 Deggingen</p>
      </div>

      <div class="contact">
        <h3>Kontakt</h3>
        <p>
          <i class="far fa-envelope" />
          beate.wohnhaas@t-online.de
        </p>
        <p>
          <i class="fas fa-phone" />
          0160 1578254
        </p>
      </div>
    </div>
  </div>
</footer>
