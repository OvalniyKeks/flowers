<template>
  <div class="section section-shop">
    <div class="shop-content">

      <div class="shop-contents">

        <drop-down
          v-model="filterValue"
        />

        <div class="shop-search">
          <form class="shop-search__form" action="">
            <input class="shop-search__input" type="text" placeholder="Search..." name="search">
            <button class="shop-search__button" type="submit">
              <img src="~/assets/icon/search.png" alt="">
            </button>
          </form>
        </div>

        <cheep
          v-model="sortValue"
        />

      </div>
    </div>
      <div class="card-products">
        <card-product
        v-for="(product, i) in products" :key="i"
        :product="product"
        />
      </div>
  </div>
</template>

<script>
  export default {

    async asyncData({ $axios, params, error }) {
      try {
        // Добавить получение posts и comments
          const products = await $axios.$get('/products');
          return { products };
      }   catch (e) {
          error({ statusCode: e.response.status });
      }
    },

    data() {
      return {
        filterValue: 'Filtering',
        sortValue: 'asc',
        products: []
      }

    }
  }
</script>
