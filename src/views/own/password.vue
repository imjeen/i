
<template>

	<section class="normal-layer no-border-layer inherit-background-layer">

		<form class="form-group">
			<div class="form-field">
				<span class="right-adorn" v-show=" oldPassword !=='' " v-on:click="clearInput('oldPassword')"><i class="clear-icon">&times;</i></span>
				<input type="password" placeholder="旧密码" v-model="oldPassword">
				<hr class="border-adorn" />
			</div>
			<div class="form-field">
				<span class="right-adorn" v-show=" newPassword !=='' " v-on:click="clearInput('newPassword')"><i class="clear-icon">&times;</i></span>
				<input type="password" placeholder="新密码" v-model="newPassword">
				<hr class="border-adorn" />
			</div>
			<div class="form-field">
				<span class="right-adorn"  v-show=" newPassword2 !=='' " v-on:click="clearInput('newPassword2')"><i class="clear-icon">&times;</i></span>
				<input type="password" placeholder="再次输入新密码" v-model="newPassword2">
				<hr class="border-adorn" />
			</div>
		</form>

	</section>

	<p class="btn-wrap">
		<button type="button" class="btn btn-block btn-simple" v-on:click="save">保存修改</button>
	</p>

</template>

<script>
	import store from "../../store"
	let __oldPassword = "123456"
	export default {
		data(){
			return {
				oldPassword: "",
				newPassword: "",
				newPassword2: "",
			}
		},
		computed: {
			validation(){
				return {
					oldPasswordBool: this.oldPassword === __oldPassword,
					doubulePasswordBool: this.newPassword !== "" && this.newPassword === this.newPassword2,
				}
			},
		},
		methods: {
			clearInput(name){
				this[name] = "";
			},
			save(){
				(this.validation.oldPasswordBool && this.validation.doubulePasswordBool)
					&& alert("OK, you has changed password successfully!")
			},
		},
		route: {
			data(transition){
				store.setHtmlTitle("密码修改");
			}
		},
	}
</script>
