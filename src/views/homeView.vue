<!-- 
<template>
	<section class="home-section home-divider--bottom">
		<div class="home-banner">
			<h2 class="home-banner__title">欢迎到我家</h2>
			<p class="home-group"><a class="home-group__button" href="#">登录/注册</a></p>
			<p><a href="#/own/info">个人中心</a></p>
		</div>
		
		<ul class="i-grid i-grid--no-spacing">
			<li class="i-cell i-cell--middle i-cell--6-col">
				<a class="home-link home-link--block home-link--center" v-link="{path: '/own/ecard'}">电子会员卡</a>
			</li>
			<li class="i-cell i-cell--middle i-cell--6-col">
				<a class="home-link home-link--block home-link--center" v-link="{path: '/record/list'}">我的足迹</a>
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
 -->

 <template>

 	<section class="masthead-section normal-layer">
		
		<!-- login -->
		<div class="masthead-login">
			<figure class="masthead-figure"><img alt="" width="100%" /></figure>
			<div class="masthead-caption">
				<h3>name</h3>
				<p>钱包余额 ￥100.00</p>
				<p class="masthead-setting"><a href="#/own/info">账户设置<span>></span></a></p>
			</div>
		</div>
		<!-- no login -->
		<!-- <div class="masthead-nologin">
			<h2 class="masthead-title">欢迎来到齐家</h2>
			<p><a class="masthead-button" href="${loginUrl!}">登录/注册</a></p>
		</div> -->
	</section>

	<section class="service-section normal-layer no-padding-layer">
		<ul class="feature-list interaction-list">
			<li class="feature-item">
				<a  v-link="{path: '/order/list'}">
					<p class="inner-bar">我的订单<span class="tip-right text-gray">查看全部订单<i class="right-dir-icon dir-icon"></i></span></p>
				</a>
			</li>
		</ul>
		<ul class="service-list cl">
			<li>
				<a v-link="{path: '/order/wait/pay'}"><span class="icon-area"><i class=""></i><em class="icon-tip">99</em></span>待支付</a>
			</li>
			<li>
				<a  v-link="{path: '/order/wait/delivery'}"><span class="icon-area"><i class=""></i><em class="icon-tip">99</em></span>待发货</a>
			</li>
			<li>
				<a v-link="{path: '/order/wait/receive'}"><span class="icon-area"><i class=""></i><em class="icon-tip">99</em></span>待收货</a>
			</li>
			<li>
				<a v-link="{path: '/order/wait/evaluate'}"><span class="icon-area"><i class=""></i><em class="icon-tip">99</em></span>待评价</a>
			</li>
			<li>
				<a v-link="{path: '/order/refund'}"><span class="icon-area"><i class=""></i><em class="icon-tip">99</em></span>退款/售后</a>
			</li>
		</ul>
	</section>

	<section class="advance-section normal-layer no-padding-layer">
		<ul class="advance-list link-list clearfix">
			<li>
				<a class="advance-cell" v-link="{path: '/own/ecard'}">
					<i class="advance-icon">&nabla;</i>
					<span class="advance-text">电子会员卡</span>
					<small class="advance-tip">&nbsp;</small>
				</a>
			</li>
			<li>
				<a class="advance-cell" v-link="{path: '/order/cart'}">
					<i class="advance-icon">&nabla;</i>
					<span class="advance-text">购物车</span>
					<small class="advance-tip">(9件)</small>
				</a>
			</li>
			<li>
				<a class="advance-cell" v-link="{path: '/own/coupon'}">
					<i class="advance-icon">&nabla;</i>
					<span class="advance-text">优惠券/红包</span>
					<small class="advance-tip">&nbsp;</small>
				</a>
			</li>
			<li>
				<a class="advance-cell"href="#">
					<i class="advance-icon">&nabla;</i>
					<span class="advance-text">代金券</span>
					<small class="advance-tip">&nbsp;</small>
				</a>
			</li>
			<li>
				<a class="advance-cell" href="#">
					<i class="advance-icon">&nabla;</i>
					<span class="advance-text">齐家钱包</span>
					<small class="advance-tip">&nbsp;</small>
				</a>
			</li>
			<li>
				<a class="advance-cell" v-link="{path: '/own/activity'}">
					<i class="advance-icon">&nabla;</i>
					<span class="advance-text">已报名活动</span>
					<small class="advance-tip">&nbsp;</small>
				</a>
			</li>
			<li>
				<a class="advance-cell" v-link="{path: '/own/reservation'}">
					<i class="advance-icon">&nabla;</i>
					<span class="advance-text">我的预约</span>
					<small class="advance-tip">&nbsp;</small>
				</a>
			</li>
			<li>
				<a class="advance-cell"  v-link="{path: '/record/list'}">
					<i class="advance-icon">&nabla;</i>
					<span class="advance-text">我的足迹</span>
					<small class="advance-tip">&nbsp;</small>
				</a>
			</li>
			<li>
				<a class="advance-cell" href="#">
					<i class="advance-icon">&nabla;</i>
					<span class="advance-text">我的问答</span>
					<small class="advance-tip">&nbsp;</small>
				</a>
			</li>
			<li>
				<a class="advance-cell"v-link="{path: '/own/tailor'}">
					<i class="advance-icon">&nabla;</i>
					<span class="advance-text">装修需求定制</span>
					<small class="advance-tip">&nbsp;</small>
				</a>
			</li>
			<li>
				<a class="advance-cell" href="#">
					<i class="advance-icon">&nabla;</i>
					<span class="advance-text">我的抽奖</span>
					<small class="advance-tip">&nbsp;</small>
				</a>
			</li>
			<li>
				<a class="advance-cell" href="#">
					<i class="advance-icon">&nabla;</i>
					<span class="advance-text">更多</span>
					<small class="advance-tip">&nbsp;</small>
				</a>
			</li>
		</ul>
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