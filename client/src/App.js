import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  gql,
} from '@apollo/client';

// ส่งข้อมูล Hook
// import { RecoilRoot } from 'recoil';
// Component
import NavBar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import Products from './pages/Products';
import Reports from './pages/Reports';
import Team from './pages/Team';
import Messages from './pages/Messages';
import Support from './pages/Support';
import SignUp from './components/SignUp';
// import Login from './pages/login';
// import Logout from './pages/logout';

const client = new ApolloClient({
  uri: 'http://localhost:5000/',
  cache: new InMemoryCache(),
});

// client
//   .query({
//     query: gql`
//       query GetRates {
//         rates(currency: "USD") {
//           currency
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/reports' component={Reports} />
          <Route path='/team' component={Team} />
          <Route path='/messages' component={Messages} />
          <Route path='/support' component={Support} />
          <Route path='/signUp' component={SignUp} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
