import React from 'react';
import StatusView from '../../../StatusView';

const StatusViewWithErrorStackTrace = () => {
  const [errorLog, setErrorLog] = React.useState({});
  const getRectArea = (width, height) => {
    if (!(width || height)) {
      throw new Error('Parameter is not a number!');
    }
  };
  const StatusViewButtons = [
    {
      text: 'Throw Error',
      key: 1,
      id: 'button1',
      onClick: () => {
        try {
          getRectArea();
        } catch (e) {
          setErrorLog(e);
        }
      },
    },
  ];

  return (
    <StatusView id="statusView" variant="error" title="500" message="Error With Stack Trace." buttonAttrs={StatusViewButtons} errorLog={errorLog} />
  );
};

export default StatusViewWithErrorStackTrace;
