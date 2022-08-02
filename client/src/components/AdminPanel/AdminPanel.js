import { Navigate } from 'react-router-dom';

export function AdminPanel() {
    return <Navigate to="/adminPanel/users" replace/>;
}