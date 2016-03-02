
<style lang="sass">
	$ppr: 720px / 16 / 1rem;

	.ecard-fun-list{
		overflow: hidden;
		& > li{
			width: 33.33%;
			float: left;
			& > h3{ padding: 10px/$ppr 5px/$ppr; }
		}
	}
</style>

<template>

	<section class="ecard-masthead normal-layer inherit-background-layer no-padding-layer">
	  <aside class="ecard-tip">
	      <i class="svg-icon svg-icon--middle"><svg><use xlink:href="{{warn_svg}}"></use></svg></i>
	      <h3>您的会员卡为锁定状态，不可使用</h3>
	      <p>详情请咨询智家客服：000-000-0000</p>
	  </aside>
	</section>

  <section class="ecard-masthead normal-layer inherit-background-layer no-border-layer">

    <aside class="ecard-figure">
        <hgroup>
        	<h2>智家钱包</h2>
        	<h1>智家 の 会员卡</h1>
        </hgroup>
        <p>name&nbsp;&nbsp;NO.000 0000 0000</p>
    </aside>

    <div class="ecard-barcode">XXX-YYYY-CCCC </div>

  </section>

    <section class="normal-layer no-padding-layer">

        <ul class="ecard-feature-list feature-list interaction-list">
            <li class="feature-item">
                <a v-link="{ name: 'intro', params: { type: 'vip'} }">
                    <h3 class="inner-bar"><i class="svg-icon svg-icon--middle"><svg><use xlink:href="{{vip_svg}}"></use></svg></i>&nbsp;会员权益<span class="tip-right"><i class="right-dir-icon dir-icon"></i></span></h3>
                </a>
            </li>
        </ul>

        <ul class="ecard-equity-list cf">
            <li><i class="svg-icon svg-icon--middle"><svg><use xlink:href="{{ship_svg}}"></use></svg></i><p>便捷化<br/>订单跟踪服务</p></li>
            <li><i class="svg-icon svg-icon--middle"><svg><use xlink:href="{{money_svg}}"></use></svg></i><p>货款<br/>百分之百担保</p></li>
            <li><i class="svg-icon svg-icon--middle"><svg><use xlink:href="{{safe_svg}}"></use></svg></i><p>安全便捷<br/>自助服务</p></li>
        </ul>

    </section>

    <section class="normal-layer no-padding-layer">
      <ul class="ecard-feature-list feature-list interaction-list">
        <li class="feature-item">
          <a v-link="{ name: 'intro', params: { type: 'qa'} }">
             <h3 class="inner-bar"><i class="svg-icon svg-icon--middle"><svg><use xlink:href="{{ask_svg}}"></use></svg></i>&nbsp;会员常见问题<span class="tip-right"><i class="right-dir-icon dir-icon"></i></span></h3>
          </a>
        </li>
      </ul>
    </section>

</template>

<script>
	import store from "../../store"

	import warn_svg from "../../../static/images/icons/form-warn.svg"

	import ship_svg from "../../../static/images/icons/circle-ship.svg"
	import safe_svg from "../../../static/images/icons/circle-safe.svg"
	import money_svg from "../../../static/images/icons/circle-money.svg"

	import ask_svg from "../../../static/images/icons/ask.svg"
	import vip_svg from "../../../static/images/icons/vip.svg"

	export default {
		data(){
			return {

				warn_svg: warn_svg,

				ship_svg: ship_svg,
				safe_svg: safe_svg,
				money_svg: money_svg,

				vip_svg: vip_svg,
				ask_svg: ask_svg,

				ecard: []
			}
		},
		route:{
			data(transition){
				
				if(this.$data.ecard.length === 0){
					// to: ecard/open
					transition.redirect("vip");
				}
				store.setHtmlTitle("电子会员卡");
				transition.next(this.$data);
			}
		}
	}
</script>
