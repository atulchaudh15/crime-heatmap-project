export default function AuthCard({ title, children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-semibold text-center mb-6">{title}</h2>
        {children}
      </div>
    </div>
  );
}
