<template>
	<div class="item">
		<img @click="openDetail" class="img" :src="detail.image" />
		<div class="title-btn">
			<span @click="openDetail" class="name">
				<p>{{ detail.name }}</p>
				<p>₹{{ detail.price }}</p>
			</span>
			<button @click="addToCart" class="btn">
				{{ isAdded ? "Added" : "Add to bag" }}
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "FilterList",
	data() {
		return {
			isAdded: false
		};
	},
	props: {
		detail: {}
	},
	methods: {
		addToCart() {
			if (!this.isAdded) {
				this.isAdded = true;
				this.$store.commit("addToCart");
			}
		},
		openDetail() {
			this.$store.commit("showDetailStatus", true);
			this.$store.commit("setDetail", this.detail);
		}
	}
};
</script>

<style scoped lang="scss">
.item {
	cursor: pointer;
	height: 440px;
	width: 310px;
	margin: 0 15px;
	background: #ffffff;
	border: 2px solid #e5e5e5;
	border-radius: 5px;
	flex: 0 0 auto;
	flex-wrap: wrap;
	.img {
		height: 300px;
		width: 100%;
		object-fit: cover;
	}
	.name {
		font-size: 18px;
		font-weight: 600;

		width: 60%;

		white-space: initial;
	}
}
.item:first-child {
	margin-left: 0;
}
.btn {
	border: 0;
	padding: 10px 25px;
	cursor: pointer;
	border-radius: 40px;
	background: #42b983;
	color: #ffffff;
	font-size: 14px;
	font-weight: 600;
	&::focus {
		outline: none;
	}
	&:hover {
		background: #192539;
	}
}
.title-btn {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 35px 10px;
}
</style>
