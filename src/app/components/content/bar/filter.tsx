"use client";
import styles from "./bar.module.css";
import { useState } from "react";

interface FilterProps {
  onFilterChange: (platform: string) => void;
}

export default function Filter({ onFilterChange }: FilterProps) {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newPlatform = event.target.value;
    setSelectedFilter(newPlatform);
    onFilterChange(newPlatform);
  };

  return (
    <select
      className={styles.box}
      onChange={handleFilterChange}
      value={selectedFilter}
    >
      <option value="all">All platforms</option>
      <option value="instagram">Instagram</option>
      <option value="youtube">Youtube</option>
      <option value="web">Web</option>
    </select>
  );
}
