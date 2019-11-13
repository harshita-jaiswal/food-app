<template>
	<div class="page">
		<p class="head">
			<span v-if="showDetail" @click="showList" class="back">←</span>
			<span>Best Food App</span>
		</p>
		<div v-if="!showDetail" class="content">
			<favourite />
			<div class="stick">
				<div>
					<input
						class="search"
						placeholder="🔍 Search for a particular dish"
						v-model="searchKey"
						@keyup.enter="onSearch"
					/>
					<p class="remove" v-if="searchResult" @click="removeSearch">
						Clear Search
					</p>
					<p class="nores" v-if="searchResult && !getList.length">
						No Result!!
					</p>
					<div
						v-if="searchResult && getList.length"
						class="container"
					>
						<div v-for="(item, index) in getList">
							<food-item :detail="item" />
						</div>
					</div>
				</div>
				<category />
			</div>
			<!-- <div class="test"></div>
			<div class="animation"></div> -->
		</div>
		<div v-else>
			<detail />
		</div>
	</div>
</template>

<script>
import axios from "axios";
import Favourite from "./Favourite.vue";
import Category from "./Category.vue";
import FoodItem from "./FoodItem.vue";
import Detail from "./Detail.vue";
export default {
	name: "Page",
	components: {
		Favourite,
		Category,
		FoodItem,
		Detail
	},
	data() {
		return {
			searchKey: "",
			searchResult: false
		};
	},
	created() {
		axios.get("http://temp.dash.zeta.in/food.php").then(res => {
			this.$store.commit("setCategory", res.data.categories);
			this.$store.commit("setRecipes", res.data.recipes);
		});
	},
	computed: {
		getList() {
			return this.$store.getters.getSearchList;
		},
		showDetail() {
			return this.$store.state.showDetail;
		}
	},
	methods: {
		onSearch() {
			this.searchResult = true;
			this.$store.commit("setSearch", this.searchKey);
		},
		removeSearch() {
			this.searchKey = "";
			this.searchResult = false;
			this.$store.commit("setSearch", "");
		},
		showList() {
			this.$store.commit("showDetailStatus", false);
			this.$store.commit("setDetail", {});
		}
	}
};
</script>

<style scoped lang="scss">
.page {
	/* position: relative; */
}
.content {
	padding: 0 30px;
}
.head {
	background: #42b983;
	color: #ffffff;
	font-size: 14px;
	font-weight: 600;
	height: 70px;
	width: 100%;
	justify-content: center;
	align-items: center;
	display: flex;
}
.search {
	margin: 25px 0;
	border: 0;
	font-size: 20px;
	border-bottom: 2px solid #e5e5e5;
	width: 100%;
	padding: 5px 10px;
}

.container {
	display: flex;
	flex-wrap: wrap;
}
.remove {
	font-size: 16px;
	padding: 10px 0;
	cursor: pointer;
	&:hover {
		color: #35adf0;
	}
}
.back {
	cursor: pointer;
	font-size: 18px;
	margin-right: 10px;
}
.nores {
	font-size: 20px;
	font-weight: 600;
}

.test {
	height: 200px;
	width: 200px;
	background: #42b983;
	transform: scale(1);
	transition: transform 0.3s;
	&:hover {
		transform: scale(0.5);
	}
}
.animation {
	height: 200px;
	width: 200px;
	background: #42b983;
	/* transform: rotate(); */
	animation: rotate 2s infinite;
	animation-delay: 0;
	margin-top: 30px;
}
@keyframes rotate {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
