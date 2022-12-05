import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container: {
        flex: 1,
        margin: 10,
        borderWidth: 4,
        borderColor: '#FFFFFF',
        borderStyle: 'solid',
        borderRadius: 8,
        alignItems: 'center'
    },
    boxText: {
        backgroundColor: "#87CEFC",
        height: 100,
        width: "90%",
        borderRadius: 10,
        flexDirection: "column",
        padding: 5,
        marginTop: 20,
    },
    status: {
        fontSize: 12,
    },
    box: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    boxDirection:{
        alignItems: "center",
    },
    direction:{
        marginTop: 5,
        fontSize: 36,
    },
    boxSettings:{
        width: '90%',
        marginTop: 20,
        alignItems:"flex-end"
    },
    iconSettings:{
        
        height: 36,
        width: 36,
    },
    circleButtonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 80
    },
    circleButton: {
        backgroundColor: '#FFFFFF',
        width: 280,
        height: 280,
        borderRadius: 320
    },
    circleButtonRow: {
        width: '100%',
        height: `${100/3}%`,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    circleButtonAction: {
        width: `${100/3}%`,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default styles;