import { StyleSheet } from 'react-native'
import Constants from 'expo-constants';

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#001427',
        paddingTop: Constants.statusBarHeight,
    },
})
export default globalStyles;