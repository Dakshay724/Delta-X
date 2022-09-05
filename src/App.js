import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./component/Login/Login";
import Main from "./component/main/Main";
import Signup from "./component/signup/Signup";


function App() {
	const user = localStorage.getItem("token");

	return (
           
		<Routes>
		 
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup/>} />
			<Route path="/login" exact element={<Login/>} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
