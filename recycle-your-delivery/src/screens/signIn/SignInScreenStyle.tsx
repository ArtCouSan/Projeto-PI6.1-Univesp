import { StyleSheet } from 'react-native';
import { Colors } from '../../shared/style/colors';

export const styles = StyleSheet.create({
    container: {
        padding: 50,
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.timberwolf
    },
    containerButton: {
        flexDirection: "row",
        alignSelf: 'flex-end'
    },
    inputPlaceholder: {
        paddingLeft: 10
    },
    button: {
        textAlign: "center",
        fontSize: 16,
        color: Colors.branco
    },
    buttonBackground: {
        backgroundColor: Colors.fern
    }
})