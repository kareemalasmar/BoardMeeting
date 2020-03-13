import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    title: '',
    mountain: '',
    location: '',
    date: '',
    notes: ''
  });

  const { title, mountain, location, date, notes } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className='large text-primary'>Add To Your Rider Log</h1>
      <p className='lead'>
        <i className='fas fa-mountain'></i> Keep track of your days on the
        slopes!
      </p>
      <small>* = required field</small>
      <form
        className='form'
        onSubmit={e => {
          e.preventDefault();
          addExperience(formData, history);
        }}
      >
        <div className='form-group'>
          <h4>Title</h4>
          <input
            type='text'
            placeholder='* Title'
            name='title'
            value={title}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <h4>Mountain</h4>
          <input
            type='text'
            placeholder='* Mountain'
            name='mountain'
            value={mountain}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <h4>Location</h4>
          <input
            type='text'
            placeholder='Location'
            name='location'
            value={location}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <h4>Date</h4>
          <input
            type='date'
            name='date'
            value={date}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <h4>Notes</h4>
          <textarea
            name='notes'
            cols='30'
            rows='5'
            placeholder='* Notes'
            value={notes}
            onChange={e => onChange(e)}
          ></textarea>
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired
};

export default connect(null, { addExperience })(withRouter(AddExperience));
