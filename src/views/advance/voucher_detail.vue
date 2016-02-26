
<template>

  <aside class="voucher-masthead">
      <div class="ticket-failed" arial-failed="已过期"></div>
      <div class="voucher-ticket">
          <span class="ticket-price">￥<big>50</big></span>
          <h3>优惠</h3>
          <p>支付满50元抵扣10元</p>
      </div>
      <div class="voucher-barcode">
          <div class="barcode"></div>
          <p>{{$route.params.barcode}}</p>
      </div>
  </aside>

  <section class="voucher-content normal-layer inherit-background-layer no-border-layer">

  	<h4 class="text-red">此券已经被订单绑定</h4>
  	<p>如果想用于其他订单上，可前往收银台解绑/取消订单，解绑后的代金券将不抵扣在原有订单上</p>

		<h4 class="text-gray">使用有效期</h4>
		<p>2015-05-20至2016-04-09</p>

    <h4 class="text-gray">代金券描述</h4>
    <p>这些</p>

    <h4 class="text-gray">团购活动</h4>
    <ul>
        <li>1、活动XXX</li>
        <li>2、活动YYY</li>
    </ul>

    <h4 class="text-gray">支持商家</h4>
    <p>商家1、商家2、</p>          
    
    <p class="btn-wrap no-padding">
        <button role="button" class="btn btn-block btn-simple">绑定手机号</button>
    </p>

    <p class="text-gray">注意事项：如果您在现场支付订单没有显示代金券，请完成手机号绑定，绑定成功该代金券将在您的手机账户中。</p>
     
  </section>

<!-- 
	<div class="voucher-modal normal-modal" style="display: none;">
	    <div class="modal-mask"></div>
	    <div class="modal-box">
	        <h3 class="modal-title">绑定手机号</h3>

	        <form class="form-group no-border">
	            <div class="form-field">
	                <input type="tel" name="phone" placeholder="手机号">

	                <p class="border-adorn"></p>
	                <span class="right-adorn font-size-12 j_getCode">获取验证码</span>
	            </div>
	            <div class="form-field">
	                <input type="text" name="code" placeholder="验证码">

	                <p class="border-adorn"></p>
	            </div>
	        </form>
	        <p class="modal-action">
	            <a href="javascript:void(0)" class="action-link j_close">取消</a>
	            <a href="javascript:void(0)" class="action-link j_sure">提交</a>
	        </p>
	    </div>

	    <div class="modal-box modal-box-tip" style="display: none;"></div>
	    <div class="modal-box modal-box-success" style="display: none;">

	        <h3 class="modal-title"><i class="i-icon">&#xe67d;</i>&nbsp;恭喜你，绑定成功！</h3>

	        <p>绑定手机号 <span class="highlight phone-number"></span>，用该手机账户下单即可使用代金券</p>

	        <p class="modal-action">
	            <a href="javascript:void(0)" class="action-link j_close" data-status="success">我知道了</a>
	        </p>
	    </div>

	</div>

 -->
</template>

<script>
	import store from "../../store"
	export default {
		data(){
			return {}
		},
		route: {
			data(transition){
				store.setHtmlTitle("代金券详情");
				transition.next(this.$data)
			}
		},
	}
</script>
