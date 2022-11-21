import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#001427',
        paddingTop: 24,
        padding: 10,
      },
      line: {
        backgroundColor: '#FFFFFF',
        height: "100%",
        width: "100%",
        borderRadius: 8,
        padding: 3,
      },
      frontcontainer: {
        backgroundColor: '#001427',
        backgroundColor: '#001427',
        height: "100%",
        width: "100%",
        borderRadius: 8,
      },
    boxText: {
        backgroundColor: "#87CEFC",
        height: 100,
        width: "90%",
        borderRadius: 10,
        flexDirection: "column",
        padding: 5,
        marginTop: 20,
        marginLeft: 19,   
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
        marginTop: 20,
        alignItems:"flex-end",
        marginRight: 20,
    },
    iconSettings:{
        
        height: 36,
        width: 36,
    },
})
export default styles;