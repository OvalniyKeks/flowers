<template>
  <div class="admin-card admin-card__comments">
    <div class="admin-card__title">
      Коментарии
      <button class="admin-card__add">Добавить коментарий</button>
    </div>
    <div class="admin-card__list">
      <div class="admin-card__list-inner">
        <div class="admin-card__item" v-for="(item, i) in data" :key="i">
          <div>
            {{ item.description }}
          </div>
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
        const result = await this.$axios.$get('/comments');
        this.data = result
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
