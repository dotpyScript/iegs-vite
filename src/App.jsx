import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './components/home/HomePage';

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            {/* Add more routes for other pages (to be implemented later) */}
            <Route
              path="*"
              element={
                <div className="container py-24 text-center text-deep-blue">
                  <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
                  <p>
                    The page you are looking for doesn't exist or has been
                    moved.
                  </p>
                </div>
              }
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
