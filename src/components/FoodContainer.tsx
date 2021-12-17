import React from 'react'
import Food from './Food'
import Form from './Form'
import { useGlobalContext } from './MenuProvider'

const FoodContainer = () => {
    const {foods} = useGlobalContext()
    return (
        <div className='container mx-auto flex flex-col items-center'>
            <Form />
            <div className='grid grid-cols-2 gap-x-4 gap-y-7 justify-items-center'>
                {foods.map((food) => (
                    <Food key={food.id} {...food}/>
                ))}
            </div>
        </div>
    )
}

export default FoodContainer
