
<template>

	<section class="masthead-section normal-layer">
		<!-- login -->
		<div class="masthead-login" v-if="isLogin">
			<figure class="masthead-figure"><img alt="" width="100%" /></figure>
			<div class="masthead-caption">
				<h3>name</h3>
				<p>钱包余额 ￥100.00</p>
				<p class="masthead-setting"><a v-link="{ path: 'own/'}">账户设置<i class="inherit-color right-dir-icon dir-icon"></i></a></p>
			</div>
		</div>
		<!-- no login -->
		<div class="masthead-nologin" v-else>
			<h2 class="masthead-title">欢迎来到家</h2>
			<p><a class="masthead-button" href="#/" v-link="{path: '/'}">登录/注册</a></p>
		</div>
	</section>

	<section class="service-section normal-layer no-padding-layer">
		<ul class="feature-list interaction-list">
			<li class="feature-item">
				<a v-link="{ path: 'flow/order/'}">
					<p class="inner-bar">我的订单<span></span><span class="tip-right text-gray">查看全部订单<i class="right-dir-icon dir-icon"></i></span></p>
				</a>
			</li>
		</ul>
		<ul class="service-list cf">
			<li class="service-item">
				<a v-link="{ path: 'flow/wait/pay/'}">
					<div class="service-cell">
						<span class="icon-area">
							<i class="service-icon svg-icon">
								<svg class="icon icon-wait-to-pay"><use xlink:href="/static/images/icon-sprites.svg#icon-wait-to-pay"></use></svg>
							</i>
							<em class="icon-tip"></em>
						</span>
						<h4>待支付</h4>
					</div>
				</a>
			</li>
			<li class="service-item">
				<a v-link="{ path: 'flow/wait/delivery/'}">
					<div class="service-cell">
						<span class="icon-area">
							<i class="service-icon svg-icon">
								<svg class="icon icon-wait-to-receive"><use xlink:href="/static/images/icon-sprites.svg#icon-wait-to-receive"></use></svg>
							</i>
							<em class="icon-tip"></em>
						</span>
						<h4>待发货</h4>
					</div>
				</a>
			</li>
			<li class="service-item">
				<a v-link="{ path: 'flow/wait/receive/'}">
					<div class="service-cell">
						<span class="icon-area">
							<i class="service-icon svg-icon">
								<svg class="icon icon-wait-to-deliver"><use xlink:href="/static/images/icon-sprites.svg#icon-wait-to-deliver"></use></svg>
							</i>
							<em class="icon-tip"></em>
						</span>
						<h4>待收货</h4>
					</div>
				</a>
			</li>
			<li class="service-item">
				<a v-link="{ path: 'flow/evaluate/'}">
					<div class="service-cell">
						<span class="icon-area">
							<i class="service-icon svg-icon">
								<svg class="icon icon-wait-to-evaluate"><use xlink:href="/static/images/icon-sprites.svg#icon-wait-to-evaluate"></use></svg>
							</i>
							<em class="icon-tip"></em>
						</span>
						<h4>待评价</h4>
					</div>
				</a>
			</li>
			<li class="service-item">
				<a v-link="{ path: 'flow/refund/'}">
					<div class="service-cell">
						<span class="icon-area">
							<i class="service-icon svg-icon">
								<svg class="icon icon-wait-to-refund"><use xlink:href="/static/images/icon-sprites.svg#icon-wait-to-refund"></use></svg>
							</i>
							<em class="icon-tip">
						</em></span>
						<h4>退款/售后</h4>
					</div>
				</a>
			</li>
		</ul>
	</section>

	<section class="advance-section normal-layer no-padding-layer">
		<ul class="advance-list cf">
			<li class="advance-item">
				<a v-link="{ path: 'av/ecard/'}">
					<div class="advance-cell">
						<i class="advance-icon svg-icon" style="color:#ffa201;">
							<svg class="icon icon-ecard"><use xlink:href="/static/images/icon-sprites.svg#icon-ecard"></use></svg>
						</i>
						<h4 class="advance-text">电子会员卡</h4>
						<p class="advance-tip">&nbsp;</p>
					</div>
				</a>
			</li>
			<li class="advance-item">
				<a v-link="{ path: 'av/cart/'}">
					<div class="advance-cell">
						<i class="advance-icon svg-icon" style="color:#32bbe4;">
							<svg class="icon icon-cart"><use xlink:href="/static/images/icon-sprites.svg#icon-cart"></use></svg>
						</i>
						<h4 class="advance-text">购物车</h4>
						<p class="advance-tip"><span>(0)</span>件</p>
					</div>
				</a>
			</li>
			<li class="advance-item">
				<a v-link="{ path: 'av/coupon/'}">
					<div class="advance-cell">
						<i class="advance-icon svg-icon" style="color:#f1624f;">
							<svg class="icon icon-coupon"><use xlink:href="/static/images/icon-sprites.svg#icon-coupon"></use></svg>
						</i>
						<h4 class="advance-text">优惠券</h4>
						<p class="advance-tip">&nbsp;</p>
					</div>
				</a>
			</li>
			<li class="advance-item">
				<a v-link="{ path: 'av/voucher/'}">
					<div class="advance-cell">
						<i class="advance-icon svg-icon" style="color:#ef802e;">
							<svg class="icon icon-voucher"><use xlink:href="/static/images/icon-sprites.svg#icon-voucher"></use></svg>
						</i>
						<h4 class="advance-text">代金券</h4>
						<p class="advance-tip">&nbsp;</p>
					</div>
				</a>
			</li>
			<li class="advance-item">
				<a v-link="{ path: 'av/wallet/'}">
					<div class="advance-cell">
						<i class="advance-icon svg-icon" style="color:#f1624f;">
							<svg class="icon icon-wallet"><use xlink:href="/static/images/icon-sprites.svg#icon-wallet"></use></svg>
						</i>
						<h4 class="advance-text">齐家钱包</h4>
						<p class="advance-tip">&nbsp;</p>
					</div>
				</a>
			</li>
			<li class="advance-item">
				<a v-link="{ path: 'av/activity/'}">
					<div class="advance-cell">
						<i class="advance-icon svg-icon" style="color:#33c8b0;">
							<svg class="icon icon-activity"><use xlink:href="/static/images/icon-sprites.svg#icon-activity"></use></svg>
						</i>
						<h4 class="advance-text">已报名活动</h4>
						<p class="advance-tip">&nbsp;</p>
					</div>
				</a>
			</li>
			<li class="advance-item">
				<a v-link="{ path: 'av/reservation/'}">
					<div class="advance-cell">
						<i class="advance-icon svg-icon" style="color:#ffa201;">
							<svg class="icon icon-reservation"><use xlink:href="/static/images/icon-sprites.svg#icon-reservation"></use></svg>
						</i>
						<h4 class="advance-text">我的预约</h4>
						<p class="advance-tip">&nbsp;</p>
					</div>
				</a>
			</li>
			<li class="advance-item">
				<a v-link="{ path: 'av/record/'}">
					<div class="advance-cell">
						<i class="advance-icon svg-icon" style="color:#32bbe4;">
							<svg class="icon icon-record"><use xlink:href="/static/images/icon-sprites.svg#icon-record"></use></svg>
						</i>
						<h4 class="advance-text">我的足迹</h4>
						<p class="advance-tip">&nbsp;</p>
					</div>
				</a>
			</li>
			<li class="advance-item">
				<a v-link="{ path: 'av/qa/'}">
					<div class="advance-cell">
						<i class="advance-icon svg-icon" style="color:#32bbe4;">
							<svg class="icon icon-QA"><use xlink:href="/static/images/icon-sprites.svg#icon-QA"></use></svg>
						</i>
						<h4 class="advance-text">我的问答</h4>
						<p class="advance-tip">&nbsp;</p>
					</div>
				</a>
			</li>
			<li class="advance-item">
				<a v-link="{ path: 'av/customize/'}">
					<div class="advance-cell">
						<i class="advance-icon svg-icon" style="color:#ef802e;">
							<svg class="icon icon-customize"><use xlink:href="/static/images/icon-sprites.svg#icon-customize"></use></svg>
						</i>
						<h4 class="advance-text">装修需求定制</h4>
						<p class="advance-tip">&nbsp;</p>
					</div>
				</a>
			</li>
			<li class="advance-item">
				<a v-link="{ path: 'av/award/'}">
					<div class="advance-cell">
						<i class="advance-icon svg-icon" style="color:#f1624f;">
							<svg class="icon icon-sweepstake"><use xlink:href="/static/images/icon-sprites.svg#icon-sweepstake"></use></svg>
						</i>
						<h4 class="advance-text">我的抽奖</h4>
						<p class="advance-tip">&nbsp;</p>
					</div>
				</a>
			</li>
			<li class="advance-item">
				<a v-link="{ path: 'av/plus/'}">
					<div class="advance-cell">
						<i class="advance-icon svg-icon" style="color:#33c8b0;">
							<svg class="icon icon-more"><use xlink:href="/static/images/icon-sprites.svg#icon-more"></use></svg>
						</i>
						<h4 class="advance-text">更多</h4>
						<p class="advance-tip">&nbsp;</p>
					</div>
				</a>
			</li>
		</ul>
	</section>
	
</template>

<script>
	import store from "../store"
	export default {
		data(){
			return {
				isLogin: true,
				user: {}
			}
		},
		route: {
			data(transition){
				store.setHtmlTitle("个人中心");
				// this.$root.htmlTitle = "个人中心"
				transition.next(this.$data);
			}
		}
	}
</script>
