
<style lang="sass">
	/* $ppr: 720px / 16 / 1rem;
	.ecard-section{
		margin-top: 10px/$ppr;
		input{
			background-color: #fff;
		}
	} */
</style>

<template>

	<section class="normal-layer no-padding-layer no-border-layer">

 		<ul class="ecard-feature-list feature-list interaction-list">
      <li class="feature-item">
        <a v-link="{ name: 'intro', params: { type: 'vip'} }">
            <h3 class="inner-bar"><i class="svg-icon svg-icon--middle"><svg><use xlink:href="{{vip_svg}}"></use></svg></i>&nbsp;会员权益<span class="tip-right"><i class="right-dir-icon dir-icon"></i></span></h3>
        </a>
      </li>
    </ul>

	</section>

	<section class="normal-layer no-padding-layer no-border-layer inherit-background-layer">
	  <form class="ecard-vip-form">

	    <p class="field-title">会员卡订单、钱包等关联，请填写真实姓名</p>

	    <label class="ecard-input-field i-border-image">
	    	<i class="svg-icon svg-icon--middle"><svg><use xlink:href="{{avatar_svg}}"></use></svg></i>
	        <input type="text" name="username" placeholder="请输入姓名" v-model="vipName">
	    </label>

	    <p class="btn-wrap">
	        <button v-on:click.prevent="openVIP()" role="button" class="btn btn-block btn-danger">开通会员卡</button>
	    </p>

	  </form>
	</section>

</template>

<script>
	import store from "../../store"

	import vip_svg from "../../../static/images/icons/vip.svg"
	import avatar_svg from "../../../static/images/icons/avatar.svg"

	export default {
		data(){
			return {
				vip_svg: vip_svg,
				avatar_svg: avatar_svg,

				vipName: "",

			}
		},
		methods: {
			openVIP(){
				// if(this.$data.vipName !== ""){}
			},
		},
		route: {
			data(transition){
				store.setHtmlTitle("开通会员卡");
				transition.next(this.$data);
			}
		}
	}
</script>
