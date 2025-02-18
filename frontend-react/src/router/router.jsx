import { createBrowserRouter } from 'react-router-dom';
import App from '../layout/App';
import DepressionForm from '../components/DepressionForm';
import Home from '../pages/Home';
import About from '../pages/About';
import Predict from '../pages/Predict'
import Model from '../pages/Model';

const router = createBrowserRouter([
    {
        path: '/*',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'predict',
                element: <Predict />
            },
            {
                path: 'model',
                element: <Model />
            }
        ]
    }
]);

export default router;