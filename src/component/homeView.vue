
<template>
	<section class="home-section home-divider--bottom">
		<div class="home-banner">
			<h2 class="home-banner__title">欢迎到我家</h2>
			<p class="home-group"><a class="home-group__button" href="#">登录/注册</a></p>
			<p><a href="#/own/info">个人中心</a></p>
			<!-- <figure>
				<img alt="">
				<figcaption><h3>usename</h3></figcaption>
			</figure> -->
		</div>
		
		<ul class="i-grid i-grid--no-spacing">
			<li class="i-cell i-cell--middle i-cell--6-col">
				<a class="home-link home-link--block home-link--center" v-link="{path: '/own/ecard'}">电子会员卡</a>
			</li>
			<li class="i-cell i-cell--middle i-cell--6-col">
				<a class="home-link home-link--block home-link--center" v-link="{path: '/track/list'}">我的足迹</a>
			</li>
		</ul>

	</section>

	<section class="home-section home-divider--top home-divider--bottom">
		<ul class="i-grid i-grid--no-spacing">
			<li class="i-cell i-cell--middle i-cell--3-col">
				<a class="home-link home-link--block home-link--center" v-link="{path: '/order/wait/pay'}" href="#">待支付<span>(<em v-text="waitOrderNum"></em>)</span></a>
			</li>
			<li class="i-cell i-cell--middle i-cell--2-col">
				<a class="home-link home-link--block home-link--center" v-link="{path: '/order/wait/delivery'}" href="#">待发货</a>
			</li>
			<li class="i-cell i-cell--middle i-cell--2-col">
				<a class="home-link home-link--block home-link--center" v-link="{path: '/order/wait/receive'}" href="#">待收货</a>
			</li>
			<li class="i-cell i-cell--middle i-cell--2-col">
				<a class="home-link home-link--block home-link--center" v-link="{path: '/order/wait/evaluate'}" href="#">待评价</a>
			</li>
			<li class="i-cell i-cell--middle i-cell--3-col">
				<a class="home-link home-link--block home-link--center" v-link="{path: '/order/refund'}" href="#">退款/售后</a>
			</li>
		</ul>
		<p class="home-divider--top">
			<a class="home-link home-link--block" v-link="{path: '/order/list'}" href="#">我的订单<span>(<em v-text="orderNum"></em>)</span></a>
		</p>
	</section>

	<section class="home-section home-divider--top home-divider--bottom">
		<p><a class="home-link home-link--block" v-link="{path: '/order/cart'}" href="#">购物车<span>(<em v-text="cartNum"></em>)</span></a></p>
	</section>

	<section class="home-section home-divider--top home-divider--bottom">
		<p><a class="home-link home-link--block" v-link="{path: '/own/activity'}" href="#">我的活动</a></p>
		<p class="home-divider--top"><a class="home-link home-link--block" v-link="{path: '/own/reservation'}" href="#">我的预约</a></p>
		<p class="home-divider--top"><a class="home-link home-link--block" v-link="{path: '/own/coupon'}" href="#">我的优惠券/红包</a></p>
	</section>
</template>

<script>
	export default {
		data(){
			return {
				orderNum: 100,
				cartNum: 100,
				waitOrderNum: 100
			}
		},
		route: {
			data(transition){
				this.$root.rootTitle = "";
				transition.next(this.$data);
			}
		}
	}
</script>

<style lang="sass?outputStyle=expanded">
	.home-section{
		margin-bottom: .15rem;
		background-color: #fff;
	}
	.home-banner{
		color: #fff;
		background: -moz-linear-gradient(90deg, #FF2B1C 0, #FF426E 100%);/* FF3.6+ */
		background: -webkit-gradient(linear, 90deg, color-stop(0, FF2B1C), color-stop(100%, FF426E));/* Chrome,Safari4+ */
		background: -webkit-linear-gradient(90deg, #FF2B1C 0, #FF426E 100%);/* Chrome10+,Safari5.1+ */
		background: -o-linear-gradient(90deg, #FF2B1C 0, #FF426E 100%);/* Opera 11.10+ */
		background: -ms-linear-gradient(90deg, #FF2B1C 0, #FF426E 100%);/* IE10+ */
		filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1301FE', endColorstr='#F4F60C', GradientType='1'); /* for IE */
		background: linear-gradient(90deg, #FF2B1C 0, #FF426E 100%);/* W3C */
		padding: .30rem 0;
		.home-banner__title{
			font-size: .20rem;
			text-align: center;
			margin-bottom: .20rem;
		}
	}
	.home-group{
		text-align: center;
		.home-group__button{
			color: #ff4545;
			display: inline-block;
			padding: 0.08rem .20rem;
			border: 1px solid #fff;
			background-color: #ffe5e5;
			border-radius: 0.02rem;
			text-decoration: none;
			font-size: .16rem;
			line-height: .20rem;
		}
	}
	.home-link{
		color: #666;
		text-decoration: none;
		&.home-link--block{
			display: block;
			padding: 0.10rem 0;
		}
		&.home-link--center{
			text-align: center;
		}
	}
	.home-divider--top{
		border-top: 1px solid #ddd;
	}
	.home-divider--bottom{
		border-bottom: 1px solid #ddd;
	}
	
</style>