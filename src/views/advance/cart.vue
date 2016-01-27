
<template>

	<section class="normal-layer">

		<dl class="entity-bundle" v-if="cartGroups.length > 0" v-for="group in cartGroups" v-if="group.items.length > 0">
			<dt class="bundle-header">
				<label class="i-grid">
					<input type="checkbox" style="display:none;"
						v-on:change="changeEventByGroup(group,$event)"
						v-bind:checked="isSelectedGroup(group)"
					/>
					<span class="i-cell i-cell--1-col"><i class="svg-icon svg-icon--middle"><svg><use xlink:href="/static/images/icon-sprites.svg#icon-check_box_{{isSelectedGroup(group) ? 'checked' : 'unchecked'}}"></use></svg></i></span>
					<h3>{{group.title}}</h3>
				</label>
			</dt>
			<dd class="bundle-group">
				<ul class="group-list">
					<li class="group-item i-grid" v-for="item in group.items">
						<label class="i-cell i-cell--1-col i-cell--middle">
						<input type="checkbox" style="display:none;" 
							v-bind:value="item"
							v-model="group.selected"
						/><i class="svg-icon svg-icon--middle"><svg><use xlink:href="/static/images/icon-sprites.svg#icon-check_box_{{isSelectedItem(item,group) ? 'checked' : 'unchecked'}}"></use></svg></i></label>
						<figure class="i-cell i-cell--3-col"><img v-bind:src="item.imagePath" alt="" width="100%"></figure>
						<div class="i-cell i-cell--8-col i-cell--middle">
							<p>{{item.caption}}</p>
							<p>{{item.id}}</p>
							<p>￥{{item.price}}</p>
							<p>
								<button>-</button>
								<input type="text" v-model="item.quatity">
								<button>+</button>
							</p>
							<p><button>删除</button></p>
						</div>
					</li>
				</ul>
			</dd>
		</dl>

	</section>

	<aside class="normal-layer i-grid">
		<label class="i-cell i-cell--1-col i-cell--middle">
			<input type="checkbox" style="display:none;"
			 v-on:change="changeEventByAll"
			 v-bind:checked="isSelectedAll()"
			/>
			<i class="svg-icon svg-icon--middle"><svg><use xlink:href="/static/images/icon-sprites.svg#icon-check_box_{{isSelectedAll() ? 'checked' : 'unchecked'}}"></use></svg></i>
		</label>
		<hgroup class="i-cell i-cell--7-col">
			<h3>合计： ￥<strong>0.00</strong></h3>
			<h4>总额：￥0.00</h4>
			<h5>优惠：￥0.00</h5>
		</hgroup>
		<p class="i-cell i-cell--4-col i-cell--middle"><button>结算</button></p>
	</aside>

</template>

<script>
	import store from "../../store"
	export default {
		data(){
			return {
				cartGroups: [
						{
							title: "旗舰店",
							selected: [],
							items: [
								{
									id: 1,
									imagePath: "/static/images/200x200.png",
									caption: "#1 TEST...",
									price: "1.00",
									quatity: 1
								},
								{
									id: 2,
									imagePath: "/static/images/200x200.png",
									caption: "#2 TEST...",
									price: "2.00",
									quatity: 2
								}
							]
						},
						{
							title: "旗舰店",
							selected: [],
							items: [
								{
									id: 1,
									imagePath: "/static/images/200x200.png",
									caption: "#1 TEST...",
									price: "1.00",
									quatity: 1
								},
								{
									id: 2,
									imagePath: "/static/images/200x200.png",
									caption: "#2 TEST...",
									price: "2.00",
									quatity: 2
								}
							]
						},
					]
			}
		},
		methods:{
			changeEventByAll(){
				this.cartGroups.forEach( (group) => {
					if(event.target.checked){
						group.items.forEach( (item) => {
							group.selected.indexOf(item) === -1 && group.selected.push(item);
						});
					}else{
						group.selected = [];
					}
					
				});
			},
			isSelectedAll(){
				return this.cartGroups.every( (group) => group.selected.length === group.items.length );
			},
			changeEventByGroup(group,event){
				if(!event.target.checked){
					group.selected = [];
				}else{
					group.items.forEach( (item) => {
						group.selected.indexOf(item) === -1 && group.selected.push(item)
					});
				}
			},
			isSelectedGroup(group){
				return group.selected.length > 0 
					&& group.items.every( (item) => group.selected.indexOf(item) > -1 );
			},
			isSelectedItem(item,group){
				return group.selected.indexOf(item) > -1;
			},
		},
		route: {
			data(transition){
				store.setHtmlTitle("购物车");
				transition.next(this.$data);
			}
		}
	}
</script>

<style lang="sass?outputStyle=expanded">


</style>
