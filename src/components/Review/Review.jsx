import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
const Review = (props) => {
    const { picture, name, review, rating } = props.review;
    const stars = Array.from({ length: rating }, (_, index) => <FontAwesomeIcon key={index} className="text-amber-600" icon={faStar} />);
    return (
        <div className='border rounded-lg p-5 w-1/2 mx-auto mb-5'>
            <div className=' flex justify-center items-center mb-5'>
                <img className='w-12 h-12 rounded-3xl' src={picture}></img>
                <p className='ml-3 pl-0'><small>{name}</small></p>
            </div>
            <p className='mb-5'><small>Rating: {stars}</small></p>
            <p className='text-center'><small>{review}</small></p>

        </div>
    );
};

export default Review;