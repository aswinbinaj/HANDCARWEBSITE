import React from 'react';

const ErrorPage = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f8f9fa',
      textAlign: 'center',
    },
    errorCode: {
      fontSize: '8rem',
      fontWeight: 'bold',
      color: '#ff4757',
    },
    errorMessage: {
      fontSize: '2rem',
      fontWeight: 'normal',
      color: '#2f3542',
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.errorCode}>404</h1>
      <h1 style={styles.errorMessage}>Page Not Found!!!!!!!!!!!</h1>
    </div>
  );
};

export default ErrorPage;
