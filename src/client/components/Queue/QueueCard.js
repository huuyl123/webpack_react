import React from 'react';

const QueueCard = () => {
  return (
    <div>
      <div className="row bg-main justify-content-start">
        <div className="col-8 p-0">
          <div className=" d-flex justify-content-start bg-main align-items-center ml-3 p-2">
            <div>
              <img
                src="https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg"
                alt="avatar"
                width="60"
                height="60"
                className="rounded-circle mr-2"
              />
            </div>
            <div className="text-light ml-2  text-truncate">
              <p className="lead mb-0">Dummy User</p>
              <div>
                <div className="d-flex justify-content-start">
                  <div className="font-weight-light font-italic ">In Queue</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex justify-content-end p-0 bg-main">
          <button
            className="btn h-50 btn-danger rounded-0 mt-3 ml-4 px-3"
            type="button"
            data-toggle="modal"
            data-target="#removeUserFromQueue"
          >
            <i className="fas fa-times" />
          </button>
        </div>
      </div>
      {/* ------------- MODAL ------------- */}
      <div className="modal fade" id="removeUserFromQueue">
        <div className="modal-dialog">
          <div className="modal-content bg-sub">
            <div className="modal-body text-center lead mt-3 mb-0 text-light">
              You really want to delete this user from the queue?
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

export default QueueCard;
