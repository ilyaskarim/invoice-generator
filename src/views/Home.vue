<template>
  	<div class="home" @click="setEditing" >
  		<Header />
  		<MainContent />
	</div>
</template>

<script>
const Header = () => import("@/components/Header.vue")
const MainContent = () => import("@/components/MainContent.vue")
import {
	mapMutations
} from "vuex";
export default {
  name: 'home',
  components: {
  	Header,
  	MainContent
  },
  data() {
  	return {
  		currentEditing: null,
  		isEditingTable: false,
  	}
  },
  mounted() {
  	document.addEventListener('keyup',this.keypressHandle);
  },	
  methods: {
  	...mapMutations(['setContent']),
  	setEditing(e) {
  		let hasClass = e.target.classList.contains('editable');
  		if (hasClass) {
  			this.currentEditing = e.target;
  			console.log(this.currentEditing);
  		}else {
  			this.currentEditing = null;
  		}
  	},
  	keypressHandle() {
  		if (this.currentEditing) {
  			let key = this.currentEditing.getAttribute('edit-key');
  			let html = this.currentEditing.innerHTML;
  			this.setContent({
  				name: key,
  				content: html
  			})
  		}
  	}
  },
};
</script>
<style type="text/css">
	.home {
		padding: 40px 80px;
		background: white;
		width: 800px;
		margin: 5% auto;
	}
	.main-header h2 {
		font-size: 50px;
		margin: 0;
		margin-bottom: 40px;
	}
	.main-client-employee .date-invoice-no p {
		margin: 0;
		margin-bottom: 8px;
	}
	.main-client-employee .client-info h4 {
		font-size: 18px;
		margin: 0;
		margin-bottom: 14px;
	}
	.main-client-employee .your-information {
		text-align: right;
	}
	.main-client-employee .your-information p {
		margin: 0;
		margin-bottom: 4px;
	}
</style>