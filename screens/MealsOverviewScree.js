// import { useRoute } from "@react-navigation/native";
import { FlatList, StyleSheet, View } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

export default function MealsOverviewScreen({route, navigation}){
    // const route = useRoute();
    // route.params
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

        navigation.setOption({
            title: categoryTitle,
        });
    },[catId, navigation]);
    
    function renderMealItem(itemData) {
        const mealItemProps = {
            id: itemData.item.id,
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            affordability: itemData.item.affordability,
            complexity: itemData.item.complexity,
            duration: itemData.item.duration
        }
        return <MealItem {...mealItemProps}/>
    }

    return(
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});
