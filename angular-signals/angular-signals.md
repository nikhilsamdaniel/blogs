# Understanding Angular Signals

## 1. What are Angular Signals?
Signals are a new reactive primitive in Angular.  
Unlike standard variables, they notify dependent components when their value changes.  
This mechanism allows Angular to optimize change detection.  

---

## 2. Comparison with Traditional Change Detection

### **Current Angular Change Detection:**
- Uses **zone.js**, which triggers checks on the entire component tree.  
- Can be **inefficient** as it checks even unrelated components.  

### **With Signals:**
- Only the **specific part of the UI** that depends on the changed signal gets updated.  
- **More efficient** compared to dirty checking.  

---

## 3. Signals vs. BehaviorSubjects

### **Similarities:**
- Both allow reacting to value changes.  

### **Differences:**
| Feature         | Signals  | BehaviorSubjects  |
|----------------|---------|------------------|
| **Subscriptions** | Not required | Required |
| **Accessing Value** | Direct function call | Requires `.getValue()` |
| **Reactivity Style** | Declarative | Subscription-based |
| **Change Propagation** | Automatic UI updates | Requires manual `.next(value)` |

---

## 4. Example Usage

### **Basic Example in Template**
```html
{{ count }}
<button (click)="changeCount()">Change</button>
```

### **Without Signals**
```ts
export class App {
  count = 0;

  changeCount() {
    this.count = 5;
  }
}
```

### **With Signals**
```ts
count = signal(0);
doubleCount = computed(() => this.count() * 2);
```
✅ Uses computed values directly **without RxJS pipes**.

---

## 5. Signals and Async Handling

### **Signals:**
✔ Work well with **synchronous** reactivity (immediate value updates).  
❌ Do not handle **asynchronous operations** like HTTP calls directly.  

### **RxJS Observables:**
✔ Needed for **async operations** (e.g., API calls, debounce, switchMap).  

---

## 6. Converting Signals to Observables

### **Why Convert?**
- To handle **async behavior** like API calls.  
- Angular provides `toObservable()`.  

### **Example: Searching Employees**
```ts
searchTerm = signal('');

employees$ = toObservable(this.searchTerm).pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap((searchTerm) => this.service.search(searchTerm))
);
```
### **Explanation:**
- `toObservable(signal)`: Converts a signal into an observable.  
- `debounceTime(300)`: Waits **300ms** before searching.  
- `distinctUntilChanged()`: Prevents **duplicate API calls**.  
- `switchMap()`: Cancels previous API requests.  

---

## 7. Converting Observables Back to Signals

### **Why Convert?**
- Allows direct **data binding** in templates without `async` pipe.  

### **Example:**
```ts
employees = toSignal(this.employees$);
```
✅ **Directly usable in templates**:
```html
<div *ngFor="let employee of employees()">
  {{ employee.name }}
</div>
```

---

## 8. When to Use Signals vs Observables

| **Use Signals When...** | **Use Observables When...** |
|------------------------|---------------------------|
| State changes are **synchronous** | Handling **asynchronous** data (API calls, WebSockets) |
| Data is **local** and doesn’t rely on API responses | You need operators like **debounceTime, switchMap** |
| You want **simpler, readable** state management | Need to **combine multiple events** (e.g., `combineLatest`) |

---

## 9. Why Angular is Moving Towards Signals

✔ **Performance Improvement**: Signals reduce unnecessary change detection.  
✔ **Simpler Code**: No need for async pipes in HTML.  
✔ **Future-Proofing**: Signals are the recommended **default** in Angular moving forward.  

---

## 🔥 Conclusion
- **Signals** make Angular apps **faster & more efficient**.  
- **Observables** are still necessary for **async workflows**.  
- **Combining both** gives the best of **performance & reactivity**.  

🚀 **Start using Signals in your Angular apps today!**
