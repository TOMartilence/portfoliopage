import React from 'react';

function Confirmation({ result }) {
  // Function to show the result as an alert when the component mounts
  React.useEffect(() => {
    if (result) {
      alert(result);
    }
  }, [result]);

  return (
    <div>
      
    </div>
  );
}

export default Confirmation;
