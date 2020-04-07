<script>
  import CourseCard from "./CourseCard.svelte";

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
  <h1>{title}</h1>
  <div class="cardsContainer">
    <CourseCard
      link="/individuell"
      title="Yoga Individuell"
      description="Yoga für dich!" />
    <CourseCard
      link="/gruppen"
      title="Yogakurse"
      description="Yoga mit Bea im Schloss. Yoga mit Bea in der Stube." />
    <CourseCard
      link="/seminare"
      title="Yoga Leben"
      description="Yogawochenende" />
  </div>
</div>
