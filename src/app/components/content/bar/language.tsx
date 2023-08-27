"use client";
import styles from "./bar.module.css";
import { useState } from "react";

interface LanguageProps {
  onLanguageChange: (language: string) => void;
}

export default function Language({ onLanguageChange }: LanguageProps) {
  const [selectedLanguage, setSelectedLanguage] = useState("all");

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    onLanguageChange(newLanguage);
  };

  return (
    <select
      className={styles.box}
      onChange={handleLanguageChange}
      value={selectedLanguage}
    >
      <option value="all">All languages</option>
      <option value="english">English</option>
      <option value="spanish">Spanish</option>
    </select>
  );
}
