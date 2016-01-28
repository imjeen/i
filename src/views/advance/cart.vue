
<style lang="sass?outputStyle=expanded">
	$ppr: 720px / 16 / 1rem;
	.entity-bundle{
		margin-bottom: 10px/$ppr;
		.bundle-header{
			padding: 5px/$ppr 0;
		}
		.bundle-group{  }
		.group-list{
			.group-item{ margin-bottom: 5px/$ppr; }
			figure{ padding-right: 10px/$ppr; }
			.group-item__caption{
				margin-bottom: 10px/$ppr;
			}
			.group-item__price{
				color: #ff3300;
				font-family: 'Arial';
			}
		}
	}

</style>

<template>

	<section class="normal-layer">

		<dl class="entity-bundle" v-if="cartGroups.length > 0" v-for="group in cartGroups" v-if="group.items.length > 0">
			<dt class="bundle-header">
				<label class="i-grid">
					<input type="checkbox" style="display:none;"
						v-on:change="event_changeByGroup(group,$event)"
						v-bind:checked="is_selectedGroup(group)"
					/>
					<span class="i-cell i-cell--1-col"><i class="svg-icon svg-icon--middle"><svg><use xlink:href="/static/images/icon-sprites.svg#icon-check_box_{{is_selectedGroup(group) ? 'checked' : 'unchecked'}}"></use></svg></i></span>
					<h3>{{group.title}}</h3>
				</label>
			</dt>
			<dd class="bundle-group">
				<ul class="group-list">
					<li class="group-item i-grid" v-for="item in group.items">
						<label class="i-cell i-cell--1-col i-cell--middle">
						<input type="checkbox" style="display:none;" 
							v-bind:value="item.id"
							v-model="group.selected"
						/><i class="svg-icon svg-icon--middle"><svg><use xlink:href="/static/images/icon-sprites.svg#icon-check_box_{{is_selectedItem(item,group) ? 'checked' : 'unchecked'}}"></use></svg></i></label>
						<figure class="i-cell i-cell--3-col"><img v-bind:src="item.imagePath" alt="" width="100%"></figure>
						<div class="i-cell i-cell--8-col i-cell--middle">
							<p class="group-item__caption ellipsis--2-line">{{item.caption}}</p>
							
							<div class="i-grid i-grid--between">
								<p class="i-cell i-cell--3-col i-cell--middle">￥{{item.price}}</p>
								<p class="i-cell i-cell--6-col i-cell--middle">
									<button v-on:click="item.quatity > 1 ? --item.quatity : 1">-</button>
									<input type="text" v-model="item.quatity">
									<button v-on:click="item.quatity < 12 ? ++item.quatity : 12">+</button>
								</p>
								<p class="i-cell i-cell--2-col i-cell--middle">
									<button class="plain" v-on:click="event_clickDeleteByItem(group,item)">删除</button>
								</p>
							</div>
						</div>
					</li>
				</ul>
			</dd>
		</dl>

	</section>

	<aside class="normal-layer i-grid"  v-if="cartGroups.length > 0" >
		<label class="i-cell i-cell--1-col i-cell--middle">
			<input type="checkbox" style="display:none;"
			 v-on:change="event_changeByAll"
			 v-bind:checked="is_selectedAll()"
			/>
			<i class="svg-icon svg-icon--middle"><svg><use xlink:href="/static/images/icon-sprites.svg#icon-check_box_{{is_selectedAll() ? 'checked' : 'unchecked'}}"></use></svg></i>
		</label>
		<hgroup class="i-cell i-cell--7-col">
			<h3>合计： ￥<strong>{{total}}</strong></h3>
			<h4>总额：￥0.00</h4>
			<h5>优惠：￥0.00</h5>
		</hgroup>
		<p class="i-cell i-cell--4-col i-cell--middle"><button class="plain btn btn-danger" type="button">结算</button></p>
	</aside>

	<section v-if="cartGroups.length === 0">购物车，空也～</section>

</template>

<script>
	import store from "../../store"
	export default {
		data(){
			return {
				cartGroups: [
						{
							title: "自营店",
							selected: [],
							items: [
								{
									id: 1,
									imagePath: "/static/images/200x200.png",
									caption: "の真理目眩がするほどに舞う無数, 走る首都高 渡るレインボー ",
									price: 50,
									quatity: 1
								},
								{
									id: 2,
									imagePath: "/static/images/200x200.png",
									caption: "薄桃色のより先に",
									price: 240,
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
									caption: "音にならないさよなら",
									price: 60,
									quatity: 5
								},
								{
									id: 2,
									imagePath: "/static/images/200x200.png",
									caption: "為何對你念念不忘？",
									price: 90,
									quatity: 3
								}
							]
						},
					]
			}
		},
		computed: {
			total(){
				if(this.cartGroups.length === 0){ return 0; }
				let values = this.cartGroups.map((group) => {
					let temp = group.items.map((item) => group.selected.indexOf(item.id) > -1 ? item.price * item.quatity : 0 )
					return temp.reduce((prev,cur) => prev + cur )
				});
				return values.reduce((prev,cur) => prev + cur )
			}
		},
		methods:{
			event_changeByAll(){
				this.cartGroups.forEach((group) => {
					if(event.target.checked){
						group.items.forEach((item) => {
							group.selected.indexOf(item.id) === -1 && group.selected.push(item.id);
						});
					}else{
						group.selected = [];
					}
					
				});
			},
			is_selectedAll(){
				return this.cartGroups.every((group) => group.selected.length === group.items.length );
			},
			event_changeByGroup(group,event){
				if(!event.target.checked){
					group.selected = [];
				}else{
					group.items.forEach((item) => {
						group.selected.indexOf(item.id) === -1 && group.selected.push(item.id)
					});
				}
			},
			is_selectedGroup(group){
				return group.selected.length > 0 
					&& group.items.every((item) => group.selected.indexOf(item.id) > -1 );
			},
			is_selectedItem(item,group){
				return group.selected.indexOf(item.id) > -1;
			},
			event_clickDeleteByItem(group,item){
				let $group = this.cartGroups[this.cartGroups.indexOf(group)];
				$group.items.$remove(item);
				$group.selected.$remove(item.id);
				$group.items.length === 0 && this.cartGroups.$remove(group);
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
