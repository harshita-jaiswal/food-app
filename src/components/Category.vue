<template>
	<div class="category">
		<div class="title_filter">
			<p class="title">SELECT CATEGORIES</p>
			<span>Filter</span>
		</div>
		<div class="category_list">
			<div
				@click="selectCat(item)"
				class="category_item"
				v-for="(item, index) in list"
				:key="index"
			>
				<img class="cat_img" :src="item.image" />
				<span class="cat_name">{{ item.name }} </span>
			</div>
		</div>
		<div v-if="getList.length" class="container">
			<div v-for="(item, index) in getList" >
				<food-item :detail="item" />
			</div>
		</div>
		<p v-else class="title">No {{ getSelectedCategory }} Found!!</p>
	</div>
</template>

<script>
import FoodItem from "./FoodItem.vue";
export default {
	name: "Category",
	components: {
		FoodItem
	},
	computed: {
		getList() {
			return this.$store.getters.getSelectedCategory;
		},
		list() {
			return this.$store.state.categories;
		},
		getSelectedCategory() {
			return this.$store.state.selectedCategory;
		}
	},
	methods: {
		selectCat(item) {
			this.$store.commit("selectCategory", item.name);
		}
	}
};
</script>

<style scoped lang="scss">
.category {
	margin: 35px 0;
	&_list {
		display: flex;
		overflow: auto;
		white-space: nowrap;
		margin-bottom: 20px;
	}
	&_item {
		height: auto;
		width: auto;
		margin: 10px 15px;
		border: 2px solid #e5e5e5;
		border-radius: 5px;
		padding: 10px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		cursor: pointer;
		&:last-child {
			margin-right: 0;
		}
		&:first-child {
			margin-left: 0;
		}
	}
}
.title {
	font-size: 20px;
	font-weight: 600;
}

.cat_img {
	height: 30px;
	width: 30px;
	border-radius: 100%;
	border: 1px solid #e5e5e5;
}
.cat_name {
	font-size: 16px;
	font-weight: 600;
	padding: 0 15px;
	display: inline;
}
.container {
	display: flex;
	flex-wrap: wrap;
}
.title_filter {
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-between;
}
</style>
