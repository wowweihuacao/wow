import $ from 'jquery'
import './css/index.css'
import './css/index.less'
import './css/index.scss'
import Vue from 'vue'
import App from './components/App.vue'



$(function() {
    $('li:odd').css('backgroundColor', 'blue');
    $('li:even').css('backgroundColor', 'lightblue');
})


class Person {
    static info = 'aaa'
}

console.log(Person.info)

const vim = new Vue({
    el: '#app',
    render: h => h(App)
})