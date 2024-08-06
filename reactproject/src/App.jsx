import "./App.css";
import ResponsiveAppBar from "./components/project/app-bar";
import ColorInversionFooter from "./components/project/footer";
// import "./styles/index.scss";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <ResponsiveAppBar />
        <main>
          <Outlet />
        </main>
        <ColorInversionFooter />
      </Provider>
    </>
  );
}
export default App;