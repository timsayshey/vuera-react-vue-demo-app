import React from 'react'
import Test from './Test.vue'
import Vue from 'vue';

export default () => (
  <div>
    <h1>I'm a react component</h1>
    <div>
      <Test message='Hello from Vue!' />
    </div>
  </div>
)