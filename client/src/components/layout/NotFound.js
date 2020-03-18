import React from 'react';

const NotFound = () => {
  return (
    <section className='not-found'>
      <div className='dark-overlay'>
        <div className='not-found-inner'>
          <h1 className='x-large text-primary'>
            <i className='fas fa-exclamation-triangle'></i> Page Not Found
          </h1>
          <p className='large'>Sorry, this page does not exist</p>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
