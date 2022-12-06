import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        margin: 10,
        borderWidth: 4,
        borderColor: '#FFFFFF',
        borderStyle: 'solid',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
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
    input: {
        backgroundColor: "#FFFFFF",
        height: 48,
        width: "90%",
        borderRadius: 10,
        flexDirection: "column",
        padding: 5,
        flexDirection: "column",
        marginTop: 8
    },
    buttonOptions: {
        backgroundColor: "#87CEFC",
        height: 48,
        width: "90%",
        borderRadius: 10,
        flexDirection: "column",
        padding: 5,
        flexDirection: "column",
        marginTop: 16  
    },
    options:{
        textAlign: "center",
        fontSize: 18,
        marginTop: 5,
        
    },
})
export default styles;