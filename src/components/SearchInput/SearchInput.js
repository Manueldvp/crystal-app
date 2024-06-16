export default function SearchInput({ onSearch }) {
    return (
      <input
        type="text"
        className="border rounded-lg focus:border-pink-secondary-500 p-2"
        placeholder="Buscar..."
        onChange={(e) => onSearch(e.target.value)}
      />
    );
  }