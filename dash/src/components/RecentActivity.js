import React,{useState, useEffect} from 'react'
import './recentActivity.css'
import CardFilter from './CardFilter'
import RecentActivityItem from './RecentActivityItem';
import data from '../api/info';


function RecentActivity() {
    const [recentActivity, setRecentActivity] = useState([]);
    const [filter, setFilter] = useState('Today');

    useEffect(() => {
        setRecentActivity(data.recentactiviy || []);
    }, []);

    const handleFilterChange = (filter) => {
        setFilter(filter);
    };
    


    return (
        <div className='card'>
          <CardFilter filterChange={handleFilterChange} />
          <div className='card-body'>
            <h5 className='card-title'>
              Recent Activity <span>| {filter}</span>
            </h5>
            <div className='activity'>
              {recentActivity.length > 0 ? (
                recentActivity.map(item => (
                  <RecentActivityItem
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
    
    export default RecentActivity