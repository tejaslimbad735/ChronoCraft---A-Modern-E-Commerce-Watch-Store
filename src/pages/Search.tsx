import { useMemo, useState } from "react";
import products from "../assets/products";
import { Card } from "../components/Card";

export function Search() {
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return products;
    return products.filter((item) => item.title.toLowerCase().includes(value));
  }, [query]);

  return (
    <main className="bg-[whitesmoke] py-10 px-4 md:px-8">
      <section className="mx-auto max-w-[1200px]">
        <h1 className="text-3xl md:text-4xl font-black text-gray-800">Search Watches</h1>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by watch name..."
          className="mt-5 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none focus:border-sky-500"
        />
      </section>

      <section className="mx-auto max-w-[1200px] mt-8">
        {filteredProducts.length === 0 ? (
          <p className="text-gray-600 text-lg">No watches found for this search.</p>
        ) : (
          <div className="grid justify-items-center gap-y-8 text-center md:grid-cols-2 xl:grid-cols-4">
            {filteredProducts.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
