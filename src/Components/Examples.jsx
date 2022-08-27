import { Typography } from '@mui/material'
import React from 'react'

const Examples = () => {
    return (
        <div id='Examples' style={{
            backgroundColor: '#ffff',
            padding: '30px 150px',
            textAlign: 'left',
        }}>
            <Typography sx={{
                width: '100%',
                height: '100px',
                fontFamily: 'Nunito',
                fontStyle: 'normal',
                fontWeight: 800,
                fontSize: '38px',
                textAlign: 'center',
                letterSpacing: '-0.01em',
                color: '#1A1D71',
                '@media (max-width:780px)': {
                    width: '90%',
                    height: '100px',
                    fontSize: '28px',
                    lineHeight: '45px',
                }
            }}>
                Examples
            </Typography>
            <Typography sx={{
                width: '100%',
                fontFamily: 'Nunito',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '24px',
                textAlign: 'left',
                letterSpacing: '-0.01em',
                marginTop: '10px',
                color: '#1A1D71',
                '@media (max-width:780px)': {
                    width: '90%',
                    height: '100px',
                    fontSize: '28px',
                    lineHeight: '45px',
                }
            }}>
                To determine the pool size for your password, go through the table above. If your password contains at least one character from a given category, then mark this category.Then add the sizes of categories that you've marked. For example:
            </Typography>
            <ul>
                <li>
                    <Typography sx={{
                        width: '100%',
                        fontFamily: 'Nunito',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '20px',
                        textAlign: 'left',
                        letterSpacing: '-0.01em',
                        color: '#1A1D71',
                        '@media (max-width:780px)': {
                            width: '90%',
                            height: '100px',
                            fontSize: '28px',
                            lineHeight: '45px',
                        }
                    }}>
                        The password ' incorrect ' has a pool of 26 characters (lower case letters);
                    </Typography>
                </li>
                <li>
                    <Typography sx={{
                        width: '100%',
                        fontFamily: 'Nunito',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '20px',
                        textAlign: 'left',
                        letterSpacing: '-0.01em',
                        color: '#1A1D71',
                        '@media (max-width:780px)': {
                            width: '90%',
                            height: '100px',
                            fontSize: '28px',
                            lineHeight: '45px',
                        }
                    }}>
                        Changing the password to ' Incorrect ' would increase the pool to 52 characters (lower case and upper case letters);
                    </Typography>
                </li>
                <li>
                    <Typography sx={{
                        width: '100%',
                        fontFamily: 'Nunito',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '20px',
                        textAlign: 'left',
                        letterSpacing: '-0.01em',
                        color: '#1A1D71',
                        '@media (max-width:780px)': {
                            width: '90%',
                            height: '100px',
                            fontSize: '28px',
                            lineHeight: '45px',
                        }
                    }}>
                        Changing it further to ' IncoRRect77 ' would increase the pool to 62 characters (lower case, upper case letters, numbers);
                    </Typography>
                </li>
                <li>
                    <Typography sx={{
                        width: '100%',
                        fontFamily: 'Nunito',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '20px',
                        textAlign: 'left',
                        letterSpacing: '-0.01em',
                        color: '#1A1D71',
                        '@media (max-width:780px)': {
                            width: '90%',
                            height: '100px',
                            fontSize: '28px',
                            lineHeight: '45px',
                        }
                    }}>
                        Finally, ' IncoRRect77$%& ' has the pool of 26 + 26 + 10 + 32 = 94 characters (lower case, upper case letters, numbers, and special symbols).
                    </Typography>
                </li>
            </ul>
            <Typography sx={{
                width: '100%',
                fontFamily: 'Nunito',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '20px',
                textAlign: 'left',
                letterSpacing: '-0.01em',
                color: '#1A1D71',
                '@media (max-width:780px)': {
                    width: '90%',
                    height: '100px',
                    fontSize: '28px',
                    lineHeight: '45px',
                }
            }}>
                The other quantity you need to know to compute your password's entropy is the password length. Nothing complicated here, you just need to count the characters.
            </Typography>

            <Typography sx={{
                width: '100%',
                fontFamily: 'Nunito',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '20px',
                textAlign: 'left',
                letterSpacing: '-0.01em',
                color: '#1A1D71',
                '@media (max-width:780px)': {
                    width: '90%',
                    height: '100px',
                    fontSize: '28px',
                    lineHeight: '45px',
                }
            }}>
                Once you know the pool size R and the password length L, the last step to determine password entropy is to apply the formula.
            </Typography>

            <ul>
                <li>
                    <Typography sx={{
                        width: '100%',
                        fontFamily: 'Nunito',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '20px',
                        textAlign: 'left',
                        letterSpacing: '-0.01em',
                        color: '#1A1D71',
                        '@media (max-width:780px)': {
                            width: '90%',
                            height: '100px',
                            fontSize: '28px',
                            lineHeight: '45px',
                        }
                    }}>
                        For `incorrect`, we have R = 26 and L = 9, so E = 9 * log2(26) ≈ 9 * 4.700 ≈ 42.3 bits;                    </Typography>
                </li>
                <li>
                    <Typography sx={{
                        width: '100%',
                        fontFamily: 'Nunito',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '20px',
                        textAlign: 'left',
                        letterSpacing: '-0.01em',
                        color: '#1A1D71',
                        '@media (max-width:780px)': {
                            width: '90%',
                            height: '100px',
                            fontSize: '28px',
                            lineHeight: '45px',
                        }
                    }}>
                        For `Incorrect`, we have R = 52 and L = 9, so E = 9 * log2(52) ≈ 9 * 5.700 ≈ 51.3 bits;                    </Typography>
                </li>
                <li>
                    <Typography sx={{
                        width: '100%',
                        fontFamily: 'Nunito',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '20px',
                        textAlign: 'left',
                        letterSpacing: '-0.01em',
                        color: '#1A1D71',
                        '@media (max-width:780px)': {
                            width: '90%',
                            height: '100px',
                            fontSize: '28px',
                            lineHeight: '45px',
                        }
                    }}>
                        For `IncoRRect77`, we have R = 62 and L = 11, so E = 11 * log2(62) ≈ 11 * 5.954 ≈ 65.5 bits;                    </Typography>
                </li>
                <li>
                    <Typography sx={{
                        width: '100%',
                        fontFamily: 'Nunito',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '20px',
                        textAlign: 'left',
                        letterSpacing: '-0.01em',
                        color: '#1A1D71',
                        '@media (max-width:780px)': {
                            width: '90%',
                            height: '100px',
                            fontSize: '28px',
                            lineHeight: '45px',
                        }
                    }}>
                        For `IncoRRect77$%&`, we have R = 94 and L = 14, so E = 14 * log2(94) ≈ 14 * 6.5545 ≈ 91.76 bits                    </Typography>
                </li>
            </ul>
        </div>
    )
}

export default Examples