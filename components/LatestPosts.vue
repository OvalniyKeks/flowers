<template>
  <div class="posts posts-content">
    <div>
      <div class="posts-avatar">
        <div class="posts-avatar__name">
          <img src="~/assets/image/posts/avatar.png" alt=""><img />
          <div>Emily</div>
        </div>
        <div class="posts-avatar__date">2022/22/8</div>
      </div>
      <div class="posts-image">
        <img src="~/assets/image/posts/post_1.png" alt="">
      </div>
      <div class="posts-text">
        <div class="posts-text__top">
          Best flowers for inside home
        </div>
        <div class="posts-text__bot">
          All the flowers are best for your lovly house
          just get the one you love the most 😊
        </div>
      </div>
      <div class="posts-more">
        <div class="posts-more__like">
            <img src="~/assets/icon/like.png" alt="">
            <div class="posts-more__number">15</div>
            <img src="~/assets/icon/eyes.png" alt="">
            <div>2001</div>
        </div>
        <div class="posts-more__text">Read more</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      props:{
        content: Object
      }
    }
</script>
