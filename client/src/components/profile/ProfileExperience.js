import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileExperience = ({
  experience: { title, mountain, location, date, notes }
}) => (
  <div>
    <h3 className='text-dark'>{title}</h3>
    <p>
      <Moment format='MM/DD/YYYY'>{date}</Moment>
    </p>
    <p>
      <strong>{mountain}</strong>
    </p>
    <p>{location}</p>
    <p>
      <strong>Notes: </strong> {notes}
    </p>
  </div>
);

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired
};

export default ProfileExperience;
