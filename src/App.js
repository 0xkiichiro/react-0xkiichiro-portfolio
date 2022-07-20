import "./app.css";
import AppRouter from "./router/AppRouter";
import ContextProvider from "./context/Context";

function App() {
  return (
    <ContextProvider>
      <AppRouter />
    </ContextProvider>
  );
}

export default App;
