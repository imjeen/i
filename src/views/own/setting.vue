
<template>

	<section class="info-section normal-layer no-padding-layer">

		<ul class="info-list feature-list border-gap-list interaction-list">
			<li class="avatar-item feature-item no-interaction-item">
				<p class="inner-bar">头像<span class="tip-right avatar-figure"><img  width="100%" alt=""></span></p>
			</li>
			<li class="feature-item no-interaction-item">
				<p class="inner-bar">用户名<span class="tip-right text-gray text-gray">AAA<i>&nbsp;&nbsp;&nbsp;</i></span></p>
			</li>
			<li class="feature-item">
				<a href="#">
					<p class="inner-bar">昵称<span class="tip-right text-gray">{{nickname}}<i class="right-dir-icon dir-icon"></i></span></p>
				</a>
			</li>
			<li class="feature-item">
				<label class="inner-bar select-bar">性别<span class="tip-right text-gray">{{gender.selected.text}}<i class="right-dir-icon dir-icon"></i></span>
					<select v-model="gender.selected">
					 <option v-for="option in gender.options" v-bind:value="option" v-bind:selected="option === gender.selected ? true : false">{{option.text}}</option>
					</select>
				</label>
      </li>
      <li class="feature-item">
	      	<label class="inner-bar select-bar">学历<span class="tip-right text-gray">{{education.selected.text}}<i class="right-dir-icon dir-icon"></i></span>
		      	<select v-model="education.selected">
		      		<option v-for="option in education.options" v-bind:value="option" v-bind:selected="option === education.selected ? true : false">{{option.text}}</option>
						</select>
	      	</label>
      </li>
      <li class="feature-item">
      	<a href="#">
      		<p class="inner-bar">家庭收入<span class="tip-right text-gray">AAA 万/年<i class="right-dir-icon dir-icon"></i></span></p>
      	</a>
      </li>
      <li class="feature-item">
      	<label class="inner-bar select-bar">婚姻状况<span class="tip-right text-gray">{{maritalStatus.selected.text}}<i class="right-dir-icon dir-icon"></i></span>
      		<select v-model="maritalStatus.selected">
      			<option v-for="option in maritalStatus.options" v-bind:value="option" v-bind:selected="option === maritalStatus.selected ? true : false">{{option.text}}</option>
					</select>
      	</label>
	    </li>
      <li class="feature-item">
      	<a v-link="{path: '/own/address'}">
      		<p class="inner-bar">我的收货地址<span class="tip-right text-gray">AAA<i class="right-dir-icon dir-icon"></i></span></p>
      	</a>
      </li>
		</ul>
	</section>

	<section class="verify-section normal-layer no-padding-layer">
		<ul class="verify-list feature-list border-gap-list interaction-list">
			<li class="feature-item">
				<a v-link="{path: '/own/password/'}">
					<p class="inner-bar">登录密码<span class="tip-right text-gray">修改<i class="right-dir-icon dir-icon"></i></span></p>
				</a>
			</li>
			<li class="feature-item">
				<a  v-link="{path: '/own/verify/'}">
          <p class="inner-bar">手机验证<span class="tip-right text-gray">185****6865<i class="right-dir-icon dir-icon"></i></span><small class="tip-extra cf">绑定后可直接用手机号登录，也用于找回密码</small></p>
        </a>
      </li>
		</ul>
	</section>

	<p class="btn-wrap">
		<a href="#" class="btn btn-block btn-simple" role="button">退出登录</a>
		<!-- <button type="button" class="btn btn-block btn-simple">退出登录</button> -->
	</p>
</template>

<script>
	import store from "../../store/"
	export default {
		data(){
			return {
				nickname: "匿名",
				gender: {
					selected: {text:"男", value:"1"},
					options: [
						{text:"无", value:"0"},
						{text:"男", value:"1"},
						{text:"女", value:"2"},
					]
				},
				education: {
					selected: {text:"大学", value:"1"},
					options: [
						{text:"中学", value:"0"},
						{text:"大学", value:"1"},
						{text:"研究生", value:"2"},
						{text:"博士生", value:"3"},
					]
				},
				maritalStatus: {
					selected: {text:"未婚", value:"2"},
					options: [
						{text:"无", value:"0"},
						{text:"已婚", value:"1"},
						{text:"未婚", value:"2"},
					]
				},
			}
		},
		route:{
			data(transition){
				// this.$root.rootTitle = "我的个人中心";
				store.setHtmlTitle("我的设置");
				transition.next(this.$data);
			}
		}
	}
</script>
