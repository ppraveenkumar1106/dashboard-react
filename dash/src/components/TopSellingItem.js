import React from 'react';

function TopSellingItem({ item }) {
  const { preview, name, price, sold } = item;

  return (
    <tr>
      <th scope='row'>
        <a href='#'>
          <img src={preview} alt='' />
        </a>
      </th>
      <td>
        <a href='#' className='text-primary fw-bold'>
          {name}
        </a>
      </td>
      <td>${price.toFixed(2)}</td>
      <td className='fw-bold'>{sold}</td>
      <td>${(price * sold).toLocaleString('en-US')}</td>
    </tr>
  );
}

export default TopSellingItem;
