<template>
  <form class="form form-login" @submit.prevent="signIn">
    <input type="text" v-model="login" placeholder="Логин">
    <input type="password" v-model="password" placeholder="Пароль">
    <button type="submit">Войти</button>
    <div class="form-login__register" @click="$emit('signUp')">Зарегистрироваться</div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      login: 'admin',
      password: 'admin'
    }
  },

  methods: {
    async signIn () {
      try {
        const result = await this.$axios.$post('/admin/login', {username: this.login, password: this.password});
        if (result?.token) {
          this.$cookies.set('token', result.token)

          this.$axios.setToken(result.token, 'Bearer')
          this.$router.push('/admin')
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
}
</script>
