import { useState } from "react";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

type Boutique = {
  id: string;
  name: string;
  cityCountry: string;
  address: string;
  lat: number;
  lng: number;
};

const boutiques: Boutique[] = [
  {
    id: "ny",
    name: "TEEZZZ Fifth Avenue",
    cityCountry: "New York, USA",
    address: "5th Avenue, Manhattan",
    lat: 40.7615,
    lng: -73.9777,
  },
  {
    id: "ldn",
    name: "TEEZZZ Bond Street",
    cityCountry: "London, UK",
    address: "New Bond Street, Mayfair",
    lat: 51.5102,
    lng: -0.1464,
  },
  {
    id: "dubai",
    name: "TEEZZZ Dubai Mall",
    cityCountry: "Dubai, UAE",
    address: "Downtown Dubai",
    lat: 25.1972,
    lng: 55.2744,
  },
  {
    id: "mumbai",
    name: "TEEZZZ Palladium",
    cityCountry: "Mumbai, India",
    address: "Lower Parel, Mumbai",
    lat: 18.9945,
    lng: 72.8258,
  },
];

function getBoutiqueIcon(isActive: boolean) {
  return L.divIcon({
    className: "",
    html: `<span class="boutique-pin ${isActive ? "boutique-pin--active" : ""}"><span class="boutique-pin__dot"></span></span>`,
    iconSize: [30, 42],
    iconAnchor: [15, 42],
    popupAnchor: [0, -34],
  });
}

export function Boutiques() {
  const [selectedId, setSelectedId] = useState<string>(boutiques[0].id);

  return (
    <main className="bg-[#f3f4f6] px-4 py-8 md:px-8">
      <section className="mx-auto max-w-[1400px]">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-3 md:p-4">
          <MapContainer
            center={[25, 10]}
            zoom={2.2}
            scrollWheelZoom={true}
            minZoom={2}
            className="w-full h-[70vh] min-h-[480px] rounded-lg"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {boutiques.map((boutique) => (
              <Marker
                key={boutique.id}
                position={[boutique.lat, boutique.lng]}
                icon={getBoutiqueIcon(boutique.id === selectedId)}
                eventHandlers={{
                  click: () => setSelectedId(boutique.id),
                }}
              >
                <Popup>
                  <p className="font-bold">{boutique.name}</p>
                  <p>{boutique.cityCountry}</p>
                  <p>{boutique.address}</p>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] mt-6">
        <div className="grid gap-4 md:grid-cols-2">
          {boutiques.map((boutique) => {
            const isActive = boutique.id === selectedId;

            return (
              <button
                key={boutique.id}
                onClick={() => setSelectedId(boutique.id)}
                className={`w-full text-left rounded-xl border p-6 transition ${
                  isActive
                    ? "border-sky-400 bg-sky-50"
                    : "border-gray-200 bg-white hover:border-sky-300"
                }`}
              >
                <p className="text-2xl font-black text-gray-800 uppercase tracking-wide">
                  {boutique.name}
                </p>
                <p className="mt-2 text-lg text-gray-600">{boutique.cityCountry}</p>
                <p className="text-lg text-gray-500">{boutique.address}</p>
                <a
                  href={`https://www.google.com/maps?q=${boutique.lat},${boutique.lng}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-3 text-sky-600 font-semibold hover:text-sky-700"
                >
                  Open in Google Maps
                </a>
              </button>
            );
          })}
        </div>
      </section>
    </main>
  );
}
