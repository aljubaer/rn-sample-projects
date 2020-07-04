import { createAppContainer ,createStackNavigator } from 'react-navigation';
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import Colors from "../constants/Colors";

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealScreen,
    MealDetails: MealDetailsScreen
}, {
    defaultNavigationOptions: {
        mode: 'modal',
        headerStyle: {
            backgroundColor: Colors.colorPrimary
        },
        headerTintColor: Colors.colorTint
    }
});

export default createAppContainer(MealsNavigator);