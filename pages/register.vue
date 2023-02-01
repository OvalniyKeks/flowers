<template>
    <div class="register">
        <div class="register-info">
            <div class="register-info__icon">
                <div>Register</div>
                <nuxt-link to="#">
                    <img src="~/assets/icon/login/home.png" alt="">
                    Back to home
                </nuxt-link>
            </div>
            <div class="register-info__text">Register and help us help you</div>
            <div class="register-info__username">
                <input type="text" placeholder="Username">
            </div>
            <div class="register-info__password">
                <input type="text" placeholder="Password">
            </div>
            <div class="register-info__with">with registering your accepting our <span>terms</span> and <span>privacy policy</span></div>
            <div class="register-info__button">
                <button>Register</button>
            </div>
            <div class="register-info__link">
                Already have an account?<nuxt-link to="#">Login</nuxt-link>
            </div>

        </div>
        <div class="register-image">
            <img src="~/assets/image/register/image.png" alt="">
        </div>

    </div>
</template>

<script>
    export default {
        layout:"authorization"
    }
</script>
