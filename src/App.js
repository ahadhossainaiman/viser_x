
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Fasilities from './component/Fasilites/Fasilities.jsx'
import Business from './component/Business/Business.jsx'
import WorkProcess from './component/WorkProcess/WorkProcess'

function App() {
  return (
    <div>
      <Navbar />
      <Fasilities />
      <Business />
      <WorkProcess />
    </div>
  );
}

export default App;
