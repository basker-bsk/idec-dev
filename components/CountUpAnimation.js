"use client";
import { useEffect, useState } from "react";

export default function CountUpAnimation({ initialValue, targetValue }) {
  const [count, setCount] = useState(initialValue);
  const duration = 2000; // 4 seconds
  let exp;
  let expValue;
  let expText;
  if (targetValue.includes(" ")) {
    exp = targetValue.split(" ");
    expValue = parseFloat(exp[0]).toFixed(1);
    expText = exp[1];
  } else {
    expValue = parseFloat(targetValue);
    expText = "";
  }

  useEffect(() => {
    let startValue = initialValue;
    const interval = Math.floor(duration / (expValue - initialValue));

    const counter = setInterval(() => {
      startValue += 1;
      setCount(startValue);
      if (startValue >= expValue) {
        clearInterval(counter);
      }
    }, interval);

    return () => {
      clearInterval(counter);
    };
  }, [initialValue, targetValue]);

  return (
    <div className="flex items-center gap-1">
      <span className="text-20 leading-20 md:text-24 md:leading-24 font-medium ">
        {count}
      </span>
      <span className="text-20 leading-20 md:text-24 md:leading-24 font-medium">
        {expText}
      </span>
    </div>
  );
}
