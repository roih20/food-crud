import React from 'react'
import { IFood } from '../interface/IFood'
import { useGlobalContext } from './MenuProvider'

const Food = ({id, name, description, price}: IFood) => {
    const {removeFood} = useGlobalContext()
    return (
        <div className='border rounded-lg max-w-sm p-5 flex flex-col space-y-5 w-full shadow-xl shadow-gray-300'>
            <div>
                <h2 className='text-xl font-medium'>{name}</h2>
            </div>
            <div>
                <p className='text-lg text-justify break-words'>{description}</p>
            </div>
            <div className='flex flex-row  justify-between items-center'>
                <p className='text-lg font-medium'>${price}</p>
                <button type='button' className='bg-red-500 p-2 rounded-lg text-white font-medium' onClick={() => removeFood(id)}>Remove Food</button>
            </div>
        </div>
    )
}

export default Food
