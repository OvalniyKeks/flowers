<template>
  <div class="section section-reviews">
    <div class="review">
      <div class="review-info">
        <div class="review-info__name">Reviews</div>
        <div class="review-info__text">Add a review</div>
      </div>
      <div class="review-content">
        <div class="review-image">
          <img src="~/assets/image/item/avatar.png" alt="">
        </div>
        <div class="review-comment">
          <div class="review-comment__name">Atena</div>
          <div class="review-comment__text">This flower is the best gift i’ve ever got</div>
          <div class="review-comment__rating">
            <rating-star :rating="4" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
