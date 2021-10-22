import React from 'react';
import StatusView from '../../../StatusView';

const StatusViewWithErrorStackTrace = () => {
  const [additionalMessage, setAdditionalMessage] = React.useState('');
  const getRectArea = (width, height) => {
    if (!(width || height)) {
      throw new Error('Parameter is not a number!');
    }
  };

  // This is just for example purpose. Users can set a state variable when ErrorBoundary is hit and pass that to the additionalMessage prop.
  const StatusViewButtons = [
    {
      text: 'Click To Throw Error',
      key: 1,
      id: 'button1',
      onClick: () => {
        try {
          getRectArea();
        } catch (e) {
          setAdditionalMessage(e.stack);
        }
      },
    },
  ];

  return (
    <StatusView id="statusView" variant="error" title="500" message="Error With Stack Trace." buttonAttrs={StatusViewButtons} additionalMessage={additionalMessage} />
  );
};

export default StatusViewWithErrorStackTrace;
