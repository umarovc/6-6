import React from "react";
import "./Counter.css";

function Counter() {
  // 📌 SHU YERDA useState VA FUNKSIYALARINGIZNI YOZING
const [count, setCount] = React.useState(0);

const increment = () => {
  if (count < 10) {
    setCount(count + 1);
  }
};

const decrement = () => {
  if (count > 0) {
    setCount(count - 1);
  }
};

const reset = () => {
  setCount(0);
};


  return (
    <div className="counter-page">
      <div className="counter-device">
        {/* Yuqori panel */}
        <div className="device-header">
          <span className="device-brand">REACT // MK-01</span>
          <div className="status-badge">
            <span className="status-dot"></span>
            <span>READY</span>
          </div>
        </div>

        {/* Asosiy ekran: Raqam ko'rinadigan joy */}
        <div className="display-screen">
          <span className="display-label">CURRENT VALUE</span>
          <h1 className="display-number">{count}</h1>

          {/* Bonus shart: 10 ga yetganda ko'rinishi kerak bo'lgan xabar */}
          {count === 10 && (
            <div className="limit-alert">
              🔥 Maksimal chegaraga yetdingiz!
            </div>
          )}
        </div>

        {/* Boshqaruv tugmalari */}
        <div className="controls-grid">
          <button onClick={decrement} className="tactile-btn btn-minus" type="button">
            <span className="btn-symbol">−1</span>
            <span className="btn-sub">DECREMENT</span>
          </button>

          <button className="tactile-btn btn-reset" type="button" onClick={reset}>
            <span className="btn-symbol">↺</span>
            <span className="btn-sub">RESET</span>
          </button>

          <button  onClick={increment} className="tactile-btn btn-plus" type="button">
            <span className="btn-symbol">+1</span>
            <span className="btn-sub">INCREMENT</span>
          </button>
        </div>

        {/* Pastki eslatma */}
        <div className="device-footer">
          <span>MIN: 00</span>
          <span>•</span>
          <span>MAX: 10</span>
        </div>
      </div>
    </div>
  );
}

export default Counter;