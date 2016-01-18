
<template>
		<section class="normal-layer no-padding-layer">
		<ul class="feature-list border-gap-list interaction-list">
			<li class="feature-item">
				<a href="#">
					<p class="inner-bar">装修类型<span class="tip-right text-gray">未填写<i class="right-dir-icon dir-icon"></i></span></p>
				</a>
			</li>
			<li class="feature-item">
				<a href="#">
					<p class="inner-bar">装修档次<span class="tip-right text-gray">未填写<i class="right-dir-icon dir-icon"></i></span></p>
				</a>
			</li>
			<li class="feature-item">
					<label class="inner-bar label-bar">装修模式<span class="tip-right text-gray">{{pattern.selected.text}}<i class="right-dir-icon dir-icon"></i></span>
						<select class="label-field" v-model="pattern.selected">
							<option v-for="option in pattern.options" v-bind:value="option" v-bind:selected="option === pattern.selected ? true : false ">{{option.text}}</option>
						</select>
					</label>
			</li>
			<li class="feature-item">
				<label class="inner-bar label-bar">期望装修时间<span class="tip-right text-gray">{{startTime}}<i class="right-dir-icon dir-icon"></i></span>
					<input type="month" class="label-field" v-model="startTime">
				</label>
			</li>
			<li class="feature-item">
				<label class="inner-bar label-bar">是否需要中央空调<span class="tip-right text-gray">{{hasAirCondition.selected.text}}<i class="right-dir-icon dir-icon"></i></span>
					<select class="label-field" v-model="hasAirCondition.selected">
							<option v-for="option in hasAirCondition.options" v-bind:value="option" v-bind:selected="option === hasAirCondition.selected ? true : false ">{{option.text}}</option>
						</select>
				</label>
			</li>
			<li class="feature-item">
				<label class="inner-bar label-bar">是否需要地暖<span class="tip-right text-gray">{{hasWarmer.selected.text}}<i class="right-dir-icon dir-icon"></i></span>
					<select class="label-field" v-model="hasWarmer.selected">
							<option v-for="option in hasWarmer.options" v-bind:value="option" v-bind:selected="option === hasWarmer.selected ? true : false ">{{option.text}}</option>
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
				pattern: {
					selected: {text:"无", value:"0"},
					options: [
						{text:"无", value:"0"},
						{text:"简装", value:"1"},
						{text:"精装", value:"2"},
					]
				},
				startTime: (new Date().getFullYear()) + '-' + (new Date().getMonth() + 1),
				hasAirCondition: {
					selected: {text:"否", value:"0"},
					options: [
						{text:"否", value:"0"},
						{text:"是", value:"1"},
					]
				},
				hasWarmer: {
					selected: {text:"否", value:"0"},
					options: [
						{text:"否", value:"0"},
						{text:"是", value:"1"},
					]
				},
			}
		},
		route: {
			data(transition){
				store.setHtmlTitle("编辑装修")
				transition.next(this.$data)
			}
		},
	}
</script>
