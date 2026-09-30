import { useEffect, useState } from 'react';
import Home from './Home';
import Version1 from './Version1';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  if (currentPath === '/version_1') {
    return <Version1 />;
  }

  return <Home />;
}

export default App;
