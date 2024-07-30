export default function Home() {
  
  return (
    <main className="container mx-auto bg-gradient-to-r from-[#2853b2] to-[#1c71cd] px-4">
      {/* JUMBOTRON */}
      <section className="mt-10 text-center">
        <h1 className="text-4xl font-bold">Food hub</h1>
        <p className="text-xl">A blog about food, experiences and recipes</p>
      </section>
      {/* CARDS */}

      <section className="grid grid-cols-3 gap-8"></section>
    </main>
  );
}
