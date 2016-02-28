
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
								<svg><use xlink:href="{{pay_svg}}"></use></svg>
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
								<svg><use xlink:href="{{receive_svg}}"></use></svg>
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
								<svg><use xlink:href="{{delivery_svg}}"></use></svg>
							</i>
							<em class="icon-tip"></em>
						</span>
						<h4>待收货</h4>
					</div>
				</a>
			</li>
			<li class="service-item">
				<a v-link="{ path: 'flow/wait/evaluate/'}">
					<div class="service-cell">
						<span class="icon-area">
							<i class="service-icon svg-icon">
								<svg><use xlink:href="{{evaluate_svg}}"></use></svg>
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
								<svg><use xlink:href="{{refund_svg}}"></use></svg>
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
							<svg><use xlink:href="{{ecard_svg}}"></use></svg>
						</i>
						<h4 class="advance-text">会员卡</h4>
						<p class="advance-tip">&nbsp;</p>
					</div>
				</a>
			</li>
			<li class="advance-item">
				<a v-link="{ path: 'av/cart/'}">
					<div class="advance-cell">
						<i class="advance-icon svg-icon" style="color:#32bbe4;">
							<svg><use xlink:href="{{cart_svg}}"></use></svg>
						</i>
						<h4 class="advance-text">购物车</h4>
						<p class="advance-tip"><span>(0)</span>件</p>
					</div>
				</a>
			</li>
			<li class="advance-item">
				<a v-link="{ path: 'av/redpacket/'}">
					<div class="advance-cell">
						<i class="advance-icon svg-icon" style="color:#f1624f;">
							<svg><use xlink:href="{{redpacket_svg}}"></use></svg>
						</i>
						<h4 class="advance-text">新年红包</h4>
						<p class="advance-tip">&nbsp;</p>
					</div>
				</a>
			</li>
			<li class="advance-item">
				<a v-link="{ path: 'av/coupon/'}">
					<div class="advance-cell">
						<i class="advance-icon svg-icon" style="color:#33c8b0;">
							<svg><use xlink:href="{{coupon_svg}}"></use></svg>
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
							<svg><use xlink:href="{{voucher_svg}}"></use></svg>
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
							<svg><use xlink:href="{{wallet_svg}}"></use></svg>
						</i>
						<h4 class="advance-text">我的钱包</h4>
						<p class="advance-tip">&nbsp;</p>
					</div>
				</a>
			</li>
			<li class="advance-item">
				<a v-link="{ path: 'av/activity/'}">
					<div class="advance-cell">
						<i class="advance-icon svg-icon" style="color:#33c8b0;">
							<svg><use xlink:href="{{activity_svg}}"></use></svg>
						</i>
						<h4 class="advance-text">报名活动</h4>
						<p class="advance-tip">&nbsp;</p>
					</div>
				</a>
			</li>
			<li class="advance-item">
				<a v-link="{ path: 'av/reservation/'}">
					<div class="advance-cell">
						<i class="advance-icon svg-icon" style="color:#ffa201;">
							<svg><use xlink:href="{{reservation_svg}}"></use></svg>
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
							<svg><use xlink:href="{{record_svg}}"></use></svg>
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
							<svg><use xlink:href="{{qa_svg}}"></use></svg>
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
							<svg><use xlink:href="{{customize_svg}}"></use></svg>
						</i>
						<h4 class="advance-text">私人定制</h4>
						<p class="advance-tip">&nbsp;</p>
					</div>
				</a>
			</li>
			<li class="advance-item">
				<a v-link="{ path: 'av/award/'}">
					<div class="advance-cell">
						<i class="advance-icon svg-icon" style="color:#f1624f;">
							<svg><use xlink:href="{{award_svg}}"></use></svg>
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
							<svg><use xlink:href="{{more_svg}}"></use></svg>
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

	import delivery_svg from "../../static/images/icons/flow/delivery.svg"
	import pay_svg from "../../static/images/icons/flow/pay.svg"
	import receive_svg from "../../static/images/icons/flow/receive.svg"
	import evaluate_svg from "../../static/images/icons/flow/evaluate.svg"
	import refund_svg from "../../static/images/icons/flow/refund.svg"

	import ecard_svg from "../../static/images/icons/advance/ecard.svg"
	import cart_svg from "../../static/images/icons/advance/cart.svg"
	import redpacket_svg from "../../static/images/icons/advance/redpacket.svg"
	import coupon_svg from "../../static/images/icons/advance/coupon.svg"
	import voucher_svg from "../../static/images/icons/advance/voucher.svg"
	import wallet_svg from "../../static/images/icons/advance/wallet.svg"
	import activity_svg from "../../static/images/icons/advance/activity.svg"
	import reservation_svg from "../../static/images/icons/advance/reservation.svg"
	import record_svg from "../../static/images/icons/advance/record.svg"
	import qa_svg from "../../static/images/icons/advance/qa.svg"
	import customize_svg from "../../static/images/icons/advance/customize.svg"
	import award_svg from "../../static/images/icons/advance/award.svg"
	import more_svg from "../../static/images/icons/advance/more.svg"

	export default {
		data(){
			return {

				pay_svg: pay_svg,
				delivery_svg: delivery_svg,
				receive_svg: receive_svg,
				evaluate_svg: evaluate_svg,
				refund_svg: refund_svg,

				ecard_svg: ecard_svg,
				cart_svg: cart_svg,
				redpacket_svg: redpacket_svg,
				coupon_svg: coupon_svg,
				voucher_svg: voucher_svg,
				wallet_svg: wallet_svg,
				activity_svg: activity_svg,
				reservation_svg: reservation_svg,
				record_svg: record_svg,
				qa_svg: qa_svg,
				customize_svg: customize_svg,
				award_svg: award_svg,
				more_svg: more_svg,

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
