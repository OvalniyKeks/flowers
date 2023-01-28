<template>
  <div class="admin">
    <div class="admin-header">
      <h1>Админка Flowers Shop</h1>
    </div>
    <div class="admin-cards">
      <admin-card-products/>
      <admin-card-posts/>
      <admin-card-comments/>
    </div>
    <!-- <nuxt-link to="/admin/posts">Посты</nuxt-link>
    <nuxt-link to="/admin/comments">Коментарии</nuxt-link> -->
  </div>
</template>
<script>
export default {
  layout: 'admin',
  data() {
    return {
      users: null,
      linksHeader: [
        {
          link: '/admin/posts',
          label: 'Посты'
        },
      ]
    }
  },
  created () {
    const cookieToken = this.$cookies.get('token')
    if (!cookieToken) {
      this.$router.push('/admin/login')
    } else {
      this.$axios.setToken(cookieToken, 'Bearer')
      this.getUser()
    }
  },
  methods: {
    async getUser () {
      try {
        const result = await this.$axios.$get('/admin/users');
        this.users = result
      } catch (error) {
        console.log(error)
      }

    }
  }
}
</script>
