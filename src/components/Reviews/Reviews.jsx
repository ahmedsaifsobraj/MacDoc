import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = (props) => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='mt-10 rounded-lg p-10'>
            <h1 className='text-4xl  font-bold text-neutral-700 mb-5'>What Our Customar Says!</h1>
            <div>
                {
                    reviews.map(review=><Review key={review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;