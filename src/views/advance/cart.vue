
<template>

	<section class="normal-layer">

		<dl class="entity-bundle">
			<dt class="bundle-header">
				<label class="i-grid">
					<input type="checkbox" style="display:none;">
					<span class="i-cell i-cell--1-col"><i class="svg-icon svg-icon--middle"><svg><use xlink:href="/static/images/icon-sprites.svg#icon-check_box_unchecked"></use></svg></i></span>
					<h3>旗舰店</h3>
				</label>
			</dt>
			<dd class="bundle-group">
				<ul class="group-list">
					<li class="group-item i-grid">
						<label class="i-cell i-cell--1-col i-cell--middle"><input type="checkbox" style="display:none;"><i class="svg-icon svg-icon--middle"><svg><use xlink:href="/static/images/icon-sprites.svg#icon-check_box_unchecked"></use></svg></i></label>
						<figure class="i-cell i-cell--4-col"><img src="/static/images/200x200.png" alt="" width="100%"></figure>
						<div class="i-cell i-cell--7-col i-cell--middle">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, doloremque!</p>
							<p>￥0.00</p>
							<p>
								<button>-</button>
								<input type="text" >
								<button>+</button>
							</p>
							<p><button>删除</button></p>
						</div>
					</li>
				</ul>
			</dd>
		</dl>

		<dl class="entity-bundle">
			<dt class="bundle-header">
				<label class="i-grid">
					<input type="checkbox" style="display:none;">
					<span class="i-cell i-cell--1-col"><i class="svg-icon svg-icon--middle"><svg><use xlink:href="/static/images/icon-sprites.svg#icon-check_box_unchecked"></use></svg></i></span>
					<h3>自营店</h3>
				</label>
			</dt>
			<dd class="bundle-group">
				<ul class="group-list">
					<li class="group-item i-grid">
						<label class="i-cell i-cell--1-col i-cell--middle"><input type="checkbox" style="display:none;"><i class="svg-icon svg-icon--middle"><svg><use xlink:href="/static/images/icon-sprites.svg#icon-check_box_unchecked"></use></svg></i></label>
						<figure class="i-cell i-cell--4-col"><img src="/static/images/200x200.png" alt="" width="100%"></figure>
						<div class="i-cell i-cell--7-col i-cell--middle">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, doloremque!</p>
							<p>￥0.00</p>
							<p>
								<button>-</button>
								<input type="text" >
								<button>+</button>
							</p>
							<p><button>删除</button></p>
						</div>
					</li>
					<li class="group-item i-grid">
						<label class="i-cell i-cell--1-col i-cell--middle"><input type="checkbox" style="display:none;"><i class="svg-icon svg-icon--middle"><svg><use xlink:href="/static/images/icon-sprites.svg#icon-check_box_unchecked"></use></svg></i></label>
						<figure class="i-cell i-cell--4-col"><img src="/static/images/200x200.png" alt="" width="100%"></figure>
						<div class="i-cell i-cell--7-col i-cell--middle">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, doloremque!</p>
							<p>￥0.00</p>
							<p>
								<button>-</button>
								<input type="text" >
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
		<label class="i-cell i-cell--1-col">
			<input type="checkbox" style="display:none;">
			<i class="svg-icon svg-icon--middle"><svg><use xlink:href="/static/images/icon-sprites.svg#icon-check_box_unchecked"></use></svg></i>
		</label>
		<hgroup class="i-cell i-cell--7-col">
			<h3>合计： ￥<strong>0.00</strong></h3>
			<h4>总额：￥0.00</h4>
			<h5>优惠：￥0.00</h5>
		</hgroup>
		<p class="i-cell i-cell--4"><button>结算</button></p>
	</aside>

</template>

<script>
	import store from "../../store"
	export default {
		data(){
			return {

			}
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
