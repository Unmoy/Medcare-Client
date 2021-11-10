import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Appointment from "./Components/Appointment/Appointment/Appointment";
import DashBoard from "./Components/DashBoard/DashBoard/DashBoard";
import AllPatients from "./Components/AllPatients/AllPatients/AllPatients";
import AddDoctor from "./Components/AddDoctor/AddDoctor";
import Login from "./Components/Shared/Authentication/Login";
import Signup from "./Components/Shared/Authentication/Signup";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/appointment" component={Appointment} />
        <Route path="/dashboard" component={DashBoard} />
        <Route path="/allpatients" component={AllPatients} />
        <Route path="/addDoctor" component={AddDoctor} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
