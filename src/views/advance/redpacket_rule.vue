
<style lang="sass">
	$ppr: 720px / 16 / 1rem;
	.redpacket-rule-handbook{
		.rule-title{
			color: #e42628;
			padding: 15px/$ppr 0;
		}
		.rule-list{
			counter-reset: rule-step 0;
			& > li{
				margin-bottom: 10px/$ppr;
				&:before{
					content: counter(rule-step)'、';
					counter-increment: rule-step;
				}
			}
		}
	}
</style>

<template>
	<section class="redpacket-rule-handbook normal-layer">
		
		<h2 class="rule-title">红包使用规则</h2>
		<ul class="rule-list">
			<li>描いてる自分は少し大げさで</li>
			<li>何か変わりそうな気がしているよ </li>
		</ul>

	</section>
</template>
