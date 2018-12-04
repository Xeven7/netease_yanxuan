/*
import {reqLocation, reqFoodTypes, reqShopList, reqUserInfo, reqShopGoods, reqShopRatings, reqShopInfo, reqSearchShop} from '../api'
import {RECEIVE_FOODTYPES, RECEIVE_LOCATION, RECEIVE_SHOPLIST,
         RECEIVE_USERINFO, RECEIVE_GOODS, RECEIVE_RATINGS,
          RECEIVE_INFO, INCREASE_FOODCOUNT, DECREASE_FOODCOUNT, CLEAR_CART, RECEIVE_SEARCHSHOPS} from './mutation-types'
import state from "./state";

export default {
  async getLocation ({commit, state}){
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqLocation(geohash)
    if(result.code === 0){
      const location = result.data
      commit(RECEIVE_LOCATION, {location: result.data})
    }
  },

  async getFoodTypes ({commit}){
    const result = await reqFoodTypes()
    if(result.code === 0){
      commit(RECEIVE_FOODTYPES, {foodTypes: result.data})
    }
  },

  async getShopList ({commit}){
    const {longitude, latitude} = state
    const result = await reqShopList(longitude, latitude)
    if(result.code === 0){
      commit(RECEIVE_SHOPLIST, {shopList: result.data})
    }
  },

  recordUserInfo({commit}){
    commit(RECEIVE_USERINFO, {userInfo})
  },

  async getUserInfo({commit}){
    const result = await reqUserInfo()
    if(result.code === 0){
      const userInfo = result.data
      commit(RECEIVE_USERINFO, {userInfo})
    }
  },

  async logout ({commit}){
    const result = await reqLogout()
    if(result.code === 0){
      const userInfo = result.data
      commit()
    }
  },

  async getShopInfo({commit}) {
    const result = await reqShopInfo()
    if(result.code===0) {
      const info = result.data
      info.score = 3.5
      commit(RECEIVE_INFO, {info})
    }
  },

  async getShopRatings({commit}, callback) {
    const result = await reqShopRatings()
    if(result.code===0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
      callback && callback()
    }
  },

  async getShopGoods({commit}, callback) {
    const result = await reqShopGoods()
    if(result.code===0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      //传入回调函数接收通知
      callback && callback()
    }
  },

  updateFoodCount({commit}, {isAdd, food}){
    if(isAdd){
      commit(INCREASE_FOODCOUNT, {food})
    }else{
      commit(DECREASE_FOODCOUNT, {food})
    }
  },

  clearCart({commit}){
    commit(CLEAR_CART)
  },

  async getSearchShops({commit, state}, keyword) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqSearchShop(geohash, keyword)
    if(result.code===0) {
      const searchShops = result.data
      commit(RECEIVE_SEARCHSHOPS, {searchShops})
    }
  },
}
*/
