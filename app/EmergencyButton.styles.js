import { StyleSheet, Dimensions } from 'react-native';
import EmergencyButton from './EmergencyButton';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    logoContainer: {
        position: 'absolute',
        top: 30, 
        right: -25,    
        alignItems: 'flex-end',
        zIndex: 10,
    },
    logo: {
        width: width * 0.3,
        height: width * 0.3,
    },
    circle1:{
        position: 'absolute',
        width: width * 0.8,
        height: width * 0.8,
        bottom: -40,
        backgroundColor: '#EA2B0C',
        borderRadius: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        opacity: 0.25,
        zIndex: 1,
    },
    circle2:{
        position: 'absolute',
        width: width * 0.7,
        height: width * 0.7,
        bottom: -20,
        backgroundColor: '#EA2B0C',
        borderRadius: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        opacity: 0.5,
        zIndex: 2,
    },
    emergencyButton:{
        width: width * 0.6,
        height: width * 0.6,
        backgroundColor: '#EA2B0C',
        borderRadius: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 5,
    },
    emergencyButtonText:{
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
    },
    emergencyText: {
        color: 'white',
        fontSize: 14,
        marginVertical: 20,

    },
    bottomContainer: {
        marginTop: 40,
        alignItems: 'center',
    },
    button:{
        width:  width * 0.8,
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 12,
        marginVertical: 10,
        backgroundColor: '#EB3517',
        justifyContent: 'center',
    },


});

export default styles;