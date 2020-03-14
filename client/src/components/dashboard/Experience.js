import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
// import { connect } from 'react-redux';

const Experience = ({ experience }) => {
  const experiences = experience.map(exp => (
    <tr key={exp._id}>
      <td>{exp.title}</td>
      <td className='hide-sm'></td>
      <td>
        <Moment format='MM/DD/YYYY'>{exp.date}</Moment>
      </td>
      <td>{exp.mountain}</td>
      <td>
        <button className='btn btn-danger'>Delete</button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h2 className='my-2'>Log Entry</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Title</th>
            <th className='hide-sm'>Date</th>
            <th className='hide-sm'>Mountain</th>
            <th />
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired
};

export default Experience;
