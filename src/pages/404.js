import { navigate } from '@reach/router';
import { useEffect } from 'react';

const NotFound404 = () => {
  useEffect(() => {
    navigate('/');
  }, []);
  return null;
};

export default NotFound404;
