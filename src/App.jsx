//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TopBar from './components/TopBar';
import Welcome from './components/Welcome';
/* import AllTheBooks from './components/AllTheBooks'; */
import MyFooter from './components/MyFooter';
import books from './data/books.json';
import BookList from './components/BookList';
import CommentArea from './components/CommentArea';
//import { Carousel } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Welcome />
      {/* <AllTheBooks /> */}
      <BookList books={books} />
      <MyFooter />
      {/* <Carousel /> */}
      <CommentArea />
    </div>
  );
}

export default App;
