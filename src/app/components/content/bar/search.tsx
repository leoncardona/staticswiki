"use client";
import React, { useState } from "react";
import styles from "./bar.module.css";

interface Props {
  onSearchChange: (searchTerm: string) => void;
}

export default function Search({ onSearchChange }: Props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onSearchChange(newSearchTerm);
  };

  return (
    <input
      type="text"
      className={`${styles.box} ${styles.search}`}
      placeholder="Search..."
      value={searchTerm}
      onChange={handleSearchChange}
    />
  );
}
