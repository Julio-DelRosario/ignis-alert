import { Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import { Link, useRouter } from 'expo-router'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import ReturnIcon from '../assets/return.svg'
import GoogleIcon from '../assets/social_media_icons/google_icon.svg'
import AppleIcon from '../assets/social_media_icons/apple_icon.svg'
import FbIcon from '../assets/social_media_icons/fb_icon.svg'
import Wave01 from '../assets/wave_01.png'
import styles from './Auth.styles.js'


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  
  return (
    <View style={{ flex: 1, position: 'relative' }}>
        <LinearGradient
            colors={['#fff', '#f8d1c9','#f39281','#ec472c']} 
            style={{flex:1}}
        >
            {/* Wave */}
            <Image source={Wave01} style={styles.wave}/>
            <KeyboardAvoidingView
                style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center' }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={0}
            >

            {/* Back Button */}
            <View style={styles.returnButtonContainer}>
                <TouchableOpacity onPress={() => router.push('./EmergencyButton')}>
                    <ReturnIcon style={styles.returnButton}/>
                </TouchableOpacity>
            </View>
            

                {/* Main container */}
                <View style={styles.container}>
                    {/* Logo */}
                    <Image source={require('../assets/logo.png')} style={styles.logo}/>

                    {/* Email */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                        style={styles.userInput}
                        placeholder='john@gmail.com'
                        placeholderTextColor='grey'
                        value={email}
                        keyboardType='email-address'
                        autoCapitalize='none'
                        onChangeText={(text) => setEmail(text)}
                        scrollEnabled={false}
                        multiline={false}
                        />
                    </View>

                    {/* Password */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                        style={styles.userInput}
                        placeholder='password'
                        placeholderTextColor='grey'
                        value={password}
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                        scrollEnabled={false}
                        multiline={false}
                        />
                    </View>

                    {/* Login Button */}
                    <TouchableOpacity title='Login' style={styles.button}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                
                    {/* Bottom part */}
                    <View style={styles.forgotContainer}><Link href="/forgot" style={styles.forgotLink}>Forgot Password?</Link></View>
                    <View style={styles.authContainer}>
                        <Text style={styles.authText}>Don't have an account? </Text><Link href="/Signup" style={styles.authLink}>Sign Up</Link>
                    </View>


                    {/* Divider */}
                    <View style={styles.divider}>
                        <View style={styles.horizontalLine} />
                        <Text style={{color:'white'}}>or</Text>
                        <View style={styles.horizontalLine} />
                    </View>

                    <View style={{ flexDirection: 'row', gap: 16, marginVertical: 12 }}>
                        <FbIcon width={32} height={32} fill='white'/>
                        <GoogleIcon width={32} height={32} fill='white'/>
                        <AppleIcon width={32} height={32} fill='white'/> 
                    </View>
                </View>
            </KeyboardAvoidingView>
        </LinearGradient>
    </View>
  )
}

export default Login;