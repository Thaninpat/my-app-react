import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import 'semantic-ui-css/semantic.min.css';

// ส่งข้อมูล Hook

// Component
// import NavBar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import Products from './pages/Products';
import Reports from './pages/Reports';
import Team from './pages/Team';
import Messages from './pages/Messages';
import Support from './pages/Support';
import Register from './pages/Register';
import Login from './pages/Login';
import MenuBar from './components/MenuBar';

import { AuthProvider } from './context/auth';
import AuthRoute from './util/AuthRoute';
// import AuthRoute from './util/AuthRoute';

const client = new ApolloClient({
  uri: 'http://localhost:5000/',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <Router>
          <MenuBar />
          <AuthRoute exact path='/' component={Home} />
          <AuthRoute exact path='/products' component={Products} />
          <AuthRoute exact path='/reports' component={Reports} />
          <AuthRoute exact path='/team' component={Team} />
          <AuthRoute exact path='/messages' component={Messages} />
          <AuthRoute exact path='/support' component={Support} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Router>
      </ApolloProvider>
    </AuthProvider>
  );
}

export default App;
