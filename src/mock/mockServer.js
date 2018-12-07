/*mockjs提供mock数据接口*/
import Mock from 'mockjs'
import category from './category.json'
import goods from './msite.json'
import recognise from './shiwu.json'

Mock.mock('/category', {code: 0, data: category})
Mock.mock('/home', {code: 0, data: goods})
Mock.mock('/recognise', {code: 0, data: recognise})

