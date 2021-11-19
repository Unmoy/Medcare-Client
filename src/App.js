import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Shared/Authentication/Login";
import Signup from "./Components/Shared/Authentication/Signup";
import Appointment from "./Components/Appointment/Appointment/Appointment";
import DashBoard from "./Components/DashBoard/DashBoard/DashBoard";
import AllPatients from "./Components/AllPatients/AllPatients/AllPatients";
import AddDoctor from "./Components/AddDoctor/AddDoctor";
import { AuthProvider } from "./Components/Shared/contexts/AuthContext";
import PrivateRoute from "./Components/Shared/Authentication/PrivateRoute";
import Prescriptions from "./Components/DashBoard/Prescriptions/Prescriptions";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute path="/appointment" component={Appointment} />
          <PrivateRoute path="/dashboard" component={DashBoard} />
          <Route path="/allpatients" component={AllPatients} />
          <Route path="/addDoctor" component={AddDoctor} />
          <Route path="/prescriptions" component={Prescriptions} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
