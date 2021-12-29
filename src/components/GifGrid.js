import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:images,loading} = useFetchGifs(category);

    return (
        <div className="the-one">
            <h3 className="animate__animated animate__bounceIn">{category}</h3>

            { loading && <p className="animate__animated animate__flash">loading...</p>}

            {
                images.map(img =>(
                    <GifGridItem 
                        key={img.id}
                        {...img} 
                    />
                ))
            }
            
        </div>
    )
}
