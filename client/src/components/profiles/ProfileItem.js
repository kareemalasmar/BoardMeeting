import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    location,
    mountains
  }
}) => {
  return (
    <div className='profile bg-light'>
      <img src={avatar} alt='avatar' className='round-img' />
      <div>
        <h2>{name}</h2>
        <p className='my-1'>{location && <span>{location}</span>}</p>
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          <i className='fas fa-eye text-secondary'></i> View Profile
        </Link>
      </div>
      <ul>
        {mountains.slice(0, 4).map((mountain, index) => (
          <li key={index} className='text-primary'>
            <i className='fas fa-mountain'></i> {mountain}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
