"use client";
import React, { useState, useEffect } from "react";
import styles from "./menu.module.css";
import Information from "@/app/components/content/information";
import Filter from "@/app/components/content/bar/filter";
import Search from "@/app/components/content/bar/search";
import Language from "@/app/components/content/bar/language";
import { getDetailedData } from "@/app/utils/getDetailedData";
import Time from "./bar/time";

interface Video {
  url: string;
  type: string;
  language: string;
  title: string;
  author: string;
  date: string;
}

interface Props {
  data: Video[];
  youtubeAPIKey: string | undefined;
}

export default function Menu({ data, youtubeAPIKey }: Props) {
  const [detailedData, setDetailedData] = useState<Video[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTime, setSelectedTime] = useState("latest");

  useEffect(() => {
    async function fetchData() {
      const updatedData = await getDetailedData(data, youtubeAPIKey);
      setDetailedData(updatedData);
    }
    fetchData();
  }, [data]);

  const handleLanguageChange = (newLanguage: string) => {
    setSelectedLanguage(newLanguage);
  };

  const handleFilterChange = (newFilter: string) => {
    setSelectedFilter(newFilter);
  };

  const handleSearchChange = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
  };

  const handleTimeChange = (newTime: string) => {
    setSelectedTime(newTime);
  };

  const compareDates = (a: Video, b: Video) => {
    if (!a.date) return 1;
    if (!b.date) return -1;

    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return selectedTime === "latest"
      ? dateB.getTime() - dateA.getTime()
      : dateA.getTime() - dateB.getTime();
  };

  const filteredData = detailedData
    .filter((element) => {
      const languageMatch =
        selectedLanguage === "all" || element.language === selectedLanguage;
      const filterMatch =
        selectedFilter === "all" || element.type === selectedFilter;
      const searchMatch = element.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return languageMatch && filterMatch && searchMatch;
    })
    .sort(compareDates);

  return (
    <section className={styles.section}>
      {data.length === 0 ? (
        <p className={styles.noData}>No data available :(</p>
      ) : (
        <>
          <div className={styles.bar}>
            <Filter onFilterChange={handleFilterChange} />
            <Time onTimeChange={handleTimeChange} />
            <Language onLanguageChange={handleLanguageChange} />
            <Search onSearchChange={handleSearchChange} />
          </div>
          <Information data={filteredData} />
        </>
      )}
    </section>
  );
}
