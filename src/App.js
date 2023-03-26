import './App.css';
import UserForm from './components/UserForm';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from './components/pixa_bay/navBar/NavBar';
import Search from './components/pixa_bay/search/Search'


function App() {
  return (
    // <div className="App">
    //   <UserForm />
    // </div>
    <MuiThemeProvider>
      <div>
        <NavBar />
        <Search />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
