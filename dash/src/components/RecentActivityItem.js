import React from 'react';
import './recentActivity.css';

function RecentActivityItem({ item }) {
  const { time, color, content, highlight } = item;

  // Function to render content with optional highlight
  const renderContent = () => {
    if (!highlight) {
      return <div className='activity-content'>{content}</div>;
    }

    const highlightIndex = content.indexOf(highlight);

    // Check if highlight exists in the content
    if (highlightIndex === -1) {
      return <div className='activity-content'>{content}</div>;
    }

    const contentBefore = content.substring(0, highlightIndex);
    const contentHighlight = content.substring(highlightIndex, highlightIndex + highlight.length);
    const contentAfter = content.substring(highlightIndex + highlight.length);

    return (
      <div className='activity-content'>
        {contentBefore}
        <a href='#' className='fw-bold text-dark'>
          {contentHighlight}
        </a>
        {contentAfter}
      </div>
    );
  };

  return (
    <div className='activity-items d-flex'>
      <div className='activate-label'>{time}</div>
      <i className={`bi bi-circle-fill activity-badge ${color} align-self-start`} />
      {renderContent()}
    </div>
  );
}

export default RecentActivityItem;
