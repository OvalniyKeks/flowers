<template>
  <div class="aselect" :data-value="value" :data-list="list">
	    <div class="selector" @click="toggle()">
      <div class="label">
            <img src="~/assets/icon/filter.png" alt="">
				    <span>{{ value }}</span>
	        </div>
	        <div :class="{ hidden : !visible, visible }">
	            <ul>
	                <li :class="{ current : item === value }" v-for="item in list" @click="select(item)">{{ item }}</li>
	            </ul>
	        </div>
	    </div>
	</div>
</template>

<script>
  export default {

    props:{
      value: String
    },
        
		data () {
      return {
			  list: ["Rose","Lily","Tulip"],
        visible: false
      }
		},
		methods: {
			toggle() {
				this.visible = !this.visible;
			},
			select(option) {
        this.$emit('input', option)
			}
		}
	}
</script>