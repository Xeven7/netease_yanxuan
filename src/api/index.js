import ajax from './ajax'
/*const BASE_URL = '/api'

export const reqLocation = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)

export const reqFoodTypes = () => ajax(BASE_URL + '/index_category')

export const reqShopList = (longitude, latitude) => ajax(BASE_URL + '/shops', {longitude, latitude})

export const reqSearchShop = (geohash, keyword) => ajax(BASE_URL + '//search_shops', {geohash, keyword})

export const reqCaptcha = () => ajax(BASE_URL + '/captcha')

export const reqAccountLogin = (username, password, captcha) => ajax(BASE_URL + '/login_pwd', {username, password, captcha}, 'POST')

export const reqMobileCode = (phone) => ajax(BASE_URL + `/sendcode`, {phone})

export const reqSmsLogin = (phone, code) => ajax(BASE_URL + '/login_sms', {phone, code}, 'POST')

export const reqUserInfo = () => ajax(BASE_URL + '/userinfo')

export const reqLogout = () => ajax(BASE_URL + '/logout')


export const reqShopInfo = () => ajax('/info')

export const reqShopRatings = () => ajax('/ratings')

export const reqShopGoods = () => ajax('/goods')*/
export const reqCategoryList = () => ajax('/category')
export const reqRecogniseList = () => ajax('/recognise')
export const reqHomeGoods = () => ajax('/home')
