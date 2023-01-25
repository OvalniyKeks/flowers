<template>
  <div class="form">
    <div class="form-element">
      <div class="form-element__label">Название</div>
      <input type="text" v-model="form.label">
    </div>
    <div class="form-element">
      <div class="form-element__label">Цена</div>
      <input type="number" v-model="form.price">
    </div>
    <div class="form-element">
      <div class="form-element__label">Описание</div>
      <textarea type="text" v-model="form.description"/>
    </div>
    <div class="form-element">
      <div class="form-element__label">Картинка</div>
      <input type="file" @input="addImage">
    </div>
    <div class="form-element">
      <div class="form-element__label">Рейтинг</div>
      <input type="text" v-model="form.rating">
    </div>

    <button v-if="this.action === 'create'" @click="createPage">Создать товар</button>
    <!-- <button v-if="this.action === 'update'" @click="updatePage">Обновить страницу</button>
    <button v-if="this.action === 'update'" @click="deletePage">Удалить страницу</button> -->
  </div>
</template>

<script>
export default {
  // Это переиспользуемый компонент с формой для создания/редактирования/удаления страницы.
  // В зависимости от поступаемых пропсов меняется отображение кнопок.
  // Если компонент используется для редактирования текущей страницы, то в него передаются её данные.
  props: { page: { type: Object, default: () => ({}) }, action: { type: String } },

  // Нам потребуется текущий URL страницы, которые не будет связан с input формы.
  data() {
    return {
      pageToEdit: {},
      form: {
        label: '',
        description: '',
        price: '',
        rating: '',
        reviews: '',
        imageFile: null
      }
    };
  },
  methods: {
    addImage (event) {
      this.form.imageFile = event.target.files[0]
      // const reader = new FileReader()
      // reader.readAsDataURL(file)
      // const vm = this
      // reader.onload = function () {
      //   vm.form.imageFile = reader.result
      // }
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
        price: form.price,
        description: form.description,
        rating: form.rating
      }

      data = this.appendFormData(data)

      data.append('image', form.imageFile)

      return data
    },

    async createPage() {
      try {
        // Создаём новую страницу.
        await this.$axios.post(`/products/create`, this.setDataToSend(this.form));
        // this.$router.push(`/page/${this.pageToEdit.url}`);
      } catch (err) {
        // Если страница не создана, то в консоль выводим ошибку из бэкенда.
        console.log(err.response.data.message);
      }
    },
    async updatePage() {
      try {
        // При обновлении текущей страницы нужен исходный URL для запроса в API.
        await this.$axios.patch(`/api/page/${this.page.url}`, this.pageToEdit);
        // После обновления контента происходит перенаправление на страницу со списком страниц.
        this.$router.push(`/page`);
      } catch (err) {
        console.log(err.response.data.message);
      }
    },
    async deletePage() {
      try {
        // При удалении страницы также используем текущий URL, а не изменяемый URL в форме.
        await this.$axios.delete(`/api/page/${this.page.url}`);
        this.$router.push(`/page`);
      } catch (err) {
        console.log(err.response.data.message);
      }
    },
  },
  beforeMount() {
    // Делаем информацию о странице редактируемой.
    Object.assign(this.pageToEdit, this.page);
  },
};
</script>
