import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { protectedBackendRoutes } from '../';
import AuthGuard from '../../../guards';

const AuthRoutes: FC = () => {
  return (
    <Routes>
      {protectedBackendRoutes?.map(
        ({ element: Component, backendPath }: any, index) => {
          return (
            <Route
              path={backendPath}
              element={
                <AuthGuard>
                  <Component />
                </AuthGuard>
              }
              key={index}
            />
          );
        }
      )}
    </Routes>
  );
};
export default AuthRoutes;
