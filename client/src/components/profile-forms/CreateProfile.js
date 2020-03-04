import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CreateProfile = props => {
  const [formData, setFormData] = useState({
    location: '',
    skillLevel: '',
    years: '',
    mountains: '',
    bio: '',
    twitter: '',
    facebook: '',
    youtube: '',
    instagram: ''
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const {
    location,
    skillLevel,
    years,
    mountains,
    bio,
    twitter,
    facebook,
    youtube,
    instagram
  } = formData;

  return (
    <Fragment>
      <h1 className='large text-primary'>Create Your Profile</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form className='form'>
        <div className='form-group'>
          <select name='skilllevel'>
            <option value='0'>* Select Experience Level</option>
            <option value='Beginner'>Beginner</option>
            <option value='Beginner - Intermediate'>
              Beginner - Intermediate
            </option>
            <option value='Intermediate'>Intermediate</option>
            <option value='Intermediate - Advanced'>
              Intermediate - Advanced
            </option>
            <option value='Advanced'>Advanced</option>
            <option value='Professional'>Professional</option>
            <option value='Other'>Other</option>
          </select>
          <small className='form-text'>
            How experienced of a snowboarder are you?
          </small>
        </div>
        <div className='form-group'>
          <input type='text' placeholder='Years' name='years' />
          <small className='form-text'>
            How many years have you been riding?
          </small>
        </div>
        <div className='form-group'>
          <input type='text' placeholder='Location' name='location' />
          <small className='form-text'>
            City & state suggested (eg. Boston, MA)
          </small>
        </div>
        <div className='form-group'>
          <input type='text' placeholder='* Mountains' name='mountains' />
          <small className='form-text'>
            Please use comma separated values (eg. Mammoth,Heavenly,Bear,June)
          </small>
        </div>
        <div className='form-group'>
          <textarea placeholder='A short bio of yourself' name='bio'></textarea>
          <small className='form-text'>Tell us a little about yourself</small>
        </div>

        <div className='my-2'>
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type='button'
            className='btn btn-light'
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div className='form-group social-input'>
              <i className='fab fa-twitter fa-2x'></i>
              <input type='text' placeholder='Twitter URL' name='twitter' />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-facebook fa-2x'></i>
              <input type='text' placeholder='Facebook URL' name='facebook' />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-youtube fa-2x'></i>
              <input type='text' placeholder='YouTube URL' name='youtube' />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-instagram fa-2x'></i>
              <input type='text' placeholder='Instagram URL' name='instagram' />
            </div>
          </Fragment>
        )}
        <input type='submit' className='btn btn-primary my-1' />
        <a className='btn btn-light my-1' href='dashboard.html'>
          Go Back
        </a>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {};

export default connect()(CreateProfile);
