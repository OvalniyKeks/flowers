<template>

  <div @click="toggleMode" class="shop-cheep">
    <button class="shop-cheep__button">
      <img src="~/assets/icon/cheep.png" alt="">
      Cheep
    </button>
  </div>

</template>

<script>
  export default {

    props:{
      value: String
    },

    data() {
      return {
        valueList: ['asc', 'desc']
      }
    },
    methods: {
      toggleMode () {
        let currentSortValue = this.value === 'asc ' ? 'desc' : 'asc'
        this.$emit('input', currentSortValue)
        console.log('st')
      }
    }
  }
</script>
