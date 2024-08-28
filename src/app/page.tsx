"use client";
import { Navbar } from "@/components/Navbar/Navbar";
import { getForecast } from "@/services/forecast";
import { useQuery } from "react-query";

export default function Home() {
  const forecastQuery = useQuery<WeatherData>("forecastData", () =>
    getForecast("Caracas", 10)
  );

  console.log("forecastQuery", forecastQuery.data);

  if (forecastQuery.isLoading)
    return (
      <div className="flex items-center min-h-screen justify-center">
        <p className="animate-pulse">Loading</p>
      </div>
    );

  return (
    <div className="flex flex-col gap-4 min-h-screen">
      <Navbar />
      <main className="px-3 max-w-7xl mx-auto flex flex-col gap-9 w-full pb-10 pt-4"></main>
    </div>
  );
}
