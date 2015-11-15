
<template>
	<h2>info</h2>
	<section>
		<ul>
			<li><a href="#">头像</a></li>
			<li><a href="#">昵称</a></li>
			<li><a href="#">性别</a></li>
			<li><a href="#">所在地</a></li>
			<li><a href="#">修改密码</a></li>
			<li><a href="#">我的收货地址</a></li>
		</ul>
	</section>
</template>

<script>
	export default {
		data(){
			return { }
		},
		route:{
			data(transition){
				this.$root.rootTitle = "我的个人中心";
				transition.next(this.$data);
			}
		}
	}
</script>
