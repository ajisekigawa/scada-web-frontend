import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/Home";
import Overview from "./pages/overview";
import MonitoringIo from "./pages/monitoringio";
import SettingParameter from "./pages/setting";
import RealtimeAlarm from "./pages/alarm";
import TemperatureTrend from "./pages/temperature";
import ManualControl from "./pages/manualControl";
import Operation from "./pages/operation";
import Cat from "./pages/Cat";
import User from "./pages/user";
import PagesNotFound from "./pages/errors";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/monitoringio" element={<MonitoringIo />} />
        <Route path="/settingparameter" element={<SettingParameter />} />
        <Route path="/alarm" element={<RealtimeAlarm />} />
        <Route path="/temperature" element={<TemperatureTrend />} />
        <Route path="/manualcontrol" element={<ManualControl />} />
        <Route path="/operation" element={<Operation />} />
        <Route path="/cat" element={<Cat />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<PagesNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
