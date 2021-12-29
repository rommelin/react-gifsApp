import React from 'react'

export const GifGridItem = ({id, title, url}) => {

    
    return (
        <div className="gif-grid-item animate__animated animate__fadeIn">
            <img className="img" src={url} alt={title} />
            <p><em>{title}</em></p>
        </div>
    )
}
