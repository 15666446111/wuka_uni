<template>
	<div class="dropdown-menu">
		<slot>
			<view> 1</view>
		</slot>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		mounted() {
			this.$on('close', this.closeDropdown)
		},
		methods: {
			closeDropdown() {
				this.$children.forEach(item =>{ item.close(); })
			}
		}
	}
</script>

<style lang="scss">
	.dropdown-menu {
		display: flex;
		overflow: auto;
		white-space: nowrap;
	}
	dropdown-item {
		flex: 1;
	}
</style>
