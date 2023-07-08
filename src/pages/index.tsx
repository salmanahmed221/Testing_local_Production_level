"use client";

/**
 * env convention
 * client and server side convention
 * role of .env.local, .env.development, .env.production
 * how to add variables on vercel
 */
function Home() {
  return (
    <div
      style={{ textAlign: "center", fontSize: "25px", backgroundColor: "red" }}
    >
      Home Page
    </div>
  );
}

export default Home;

const url = process.env.NEXT_PUBLIC_URL;
console.log("url:", url);
