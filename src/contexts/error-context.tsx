import React, { createContext } from 'react';

export type ErrorReportingContextProps = {
  recordError: (error: Error) => void;
};

export const ErrorReportingContext = createContext<ErrorReportingContextProps>({
  recordError: () => undefined,
});

export const ErrorReportingProvider: React.FC = ({ children }) => {
  const recordError = (error: Error) => {
    console.log('ErrorReportingProvider: record offline error - ' + error);
  };

  return (
    <ErrorReportingContext.Provider
      value={{
        recordError,
      }}>
      {children}
    </ErrorReportingContext.Provider>
  );
};
