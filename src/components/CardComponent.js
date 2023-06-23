import React from 'react';
import "./CardComponent.css"
export const CardComponent = ({
    imgSrc,
    imgAlt,
    title,
    description
}
)=> {
  return (
    <div className='card-container'>
       { imgSrc && imgAlt && <img src={imgSrc} alt={imgAlt} className="card-img"/>}
       { title && <h1 className='card-title'>{title}</h1>}
       {description && <p className='card-description'>{description}</p>}
    </div>
  );
}

// export default CardComponent;