import React, { useState, useEffect } from 'react';
import './dashboard.css';
import data from '../api/info'; 
import Card from './Card';
import Reports from './Reports';
import RecentSales from './RecentSales';
import TopSelling from './TopSelling';
import RecentActivity from './RecentActivity';
import BudgetReport from './BudgetReport';
import WebTraffic from './webTraffic'
import News from './News'


const Dashboard = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
   
  setCards(data.cards || []);
  }, []);

  return (
    <section className='dashboard section'>
    <div className='row'>
      <div className='col-lg-8'>
        <div className='row'>
         {cards.length > 0 &&
          cards.map(card => 
          <Card key={card._id} card={card} />)}
           <div className='col-12'>
            <Reports />
           </div>
           <div className='col-12'>
             <RecentSales />
           </div>
           <div className='col-12'>
              <TopSelling />
           </div>
          </div>
         </div>
         <div className='col-lg-4'>
           <RecentActivity />
           <BudgetReport />
           <WebTraffic />
           <News />
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
