import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoadingToRedirect() {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => currentCount - 1);
    }, 1000);
    if (count === 0) navigate('/login');
    return () => clearInterval(interval);
  }, [count, navigate]);

  return (
    <div>
      <p>
        {`Redirecting in ${count} seconds`}
      </p>
    </div>
  );
}

export default LoadingToRedirect;
