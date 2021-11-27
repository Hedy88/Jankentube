<div>
	<span class="sep first" /><span class="sep second" /><span class="third" />
</div>

<style lang="scss">
	div {
		margin: 0;
		position: relative;
		height: 0;
		border-top: 1px solid #ddd;
		border-bottom: 1px solid #fff;
		z-index: -99;

		span {
			position: absolute;
			display: block;
			border: none;
			height: 80px;
			top: -80px;
			z-index: -100;
			margin: 0;
			padding: 0;
		}
		.sep {
			width: 80px;
		}
		.first {
			background: no-repeat url('/rule.png') 0 0;
			left: 0;
		}
		.second {
			background: no-repeat url('/rule.png') -114px 0;
			right: 0;
		}
		.third {
			position: relative;
			margin-left: 80px;
			margin-right: 80px;
			top: -80px;
			background: url('/horizontal-rule.png');
		}
	}
</style>
