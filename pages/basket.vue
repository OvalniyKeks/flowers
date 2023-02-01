<template>
  <div class="section section-basket">
    <div class="basket">
      <div class="basket-content">
        <div class="basket-content__cart">Your cart</div>
        <div class="basket-content__flower">
          <div class="basket-content__info">
            <div class="basket-content__image">
              <img src="~/assets/image/basket/image.png" alt="">
            </div>
            <div class="basket-text">
              <div class="basket-text__flower">Sun Flower</div>
              <div class="basket-text__sun">sun lover flower</div>
              <div class="basket-text__price">unit price 10$</div>
              <div class="basket-counter">
                <button class="basket-counter__minus">-</button>
                <input type="text" id="counter" name="count" value="1" min="1" step="1" class="basket-counter__count">
                <button class="basket-counter__plus">+</button>
              </div>
            </div>
          </div>
          <div class="basket-total">
            <button class="basket-total__delete">
                <img src="~/assets/image/basket/delete.png" alt="">
            </button>
            <div class="basket-total__text">Total 10$</div>
          </div>
        </div>
      </div>
      <div class="basket-checkout">
        <div class="basket-checkout__text">
            Subtotal for 3 items: 62$
        </div>
        <div class="basket-checkout__info">
            <input type="text" placeholder="City">
            <input type="text" placeholder="Street">
            <input type="text" placeholder="Number">
            <input type="text" placeholder="Home">
            <input type="text" placeholder="Flat">
        </div>
        <div class="basket-checkout__button">
            <button>Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>
