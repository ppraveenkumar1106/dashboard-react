import React, { useState, useEffect } from 'react';
import './topselling.css';
import data from '../api/info';
import CardFilter from './CardFilter';
import TopSellingItem from './TopSellingItem';

function TopSelling() {
    const [topselling, setTopselling] = useState([]);
    const [filter, setFilter] = useState('Today');

    useEffect(() => {
        setTopselling(data.topselling );
    }, []);

    const handleFilterChange = (filter) => {
        setFilter(filter);
    };

    return (
        <div className='card top-selling overflow-auto'>
            <CardFilter filterChange={handleFilterChange} />

            <div className='card-body pb-0'>
                <h5 className='card-title'>
                    Top Selling
                </h5>
                <span>| {filter}</span>

                <div className='table-responsive'>
                    <table className='table table-borderless'>
                        <thead className='table-light'>
                            <tr>
                                <th scope='col'>Preview</th>
                                <th scope='col'>Product</th>
                                <th scope='col'>Price</th>
                                <th scope='col'>Sold</th>
                                <th scope='col'>Revenue</th>
                            </tr>
                        </thead>
                        <tbody>
                            {topselling && 
                            topselling.length > 0 &&
                                topselling.map(item => (
                                    <TopSellingItem key={item._id} item={item} />
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TopSelling;
