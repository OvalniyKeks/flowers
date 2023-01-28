<template>
  <div class="admin-posts">
    Добавить пост
    <div class="form">
      <div class="form-element">
        <div class="form-element__label">Описание</div>
        <textarea type="text" v-model="description"/>
      </div>
      <div class="form-element">
        <div class="form-element__label">Рейтинг</div>
        <input type="number" v-model="rating">
      </div>

      <button @click="addComment">Добавить</button>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'admin',
  data() {
    return {
      description: '',
      rating: 0,
    }
  },
  created () {
    const cookieToken = this.$cookies.get('token')
    if (!cookieToken) {
      this.$router.push('/admin/login')
    } else {
      this.$axios.setToken(cookieToken, 'Bearer')
    }
  },
  methods: {
    appendFormData (data, fd) {
      let formData = fd
      if (!formData) {
        formData = new FormData()
      }
      if (typeof data === 'object') {
        for (const key in data) {
          if (Object.hasOwnProperty.call(data, key)) {
            formData.append(key, data[key])
          }
        }
      }
      return formData
    },

    setDataToSend (form) {
      let data = {...form}

      data = this.appendFormData(data)

      return data
    },
    async addComment() {
      try {
        await this.$axios.post(`/comments/create`, this.setDataToSend({description: this.description, rating:this.rating}));
      } catch (err) {
        console.log('awdawdwd');
      }
    },
    // async getUser () {
    //   try {
    //     const result = await this.$axios.$get('/admin/users');
    //     this.users = result
    //   } catch (error) {
    //     console.log(error)
    //   }

    // }
  }
}
</script>
