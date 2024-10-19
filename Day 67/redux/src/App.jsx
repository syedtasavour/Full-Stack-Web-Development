import Todo from "./components/Todo";
import AddForm from "./components/AddForm.jsx";
import './App.css'
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {

  return (
    <>
    <Provider store={store}>
      <AddForm/>
      <Todo />
    </Provider>
   
    </>
  )
}

export default App
