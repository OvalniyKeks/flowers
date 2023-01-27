<template>
  <div class="admin-posts">
    Добавить пост
    <div class="form">
      <div class="form-element">
        <div class="form-element__label">Название</div>
        <input type="text" v-model="label">
      </div>
      <div class="form-element">
        <div class="form-element__label">Описание</div>
        <textarea type="text" v-model="description"/>
      </div>
      <div class="form-element">
        <div class="form-element__label">Картинка</div>
        <input type="file" @input="addImage">
      </div>
      <div class="form-element">
        <div class="form-element__label">Лайки</div>
        <input type="number" v-model="likes">
      </div>
      <div class="form-element">
        <div class="form-element__label">Просмотры</div>
        <input type="number" v-model="views">
      </div>

      <button @click="addPost">Добавить</button>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'admin',
  data() {
    return {
      label: '',
      description: '',
      likes: 0,
      views: 0,
      imageFile: null
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
    addImage (event) {
      this.imageFile = event.target.files[0]
    },
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
      let data = {
        label: form.label,
        likes: form.likes,
        description: form.description,
        views: form.views
      }

      data = this.appendFormData(data)

      data.append('image', form.imageFile)

      return data
    },
    async addPost() {
      try {
        await this.$axios.post(`/posts/create`, this.setDataToSend({label: this.label, description: this.description, likes: this.likes, views: this.views, imageFile: this.imageFile}));
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
