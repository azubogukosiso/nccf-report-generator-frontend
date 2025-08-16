import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import InputRecordsPage from "./pages/InputRecordsPage";
import ViewRecordsPage from "./pages/ViewRecordsPage";
import ViewReportsPage from "./pages/ViewReportsPage";
import InputReportDetailsPage from "./pages/InputReportDetailsPage";
import ChangePasswordPage from "./pages/ChangePasswordPage";

function App() {
  return (
    <div className="h-screen min-h-screen p-10">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="signin" element={<SignInPage />}></Route>
        <Route path="input-record" element={<InputRecordsPage />}></Route>
        <Route path="records" element={<ViewRecordsPage />}></Route>
        <Route path="reports" element={<ViewReportsPage />}></Route>
        <Route path="input-report" element={<InputReportDetailsPage />}></Route>
        <Route path="change-password" element={<ChangePasswordPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
