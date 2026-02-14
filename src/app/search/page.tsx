export default function SearchPage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 className="text-5xl font-bold text-pink-500 bg-yellow-200">
  Tailwind Test!
</h1>
      <p className="mt-4 text-gray-600">
        This page will allow users to search for available medicines in nearby pharmacies.
      </p>
      <input 
        type="text" 
        placeholder="Search..." 
        className="border p-2 mt-4 w-full max-w-md rounded"
      />
    </div>
  );
}