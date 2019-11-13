<template>
	<div class="detailPg">
		<img class="img" :src="getDetail.image" />
		<div class="title-btn">
			<span class="name">
				<p>{{ getDetail.name }}</p>
				<p>₹{{ getDetail.price }}</p>
			</span>
			<button class="btn">
				<span @click="removeToCart" class="btn-icn">−</span
				><span>{{ qty ? qty : "Qty" }}</span
				><span @click="addToCart" span class="btn-icn">+</span>
			</button>
		</div>
		<div class="rating">
			<span>Category: {{ getDetail.category }}</span>
			<span
				>⭐️ {{ getDetail.rating }}.0 Rating, ({{
					getDetail.reviews
				}}
				Reviews)</span
			>
		</div>
		<p class="title">DETAILS</p>
		<p class="desc">{{ getDetail.details }}</p>
	</div>
</template>

<script>
export default {
	name: "Detail",
	components: {},
	data() {
		return {
			qty: 0,
			isAdded: false
		};
	},
	computed: {
		getDetail() {
			return this.$store.state.detail;
		}
	},
	methods: {
		addToCart() {
			this.qty = this.qty + 1;
			this.$store.commit("addToCart");
		},
		removeToCart() {
			if (this.qty !== 0) {
				this.$store.commit("removeToCart");
				this.qty = this.qty - 1;
			}
		}
	}
};
</script>

<style scoped lang="scss">
.detailPg {
	.img {
		height: 400px;
		width: 100%;
		object-fit: cover;
	}
}
.name {
	font-size: 18px;
	font-weight: 600;

	width: 60%;

	white-space: initial;
}

.item:first-child {
	margin-left: 0;
}
.btn {
	border: 0;
	padding: 10px 10px;
	cursor: pointer;
	border-radius: 5px;
	background: #42b983;
	color: #ffffff;
	font-size: 14px;
	font-weight: 600;
	&::focus {
		outline: none;
	}
	&-icn {
		padding: 0 20px 0 10px;
		font-size: 16px;
		cursor: pointer;
	}
}
.title-btn {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0 30px;
	padding: 35px 0;
	border-bottom: 3px solid #e5e5e5;
}
.rating {
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 18px;
	margin: 15px 30px;
	flex-wrap: wrap;
}
.detail {
	margin: 0 30px;
	padding: 35px 0;
}
.title {
	font-size: 20px;
	font-weight: bold;
	padding: 25px 30px 10px;
}
.desc {
	font-size: 18px;
	color: #615757;
	padding: 0 30px 10px;
}
</style>
