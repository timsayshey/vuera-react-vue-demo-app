<template>
  <div>
    <h4>Hello from Vue!!!</h4>
    <button @click="clickMe()">{{ this.clicky ? "Click" : "Clack" }}</button>
  </div>
</template>
<script>
  export default {
    name: 'Testing',
    methods: {
      clickMe() {
        this.clicky = !this.clicky
      }
    },
    data() {
      return {
        clicky: true
      }
    }
  }
</script>