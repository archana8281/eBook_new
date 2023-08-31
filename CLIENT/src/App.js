import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ROUTER } from "./router";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {ROUTER.map((val) => {
            return (
              <Route key={val.url} exact path={val.url} element={<val.component />}></Route>
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
