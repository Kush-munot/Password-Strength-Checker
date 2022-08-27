import React, { useState } from 'react'
import { Button, Grid, Typography, } from '@mui/material';
import img from '../Assets/bg-image.png'
import FormInput from './FormInput';
import * as animationData from '../Assets/Lottie Files/Password2.json'
import Lottie from 'react-lottie';

const FormPage = () => {

    const [values, setValues] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
        age: "",
        fullname: "",
    });

    const inputs = [
        {
            id: 1,
            name: "Lower Case Letters",
            type: "number",
            placeholder: "Number of Lower Case Letters in Password",
            label: "Lower Case Letters",
            default: "0",
        },
        {
            id: 2,
            name: "Upper Case Letters",
            type: "number",
            placeholder: "Number of Upper Case Letters in Password",
            label: "Upper Case Letters",
            default: "0",
        },
        {
            id: 3,
            name: "Digits",
            type: "number",
            placeholder: "Number of Digits in Password",
            label: "Digits",
            default: "0",
        },
        {
            id: 4,
            name: "Special Characters",
            type: "number",
            placeholder: "Number of Special Symbols in Password",
            label: "Special Characters",
            default: "0",
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        var lowerCaseCharacters = parseInt(e.nativeEvent.target[0].value);
        var upperCaseCharacters = parseInt(e.nativeEvent.target[1].value);
        var digits = parseInt(e.nativeEvent.target[2].value);
        var specialCharacters = parseInt(e.nativeEvent.target[3].value);
        var L = lowerCaseCharacters + upperCaseCharacters + digits + specialCharacters;
        var R = 0;

        /* ONLY DIGITS Condition */
        if (lowerCaseCharacters === 0 && upperCaseCharacters === 0 && specialCharacters === 0 && digits >= 1) {
            R = 10;
            console.log(R, L);
        } /* ONLY Lowercase Condition */
        else if (lowerCaseCharacters >= 1 && upperCaseCharacters === 0 && specialCharacters === 0 && digits === 0) {
            R = 26;
            console.log(R, L);
        } /* ONLY Uppercase Condition */
        else if (lowerCaseCharacters === 0 && upperCaseCharacters >= 1 && specialCharacters === 0 && digits === 0) {
            R = 26;
            console.log(R, L);
        }/* ONLY Special Characters Condition */
        else if (lowerCaseCharacters === 0 && upperCaseCharacters === 0 && specialCharacters >= 0 && digits === 0) {
            R = 32;
            console.log(R, L);
        } /* ONLY Lowercase + Uppercase Condition */
        else if (lowerCaseCharacters >= 1 && upperCaseCharacters >= 1 && specialCharacters === 0 && digits === 0) {
            R = 52;
            console.log(R, L);
        } /* ONLY Alphanumeric Condition */
        else if (lowerCaseCharacters >= 1 && upperCaseCharacters === 0 && specialCharacters === 0 && digits >= 1) {
            R = 36;
            console.log(R, L);
        }/* ONLY Alphanumeric + Uppercase Condition */
        else if (lowerCaseCharacters >= 1 && upperCaseCharacters >= 1 && specialCharacters === 0 && digits >= 1) {
            R = 62;
            console.log(R, L);
        }/* ONLY Alphanumeric + Uppercase + Special Symbols Condition */
        else if (lowerCaseCharacters >= 1 && upperCaseCharacters >= 1 && specialCharacters >= 1 && digits >= 1) {
            R = 94;
            console.log(R, L);
        }

        /* console.log(L);
        console.log(lowerCaseCharacters);
        console.log(upperCaseCharacters);
        console.log(digits);
        console.log(specialCharacters); */
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div>
            <Grid
                sx={{
                    margin: '0',
                    backgroundImage: { img },
                    height: '700px',
                    width: '1000px',
                    '@media (max-width:780px)': {
                        position: 'relative',
                        left: '5%',
                        width: '90%',
                        height: '900px',
                    }
                }}
            >
                <Grid container columns={16} sx={{
                    backgroundColor: 'rgba(184, 214, 204, 0.26)',
                    height: '600px',
                    position: 'relative',
                    top: 70,
                    left: '15%',
                    borderRadius: '50px',
                    '@media (max-width:780px)': {
                        height: '600px',
                        width: '100%',
                        position: 'relative',
                        left: '1%',
                    }
                }}>
                    <Grid item md={9} xs={16} sx={{
                        height: '100%',
                        marginLeft: '50px',
                        marginTop: '40px',
                        '@media (max-width:780px)': {
                            marginLeft: '20px',
                            marginTop: '40px',
                        }
                    }}>
                        <Typography sx={{
                            width: '100%',
                            height: '100px',
                            fontFamily: 'Nunito',
                            fontStyle: 'normal',
                            fontWeight: 800,
                            fontSize: '38px',
                            lineHeight: '65px',
                            textAlign: 'left',
                            letterSpacing: '-0.03em',
                            color: '#FFFFFF',
                            '@media (max-width:780px)': {
                                width: '90%',
                                height: '100px',
                                fontSize: '28px',
                                lineHeight: '45px',
                            }
                        }}>
                            Password Strength Checker
                        </Typography>
                        <form
                            onSubmit={handleSubmit}>
                            {inputs.map((input) => (
                                <FormInput
                                    key={input.id}
                                    {...input}
                                    value={values[input.name]}
                                    onChange={onChange}
                                />
                            ))}
                            <button style={{
                                width: '50%',
                                height: '45px',
                                padding: '0px',
                                border: 'none',
                                backgroundColor: '#0B0E6F',
                                color: 'white',
                                borderRadius: '25px',
                                fontWeight: 'bold',
                                fontSize: '18px',
                                cursor: 'pointer',
                                marginTop: '15px',
                                marginBottom: '30px',
                            }}>
                                Check Strength 💪
                            </button>
                        </form>
                    </Grid>
                    <Grid item md={6} xs={16} sx={{
                        height: '100%',
                        width: '100%',
                        marginTop: '10%',
                        '@media (max-width:780px)': {
                            display: 'none',
                        }
                    }}>
                        <Lottie options={defaultOptions}
                            height='70%'
                            width='100%'
                        />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default FormPage