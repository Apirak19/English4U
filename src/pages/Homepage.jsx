import React from "react";
import Navbar from "../components/Navbar";
import Quiz from "../components/Quiz";

const Homepage = () => {
  return (
    <section className="text-6xl text-blue-500 max-w-full bg-white">
      <Navbar />
      <main className="w-full flex flex-col items-center justify-between mx-auto p-4">
        <h1 className="text-center">Reorder the sentence in correct order</h1>
        <Quiz />
      </main>
      <h2>a paragraph</h2>
    </section>
  );
};

export default Homepage;
