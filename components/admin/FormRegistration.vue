<template>
  <form class="form form-login" @submit.prevent="signUp">
    <input type="text" v-model="login" placeholder="Логин">
    <input type="password" v-model="password" placeholder="Пароль">
    <button type="submit">Создать аккаунт</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      login: '',
      password: ''
    }
  },

  methods: {
    async signUp () {
      try {
        const result = await this.$axios.$post('/admin/registration', {username: this.login, password: this.password});
        if (result?.success) {
          this.$emit('signIn')
        }
      } catch (error) {
        console.log(error)
      }

    }
  },
}
</script>
