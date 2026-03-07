# React Native Basics – Simple Explanation (Future Reference)

This document explains some basic React Native concepts used in this project.
The goal is to make it easy to understand when revisiting the project later.

---

# 1. View Component

The **View** component is one of the most basic and important components in React Native.

It works like a **container** that holds other components such as text, images, or buttons.

### Purpose

* Used to create layouts
* Used to group and organize elements on the screen
* Similar to a **`<div>` in HTML**

### Example

```javascript
<View>
  <Text>Hello World</Text>
</View>
```

---

# 2. Image Component

The **Image** component is used to display images in a React Native application.

To load a local image, we use the **`source`** property with **`require()`**.

Inside the `require()` function, we provide the **path (location) of the image file**.

### Example

```javascript
<Image source={require('./assets/logo.png')} />
```

### Important Points

* `source` tells React Native which image to load.
* `require()` loads images from the local project folder.
* The file path must be correct.

---

# 3. Stack Navigation

In React Native, **Stack Navigation** is used to move between different screens.

When using Stack Navigation, we often define **screen settings** using `screenOptions`.

### screenOptions

`screenOptions={{ }}` is used to customize the behavior and appearance of screens.

Examples of what you can customize:

* Header title
* Header color
* Header visibility
* Animation style

### Example

```javascript
<Stack.Navigator
  screenOptions={{
    headerShown: true,
    headerStyle: { backgroundColor: 'black' }
  }}
>
```

---

# 4. Creating a StyleSheet

In React Native, styles are usually created using **StyleSheet**.

### Step 1 – Import StyleSheet

First, import it from `react-native`.

```javascript
import { StyleSheet } from 'react-native';
```

---

### Step 2 – Create the StyleSheet

Usually, the stylesheet is created **at the bottom of the file**.

```javascript
const styles = StyleSheet.create({
  container: {

  },

  title: {

  },

  image: {

  }
});
```

### Structure

```
const styles = StyleSheet.create({
    styleName : {
        property : value
    }
})
```

You can create **multiple styles inside the same stylesheet**.

---

# 5. Using Styles in Components

To apply a style, we use the **style property**.

### Example

```javascript
<View style={styles.container}>
</View>
```

---

# 6. Combining StyleSheet with Custom Style

Sometimes we want to use a **StyleSheet style and add extra custom styling**.

We can combine them using **array syntax `[ ]`**.

### Example

```javascript
<View style={[styles.container, { backgroundColor: 'red' }]}>
</View>
```

### Explanation

* `styles.container` → predefined style from StyleSheet
* `{ backgroundColor: 'red' }` → custom inline style
* Both styles are applied together

---

# Summary

* **View** → Used for layout and grouping components.
* **Image** → Used to display images using `source` and `require()`.
* **Stack Navigation** → Used to move between screens and customize them using `screenOptions`.
* **StyleSheet** → Used to organize and manage styles.
* Styles can be **combined with custom styles using array syntax**.
