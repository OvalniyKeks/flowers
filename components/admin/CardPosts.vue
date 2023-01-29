<template>
  <div class="admin-card admin-card__posts">
    <div class="admin-card__title">
      Посты
      <button class="admin-card__add">Добавить пост</button>
    </div>
    <div class="admin-card__list">
      <div class="admin-card__list-inner">
        <div class="admin-card__item" v-for="(item, i) in data" :key="i">
          {{ item.label }}
          <div class="admin-card__item-actions">
            <nuxt-link :to="`/admin/${item._id}`" class="admin-card__item-action edit">Редактировать</nuxt-link>
            <div class="admin-card__item-action delete">Удалить</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    async getData () {
      try {
        const result = await this.$axios.$get('/posts');
        this.data = result
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
