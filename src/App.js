import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Router";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;
