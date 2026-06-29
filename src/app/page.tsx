"use client";

import { useEffect, useState } from "react";

interface PortfolioItem {
  id: string;
  name: string;
}

export default function Home() {
  const [data, setData] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    // GOOD: Empty dependency array means this runs only once on mount
    const fetchData = async () => {
      // GOOD: Reading from environment variable instead of hardcoding
      const apiKey = process.env.NEXT_PUBLIC_API_KEY;
      if (!apiKey) return;

      try {
        const res = await fetch(`https://api.example.com/data?key=${apiKey}`);
        const json = await res.json();
        setData(json); 
      } catch (error) {
        console.error("Failed to fetch portfolio data", error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">My Portfolio</h1>
      <div className="z-50 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex mt-8 gap-4">
        {/* GOOD: Using proper keys for mapped items */}
        {data.map((item) => (
          <div key={item.id} className="p-4 border rounded-md shadow-sm">
            {item.name}
          </div>
        ))}
      </div>
    </main>
  );
}
