<template>
  <div class="page page-admin">
    <admin-form-login
      v-if="!showRegister"
      @signUp="showRegister = !showRegister"
    />
    <admin-form-registration
      v-else
      @signIn="showRegister = !showRegister"
    />
  </div>
</template>
<script>
export default {
  layout: 'admin',
  data() {
    return {
      showRegister: false
    }
  },
}
</script>
