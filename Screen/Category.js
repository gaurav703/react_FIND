import React from 'react';
import { StyleSheet} from 'react-native';
import { CATEGORIES } from '../data/dummy';
import { FlatList } from 'react-native';
import CategoryGrid from '../Components/CategoryGrid';


// FlatList is a scrollable list of items which is optimized to perform well for long lists of data. list a data lazyly .
// FlatList takes two required props: data and renderItem. data is the source of information for the list. renderItem takes one item from the source and returns a formatted component to render.
// FlatList also takes a few optional props: keyExtractor, numColumns, and onEndReached. 
//keyExtractor is a function that takes an item from the source and returns a unique key for that item. 
//numColumns is the number of columns you want to display. onEndReached is a function that is called when you reach the end of the list. This is useful for loading more data.


function Category( {navigation}) {
   // navigation is a prop that is passed to the screen component by the navigator. It contains the navigation logic for that screen.
   // navigation.navigate is a function that takes a route name and navigates to that screen.
   // navigation.navigate('Meal-Overview') will navigate to the Meal screen.

   function renderCategory(itemData) {
      function renderPressed(){
        navigation.navigate('Meal-Overview',
        {categoryId: itemData.item.id
      }
        );
        
      }
      return <CategoryGrid title={itemData.item.title}
       color={itemData.item.color} 
       onPress={renderPressed}
       
       />
    }
     return (
      <FlatList data={CATEGORIES} 
      keyExtractor={ item => item.id }
       renderItem={renderCategory} numColumns={2} >

      </FlatList>
     );
    
    }

    export default Category;




  const styles = StyleSheet.create({
     text: {
        fontSize: 30,
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 50,
        
     }
  
  
  });