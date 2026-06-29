import React from "react";

interface PortfolioItem {
  id: string;
  name: string;
}

export default async function Home() {
  let data: PortfolioItem[] = [];

  try {
    // FIXED: Using a safe server-side environment variable (no NEXT_PUBLIC_ prefix)
    const apiKey = process.env.API_SECRET_KEY;
    
    if (apiKey) {
      const res = await fetch(`https://api.example.com/data?key=${apiKey}`);
      
      // FIXED: Checking res.ok before parsing JSON
      if (res.ok) {
        const json = await res.json();
        
        // FIXED: Runtime array validation before assignment
        if (Array.isArray(json)) {
          data = json;
        } else {
          console.error("Invalid API response format");
        }
      } else {
        console.error(`API Error: ${res.status}`);
      }
    }
  } catch (error) {
    console.error("Failed to fetch portfolio data", error);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">My Portfolio</h1>
      
      <div className="z-50 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex mt-8 gap-4">
        {data.length === 0 ? (
          <p>No projects found.</p>
        ) : (
          data.map((item) => (
            <div key={item.id} className="p-4 border rounded-md shadow-sm">
              {item.name}
            </div>
          ))
        )}
      </div>
    </main>
  );
}
