
<style lang="sass">
	$ppr: 720px / 16 / 1rem;
	.ecard-section{
		margin-top: 10px/$ppr;
		input{
			background-color: #fff;
		}
	}
</style>

<template>

	<section class="ecard-section normal-layer inherit-background-layer no-border-layer">
		<h3><a href="#">会员权益</a></h3>
		<form class="form-group">
			<p  class="form-field">会员卡订单、钱包等关联，请填写真实姓名</p>
			<div class="form-field">
				<input type="text" placeholder="请输入姓名">
			</div>
		</form>
	</section>

	<p class="btn-wrap"><button type="button" class="btn btn-block btn-danger">开通会员卡</button></p>

</template>

<script>
	import store from "../../store"
	export default {
		data(){
			return {

			}
		},
		route: {
			data(transition){
				store.setHtmlTitle("开通会员卡");
				transition.next(this.$data);
			}
		}
	}
</script>
