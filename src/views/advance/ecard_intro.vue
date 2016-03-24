
<template>
	
	<dl v-if=" $route.params.type === 'vip' " class="ecard-rule-list">
	  <dt class="item-title">
	      <h3><i class="svg-icon svg-icon--middle"><svg>circle"><use xlink:href="{{ship_svg}}"></use></svg></i>&nbsp;便捷化订单跟踪服务</h3>
	  </dt>
	  <dd class="item-desc">
	      <p>守るかわり風切羽を折った</p>
	  </dd>
	  <dt class="item-title">
	      <h3><i class="svg-icon svg-icon--middle"><svg>circle"><use xlink:href="{{money_svg}}"></use></svg></i>&nbsp;货款百分之百担保</h3>
	  </dt>
	  <dd class="item-desc">
	      <p>月は満ち欠け時間を落とす，月亮时圆时缺，降落的时间</p>
	  </dd>
	  <dt class="item-title">
	      <h3><i class="svg-icon svg-icon--middle"><svg>circle"><use xlink:href="{{safe_svg}}"></use></svg></i>&nbsp;安全便捷自助支付</h3>
	  </dt>
	  <dd class="item-desc">
	      <p>籠に染み出す本能の飛沫 一抹本能渗出了牢笼 ねえ もしも君が天使じゃなくっても 呐，就算你不是天使</p>
	  </dd>
	</dl>

	<dl v-if=" $route.params.type === 'qa' " class="ecard-rule-list">
	    <dt class="item-title">
	    	<h3><i class="svg-icon svg-icon--middle"><svg><use xlink:href="{{ask_svg}}"></use></svg></i>&nbsp;ねえ もしも自由に飛べるとわかっても？</h3>
	    </dt>
	    <dd class="item-desc">
	        <p>答：正しく流れる 生きている証の色</p>
	    </dd>
	    <dt class="item-title">
	    	<h3><i class="svg-icon svg-icon--middle"><svg><use xlink:href="{{ask_svg}}"></use></svg></i>&nbsp;怎样才算是使用齐家钱包下订？</h3>
	    </dt>
	    <dd class="item-desc">
	        <p>答：きっとどこか遠くで芽生える</p>
	    </dd>
	    <dt class="item-title">
	    	<h3><i class="svg-icon svg-icon--middle"><svg><use xlink:href="{{ask_svg}}"></use></svg></i>&nbsp;籠に染み出す本能の飛沫？</h3>
	    </dt>
	    <dd class="item-desc">
	        <p>答：迷ったときはオトノナルホウヘ→福はやって来るから(Yeah Yeah!!)</p>
	    </dd>
	    <dt class="item-title">
	    	<h3><i class="svg-icon svg-icon--middle"><svg><use xlink:href="{{ask_svg}}"></use></svg></i>&nbsp;きっとどこか遠くで芽生え？</h3>
	    </dt>
	    <dd class="item-desc">
	        <p>答：福はやって来るから(Yeah Yeah!!)：</p>

	        <h4 class="highlinght"><i class="svg-icon svg-icon--middle"><svg><use xlink:href="{{desktop_svg}}"></use></svg></i>&nbsp;电脑</h4>
	        <p>福はやって来るから(Yeah Yeah!!)</p>
	        <h4 class="highlinght"><i class="svg-icon svg-icon--middle"><svg><use xlink:href="{{tablet_svg}}"></use></svg></i>&nbsp;手机</h4>
	        <p>きっとどこか遠くで芽生える</p>

	    </dd>
	</dl>

	<empty v-if=" $route.params.type !== 'vip' && $route.params.type !== 'qa' " v-bind:empty="empty"></empty>

</template>

<script>
	import store from "../../store"
	import empty from "../../components/empty.vue"

	import ship_svg from "../../../static/images/icons/circle-ship.svg"
	import safe_svg from "../../../static/images/icons/circle-safe.svg"
	import money_svg from "../../../static/images/icons/circle-money.svg"

	import desktop_svg from "../../../static/images/icons/material-desktop.svg"
	import tablet_svg from "../../../static/images/icons/material-tablet.svg"

	import ask_svg from "../../../static/images/icons/ask.svg"

	export default {
		components: { empty },
		data(){
			return {
				empty: {
					figure: {
						img: "",
						caption: "无法找到此页面～"
					},
					button:{
						link: "#",
						text: ""
					}
				},

				ship_svg: ship_svg,
				safe_svg: safe_svg,
				money_svg: money_svg,

				desktop_svg: desktop_svg,
				tablet_svg: tablet_svg,

				ask_svg: ask_svg,

			}
		},
		route:{
			data(transition){
				
				
				store.setHtmlTitle("电子会员卡");
				transition.next(this.$data);
			}
		}
	}
</script>
