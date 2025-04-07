import { Loader2 } from 'lucide-react';

export function Carregando() {
  return (
    <div className="flex items-center gap-2 text-blue-500">
      <Loader2 size={24} className="animate-spin" />
      <span>Buscando perfil...</span>
    </div>
  );
}