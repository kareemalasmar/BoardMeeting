import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteExperience } from '../../actions/profile';

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map(exp => (
    <tr key={exp._id}>
      <td>{exp.title}</td>
      <td>
        <Moment format='MM/DD/YYYY'>{exp.date}</Moment>
      </td>
      <td>{exp.mountain}</td>
      <td>
        <button
          onClick={() => deleteExperience(exp._id)}
          className='btn btn-danger log-delete'
        >
          X
        </button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h2 className='my-2'>Rider's Log</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Mountain</th>
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired
};

export default connect(null, { deleteExperience })(Experience);
