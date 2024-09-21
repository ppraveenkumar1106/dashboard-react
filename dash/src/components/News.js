import React, { useState, useEffect } from 'react';
import './news.css';
import data from '../api/info'; // Renamed to avoid conflict
import CardFilter from './CardFilter';
import NewsPostItem from './NewsPostItem'; // Assuming this is your item component

function News() {
    const [news, setNews] = useState([]);
    const [filter, setFilter] = useState('Today');

    useEffect(() => {
        setNews(data.news || []);
    }, []);

    useEffect(() => {
        
    }, [filter]);

    const handleFilterChange = (filter) => {
        setFilter(filter);
    };

    return (
        <div className='card'>
            <CardFilter filterChange={handleFilterChange} />
            <div className='card-body'>
                <h5 className='card-title'>
                    News & updates <span>| {filter}</span>
                </h5>
                <div className='news'>
                    {news.length > 0 ? (
                        news.map(item => (
                            <NewsPostItem
                                key={item._id}
                                item={item}
                            />
                        ))
                    ) : (
                        <p>No activities found.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default News;
