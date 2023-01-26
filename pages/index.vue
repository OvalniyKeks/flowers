<template>
  <main>
    <section class="section section-main">
      <div class="section-main__left">
        <h1>Flowers, <br>what the world<br> needs</h1>
        <div class="section-text">Browse between hounders of flowers</div>
        <button class="section-button">Browse</button>
      </div>
      <div class="section-main__right">
        <img src="~/assets/image/flower_1.png" alt="">
        <img src="~/assets/image/flower_2.png" alt="">
        <img src="~/assets/image/flower_3.png" alt="">
        <img src="~/assets/image/flower_4.png" alt="">
        <img src="~/assets/image/flower_5.png" alt="">
        <img src="~/assets/image/flower_6.png" alt="">
      </div>
    </section>
    <section class="section section-selers">
      <section-title>Best selers</section-title>
      <div class="card-products">
        <card-product></card-product>
      </div>
      

    </section>
  </main>
</template>

<script>
  export default {
    head() {
      // У всех страниц должны быть title и description.
      let title = "Шаблон Nuxt-Express";
      let description = "Описание контента главной страницы сайта";

      return {
        title: title,
        meta: [{
            hid: "description",
            name: "description",
            content: description
          },
          {
            hid: "og:title",
            property: "og:title",
            content: title
          },
          {
            hid: "og:description",
            property: "og:description",
            content: description
          },
        ],
      };
    },
  };

</script>
