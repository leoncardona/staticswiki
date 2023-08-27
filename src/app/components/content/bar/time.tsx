"use client";
import styles from "./bar.module.css";
import { useState } from "react";

interface TimeProps {
  onTimeChange: (Time: string) => void;
}

export default function Time({ onTimeChange }: TimeProps) {
  const [selectedTime, setSelectedTime] = useState("latest");

  const handleTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newTime = event.target.value;
    setSelectedTime(newTime);
    onTimeChange(newTime);
  };

  return (
    <select
      className={styles.box}
      onChange={handleTimeChange}
      value={selectedTime}
    >
      <option value="latest">Latest</option>
      <option value="oldest">Oldest</option>
    </select>
  );
}
