
<template>

	<section class="normal-layer no-padding-layer inherit-background-layer no-border-layer" v-if="address.items.length > 0">
	
		<ul class="address-list">
			<li class="address-item" v-for="item in address.items" data-index="{{$index}}" v-bind:class="{'default': address.selected === item}">
				<h3 class="address-title">{{item.userName}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.phone}}</h3>
				<p class="address-text">{{item.location}}</p>
				<p class="address-action i-grid">
					<span class="i-cell--6-col">
						<label><input name="adress" type="radio" v-bind:value="item" v-model="address.selected" style="display:none;" />
						<i class="svg-icon svg-icon--middle"><svg><use xlink:href="{{ address.selected === item ? radio_svg :unradio_svg}}"></use></svg></i>&nbsp;{{ address.selected === item ? '默认地址':'设置默认'}}</label>
					</span>

					<span class="i-cell--6-col text-right">
						<a class="text-black" v-link="{path: '/own/address/edit'}"><i class="svg-icon svg-icon--middle"><svg><use xlink:href="{{edit_svg}}"></use></svg></i>&nbsp;编辑</a>
						&nbsp;&nbsp;
						<a v-on:click.prevent="deleteItem($index)" class="text-black" href="javascript:void(0);"><i class="svg-icon svg-icon--middle"><svg><use xlink:href="{{delete_svg}}"></use></svg></i>&nbsp;删除</a>
					</span>
				</p>
			</li>
		</ul>

	</section>

	<section v-else class="normal-layer inherit-background-layer no-border-layer" >
		<p>no item...</p>
	</section>

	<p class="btn-wrap">
	  <a v-link="{path: '/own/address/edit'}" role="button" class="btn btn-block btn-simple"><i>+</i>新建地址</a>
	</p>

</template>

<script>
	import store from "../../store"

	import edit_svg from "../../../static/images/icons/form-edit.svg"
	import delete_svg from "../../../static/images/icons/form-delete.svg"

	import radio_svg from "../../../static/images/icons/form-radio_checked.svg"
	import unradio_svg from "../../../static/images/icons/form-radio_unchecked.svg"

	export default {
		data(){
			return {

				edit_svg: edit_svg,
				delete_svg: delete_svg,

				radio_svg: radio_svg,
				unradio_svg: unradio_svg,

				address: {
					selected: {},
					items: [
						{
							id: 0,
							userName: "周某某",
							phone: "137****9623",
							location: "New York"
						},
						{
							id: 1,
							userName: "韩梅梅",
							phone: "137****9623",
							location: "北京"
						},
						{
							id: 2,
							userName: "李雷",
							phone: "187****9623",
							location: "上海"
						},
						{
							id: 3,
							userName: "小鸥",
							phone: "187****9623",
							location: "深圳"
						},
					],
				},
			}
		},
		computed: {

		},
		methods: {
			deleteItem(index){
				this.address.items.$remove(this.address.items[index]); 
			},
		},
		route: {
			data(){
				store.setHtmlTitle("收获地址")
			}
		}
	}
</script>
