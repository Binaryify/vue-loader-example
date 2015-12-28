/* global describe, it, expect */

import Vue from 'vue'
import App from '../../src/app.vue'

describe('app.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><app></app></div>',
      components: { app: App }
    }).$mount()
    expect(vm.$el.querySelector('.logo')).toBeTruthy()
    expect(vm.$el.querySelector('h1').textContent).toBe('Hello from vue-loader!')
    expect(vm.$el.querySelectorAll('.container').length).toBe(2)
    expect(vm.$el.querySelectorAll('.counter').length).toBe(1)
  })
})
