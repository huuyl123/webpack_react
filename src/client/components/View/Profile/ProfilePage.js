import React from 'react';
import JoinQueue from '../../Queue/JoinQueue';
import LeaveQueue from '../../Queue/LeaveQueue';
import OpenRoom from '../../Queue/OpenRoom';
import ProfileBox from './ProfileBox';
import PersonalInfo from './PersonalInfo';

const ProfilePage = () => {
  return (
    <div className="masthead">
      <div className="container d-flex bg-sub pb-4 pt-4">
        <div className="personalInfo col-8 pl-4">
          <PersonalInfo />
        </div>
        <div className="col-4">
          <ProfileBox />
          <JoinQueue />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
