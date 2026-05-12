import { Navigate, useLocation } from 'react-router-dom';

const StateProtectedRoute = ({ children, requiredState }) => {
  const { state } = useLocation();

  const hasRequiredState = requiredState.every((key) => state?.[key]);

  if (!hasRequiredState) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default StateProtectedRoute;
