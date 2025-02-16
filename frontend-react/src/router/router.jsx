import { createBrowserRouter } from 'react-router-dom';
import App from '../layout/App';
import DepressionForm from '../components/DepressionForm';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'prediksi',
                element: <DepressionForm />
            }
        ]
    }
]);

export default router;