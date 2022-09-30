import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div>
      Not found page. Please go to
      <Link to="/">Home</Link>
    </div>
  );
}

export default NotFoundPage;
