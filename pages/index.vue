<template>
  <main>
    <section class="section section-main">
      <div class="section-main__left">
        <h1>Flowers, 🌻<br>what the world<br> needs </h1>
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
      <!-- // Компонент карточки продукта, выводится через цикл  -->
      <card-product
        v-for="(product, i) in products" :key="i"
        :product="product"
      />
      </div>
    </section>
    <section class="section section-posts">
      <section-title>Latest posts</section-title>
      <div class="posts-contents">
        <latest-posts
          v-for="(post, i) in posts" :key="i"
          :post="post"
        />
      </div>
    </section>
    <section class="section section-comments">
      <section-title>Comments</section-title>
      <div class="comments comments-contents">
        <the-comments
        v-for="(comment, i) in comments" :key="i"
        :comment="comment"
        />
      </div>
    </section>
  </main>
</template>

<script>

  export default {
    async asyncData({ $axios, params, error }) {
      try {
        // Добавить получение posts и comments
          const comments = await $axios.$get('/comments')
          const posts = await $axios.$get('/posts');
          const products = await $axios.$get('/products');
          return { products, posts, comments };
      }   catch (e) {
          error({ statusCode: e.response.status });
      }
    },
    data() {
    return {
      products: [],
      posts: [],
      comments: [],
    };
  },
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
