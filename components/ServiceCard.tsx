export default function ServiceCard({ title, desc, icon }: { title: string; desc: string; icon?: string }) {
  return (
    <div className="p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800 group w-full">
      {icon && (
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>
      )}
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}