import React, { useState } from 'react';
import Box from '@mui/material/Box';
import '../App.css';
import TextField from '@mui/material/TextField';
import { useNavigate, Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'; // Import icons
import { BiSearchAlt2 } from "react-icons/bi";
function RegisterForm() {
    const [LoggedIn, setLoggedIn] = useState(false);
    const [showPassword, setShowpassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate(); // Use navigate hook

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    function submitHandler(e) {
        e.preventDefault();
        alert('Successfully registered'); setLoggedIn(true);
        navigate('/dashboard'); // Navigate back to the login page
    }

    return (
        <>
            <div>RegisterForm</div>
            <form className="login-form" onSubmit={submitHandler}>
                <h2>Login <BiSearchAlt2 /></h2>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
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
                    <TextField
                        id="outlined-basic"
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        variant="outlined"
                        fullWidth
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    <span
                        className="eye-icon"
                        style={{ position: 'absolute', margin: '26px -140px' }}
                        onClick={() => setShowpassword((prev) => !prev)}
                    >
                        {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                    </span>
                    <button type="submit">Register</button>
                </Box>
            </form>

            <div>
                <p>
                    Already have an account?{' '}
                    <Link to="/">Login Here!</Link>
                </p>
                <br />
            </div>
        </>
    );
}

export default RegisterForm;
