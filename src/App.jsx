import './App.css';
import Form from './Form';
import UserContext from './contexts/UserContext';


function App() {
  return (
    <UserContext.Provider value={{userName: "JohnDoe", name: "John Doe", email: "Johne@gmail.com", isAuthenticated: true}}>
      <div className="App">
        <Form title={`Welcome`}/>
      </div>
    </UserContext.Provider>
  );
}

export default App;
