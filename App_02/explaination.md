# React Native Nike Shoes Slider (PanResponder) – Explanation

# 2. What is PanResponder?

**PanResponder** is a React Native API used to detect **touch gestures** such as:

- Swiping
- Dragging
- Finger movement on screen

In this project it is used to **slide product cards horizontally**.

Example:

```
User swipes left  → Next product
User swipes right → Previous product
```

---

# 3. PanResponder Setup

```javascript
const panResponder = useRef(
  PanResponder.create({
```

### Explanation

`PanResponder.create()` creates a **gesture handler**.

`useRef()` keeps the same PanResponder instance during re-renders.

---

# 4. Detect When Swipe Starts

```javascript
onMoveShouldPanResponder: (_, gesture) => Math.abs(gesture.dx) > 20,
```

### Explanation

Swipe will start only when the finger moves **more than 20 pixels horizontally**.

This avoids accidental small touches.

Example:

```
Small movement → ignored
Large swipe → slider moves
```

---

# 5. Move the Card While Swiping

```javascript
onPanResponderMove: (_, gesture) => {
  translateX.setValue(gesture.dx);
}
```

### Explanation

`gesture.dx` represents the **horizontal movement of the finger**.

The card moves according to the finger position.

Example:

```
Finger moves left  → Card moves left
Finger moves right → Card moves right
```

---

# 6. When the User Releases the Swipe

Handled inside:

```javascript
onPanResponderRelease
```

There are three cases.

---

## Case 1 — Swipe Left (Next Product)

```javascript
if (gesture.dx < -120)
```

If the user swipes **more than 120px to the left**, the next product appears.

Animation:

```javascript
Animated.timing(translateX,{
  toValue:-400,
  duration:200,
  useNativeDriver:true
})
```

The card moves left and disappears.

Then the product index changes:

```javascript
setCurrentState((prev) => (prev + 1) % item.length)
```

Example:

```
1 → 2 → 3 → 4 → 1
```

Then the new card slides into the center.

---

## Case 2 — Swipe Right (Previous Product)

```javascript
else if (gesture.dx > 120)
```

If the user swipes **more than 120px to the right**, the previous product appears.

Animation moves the card to the right.

Then index changes:

```javascript
(prev - 1 + item.length) % item.length
```

Example:

```
4 → 3 → 2 → 1 → 4
```

---

## Case 3 — Small Swipe

If the swipe is **less than 120px**, the card returns to the center.

```javascript
Animated.spring(translateX,{
  toValue:0,
  useNativeDriver:true
})
```

The card smoothly snaps back.

---

# 7. Animated View

```javascript
return(
  <Animated.View
    style={{ transform:[{ translateX }] }}
    {...panResponder.panHandlers}
  >
    {/* Card content here */}
  </Animated.View>
)
```

### Explanation

`Animated.View` allows animation.

`translateX` moves the card horizontally.

`panHandlers` attaches swipe gestures to the view.

---

# 8. Card Component

The **Card component** defines the structure of each product card.

Example:

```javascript
function Card(props){
  return(
    <View>
      {props.ProductName}
    </View>
  )
}
```

### Explanation

This component receives product data using **props**.

Example usage:

```javascript
<Card ProductName="Nike Air Max" />
```

Output:

```
Nike Air Max
```

You can also add:

- product image
- price
- description
- rating

---