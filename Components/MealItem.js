import { View,StyleSheet, Text} from 'react-native';

function MealItem({title}) {
    return (
        <View>
            <Text style = {styles.text}>
                {title}
            </Text>
        </View>

    );
}

export default MealItem;

const styles = StyleSheet.create({
    text : {
        fontSize : 30,
        color : 'red',
        fontWeight : 'bold',
    }

});