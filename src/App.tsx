import './App.css';
import { Link, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { MoviesList } from './components/MoviesList';
import { Pagination } from './components/Pagination';
import { MovieDetails } from './components/MovieDetails';

function App(props: any) {
  return (
    <div className="App">
      <div className="head">
        <Link className="header-link" to="/">
          Movies
        </Link>
      </div>

      <Route exact path="/" component={Main} />
      <Route
        exact
        path="/movie/:id?"
        component={() => <MovieDetails {...props} />}
      />
    </div>
  );
}

const Main = () => (
  <>
    <Header />
    <MoviesList />
    <Pagination />
  </>
);

export default App;
