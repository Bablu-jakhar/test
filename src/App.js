import logo from "./logo.svg";
import "./App.css";
// import dotenv from "dotenv";
import { TestmemoAndback } from "./TestmemoAndback";

import { useEffect } from "react";
import CountdownDate from "./CountdownDate/CountdownDate";

console.log("env", process.env);
function App() {
  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_URL)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);
  return (
    <div className="App">
      {/* <BrowserRouter>
    //
    // REACT-ROUTER-DOM=V5
    //
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <React.Fragment>
            <Route path="/" element={<Proctected />}>
              <Route path="/dashboard" element={<DashboardMain />} />
              <Route path="/myauctions" element={<DashboardMain />} />
              <Route path="/transactionhistory" element={<DashboardMain />} />
              <Route path="/editprofile" element={<DashboardMain />} />
              <Route path="/changepassword" element={<DashboardMain />} />
              <Route path="/notifications" element={<DashboardMain />} />
              <Route path="/helpsupport" element={<DashboardMain />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </React.Fragment>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
  */}
      {/* // REACT-ROUTER-DOM=V6 */}
      {/* <BrowserRouter basename={"/"}>
  <Switch>
    <Proctected exact path={`${process.env.PUBLIC_URL}/`}>
      <Demo />
    </Proctected>
    <Route
      exact
      path={`${process.env.PUBLIC_URL}/home`}
      component={Home}
    />
    </Switch>
    <TestmemoAndback />
</BrowserRouter>*/}
      <CountdownDate />
      {/* <VideoEditingTimeline config={config} />*/}
    </div>
  );
}

export default App;
