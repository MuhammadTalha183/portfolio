@import "tailwindcss";

@theme {
  --animate-fade-up: fade-up 0.6s ease both;
  @keyframes fade-up {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: none; }
  }
}

html { scroll-behavior: smooth; }
body { background: #0f172a; color: #f1f5f9; }
