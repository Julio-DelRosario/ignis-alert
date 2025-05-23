import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    returnButtonContainer:{
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 1,
    },
    logo: {
        width: width * 0.7,
        height: width * 0.65,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    inputContainer: {
        width: width * 0.8,
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        marginBottom: 6,
        color: '#675f5d',
        // textAlign: 'left',
    },
    userInput: {
        height: 40,
        borderWidth: 1,
        borderColor: '#f39281',
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        paddingBottom: 0,
        paddingTop: 0, 
    },
    button:{
        width:  width * 0.8,
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 12,
        backgroundColor: '#EB3517',
        justifyContent: 'center',
    },
    buttonText:{ 
        color: 'white', 
        fontSize: 14,
    },
    forgotContainer: {
        width: width * 0.8,
        marginVertical: 10,
    },
    forgotLink: {
        color: 'white',
        fontSize: 14,
        textDecorationLine: 'underline',
    },
    authContainer: {
        width: width * 0.8,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    authText: {
        color: 'white',
        fontSize: 14,
    },
    authLink: {
        color: '#C01010',
        fontSize: 14,
        textDecorationLine: 'underline',
        fontStyle:'italic',
    },
    
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 6,
    },
    horizontalLine: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        width: width * 0.35,
        marginHorizontal: 8,
    },
    wave: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        height: 100,
        resizeMode: 'cover',
        marginBottom: -5,
        pointerEvents:"none",
    },
});

export default styles;