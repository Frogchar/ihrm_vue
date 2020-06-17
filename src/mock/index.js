import Mock from 'mockjs'
import TableAPI from './table'
import ProfileAPI from './profile'
import LoginAPI from './login'
import companyAPI from "./company"

Mock.setup({
  //timeout: '1000'
})

Mock.mock(/\/table\/list\.*/, 'get', TableAPI.list)
Mock.mock(/\/frame\/profile/, 'post', ProfileAPI.profile)
Mock.mock(/\/frame\/login/, 'post', LoginAPI.login)
// Mock.mock(/\/company\/+/, 'get', companyAPI.sassDetail)
// Mock.mock(/\/company/, 'get', companyAPI.list)

