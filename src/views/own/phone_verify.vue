
<style lang="sass">

	// pixel per rem
	$ppr: 640px / 16 / 1rem;
	$bounceName: "bouncein" !default;

	.jumbotron-verify{
		position: relative;
		min-height: 120px/$ppr;
	}

 .#{$bounceName}-transition{
		transition: transform .5s ease-in 0s;
		transform: translateX(0);
		min-height: 120px/$ppr;
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
 }

 .#{$bounceName}-enter{
		transform: translateX(100%);
 }

 .#{$bounceName}-leave{
 		transform: translateX(-100%);
 }
	
</style>

<template>

	<article class="normal-layer no-border-layer inherit-background-layer">

		<header class="verify-mobile-wrap">
			<ul class="verify-mobile-step">
				<li class="step-item" v-bind:class="{'step-active': step === 1, 'step-verified': step > 1}">
					<strong><span class="step-num"><i class="step-icon"></i></span>验证身份</strong>
				</li>
				<li class="step-item" v-bind:class="{'step-active': step === 2, 'step-verified': step > 2}">
					<strong><span class="step-num"><i class="step-icon"></i></span>新手机验证</strong>
				</li>
				<li class="step-item" v-bind:class="{'step-active': step === 3, 'step-verified': step > 3}">
					<strong><span class="step-num"><i class="step-icon"></i></span>完成</strong>
				</li>
			</ul>
		</header>

		<section class="jumbotron-verify">

			<div v-if="step === 1" transition="bouncein">
				<form class="form-group">
					<p>当前使用的手机号码： {{oldPhone}}</p>
					<br>
					<div class="form-field">
						<span class="right-adorn" v-show=" newPhone !=='' " v-on:click="clearInput('newPhone')"><i class="clear-icon">&times;</i></span>
						<input type="tel" placeholder="新号码" maxlength="11" v-model="newPhone">
						<hr class="border-adorn" /> 
					</div>
				</form>
			</div>

			<div v-if="step === 2" transition="bouncein">
				<form class="form-group">
					<div class="form-field">
						<span class="right-adorn" v-on:click="getSecurityCode">获取验证码</span>
						<input type="tel" placeholder="验证码" maxlength="13" v-model="securityCode">
						<hr class="border-adorn" />
					</div>
				</form>
			</div>

			<div v-if="step === 3" transition="bouncein">
				<p>恭喜您！手机已修改成功~</p>
			</div>

			<div v-if="step !== 1 && step !== 2 && step !== 3 ">
				<p>手机修改失败～</p>
			</div>

		</section>

	</article>

	<aside class="btn-wrap">
		<button type="button" class="btn btn-block btn-simple" v-on:click.once="nextStep">下一步</button>
	</aside>

</template>

<script>
	import store from "../../store"
	let _code = "2016";
	export default {
		data(){
			return {
				step: 1,
				oldPhone: "18900020000",
				newPhone: "",
				securityCode: "",
			}
		},
		computed: {
			validation(){
				return {
					newPhoneBool: /^1[34578]\d{9}$/.test(this.newPhone),
					securityCodeBool: this.securityCode === _code,
				}
			},
		},
		methods: {
			clearInput(name){
				this[name] = "";
			},
			getSecurityCode(){
				// send to phone
				alert(_code)
			},
			nextStep(){

				(this.validation.newPhoneBool === true && this.validation.securityCodeBool === false) 
					&& (this.step = 2);

				(this.validation.newPhoneBool === true && this.validation.securityCodeBool === true) 
					&& (this.step = 3);
				
			},
		},
		route: {
			data(transition){
				store.setHtmlTitle('手机验证');
			},
		},
	}
</script>
