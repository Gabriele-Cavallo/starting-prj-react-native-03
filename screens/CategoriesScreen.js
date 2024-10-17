import { FlatList, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";


export default function CategoriesScreen({navigation}) {
    function renderCategoryItem(itemData) {
        function pressHandlre() {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id,
            });
        }
    
        return <CategoryGridTile onPress={pressHandlre} title={itemData.item.title} color={itemData.item.color}/>;
    }

    return (
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    )
}