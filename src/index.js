import $ from 'jquery'
import './css/index.css'
import './css/index.less'
import './css/index.scss'



$(function() {
    $('li:odd').css('backgroundColor', 'blue');
    $('li:even').css('backgroundColor', 'lightblue');
})


class Person {
    static info = 'aaa'
}

console.log(Person.info)