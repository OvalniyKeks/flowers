<template>
  <div class="comments comments-contents">
    <div class="comments-content">
      <div class="comments-image">
        <img :src=" comment.author_image " alt="">
      </div>
      <div class="comments-text">
        <div class="comments-name">{{ comment.author_name }}</div>
        {{ comment.description }}
        <rating-star
        :rating="comment.rating"
        />
      </div>
    </div>

  </div>
</template>

<script>
    export default {
      props:{
        comment: Object
      }
    }
</script>
