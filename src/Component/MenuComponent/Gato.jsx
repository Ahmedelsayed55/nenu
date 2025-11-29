import React from 'react'
import Cake from "../../assets/ecklear.png"
import Cake2 from "../../assets/hols.png"
export const Gato = ({id}) => {
      const prduct = [
        {id:1, name: "اكلير", price: 35, img: Cake },
        {id:2, name: "هولز", price: 35, img: Cake2 },
        {id:3, name: "اكلير", price: 35, img: Cake },
        {id:4, name: "هولز", price: 35, img: Cake2 },
        {id:5, name: "اكلير", price: 35, img: Cake },
        {id:6, name: "هولز", price: 35, img: Cake2 },
        {id:7, name: "اكلير", price: 35, img: Cake },
        {id:8, name: "هولز", price: 35, img: Cake2 },
        {id:9, name: "اكلير", price: 35, img: Cake },
        {id:10, name: "هولز", price: 35, img: Cake2 },
        {id:11, name: "اكلير", price: 35, img: Cake },
        {id:12, name: "هولز", price: 35, img: Cake2 },
        {id:13, name: "اكلير", price: 35, img: Cake },
        {id:24, name: "هولز", price: 35, img: Cake2 },
     
    
      ]
  return (
      <div>
      <h1 className="text-[16px] md:text-2xl mb-5">تورته مقاس (26)</h1>
 <div className='container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5' id={id}>
      
     {prduct.map((item)=>{
      return(
        <div key={item.id} className="rounded-2xl shadow-blue-200 shadow-sm p-5 flex flex-col gap-3 items-center transition hover:scale-110 bg-gray-100">
          <img className="w-3/4 mb-3" src={item.img} alt="Cake" />
          <h2 className="text-center">{item.name}</h2>
          <h2 className="text-center text-yellow-700">{item.price} ج.م</h2>
        </div>
      )
     })}
    </div>
    </div>
   
  )
}
