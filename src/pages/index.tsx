"use client"
function Home() {
  return <div style={{ textAlign: "center", fontSize: "25px", backgroundColor: "red" }}>
    Home Page
  </div>;
}

export default Home;

const local = process.env.local_level;
console.log(local);
