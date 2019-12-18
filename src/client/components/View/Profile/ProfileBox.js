import React from 'react';
import { Link } from 'react-router-dom';

const ProfileBox = () => {
  return (
    <div>
      <div className="d-flex bg-main flex-column align-items-center pt-5 pb-3 pr-3 pl-4">
        <Link to="/">
          <div>
            <img
              src="https://www.w3schools.com/w3images/avatar2.png"
              alt="avatar"
              width="150"
              height="150"
              className="rounded-circle"
            />
            <p className="lead text-light text-center mt-3 mb-4 text-uppercase">
              Minh ANh Nguyen
            </p>
          </div>
        </Link>

        <div className="w-100 d-flex text-light">
          <p className="col-3">Status:</p>
          <div>
            <div className="d-flex justify-content-start ml-3">
              <i className="fas fa-circle text-success mt-1 mr-2" />
              <div className="font-weight-light font-italic">Online</div>
            </div>
            <div className="d-none justify-content-start ml-3">
              <i className="fas fa-circle text-danger mt-1 mr-2" />
              <div className="font-weight-light font-italic">Offline</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBox;
