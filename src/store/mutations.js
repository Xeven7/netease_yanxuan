/*
import Vue from 'vue'
import {RECEIVE_FOODTYPES,
  RECEIVE_LOCATION,
  RECEIVE_SHOPLIST,
  RECEIVE_USERINFO,
  RESET_USERINFO,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  INCREASE_FOODCOUNT,
  DECREASE_FOODCOUNT,
  CLEAR_CART,
  RECEIVE_SEARCHSHOPS
  } from './mutation-types'
// import state from "./state";

export default {
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
?*/
