import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
  profile: {
    bio,
    mountains,
    user: { name }
  }
}) => (
  <div className='profile-about bg-light p-2'>
    {bio && (
      <Fragment>
        <h2 className='text-primary'>{name.trim().split(' ')[0]}s Bio</h2>
        <p>{bio}</p>
        <div className='line'></div>
      </Fragment>
    )}
    <h2 className='text-primary'>Mountains</h2>
    <div className='mountains'>
      {mountains.map((mountain, index) => (
        <div key={index} className='p-1'>
          <i className='fas fa-mountain'></i> {mountain}
        </div>
      ))}
    </div>
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
