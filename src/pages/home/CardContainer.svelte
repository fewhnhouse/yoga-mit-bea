<script>
  import CourseCard from "./CourseCard.svelte";

  export let title;
</script>

<style>
  .cardContainer {
    width: 100%;
    display: flex;
    margin: 20px 0px;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  @media (max-width: 1100px) {
    .cardContainer {
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
  <div class="cardContainer">
    <CourseCard
      title="Einzelunterricht"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Asperiores quam animi, quod aliquam nostrum dolorem rerum similique
      exercitationem, sapiente culpa non amet excepturi fugit provident deleniti
      id ducimus quis quae!" />
    <CourseCard
      title="Gruppen"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Asperiores quam animi, quod aliquam nostrum dolorem rerum similique
      exercitationem, sapiente culpa non amet excepturi fugit provident deleniti
      id ducimus quis quae!" />
    <CourseCard
      title="Seminare"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Asperiores quam animi, quod aliquam nostrum dolorem rerum similique
      exercitationem, sapiente culpa non amet excepturi fugit provident deleniti
      id ducimus quis quae!" />
  </div>
</div>
