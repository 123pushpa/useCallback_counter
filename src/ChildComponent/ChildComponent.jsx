// import React from 'react';

// export default function ChildComponent(props) {
//   console.log('CHILD IS GETTING CLICKED');
//   return (
//     <>
//       <button>{props.buttonName}</button>
//     </>
//   );
// }

//using React.memo i.e wrap with React.memo

import React from 'react';

const ChildCompoent = React.memo((props) => {
  console.log('CHILD IS GETTING CLICKED');
  return (
    <>
      <button onClick={props.handleParentButton}>{props.buttonName}</button>
    </>
  );
});
export default ChildCompoent;
