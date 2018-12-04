/*mockjs提供mock数据接口*/
import Mock from 'mockjs'
import category from './category.json'
import homeGoods from './msite.json'
import shiWuGoods from './shiwu.json'

Mock.mock('/category', {code: 0, data: category})
Mock.mock('/homeGoods', {code: 0, data: homeGoods})
Mock.mock('/shiWuGoods', {code: 0, data: shiWuGoods})

