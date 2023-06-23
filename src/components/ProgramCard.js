import React from 'react'
import './ProgramCard.css';
export const ProgramCard= ({
  className,
  heading,
  content,
  buttonText,
  imageSrc,
  imageAlt,

}) => {
  return (
    <div className={className}>
        <div className='text-block'>
        {heading && <h1 className='heading'>{heading}</h1>}
       {content && <p className='program-text'>{content}</p>}
       {buttonText && <a href='card Page' className='pro-btn'>{buttonText} </a>}
        </div>

        <div className='img-block'>
       {imageSrc && imageAlt && <img src={imageSrc} alt={imageAlt}/>}
        </div>
    </div>
  );
}

// export default ProgramCard;