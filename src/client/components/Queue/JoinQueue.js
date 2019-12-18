import React from 'react';

const JoinQueue = () => {
  return (
    <div className="bg-main text-light border-top border-light pb-4 align-item-center">
      <p className="lead text-center text-light mt-4">
        Queue :<span className="text-success ml-2">100</span>
        <i className="fas fa-user ml-2 mt-1" />
      </p>
      <p className="lead text-center text-light mt-3">
        Your number if drawn now:
      </p>
      <div className="d-none justify-content-center py-2">
        <div className="circle border border-light rounded-circle">
          <p className="display-3 mt-4  text-center">12</p>
        </div>
      </div>
      <div className="text-center">
        <button
          className="btn btn-success btn-lg rounded-0 my-3 px-5 py-3"
          type="button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          <p className="lead mb-1">Join Queue</p>
        </button>
      </div>

      {/* ------------- MODAL ------------- */}
      <div className="modal fade" id="exampleModal">
        <div className="modal-dialog">
          <div className="modal-content bg-sub">
            <div className="modal-body text-center lead mt-3 mb-0">
              Do you want to join the queue?
            </div>
            <div className="modal-footer border-0 d-flex justify-content-around">
              <button
                type="button"
                className="btn bg-success text-light lead px-5 py-2"
                data-dismiss="modal"
              >
                Yes
              </button>
              <button
                type="button"
                className="btn bg-danger text-light lead px-5 py-2"
                data-dismiss="modal"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinQueue;
