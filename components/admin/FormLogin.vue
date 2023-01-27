<template>
  <form class="form form-login" @submit.prevent="signIn">
    <input type="text" v-model="login" placeholder="Логин">
    <input type="password" v-model="password" placeholder="Пароль">
    <button type="submit">Войти</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      login: '',
      password: null
    }
  },

  methods: {
    signIn (e) {
      console.log(e)
    }
  },
}
</script>
