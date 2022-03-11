import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#b3b3b3',
    },
    title:{
        fontWeight: 'bold',
        color: '#6e0101',
        fontSize: 30,
        marginBottom: 5,
    },
    infoText:{
        fontWeight: 'bold',
        color: '#19002b',
        fontSize: 20,
        marginBottom: 3,
    },
    textBox:{
        width: 200,
        height: 50,
        borderColor: '#000',
        borderWidth: 2,
        textAlign: 'right',
        alignSelf: 'center',
        marginBottom: 50,
        backgroundColor: 'white',
        marginRight: 5,
    },
    iconErase:{
        width: 50,
        height: 50,
    },
    containerTextInput:{
        flexDirection: 'row',
    },
    containerOperations:{
        flexDirection: 'row',
    },
    iconOperations:{
        width: 50,
        height: 50,
        marginRight: 7,
        marginBottom: 70,
    },
})

export default styles;