import { Github } from 'lucide-react';

export function Cabecalho() {
  return (
    <div className="flex items-center gap-2 mb-8">
      <Github size={40} />
      <h1 className="text-3xl font-bold">Perfil GitHub</h1>
    </div>
  );
}