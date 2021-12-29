import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifApp = () => {
    const [ categories, setCategories] = useState(['Dragon']);

    

    return (
        <div>
           <h2>GifApp</h2>
           <AddCategory setCategories={setCategories}/>
           <hr />
           
           <div>
                {
                    categories.map( category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </div>
        </div>
    )
    
}
