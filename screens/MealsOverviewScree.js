// import { useRoute } from "@react-navigation/native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

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
    
    return <MealsList items={displayedMeals} />
}

