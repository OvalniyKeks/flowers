<template>

  <div @click="toggleMode" class="shop-cheep">
    <button class="shop-cheep__button">
      <img v-bind:class="{ active: isActive }" src="~/assets/icon/cheep.png" alt="">
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
        isActive: false,
        valueList: ['asc', 'desc']
      }
    },
    methods: {
      toggleMode () {
        let currentSortValue = this.value === 'asc' ? 'desc' : 'asc'
        this.$emit('input', currentSortValue)
        this.isActive = !this.isActive
      }
    }
  }
</script>
