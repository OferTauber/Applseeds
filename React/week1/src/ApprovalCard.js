import React from 'react';
// import CommentDetail from './CommentsDetails';

const ApprovalCard = (props) => {
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>

      <div className="extra content">
        <div className="ui twp buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
      {/* <CommentDetail /> */}
    </div>
  );
};

export default ApprovalCard;
