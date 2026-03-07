# React Native Interview Preparation Notes
# 1. What is a View in React Native?

**Definition:**
A **View** is the fundamental container component used to build layouts and group UI elements in React Native.

**Explanation:**
It works similar to a **`div` in web development** and is used to structure the interface using Flexbox.

**Example:**

```javascript
import { View, Text } from "react-native";

export default function App() {
  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
}
```

---

# 2. What is the Image component?

**Definition:**
The **Image component** is used to display images in a React Native application.

**Explanation:**
Images can be loaded either from **local project files** or from **remote URLs**.

**Example (Local Image):**

```javascript
import { Image } from "react-native";

<Image source={require('./assets/logo.png')} />
```

**Example (Remote Image):**

```javascript
<Image source={{ uri: "https://example.com/image.png" }} />
```

---

# 3. What is Stack Navigation?

**Definition:**
Stack Navigation is a navigation method where screens are arranged in a **stack structure (Last In, First Out)**.

**Explanation:**
When a new screen opens, it is pushed on top of the stack, and when the user goes back, the top screen is removed.

**Example:**

```javascript
<Stack.Navigator>
  <Stack.Screen name="Home" component={HomeScreen} />
  <Stack.Screen name="Profile" component={ProfileScreen} />
</Stack.Navigator>
```

---

# 4. What is `screenOptions` in Stack Navigation?

**Definition:**
`screenOptions` is used to define **default settings and styles for all screens inside a navigator**.

**Explanation:**
It allows customization of headers, colors, animations, and other screen properties.

**Example:**

```javascript
<Stack.Navigator
  screenOptions={{
    headerStyle: { backgroundColor: "black" },
    headerTintColor: "white"
  }}
>
```

---

# 5. What is StyleSheet in React Native?

**Definition:**
StyleSheet is an API used to **create reusable and organized styles for React Native components**.

**Explanation:**
Using StyleSheet improves code readability and helps manage styles more efficiently.

**Example:**

```javascript
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
```

---

# 6. How do you apply styles in React Native?

**Definition:**
Styles are applied using the **style property**.

**Explanation:**
The style can be created using StyleSheet or written as inline styles.

**Example:**

```javascript
<View style={styles.container}></View>
```

---

# 7. How do you combine StyleSheet styles with custom styles?

**Definition:**
Multiple styles can be combined using **array syntax**.

**Explanation:**
This allows using predefined styles and additional custom styles together.

**Example:**

```javascript
<View style={[styles.container, { backgroundColor: "red" }]} />
```

---

# 8. Why do we use `require()` in the Image source?

**Definition:**
`require()` is used to **import local image files so React Native can bundle them with the application**.

**Explanation:**
It ensures that the image is included during the build process.

**Example:**

```javascript
<Image source={require("./assets/photo.png")} />
```

---

# 9. Why is StyleSheet usually written at the bottom of the file?

**Definition:**
StyleSheet is typically written at the bottom to **keep UI logic and styles organized**.

**Explanation:**
This separation improves readability and maintainability of the code.

**Example:**

```javascript
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
```

---

# 10. How do you center content inside a View?

**Definition:**
Content can be centered using **Flexbox properties**.

**Explanation:**
`justifyContent` controls vertical alignment, and `alignItems` controls horizontal alignment.

**Example:**

```javascript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
```

# Additional Important React Native Interview Questions

These questions are useful for **React Native interviews** and also help improve your **core understanding of mobile development concepts**.


# 11. What is Flexbox in React Native?

**Definition:**
Flexbox is the default layout system used in React Native to arrange components on the screen.

**Explanation:**
It allows developers to control alignment, spacing, and positioning of UI elements using properties like `flex`, `justifyContent`, and `alignItems`.

**Example:**

```javascript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
```

---

# 12. What is the difference between `justifyContent` and `alignItems`?

**Definition:**
Both are Flexbox properties used to control alignment in layouts.

**Explanation:**

* `justifyContent` → controls alignment on the **main axis**
* `alignItems` → controls alignment on the **cross axis**

By default in React Native:

* Main axis → **vertical**
* Cross axis → **horizontal**

**Example:**

```javascript
<View style={{
  flex:1,
  justifyContent:"center",
  alignItems:"center"
}}>
```

---

# 13. What is the difference between `ScrollView` and `FlatList`?

**Definition:**
Both components are used to display scrollable content.

**Explanation:**

**ScrollView**

* Renders all items at once
* Suitable for small lists

**FlatList**

* Renders items lazily
* Better performance for large lists

**Example:**

```javascript
<FlatList
  data={data}
  renderItem={({item}) => <Text>{item.name}</Text>}
/>
```

---

# 14. What is `useState` in React Native?

**Definition:**
`useState` is a React Hook used to store and manage state inside functional components.

**Explanation:**
State allows components to update and re-render when data changes.

**Example:**

```javascript
const [count, setCount] = useState(0);

<Button
 title="Increase"
 onPress={() => setCount(count + 1)}
/>
```

---

# 15. What is `useEffect`?

**Definition:**
`useEffect` is a hook used to perform side effects in functional components.

**Explanation:**
Side effects include fetching data, running timers, or executing code after rendering.

**Example:**

```javascript
useEffect(() => {
  console.log("Component Mounted");
}, []);
```

---

# 16. What is the difference between `state` and `props`?

**Definition:**
State and props are both used to store data in React components.

**Explanation:**

**State**

* Managed inside the component
* Can change during runtime

**Props**

* Passed from parent to child component
* Read-only

**Example:**

```javascript
function Greeting(props) {
  return <Text>Hello {props.name}</Text>;
}
```

---

# 17. What is `TouchableOpacity`?

**Definition:**
`TouchableOpacity` is a component used to create clickable elements such as buttons.

**Explanation:**
When pressed, it decreases opacity to give visual feedback to the user.

**Example:**

```javascript
<TouchableOpacity onPress={() => alert("Pressed")}>
  <Text>Click Me</Text>
</TouchableOpacity>
```

---

# 18. What is the difference between `TouchableOpacity` and `Pressable`?

**Definition:**
Both components handle touch interactions.

**Explanation:**

**TouchableOpacity**

* Older component
* Provides opacity feedback

**Pressable**

* Modern component
* Supports multiple interaction states such as pressed, hovered, and focused

**Example:**

```javascript
<Pressable onPress={() => console.log("Pressed")}>
  <Text>Press Here</Text>
</Pressable>
```

---

# 19. What is `Dimensions` in React Native?

**Definition:**
`Dimensions` is used to obtain the width and height of the device screen.

**Explanation:**
It helps build responsive layouts that adjust to different device sizes.

**Example:**

```javascript
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
```

---

# 20. What is the difference between React and React Native?

**Definition:**
React is used for building web applications, while React Native is used for building mobile applications.

**Explanation:**

**React**

* Uses HTML, CSS, and JavaScript
* Runs inside web browsers

**React Native**

* Uses native mobile components
* Runs on Android and iOS devices

---

# 21. What is `SafeAreaView`?

**Definition:**
`SafeAreaView` ensures that UI content does not overlap with device notches, status bars, or rounded screen corners.

**Explanation:**
It is important for modern smartphones that have special screen areas.

**Example:**

```javascript
import { SafeAreaView } from "react-native";

<SafeAreaView>
  <Text>Hello</Text>
</SafeAreaView>
```

---

# 22. What is `NavigationContainer`?

**Definition:**
`NavigationContainer` is the root component used in React Navigation.

**Explanation:**
It manages the navigation state of the application.

**Example:**

```javascript
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen}/>
  </Stack.Navigator>
</NavigationContainer>
```

---

# 23. What are Props in React Native?

**Definition:**
Props (properties) are used to pass data from a parent component to a child component.

**Explanation:**
Props are immutable and cannot be modified inside the receiving component.

**Example:**

```javascript
function Welcome(props) {
  return <Text>Hello {props.name}</Text>;
}
```

---

# 24. What is Component Re-rendering?

**Definition:**
Re-rendering happens when a component updates its UI due to changes in state or props.

**Explanation:**
React automatically updates the component whenever its data changes.

---
