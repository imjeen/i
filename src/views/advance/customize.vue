
<template>

	<aside>
		<p class="notice-warn"><i class="svg-icon svg-icon--middle"><svg><use xlink:href="{{warn_svg}}"></use></svg></i>&nbsp;编辑齐家保护您的需求隐私，并根据需求信息适当推送合适的装修服务给您。</p>
	</aside>

	<dl class="normal-layer no-padding-layer feature-list">
		<dt class="feature-item-title">
			<p class="inner-bar">房屋基本信息<span class="tip-right"><a class="text-black" v-link="{path: '/av/customize/edit/house'}"><i class="svg-icon svg-icon--middle"><svg><use xlink:href="{{edit_svg}}"></use></svg></i>&nbsp;编辑</a></span></p>
		</dt>
		<dd class="feature-item">
			<p class="inner-bar">面积<span class="tip-right">128平米</span></p>
		</dd>
		<dd class="feature-item">
			<p class="inner-bar">总价<span class="tip-right">338万</span></p>
		</dd>
		<dd class="feature-item">
			<p class="inner-bar">户型<span class="tip-right">三室</span></p>
		</dd>
		<dd class="feature-item">
			<p class="inner-bar">是否现房<span class="tip-right">期房2016年05月拿房</span></p>
		</dd>
		<dd class="feature-item">
			<p class="inner-bar">所在区域<span class="tip-right">上海上海市嘉定区</span></p></dd>
		</dl>

	<dl class="normal-layer no-padding-layer feature-list">
		<dt class="feature-item-title">
			<p class="inner-bar">装修需求信息<span class="tip-right"><a class="text-black" v-link="{path: '/av/customize/edit/decoration'}"><i class="svg-icon svg-icon--middle"><svg><use xlink:href="{{edit_svg}}"></use></svg></i>&nbsp;编辑</a></span></p>
		</dt>
		<dd class="feature-item">
			<p class="inner-bar">装修类型<span class="tip-right text-gray">未填写</span></p>
		</dd>
		<dd class="feature-item">
			<p class="inner-bar">装修档次<span class="tip-right text-gray">未填写</span></p>
		</dd>
		<dd class="feature-item">
			<p class="inner-bar">装修预算<span class="tip-right text-gray">未填写</span></p>
		</dd>
		<dd class="feature-item">
			<p class="inner-bar">装修模式<span class="tip-right text-gray">未填写</span></p>
		</dd>
		<dd class="feature-item">
			<p class="inner-bar">期望装修时间<span class="tip-right text-gray">未填写</span></p>
		</dd>
		<dd class="feature-item">
			<p class="inner-bar">是否需要中央空调<span class="tip-right text-gray">未填写</span></p>
		</dd>
		<dd class="feature-item">
			<p class="inner-bar">是否需要地暖<span class="tip-right text-gray">未填写</span></p>
		</dd>
	</dl>

</template>

<script>
	import store from "../../store"

	import warn_svg from "../../../static/images/icons/form-warn.svg"
	import edit_svg from "../../../static/images/icons/form-edit.svg"

	export default {
		data(){
			return {
				warn_svg: warn_svg,
				edit_svg: edit_svg,
			}
		},
		route:{
			data(){
				store.setHtmlTitle("私人订制");
			}
		}
	}
</script>
