# Interview Questions – React Native PanResponder Slider Project

## Basic React Native Questions

### 1. What is React Native?
React Native is a JavaScript framework used to build **mobile applications for Android and iOS** using **React and native components**.

Example:
- Instead of HTML elements like `<div>`
- React Native uses `<View>`, `<Text>`, `<Image>`.

---

### 2. What is the difference between React and React Native?

| React | React Native |
|------|------|
| Used for web applications | Used for mobile applications |
| Uses HTML elements | Uses native components |
| Runs in browser | Runs as a mobile app |

---

### 3. What is a Component in React Native?

A component is a **reusable UI block**.

Example:

```javascript
function Card(){
  return(
    <View>
      <Text>Product</Text>
    </View>
  )
}
```

Components help create **modular and reusable UI**.

---

# PanResponder Questions

### 4. What is PanResponder in React Native?

PanResponder is a React Native API used to **handle touch gestures** like:

- swipe
- drag
- pan
- finger movement

It helps detect **user interactions with the screen**.

Example:

```javascript
PanResponder.create({})
```

---

### 5. Why did you use PanResponder in this project?

PanResponder is used to:

- Detect swipe gestures
- Move cards horizontally
- Implement product slider interaction

It helps create **smooth swipe navigation between products**.

---

### 6. What is `gesture.dx`?

`gesture.dx` represents **horizontal movement distance** of the finger.

Example:

```
gesture.dx = -150 → swipe left
gesture.dx = 150  → swipe right
```

This value is used to **move the card horizontally**.

---

### 7. What does `onMoveShouldPanResponder` do?

It determines **whether the gesture should activate the PanResponder**.

Example:

```javascript
onMoveShouldPanResponder: (_, gesture) => Math.abs(gesture.dx) > 20
```

Meaning:

Swipe is activated only when movement is **greater than 20 pixels**.

This prevents accidental gestures.

---

### 8. What is `onPanResponderMove`?

This function runs when the **user moves their finger on the screen**.

Example:

```javascript
onPanResponderMove: (_, gesture) => {
  translateX.setValue(gesture.dx);
}
```

It updates the **position of the card while swiping**.

---

### 9. What is `onPanResponderRelease`?

This function runs when the **user releases their finger**.

It decides:

- Move to next product
- Move to previous product
- Return card to center

---

# Animation Questions

### 10. What is the Animated API?

The Animated API in React Native is used to create **smooth animations**.

Example animations:

- sliding
- fading
- scaling
- rotation

Example:

```javascript
Animated.timing()
Animated.spring()
```

---

### 11. What is the difference between `Animated.timing` and `Animated.spring`?

| Animated.timing | Animated.spring |
|---|---|
| Fixed duration animation | Physics-based animation |
| Moves with constant speed | Bouncy natural movement |

Example:

```javascript
Animated.timing(value,{
  toValue:100,
  duration:200
})
```

---

### 12. What is `useNativeDriver`?

`useNativeDriver: true` allows animations to run on the **native UI thread** instead of the JavaScript thread.

Advantages:

- Better performance
- Smoother animation
- Less lag

---

# State Management Questions

### 13. Why did you use `useRef` for PanResponder?

`useRef` is used so that the **PanResponder object persists across renders**.

Without `useRef`, PanResponder would be recreated every time the component renders.

Example:

```javascript
const panResponder = useRef(
  PanResponder.create({})
).current
```

---

### 14. Why did you use modulo (`%`) in the slider logic?

Modulo allows the slider to **loop through products continuously**.

Example:

```javascript
(prev + 1) % item.length
```

Example result:

```
0 → 1 → 2 → 3 → 0
```

This prevents **index out of range errors**.

---

# Component Questions

### 15. What are Props in React Native?

Props are used to **pass data from parent component to child component**.

Example:

```javascript
<Card ProductName="Nike Air Max" />
```

Inside the component:

```javascript
props.ProductName
```

---

### 16. Why is a Card component used?

The Card component helps:

- Reuse UI
- Maintain clean code
- Separate structure from logic

Instead of writing the same UI many times.

---

# Project-Based Questions (Very Important)

### 17. How does the product slider work in your project?

Flow:

```
User swipes the card
↓
PanResponder detects gesture
↓
gesture.dx tracks finger movement
↓
translateX moves the card
↓
Animation runs
↓
Next or previous product is shown
```

---

### 18. How do you detect swipe left vs swipe right?

Using `gesture.dx`.

Example:

```
gesture.dx < -120 → Swipe Left
gesture.dx > 120  → Swipe Right
```

---

### 19. What happens if the swipe distance is small?

If swipe distance is less than **120px**, the card returns to the center using:

```javascript
Animated.spring()
```

---