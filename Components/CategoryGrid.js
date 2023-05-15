import { Pressable, View, Text, StyleSheet, Platform } from "react-native";


// it is possible to use to pass navigation props to pass .but it is good to use useNavigation hook.  
function CategoryGrid({  title, color, onPress }) {
  // useNavigation is a hook that returns the navigation prop of the screen it is used in. 


  return (

    <View style={styles.griditem} >
      <Pressable style={({ pressed }) => [styles.button, pressed ? styles.buttonPress : null]} android_ripple={{ color: '#ccc' }} onPress={onPress}
      //onPress = {onPress} is used to navigate to the next screen.
      // android_ripple is used to give ripple effect in android.
      // android_ripple is not working in ios.
      // android_ripple is not working in android for shadow effect.
      >
        <View style={[styles.gridpressableView, {backgroundColor : color}]}>

          <Text style={styles.griditemtext}>{title}</Text>

        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGrid;

const styles = StyleSheet.create({
  griditem: {
    flex: 1,
    margin: 15,
    height: 150,
    elevation: 2,
    // elevation is used to give shadow effect in android.
    // elevation is not working in ios.
    // borderRadius is used to give rounded corner to the box.
    borderRadius: 5,
    // backgroundColor helps in ios for shadow effect and android for elevation effect . backgroundColor is not working in android for shadow effect.  

    shadowColor: 'black',
    shadowOpacity: 0.26,
    // shadowOpacity is used to give transparency to the shadow effect.
    // shadowOpacity is not working in ios.
    // shadowColor is used to give color to the shadow effect.
    // overflow is used to hide the shadow effect which is coming out of the box.
    // shadowOffset is used to give offset to the shadow effect.
    // shadowRadius is used to give blur effect to the shadow effect.

    overflow: Platform.OS === 'andriod' ? 'hidden' : 'visible', // overflow is used to hide the shadow effect which is coming out of the box.
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },

  button: {
    flex: 1,
  },
  buttonPress: {
    opacity: 0.26,
  },

  gridpressableView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderRadius: 10,
  },
  griditemtext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },





});