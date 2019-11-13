<template>
	<div class="fav">
		<div class="title_cart">
			<span>
				<p class="title">Favourites</p>
				<p class="text">
					Enjoy what you have been ordering
				</p>
			</span>
			<span class="mdi mdi-bookmark cart"
				>🛒 {{ getCartQty === 0 ? "" : getCartQty }}</span
			>
		</div>
		<div class="cont">
			<div v-for="(item, index) in getFav">
				<food-item :detail="item" />
			</div>
		</div>
	</div>
</template>

<script>
import FoodItem from "./FoodItem.vue";
import Cart from "../assets/cart.svg";
export default {
	name: "Favourite",
	components: {
		FoodItem
	},
	data() {
		return {
			list: []
		};
	},
	computed: {
		getFav() {
			return this.$store.getters.getFav;
		},
		getCartQty() {
			return this.$store.state.cart;
		}
	}
};
</script>

<style scoped lang="scss">
.fav {
	margin-top: 20px;
}
.title {
	font-size: 20px;
	font-weight: 600;
}
.cont {
	margin: 10px 0;
	display: flex;
	overflow: auto;
	white-space: nowrap;
}
.text {
	font-size: 18px;
	font-weight: 600;
	color: #9797a5;
}
.title_cart {
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-between;
}
.cart {
	height: 30px;
	width: 30px;
	font-size: 16px;
	color: black;
	text-align: center;
}
</style>
