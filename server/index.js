require("dotenv").config();

// Подключаем бэкенд на Express.
const express = require("express");
const fileUpload = require('express-fileupload')
const path = require("path")
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(fileUpload({}))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/uploads/products'))
app.use(express.static(__dirname + '/uploads/posts'))
app.use(express.static(__dirname + '/uploads/comments'))

const mongoose = require("mongoose");
mongoose.Schema.Types.Boolean.convertToFalse.add("");
mongoose.connect(`mongodb://localhost/${process.env.DATABASE}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// Route Client
app.use('/products', require('./routes/product'))
app.use('/posts', require('./routes/post'))
app.use('/comments', require('./routes/comment'))


// Route Auth
app.use('/admin', require('./routes/admin/auth'))



// Подключаем Nuxt в режиме nuxt.render. В этом примере нет отдельного процесса с Nuxt.
// Nuxt работает в качестве middleware для Express без своего сервера на Connect.
const { loadNuxt, build } = require("nuxt");
const isDev = process.env.NODE_ENV !== "production";
async function start() {
  const nuxt = await loadNuxt(isDev ? "dev" : "start");
  app.use(nuxt.render);
  if (isDev) {
    build(nuxt);
  }
  app.listen(process.env.PORT);
}

// Запуск приложения.
start();
