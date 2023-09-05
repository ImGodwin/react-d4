//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TopBar from './components/TopBar';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </div>
  );
}

export default App;
