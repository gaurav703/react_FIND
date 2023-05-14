import { MEALS } from "../data/dummy";
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
// route is property to use data moving from one screen to another .

function Meal({ route }) {

  const catId = route.params.categoryId;


  //    const displayedMeals = MEALS.filter( ( mealItem ) => { 
  //     return  mealItem.categoryIds.indexOf(catId) >= 0; 
  //    });


  //     function renderMealItem(itemData){
  //       return  <MealItem title = {itemData.item.title}/> ;  
  //     }


  return (
    <View style={styles.container}>
      <Text>
        {catId}
      </Text>

    </View>
  );

}

export default Meal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',

  },


});