import React, { useState } from "react";
import Box from "@mui/material/Box";
import "../App.css"
import TextField from "@mui/material/TextField";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Import icons
import RegisterForm from "./RegisterForm";
// npm i react-icons
//  npm install react-router-dom
// npm install @mui/material @mui/icons-material @mui/system @mui/styled-engine @emotion/react @emotion/styled
function LoginForm() {

    const navigate = useNavigate();
    // State to hold form values
    const [showPassword, setShowpassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // State to hold validation errors
    // const [errors, setErrors] = useState({});

    // Function to handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // setErrors({ ...errors, [name]: "", });
    };

    // Function to validate the form data
    // const validateForm = () => {
    //     const newErrors = {};
    //     // Validate email
    //     if (!formData.email) {
    //         newErrors.email = "Email is required.";
    //     }
    //     // Validate password
    //     if (!formData.password) {
    //         newErrors.password = "Password is required.";
    //     }

    //     setErrors(newErrors);
    //     const isValid = Object.keys(newErrors).length === 0;

    //     return isValid; // Return whether the form is valid or not
    // };
    // console.log(validateForm);
    // Function to handle form submission

    function SubmitHandler(event) {
        event.preventDefault();
        debugger;
        console.log("dchdgd");
        alert("registered Successfully");
    }


    return (
        <div className="container">
            <form className="login-form" onSubmit={SubmitHandler}>
                <h2>Login</h2>
                <Box

                    component="form"
                    sx={{
                        "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <TextField
                        id="outlined-basic"
                        label="Email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    {/* {errors.email && <p className="error" style={{ color: "red" }}>{errors.email}</p>} */}
                    <TextField
                        id="outlined-basic"
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        variant="outlined"
                        fullWidth
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    <span className="eye-icon" style={{ position: "absolute", margin: "26px -140px" }} onClick={() => setShowpassword(prev => !prev)}>
                        {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                    </span>
                    {/* {errors.password && <p className="error">{errors.password}</p>} */}
                    <button type="submit">Login</button>
                </Box>
            </form>

            <div>
                <p>
                    Don't have an account?{" "}<Link to="/register">Sign Up Here!</Link>
                </p><br />

            </div>
        </div>
    );
}

export default LoginForm;
