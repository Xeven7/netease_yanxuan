/*
export default {
  totalCount(state){
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count, 0)
  },

  totalPrice(state){
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count * food.price, 0)
  },

  positiveType(state){
    return state.ratings.reduce((preTotal, rating) => preTotal + (rating.rateType === 0? 1: 0), 0)
  }
}
?*/
export default {
  calcTypes (state) {
    let arr = []
    state.recognise.forEach((item) => {
      arr.push(item.topics)
    })
    return arr

  },
}
