import React from "react";
import { Search, Loader2 } from "lucide-react";

interface FormularioBuscaProps {
  username: string;
  isLoading: boolean;
  onUsernameChange: (username: string) => void;
  onSubmit: (e: React.FormEvent) => Promise<void>;
}

export function FormularioBusca({
  username,
  isLoading,
  onUsernameChange,
  onSubmit,
}: FormularioBuscaProps) {
  return (
    <form onSubmit={onSubmit} className="w-full max-w-md mb-8">
      <div className="relative">
        <input
          type="text"
          value={username}
          onChange={(e) => onUsernameChange(e.target.value)}
          placeholder="Digite um usuário do Github"
          className="w-full px-3 py-[20px] rounded-lg bg-white-800 text-black
           placeholder-gray-400 focus:outline-none focus:ring-2
            focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="absolute right-[0.2px] top-1/2 -translate-y-1/2 bg-blue-600 p-[21px]
           rounded-lg hover:bg-blue-700 transition-colors
            disabled:bg-blue-800 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <Loader2 size={20} className="animate-spin" />
          ) : (
            <Search size={20} />
          )}
        </button>
      </div>
    </form>
  );
}
