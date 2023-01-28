<template>
  <div class="posts posts-content">
    <div>
      <div class="posts-avatar">
        <div class="posts-avatar__name">
          <img :src="post.author_image" alt=""/>
          <div>{{ post.author_name }}</div>
        </div>
        <div class="posts-avatar__date">{{ post.createdDate }}</div>
      </div>
      <div class="posts-image">
        <img :src="post.image" alt="">
      </div>
      <div class="posts-text">
        <div class="posts-text__top">
          {{ post.label }}
        </div>
        <div class="posts-text__bot">
          {{ post.description }}
        </div>
      </div>
      <div class="posts-more">
        <div class="posts-more__like">
            <img src="~/assets/icon/like.png" alt="">
            <div class="posts-more__number">{{ post.likes }}</div>
            <img src="~/assets/icon/eyes.png" alt="">
            <div>{{ post.views }}</div>
        </div>
        <div class="posts-more__text">Read more</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      props:{
        post: Object
      }
    }
</script>
