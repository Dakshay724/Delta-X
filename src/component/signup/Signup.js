import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
const Signup = () => {
	const [data, setData] = useState({
		Name: "",
		email: "",
		password: "",
		
	});
	
	let navigate = useNavigate();

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]:e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		
			const url = "http://localhost:8001/api/auth/signUp";
			 axios.post(url, data).then((res)=>{
				if(res.res.message === 'successfully created user'){
					window.alert("registration successfull ");
					navigate("/login")
				}
				
			 })
			
			
		
	};

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sign in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder=" Name"
							name="Name"
							onChange={handleChange}
							value={data.Name}
							required
							className={styles.input}
						/>

						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						
						<button type="submit" className={styles.green_btn}>
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
