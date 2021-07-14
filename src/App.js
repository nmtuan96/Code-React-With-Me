import './App.css';
import NavBar from './components/navBar';
import { Route, Switch, Redirect } from 'react-router';
import Students from './components/student';
import Groups from './components/groups';
import NotFound from './components/notFound';
import Teachers from './components/teachers';
import StudentForm from './components/formStudent';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';

function App() {
  return (
    <main className="container">
      <NavBar />
      <Switch>
        <Route path="/students/:id" component={StudentForm} />
        <Route path="/students" component={Students} />
        <Route path="/classes" component={Groups} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/teachers" component={Teachers} />
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
        <Redirect from="/" exact to="/students" />
        <Redirect from="/not-found" />
      </Switch>
    </main>
  );
}

export default App;
