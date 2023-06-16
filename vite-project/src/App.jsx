import { Provider } from "react-redux";
import store from "./Context/Store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentList from "./Components/StudentList";
import StudentForm from "./Components/StudentForm";
import CreateStudent from "./Components/CreateStudent";

function App() {

  return (
    <Provider store={store}>
         <Router>
        <Routes>
          <Route exact path="/" element={<StudentList />} />
          <Route exact path="/edit/:id" element={<StudentForm/>} />
          <Route exact path="/add" element={<CreateStudent/>} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
