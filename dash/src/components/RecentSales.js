import React, { useState, useEffect } from 'react';
import './recentSales.css';
import data from '../api/info';
import CardFilter from './CardFilter';
import RecentSalesTable from './RecentSalesTable';

function RecentSales() {
    const [recentsales, setRecentsales] = useState([]);
    const [filter, setFilter] = useState('Today'); 

    useEffect(() => {
        
        setRecentsales(data.recentsales);
    }, []);

    const handleFilterChange = (filter) => {
        setFilter(filter);
      
    };

    const filteredSales = recentsales.filter(sale => {
        if (filter === 'Today') {
            const today = new Date().toISOString();
            return sale.date && typeof sale.date === 'string' && sale.date.startsWith(today);
        }
        return true;
    });


    return (
        <div className='card recent-sales overflow-auto'>
            <CardFilter filterChange={handleFilterChange} />

            <div className='card-body'>
                <h5 className='card-title'>
                    Recent Sales<span>{filter}</span>
                    </h5>
                <RecentSalesTable items={recentsales} />
            </div>
        </div>
    );


}

export default RecentSales;
