import { Fragment } from "react";
import { useSelector } from 'react-redux';
import Counter from "./components/Counter";
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { selectAuth } from "./store/auth";

function App() {
  const isAuth = useSelector(selectAuth)
  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
