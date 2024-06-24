import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import RecipeCard from '../RecipeCard'

const APP_ID = import.meta.env.VITE_APP_ID;
const APP_KEY = import.meta.env.VITE_APP_KEY;

const Homepage = () => {

  const [recipe, setRecipe] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchRecipe = async (searchQuery) => {
    setLoading(true)
    setRecipe([])
    try {
      const res = await fetch(`https://api.edamam.com/api/recipes/v2/?app_id=${APP_ID}&app_key=${APP_KEY}&q=${searchQuery}&type=public`)
      const data = await res.json()
      setRecipe(data.hits)
    } catch (error) {
      console.log(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRecipe("sandwich")
  }, [])

  const handleSearchRecipe = (e) => {
    e.preventDefault()
    fetchRecipe(e.target[0].value)
  }

  return (
    <div className='bg-base-100 p-10 flex-1 mb-10'>
      <div className='max-w-screen-lg mx-auto'>
        <form onSubmit={handleSearchRecipe}>
          <label className="input shadow-md flex items-center gap-2">
            <Search size={'24'} />
            <input type="text" className='text-sm md:text-lg grow' placeholder='Go and make me a sandwich..!' />
          </label>
        </form>
        <h1 className='font-bold text-3xl md:text-5xl mt-4'>Cook 'em right now</h1>
        <p className='text-base-content font-semibold ml-1 my-2 text-sm tracking-tight'>Popular dishes</p>

        <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {!loading && recipe.map(({recipe}, index) => <RecipeCard key={index} recipe={recipe} />) }
          {loading &&
          [...Array(9)].map((_, index) => (
            <div key={index} className='flex flex-col gap-4 w-full'>
              <div className='skeleton h-32 w-full'></div>
              <div className="flex justify-between">
                <div className='skeleton h-4 w-28'></div>
                <div className='skeleton h-4 w-24'></div>
              </div>
              <div className='skeleton h-4 w-1/2'></div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Homepage