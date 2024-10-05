import { connect } from 'mongoose'
import { Product, type ProductType } from './server/models/product.schema'

connect('mongodb://localhost:27017/farmStand')
  .then(() => {
    console.log('mongoDB connection succeeded!!')
  })
  .catch((err) => {
    console.error('mongoDB connection failed', err)
  })

const seedProducts: ProductType[] = [
  {
    name: 'ルビーグレープフルーツ',
    price: 198,
    category: '果物',
  },
  {
    name: 'ナス',
    price: 98,
    category: '野菜',
  },
  {
    name: 'カットメロン',
    price: 480,
    category: '果物',
  },
  {
    name: '種なしスイカのカット',
    price: 380,
    category: '果物',
  },
  {
    name: 'オーガニックセロリ',
    price: 198,
    category: '野菜',
  },
  {
    name: 'コーヒー牛乳',
    price: 298,
    category: '乳製品',
  },
]

Product.insertMany(seedProducts)
  .then((res) => {
    console.log('insertMany succeeded')
    console.log(res)
  })
  .catch((err) => {
    console.error('insertMany failed', err)
  })
