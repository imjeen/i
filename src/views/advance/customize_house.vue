
<template>
	<section class="normal-layer no-padding-layer">
		<ul class="feature-list border-gap-list interaction-list">
			<li class="feature-item">
				<label class="inner-bar label-bar">面积<span class="tip-right text-gray">128平米<i class="right-dir-icon dir-icon"></i></span>

				</label>
			</li>
			<li class="feature-item">
				<a href="#">
					<p class="inner-bar">总价<span class="tip-right text-gray">AAA<i class="right-dir-icon dir-icon"></i></span></p>
				</a>
			</li>
			<li class="feature-item">
				<label class="inner-bar label-bar">户型<span class="tip-right text-gray">{{type.selected.text}}<i class="right-dir-icon dir-icon"></i></span>
					<select class="label-field" v-model="type.selected">
							<option v-for="option in type.options" v-bind:value="option" v-bind:selected="option === type.selected ? true : false ">{{option.text}}</option>
						</select>
				</label>
			</li>
			<li class="feature-item">
				<label class="inner-bar label-bar">是否现房<span class="tip-right text-gray">{{finished.selected.text}}<i class="right-dir-icon dir-icon"></i></span>
						<select class="label-field" v-model="finished.selected">
							<option v-for="option in finished.options" v-bind:value="option" v-bind:selected="option === finished.selected ? true : false ">{{option.text}}</option>
						</select>
				</label>
				</label>
			</li>
			<li class="feature-item">
				<label class="inner-bar label-bar">拿房时间<span class="tip-right text-gray">{{takeTime}}<i class="right-dir-icon dir-icon"></i></span>
					<input type="month" class="label-field" v-model="takeTime">
				</label>
			</li>
			<li class="feature-item">
				<label class="inner-bar label-bar">所在区域<span class="tip-right text-gray">{{address.selected.text}}<i class="right-dir-icon dir-icon"></i></span>
					<select class="label-field" v-model="address.selected">
							<option v-for="option in address.options" v-bind:value="option" v-bind:selected="option === address.selected ? true : false ">{{option.text}}</option>
						</select>
				</label>
			</li>
		</ul>
	</section>

	<p class="btn-wrap">
		<button type="button" class="btn btn-block btn-simple">保存</button>
	</p>
</template>

<script>
	import store from "../../store"
	export default {
		data(){
			return {
				type: {
					selected: {text:"无", value:"0"},
					options: [
						{text:"无", value:"0"},
						{text:"别墅", value:"1"},
					]
				},
				finished: {
					selected: {text:"否", value:"0"},
					options: [
						{text:"否", value:"0"},
						{text:"是", value:"1"},
					]
				},
				takeTime: (new Date().getFullYear()) + '-' + (new Date().getMonth() + 1),
				address: {
					selected: {text:"无", value:"0"},
					options: [
						{text:"无", value:"0"},
						{text:"北京", value:"1"},
					]
				},
			}
		},
		route: {
			data(transition){
				store.setHtmlTitle("编辑房屋")
				transition.next(this.$data)
			}
		},
	}
</script>
