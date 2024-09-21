import React from 'react';
import './news.css'

function NewsPostItem({ item }) {
    return (
        <div className='post-item clearfix'>
            <img src={item.img} alt={item.title || 'News Image'} />
            <h4>
                <a href='#'>{item.title}</a>
            </h4>
            <p>{item.subtitle}...</p>
        </div>
    );
}

export default NewsPostItem;
