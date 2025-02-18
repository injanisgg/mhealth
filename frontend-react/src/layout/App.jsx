import { Outlet } from 'react-router-dom';
import ResponsiveBar from '../components/ResponsiveBar';

function App() {
  return (
    <div>
      <ResponsiveBar />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;