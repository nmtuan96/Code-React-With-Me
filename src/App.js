import './App.css';
import NavBar from './components/navBar';
import { Route, Switch, Redirect } from 'react-router';
import Students from './components/student';
import Groups from './components/groups';
import NotFound from './components/notFound';
import Teachers from './components/teachers';
import DetailStudent from './components/detailStudent';

function App() {
  return (
    <main className="container">
      <NavBar />
      <Switch>
        <Route path="/students/:id" component={DetailStudent} />
        <Route path="/students" component={Students} />
        <Route path="/classes" component={Groups} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/teachers" component={Teachers} />
        <Redirect from="/" exact to="/students" />
        <Redirect from="/not-found" />
      </Switch>
    </main>
  );
}

export default App;
