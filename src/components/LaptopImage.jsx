// Drawn laptop picture (inline SVG) so the project works offline with no image files.
export default function LaptopImage({ brand, color = "#0096d6" }) {
  return (
    <svg viewBox="0 0 240 160" className="laptop-img" role="img" aria-label={`${brand} laptop`}>
      <rect width="240" height="160" fill="#f1f5f9" />
      {/* screen */}
      <rect x="52" y="20" width="136" height="88" rx="6" fill="#1f2937" />
      <rect x="58" y="26" width="124" height="76" rx="2" fill={color} />
      <text x="120" y="70" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="700" fontFamily="Arial, sans-serif">
        {brand}
      </text>
      <text x="120" y="88" textAnchor="middle" fill="#ffffffcc" fontSize="9" fontFamily="Arial, sans-serif">
        LAPTOP
      </text>
      {/* base */}
      <path d="M30 112 H210 L224 128 Q224 134 216 134 H24 Q16 134 16 128 Z" fill="#cbd5e1" />
      <rect x="98" y="116" width="44" height="5" rx="2.5" fill="#94a3b8" />
    </svg>
  );
}
