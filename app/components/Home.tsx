import React from "react";

interface Origin {
  name: string;
  url: string;
}

interface Location {
  name: string;
  url: string;
}

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface CharacterResponse {
  results: Character[];
}

// Ana sayfa bileşeni
const Home = async ({
  searchParams,
}: {
  searchParams: { status?: string; gender?: string };
}) => {
  // Sunucu tarafında veri çekme
  const URL = "https://rickandmortyapi.com/api/character";
  const response = await fetch(URL);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data: CharacterResponse = await response.json();
  const characters = data.results;

  // Filtreleme işlemi
  const statusFilter = searchParams.status || ""; // URL'den alınan durum
  const genderFilter = searchParams.gender || ""; // URL'den alınan cinsiyet

  const filteredCharacters = characters.filter((character) => {
    const statusMatch = statusFilter ? character.status === statusFilter : true;
    const genderMatch = genderFilter ? character.gender === genderFilter : true;
    return statusMatch && genderMatch;
  });

  return (
    <div className="container mx-auto p-4 mb-28">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 text-red-600 animate-pulse">
        Rick and Morty Characters
      </h1>

      {/* Filtre Kontrolleri */}
      <form className="flex justify-center mb-6 gap-4" method="GET">
        <select
          name="status"
          className="p-2 rounded border"
          defaultValue={statusFilter}
        >
          <option value="">All Statuses</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>

        <select
          name="gender"
          className="p-2 rounded border"
          defaultValue={genderFilter}
        >
          <option value="">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>

        <button type="submit" className="p-2 bg-red-600 text-white rounded">
          Filter
        </button>
      </form>

      {/* Filtrelenmiş Karakterler */}
      {filteredCharacters.length === 0 ? (
        <p className="text-center text-gray-600">No Filtered Data</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCharacters.map((character) => (
            <li
              key={character.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
            >
              <div className="w-full bg-red-600">
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-48 object-contain rounded-t-xl"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{character.name}</h2>
                <p className="text-gray-600">
                  Status:{" "}
                  <span
                    className={
                      character.status === "Alive"
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    {character.status}
                  </span>
                </p>
                <p className="text-gray-600">Species: {character.species}</p>
                <p className="text-gray-600">Gender: {character.gender}</p>
                <p className="text-gray-600">Origin: {character.origin.name}</p>
                <p className="text-gray-600">
                  Location: {character.location.name}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
