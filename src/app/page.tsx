interface PortfolioItem {
  id: string;
  name: string;
}

export default async function Home() {
  let data: PortfolioItem[] = [];

  try {
    const apiKey = process.env.API_SECRET_KEY;
    
    if (apiKey) {
      // FIXED: Sending API key as a header instead of URL parameter
      const res = await fetch("https://api.example.com/data", {
        headers: {
          "Authorization": `Bearer ${apiKey}`
        }
      });
      
      if (res.ok) {
        const json = await res.json();
        
        if (Array.isArray(json)) {
          data = json;
        } else {
          // FIXED: Adding 'ALERT:' prefix as per team rules
          console.error("ALERT: Invalid API response format");
        }
      } else {
        // FIXED: Adding 'ALERT:' prefix
        console.error(`ALERT: API Error: ${res.status}`);
      }
    }
  } catch (error) {
    // FIXED: Adding 'ALERT:' prefix
    console.error("ALERT: Failed to fetch portfolio data", error);
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
