import Vue from 'vue'
// import moment from 'moment'
import format from 'date-fns/format'

// Vue.filter('date-format', function (value) {
//   return moment(value).format('YYYY-MM-DD HH:mm:ss')
// })

Vue.filter('date-format', function (value) {
  return moment(value).format('YYYY-MM-DD HH:mm:ss')
})
