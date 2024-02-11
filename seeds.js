const mongoose=require('mongoose');
const Product=require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/productApp')
.then(()=>{
  console.log("Mongo is Connected");
})
.catch(err=>{
  console.log("Connection Error");
  console.log(err);
})

// const p=new Product({
//   name:'Grape Fruit',
//   price:1.99,
//   category:'fruit'
// })
// p.save().then(p=>{
//     console.log(p)
//   })
// .catch(e=>{
//   console.log(e);
// })

const seedProducts=
[
  {
    name:'cucumber',
    price:0.99,
    category:'fruit'
  },
  {
    name:'Apple',
    price:2.99,
    category:'fruit'
  },
  {
    name:'beaches',
    price:3.99,
    category:'fruit'
  }
]

Product.insertMany(seedProducts)
.then(res=>{
    console.log(res);
  })
  .catch(e=>{
    console.log(e);
  })