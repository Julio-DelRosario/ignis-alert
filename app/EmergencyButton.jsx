import { Text, View, Image, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import Wave01 from '../assets/wave_01.png'
import styles from './EmergencyButton.styles.js'
import bgstyles from './Auth.styles.js'

const EmergencyButton = () => {
  return (
    <View style={{ flex: 1, position: 'relative' }}>
        <LinearGradient
            colors={['#fff', '#f8d1c9','#f39281','#ec472c']} 
            //'#fbf6f3' extra color for white/grey
            style={{flex:1}}
        >
            {/* Wave */}
            <Image source={Wave01} style={bgstyles.wave}/>
            <KeyboardAvoidingView
                style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center' }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={0}
            >
                {/* Main container */}
                <View style={bgstyles.container}>
                    {/* Logo */}
                    <View style={styles.logoContainer}>
                        <Image source={require('../assets/logo.png')} style={styles.logo}/>
                    </View>

                    {/* Emergency Button */}
                    <View style={styles.emergencyButtonContainer}>
                        <View style={styles.circle1}/>
                        <View style={styles.circle2}/>
                        <TouchableOpacity title='Emergency' style={styles.emergencyButton}>
                            <Text style={styles.emergencyButtonText}>SOS</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomContainer}>
                        <Text style={styles.emergencyText}>Tap the button in case of emergency</Text>

                        {/* Divider */}
                        <View style={bgstyles.divider}>
                            <View style={bgstyles.horizontalLine} />
                            <Text style={{color:'white'}}>or</Text>
                            <View style={bgstyles.horizontalLine} />
                        </View>

                        {/* Button for login/signup */}
                        <TouchableOpacity title='Signup-Login' style={styles.button}>
                            <Text style={bgstyles.buttonText}>Sign Up/Login</Text>
                        </TouchableOpacity>

                        <Link href='./Login'>Go Login</Link>

                    </View>

                    
                </View>
            </KeyboardAvoidingView>
        </LinearGradient>
    </View>
  )
}

export default EmergencyButton
