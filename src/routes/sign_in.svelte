<script>
	import { get } from 'svelte/store';
</script>

<div class="content">
	<div>
		<h2 class="title">Sign In to Jankentube</h2>
		<br />
		<p>
			<strong>Join the most janky video-sharing service!</strong>
		</p>
		<p>Sign up now to get full access with your Jankentube account:</p>
		<br />
		<ul>
			<li>Comment, rate, and make video responses to your favorite videos</li>
			<li>Upload and share your videos with millions of other users</li>
			<li>Save your favorite videos to watch and share later</li>
			<li>Enter your videos into contests for fame and prizes</li>
		</ul>
		<br />
		<p>Sign up now to join the Jankentube community.</p>
		<br />
	</div>
	<div class="right">
		<form
			on:submit={(e) => {
				e.preventDefault();
				const data = new window.FormData(e.target);
				alert('Your username is ' + data.get('username'));
			}}
		>
			<input type="text" name="username" placeholder="Username" class="textbox" />
			<input
				type="text"
				name="password"
				placeholder="Password"
				class="textbox"
				style="margin-top: 9px;"
			/>
			<button class="btn btn-blue" style="margin-top: 7px;">Login</button>
		</form>
	</div>
</div>

<style lang="scss">
	.content {
		display: flex;
		width: 100%;

		div {
			width: 67.5%;
		}
		.right {
			width: 300px;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>
