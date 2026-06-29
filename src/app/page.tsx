"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<any[]>([]);

  // BAD: Hardcoded API key
  const API_KEY = "MY_SUPER_SECRET_API_KEY_1234567890";

  useEffect(() => {
    // BAD: Infinite loop because `data` is in dependency array and updated inside
    const fetchData = async () => {
      const res = await fetch("https://api.example.com/data?key=" + API_KEY);
      const json = await res.json();
      setData([...data, json]); 
    };
    fetchData();
  }, [data]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>My Portfolio</h1>
      <div className="z-50 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {/* BAD: using map without keys */}
        {data.map((item) => (
          <div>{item.name}</div>
        ))}
      </div>
    </main>
  );
}
