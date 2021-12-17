import React, { ChangeEvent, FormEvent, useState } from 'react'
import { IFood } from '../interface/IFood'
import { useGlobalContext } from './MenuProvider'

type Submit = FormEvent<HTMLFormElement>
type Event = ChangeEvent<HTMLInputElement>

const Form = () => {

    const { addFood } = useGlobalContext()

    const [food, setFood] = useState({
        name: '',
        description: '',
        price: 0
    });

    const hanlderSubmit = (e: Submit) => {
        e.preventDefault();
        if(food.name && food.description && food.price){
            const newFood: IFood = {id: new Date().getTime(), name: food.name, description: food.description, price: food.price }
            addFood(newFood);
            clear();
        }else {
            console.log('Empty values');
        }
    }

    const handlerChange = (e: Event) => {
        setFood({...food, [e.target.name]: e.target.value})
    }

    const clear = () => {
        setFood({
            name: '',
            description: '',
            price: 0
        })
    }
    
    return (
      <div className='border p-6 rounded-lg max-w-md w-full mb-16 mt-16 shadow-xl shadow-gray-300'>
          <form action="" className='flex flex-col space-y-3'  onSubmit={hanlderSubmit}>
              <div className='flex flex-col'>
                  <label htmlFor="food" className='text-lg font-medium'>Food name</label>
                  <input type="text" name="name" id="food" value={food.name} className="border border-black rounded-lg py-1 px-3" onChange={handlerChange} />
              </div>
              <div className='flex flex-col'>
                  <label htmlFor="desc" className='text-lg font-medium'>Description</label>
                  <input type="text" name="description" id="desc" value={food.description} className="border border-black rounded-lg py-1 px-3" onChange={handlerChange} />
              </div>
              <div className='flex flex-col'>
                  <label htmlFor="price" className='text-lg font-medium'>Price</label>
                  <input type="text" name="price" id="price" value={food.price} className="border border-black rounded-lg py-1 px-3" onChange={handlerChange}/>
              </div>
              <button type='submit' className='bg-red-500 rounded-md p-2 self-start text-base font-medium text-white'>
                  Add Food
              </button>
          </form>
      </div>
    )
}

export default Form
