<script>
  import CourseCard from "./CourseCard.svelte";
  import Quote from "../../components/Quote.svelte";

  export let title;
</script>

<style>
  .cardsContainer {
    display: flex;
    width: 100%;
    max-width: 1200px;
    margin: 20px 0px;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  @media (max-width: 1100px) {
    .cardsContainer {
      justify-content: center;
    }
  }
  .outerContainer {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
</style>

<div class="outerContainer">
  <h1>Angebote</h1>
  <Quote quote="Tu was du kannst, da wo du bist, mit dem was du hast." />
  <div class="cardsContainer">
    <CourseCard
      link="/individuell"
      title="Yoga Individuell"
      description="Yoga für dich" />
    <CourseCard link="/gruppen" title="Yogakurse">
      Yoga mit Bea im Schloss
      <br />
      Yoga mit Bea im Wacholder
    </CourseCard>
    <CourseCard link="/seminare" title="Yoga aktuell">
      Yogatag
      <br />
      Yogawochenende
    </CourseCard>
    <CourseCard link="/yoga-weg" title="Yoga Weg">
      im Lonetal
    </CourseCard>
  </div>
</div>
