import 'bootstrap/dist/css/bootstrap.min.css';

import "./styles.scss"
import HomePage from './pages/home-page';
import CustomModal from './components/customModal';

function App() {
  return (
    <div className="app mx-auto px-3">
      <HomePage />
      <CustomModal />
    </div>
  );
}

export default App;
