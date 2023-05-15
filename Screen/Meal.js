import React from 'react';
import  { StyleSheet, View, Flatlist, Text } from 'react-native';
import MealItem from "../Components/MealItem";
import  MEALS  from '../data/dummy';
// route is property to use data moving from one screen to another .

function Meal({ route }) {

 const catId = route.params.category;
 const displayedMeals = MEALS.filter((mealItem) => {
   return mealItem.categoryIds.indexOf(catId) >= 0
 });
  // filter method is not working 
  
  function renderMealItem(itemData) {
    return   <MealItem 
                    title={itemData.item.title} />


  }

  return (
    <View style={styles.container}>
      <Flatlist
      data = { MEALS }
      keyExtractor = { (item) => item.id }
      renderItem = { renderMealItem }
      >
      </Flatlist>

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

  text: {
    fontSize: 30,
    color: 'red',

  }

});