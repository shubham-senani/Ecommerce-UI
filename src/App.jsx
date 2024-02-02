import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import { ItemProvider } from "./pages/ContextPage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <ItemProvider>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
    </ItemProvider>
  );
}
export default App;
