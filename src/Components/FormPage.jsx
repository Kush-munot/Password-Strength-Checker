import React, { useState } from 'react'
import { Grid, Typography, } from '@mui/material';
import img from '../Assets/bg-image.png'
import FormInput from './FormInput';
import * as animationData from '../Assets/Lottie Files/Password1.json'
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
                    width: '1100px',
                }}
            >
                <Grid container columns={16} sx={{
                    backgroundColor: 'rgba(184, 214, 204, 0.26)',
                    height: '600px',
                    position: 'relative',
                    top: 70,
                    left: '160px',
                    borderRadius: '50px'
                }}>
                    <Grid item md={10} xs={16} sx={{
                        height: '100%',
                        marginLeft: '50px',
                        marginTop: '40px',
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
                                width: '40%',
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
                        width:'100%',
                    }}>
                        <Lottie options={defaultOptions}
                        height={250}
                        width='28%'
                    />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default FormPage