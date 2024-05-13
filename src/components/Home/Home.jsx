import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import { Link } from 'react-router-dom';

const Home = (props) => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    const limitedReviews = reviews.slice(0, 3);
    return (
        <section className='mt-5'>
            <div className='grid grid-cols-1 gap-2 md:grid-cols-2 m-10 border rounded-lg p-5'>
                <div className='m-5 p-5'>
                    <h1 className='text-4xl  font-bold text-neutral-700 mb-5 text-left'>Introducing Macbook</h1>
                    <h2 className='text-4xl font-bold text-neutral-500 mb-5 text-left '>MacBook Pro 2023</h2>
                    <p className='text-justify mb-5 text-xl'>Simultaneously supports full native resolution on the built-in display at 1 billion colors and: Up to four external displays: Up to three external displays with 6K resolution at 60Hz over Thunderbolt and one external display with up to 4K resolution at 144Hz over HDMI.</p>
                    <button className='bg-black w-full rounded-lg px-5 py-2 text-white font-bold'>More Details</button>
                </div>
                <div className=' m-5 p-10'>
                    <img className=' w-full m-10' src='https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookpro/macbook-pro-14in-m3-nov-2023-silver-space-gray.png'></img>
                </div>
            </div>
            <div className='m-10 p-5'>
                <h1 className='text-4xl font-bold text-neutral-700 mb-10'>Customer Reviews</h1>
                <div className='mb-5'>
                    {
                        limitedReviews.map(review => <Review key={review.id} review={review} ></Review>)
                    }
                   <Link to={'/Reviews'}> <button className='bg-black w-50 rounded-3xl px-5 py-2 text-white font-bold'>More Reviews</button></Link>
                </div>

            </div>
        </section>
    );
};

export default Home;