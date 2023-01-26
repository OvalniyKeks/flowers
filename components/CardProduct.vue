<template>
  <div class="card card-product">
    <div>
        <div class="card-image">
          <img :src="product.image" alt="">
        </div>
        <div class="card-info">
          <div class="card-name">{{ product.label }}</div>
          <div class="card-bottom">
            <div class="card-price">{{ product.price }}$</div>
            <button class="card-button">
              <img src="~/assets/icon/by.png" alt="">
              Add to cart
            </button>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
    export default {
        props:{
            product: Object
        }
    }
</script>
