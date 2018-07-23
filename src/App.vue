<template>
  <Layout class="layout">
      <Header>Header</Header>
      <Content>
        <router-view></router-view>
      </Content>
      <Footer>Footer</Footer>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component({})
  export default class App extends Vue {
    private value: number[] = [20, 50];
  }
</script>

<style>

</style>