<template>
  <p class="content">second page</p>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component({})
  export default class Sec extends Vue {
  }
</script>

<style>
	.content{
		text-align: center;
		margin: 20px 0;
	}
</style>