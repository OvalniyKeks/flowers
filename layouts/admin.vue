<template>
  <div class="layouts layout-admin">
    <div class="layout-admin__inner">
      <div class="admin-header">
        <nuxt-link class="admin-header__title" to="/admin">
          <h1>Админка Flowers Shop 🌻</h1>
        </nuxt-link>
        <nuxt-link to="/" class="admin-back__tosite">Вернуться на сайт</nuxt-link>
      </div>
      <Nuxt />
    </div>
  </div>
</template>
<script>
export default {

}
</script>
