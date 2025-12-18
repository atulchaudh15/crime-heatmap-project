export default function AuthInput({ label, type, value, setValue }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-600 mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
