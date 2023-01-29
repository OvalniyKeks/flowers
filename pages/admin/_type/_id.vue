<template>
  <div class="admin-edit">
    <div class="admin-edit__title">
      <h2>Редактирование/Добавление</h2>
      <nuxt-link class="admin-back" to="/admin">Назад</nuxt-link>
    </div>
    <div class="admin-edit__input"
      v-for="(value, key) in data"
      :key="key"
    >
      <label :for="key">{{ key }}</label>
      <input
        :id="key"
        type="text"
        v-model="data[key]"
      >
    </div>
    <div v-if="imageField">
      <h3>Дополнительные поля</h3>
      <div class="admin-edit__input">
        <label for="imageField">Картинка</label>
        <input
          id="imageField"
          type="file"
          @input="addImage"
        >
      </div>
    </div>
    <div class="admin-edit__action save" @click="saveData">
      Сохранить
    </div>
    <div class="admin-edit__action create">
      Создать
    </div>
  </div>
</template>
<script>
export default {
  layout: 'admin',
  data() {
    return {
      routeParams: null,
      urlsGetData: [
        {
          type: 'product',
          url: '/products/product/'
        }
      ],
      data: null,
      imageField: false,
      imageFile: null
    }
  },
  created() {
    this.routeParams = this.$route?.params
    this.getData()
  },
  methods: {
    addImage (event) {
      this.imageFile = event.target.files[0]
    },
    filterField (dataObj) {
      const forbiddenFields = ['_id', '__v']

      let newObj = {}
      for (const key in dataObj) {
        const check = forbiddenFields.find(keyForbidden => keyForbidden == key)
        if (!check) {
          newObj[key] = dataObj[key]
        }
      }

      if (newObj.hasOwnProperty('image')) {
        this.imageField = true
      }

      this.data = newObj
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

    setDataToSend () {
      let data = null

      data = this.appendFormData(this.data)

      if (this.imageFile) {
        data.append('image', this.imageFile)
      }

      return data
    },

    async getData () {
      try {
        const url = this.urlsGetData.find(item => item.type === this.routeParams.type)?.url
        if (!url) {
          return
        }
        const result = await this.$axios.$get(`${url}${this.routeParams.id}`);
        this.filterField(result)
      } catch (error) {
        console.log(error)
      }
    },
    async saveData () {
      try {
        const url = this.urlsGetData.find(item => item.type === this.routeParams.type)?.url
        if (!url) {
          return
        }
        const result = await this.$axios.$patch(`${url}${this.routeParams.id}`, this.setDataToSend());
        this.$router.push('/admin')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
