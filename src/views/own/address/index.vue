
<template>

	<section class="normal-layer no-padding-layer no-background-layer no-border-layer">
		
		<ul class="address-list" v-if="addresses.length > 0">
			<li class="address-item" v-for="address in addresses">
				<h3 class="address-title">{{address.userName}}&nbsp;&nbsp;&nbsp;&nbsp;{{address.phone}}</h3>
				<p class="address-text">{{address.location}}</p>
				<p class="address-action i-grid">
					<span class="i-cell--6-col">
						<label><input type="radio" name="adress" >
						<i class="svg-icon svg-icon--middle"><svg><use xlink:href="/static/images/icon-sprites.svg#icon-radio_{{address.isDefault ? 'checked':'unchecked'}}"></use></svg></i>&nbsp;默认地址</label></span>
					<span class="i-cell--6-col text-right">
						<a class="text-black" v-link="{path: '/own/address/edit'}"><i class="svg-icon svg-icon--middle"><svg><use xlink:href="/static/images/icon-sprites.svg#icon-edit"></use></svg></i>&nbsp;编辑</a>
						&nbsp;&nbsp;
						<a class="text-black" v-link="{path: '/own/address/edit'}"><i class="svg-icon svg-icon--middle"><svg><use xlink:href="/static/images/icon-sprites.svg#icon-delete"></use></svg></i>&nbsp;删除</a>
					</span>
				</p>
			</li>
		</ul>
		
		<p v-else>no address...</p>

	</section>

	<p class="btn-wrap">
	  <a href="#" role="button" class="btn btn-block btn-simple"><i>+</i>新建地址</a>
	</p>

</template>

<script>
	export default {
		data(){
			return {
				addresses: [
					{
						id: 1,
						userName: "韩梅梅",
						phone: "137****9623",
						location: "北京五棵松",
						isDefault: true
					},
					{
						id: 2,
						userName: "李雷",
						phone: "187****9623",
						location: "上海",
						isDefault: false
					},
				],
			}
		},
		computed: {

		},
		methods: {
			
		},
		route: {}
	}
</script>
