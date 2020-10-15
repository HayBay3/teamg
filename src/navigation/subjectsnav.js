import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Shapes from "../components/Shapes";
import ShapesAnswer from "../components/ShapesAnswer";
import Subjects from "../components/Subjects";
import ColorSortGame from "../components/ColorSortGame";
<<<<<<< HEAD
=======

>>>>>>> 449e7fb0826680d20b8dcb1ae7e1e336a9a787d7

const Stack = createStackNavigator();

function SubjectsNav({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Subjects"
        component={Subjects}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Shapes"
        component={Shapes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ColorSortGame"
        component={ColorSortGame}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ShapesAnswer"
        component={ShapesAnswer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default SubjectsNav;