<template>
    <div class="list">
    	<p>
    		<a href="https://www.tslang.cn/docs/home.html">Typescript</a>
    	</p>
    	<p>
    		<a href="https://koa.bootcss.com/">Koa</a>
    	</p>
    	<p>
    		<a href="https://cn.vuejs.org/v2/guide/">Vue</a>
    	</p>
    	<p>
    		<a href="https://www.iviewui.com/docs/guide/install">iView</a>
    	</p>
    	<Slider v-model="value" range></Slider>
    </div>
</template>
<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component({})
  export default class First extends Vue {
    private value: number[] = [20, 50];
  }
</script>
<style lang="less">
	.list{
    p{
      text-align: center;
      margin: 20px 0;
    }
  }
</style>