<template>
  <div class="admin">
    <nuxt-link to="/admin/posts">Посты</nuxt-link>
    <nuxt-link to="/admin/comments">Коментарии</nuxt-link>
  </div>
</template>
<script>
export default {
  layout: 'admin',
  data() {
    return {
      users: null
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
