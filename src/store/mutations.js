
import Vue from 'vue'
import {RECEIVE_CATEGORY, RECEIVE_RECOGNISE, RECEIVE_HOME_GOODS
  } from './mutation-types'
/*import state from "./state";*/

/*export default {
  [RECEIVE_LOCATION](state, {location}){
    state.location = location
  },
  [RECEIVE_FOODTYPES](state, {foodTypes}){
    state.foodTypes = foodTypes
  },
  [RECEIVE_SHOPLIST](state, {shopList}){
    state.shopList = shopList
  },
  [RECEIVE_USERINFO](state, {userInfo}){
    state.userInfo = userInfo
  },
  [RESET_USERINFO](state){
    state.userInfo = {}
  },

  [RECEIVE_INFO](state, {info}) {
    state.info = info
  },
  [RECEIVE_RATINGS](state, {ratings}) {
    state.ratings = ratings
  },
  [RECEIVE_GOODS](state, {goods}) {
    state.goods = goods
  },
  [INCREASE_FOODCOUNT](state, {food}) {
    if(!food.count){
      // food.count = 1  注意引用变量的问题
      Vue.set(food, 'count', 1)
      state.cartFoods.push(food)
    }else {
      food.count++
    }
  },
  [DECREASE_FOODCOUNT](state, {food}) {
    if(food.count){
      food.count--
      if(food.count === 0){
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  },
  [CLEAR_CART](state){
    state.cartFoods.forEach(food => food.count = 0)
    state.cartFoods = []
  },
  [RECEIVE_SEARCHSHOPS](state, {searchShops}){
    state.searchShops = searchShops
  },
}
*/
export default {
  [RECEIVE_CATEGORY](state, {category}){
    state.category = category
  },
  [RECEIVE_RECOGNISE](state, {recognise}){
    state.recognise = recognise
  },
  [RECEIVE_HOME_GOODS](state, {goods}){
    state.goods = goods
  }
}
