import { useState } from "react";
import { Cabecalho } from "./components/Cabecalho";
import { FormularioBusca } from "./components/FormularioBusca";
import { Carregando } from "./components/Carregando";
import { MensagemErro } from "./components/MensagemErro";
import { PerfilUsuario } from "./components/PerfilUsuario";



interface GitHubUser {
  login: string;
  avatar_url: string;
  bio: string;
  name: string;
}
function App() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  

  
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error(' Nenhum perfil foi encontrado com esse nome de usuário.Tente novamente ');
      }
      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError(' Nenhum perfil foi encontrado com esse nome de usuário.Tente novamente');
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center pt-10">
      <Cabecalho />

       <FormularioBusca
        username={username}
        isLoading={isLoading}
        onUsernameChange={setUsername}
        onSubmit={handleSearch}
      />
   {isLoading && <Carregando />}

   {error && !isLoading && <MensagemErro message={error} />}
      
   {user && !isLoading && <PerfilUsuario user={user} />}

    </div>
  );
}

export default App;