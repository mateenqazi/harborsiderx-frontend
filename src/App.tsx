import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthRoutes from './routes/routes/AuthRoutes';
import PublicRoutes from './routes/routes/PublicRoutes';
import './App.css';
import Layout from './layout/main';

const App: FC = () => {
  return (
    <Router>
      <Layout>
        <PublicRoutes />
        <AuthRoutes />
      </Layout>
    </Router>
  );
};

export default App;
