import React from 'react';
import { connect } from 'react-redux';
import { addSubscriber } from '../redux';

const Subscribers = ({ count, addSubscriber }) => {
  return (
    <div className="items">
      <p>Number of subscribers: {count}</p>
      <button onClick={() => addSubscriber()}>Subscribe!</button>
    </div>
  );
};

const mapStateToProps = ({ subscribers }) => {
  return {
    count: subscribers.count,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addSubscriber: () => dispatch(addSubscriber()),
//   };
// };

const mapDispatchToProps = {
  // Object Property Value Shorthand
  // addSubscriber: addSubscriber
  addSubscriber,
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscribers);
// 41:30
