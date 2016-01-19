
<template>
	<section>
		<dl class="cart-list">
			<dt class="cart-list__shop"><h2><label><input type="checkbox">&nbsp;&nbsp;自营店</label></h2></dt>

			<dd class="cart-item cart-list__item i-grid i-grid--no-spacing">
				<div class="cart-item__checkbox i-cell i-cell--1-col i-cell--middle"><label><input type="checkbox"></label></div>
				<figure class="cart-item__figure i-cell i-cell--5-col"><a href=""><img src="/static/images/200x200.png" width="100%" alt=""></a></figure>
				<div class="cart-item__caption i-cell i-cell--6-col">
					<h3 class="ellipsis--twoline"><a href="#">【西门子】远景雅白五孔十只装|开关/断路器品牌聚惠，订单完成再返22元，限量100套【本产品不参加满减优惠】</a></h3>
					<p>
						<strong>$00.00</strong>
						<span class="item-number-wrap"><button class="number-button number-button--down">-</button><strong class="item-number">1</strong><button class="number-button number-button--up">+</button></span>
					</p>
					<button>DEL</button>
				</div>
			</dd>


		</dl>
	</section>

	<aside class="cart-total">
		<div class="i-grid i-grid--no-spacing">
			<label class="cart-total__check i-cell i-cell--1-col i-cell--middle"><input type="checkbox"></label>
			<div class="cart-total__price i-cell i-cell--7-col">
				<p>合计：￥<strong>000</strong></p>
				<p>总额：￥<em>000</em></p>
				<p>优惠：￥<em>000</em></p>
			</div>
			<p class="cart-total__button-group i-cell i-cell--4-col i-cell--middle"><button>结算(1)</button></p>
		</div>
	</aside>
</template>

<script>
	import store from "../../store"
	export default {
		route: {
			data(transition){
				store.setHtmlTitle("购物车");
				transition.next(this.$data);
			}
		}
	}
</script>

<style lang="sass?outputStyle=expanded">
	.cart-list{
		padding-left: .10rem;
		padding-right: .10rem;
		margin-bottom: .15rem;
		background-color: #fff;
		/*&:first-child{
			margin-top: .15rem;
		}*/
		&:last-child{
			margin-bottom: 0;
		}
		.cart-list__shop{
			margin-bottom: .10rem;
		}
		.cart-list__item{
			margin-bottom: .10rem;
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	
	.cart-item{
		position: relative;
		.cart-item__checkbox{
  		/*margin: auto 0;*/
		}
		.cart-item__figure{
			float: left;
			margin: 0;
			font-size: 0;
			max-width: 1.6rem;
			padding-right: .10rem;
		}
		.cart-item__caption > h3{
			margin-bottom: .10rem;
		}
	}

	.item-number-wrap{
		display: inline-block;
		border: 1px solid #ccc;
		border-radius: 0.02rem;
		font-size: .16rem;
		.item-number{
			display: inline-block;
			margin: 0 .10rem;
		}
		.number-button{
			padding: .05rem .10rem;
			border: none;
			&.number-button--up{
				
			}
			&.number-button--down{
				
			}
		}
		
	}

	.cart-total{
		margin-top: .15rem;
		padding-left: .10rem;
    padding-right: .10rem;
    background-color: #fff;
    .cart-total__check{
    	/*margin: auto 0;*/
    }
    .cart-total__price{}
    .cart-total__button-group{
    	padding-left: .10rem;
    	button{
    		width: 100%;
    		padding: .10rem .05rem;
    		border: none;
				background-color: #d00000;
				color: #fff;
				text-align: center;
				border-radius: .05rem;
    	}
    }
	}

</style>
