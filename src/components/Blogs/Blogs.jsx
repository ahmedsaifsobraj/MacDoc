import React from 'react';

const Blogs = (props) => {
    return (
        <div className='mt-10 p-5'>
            <h1 className='text-4xl  font-bold text-neutral-700 mb-5'>Blogs</h1>
            <div className='w-1/2 mx-auto'>
                <div className='border rounded-xl my-5 p-10'>
                    <h2 className='text-3xl font-bold text-gray-500 mb-5'>What is Context API?</h2>
                    <p className='text-xl'>With context api we can send any props easily to any child components without props drilling.</p>
                </div>
                <div className='border rounded-xl my-5 p-10'>
                    <h2 className='text-3xl font-bold text-gray-500 mb-5'>What is Symantic Tag?</h2>
                    <p className='text-xl'>Symentic tag defines the meaning and purpose of its content. Like in html we use h1 to h6 tags defines how much important the topics are.</p>
                </div>
                <div className='border rounded-xl my-5 p-10'>
                    <h2  className='text-3xl font-bold text-gray-500 mb-5'>What is Inline Block?</h2>
                    <p className='text-xl'>In CSS, "inline-block" refers to a display value that combines properties of both inline and block elements.</p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;