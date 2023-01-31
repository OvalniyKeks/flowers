<template>
    <div class="login">
        <div class="login-info">
            <div class="login-info__icon">
                <div>Login</div>
                <nuxt-link to="#">
                    <img src="~/assets/icon/login/home.png" alt="">
                    Back to home
                </nuxt-link>
            </div>
            <div class="login-info__text">Login and have more fun</div>
            <div class="login-info__username">
                <input type="text" placeholder="Username">
            </div>
            <div class="login-info__password">
                <input type="text" placeholder="Password">
            </div>
            <div class="login-info__radio">
                <input type="radio" >Remember me
            </div>
            <div class="login-info__button">
                <button>Login</button>
            </div>
            <div class="login-info__link">
                dont have an account? <nuxt-link to="#">Register</nuxt-link>
            </div>

        </div>
        <div class="login-image">
            <img src="~/assets/image/login/image.png" alt="">
        </div>

    </div>
</template>

<script>
    export default {
        layout:"authorization"
    }
</script>