import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const DashboardActions = ({
  auth: {
    user: { _id }
  }
}) => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-light'>
        <i className='fas fa-user-circle text-primary'></i> Edit Profile
      </Link>
      <Link to={`/profile/${_id}`} className='btn btn-primary'>
        View Profile
      </Link>
    </div>
  );
};

DashboardActions.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(DashboardActions);
