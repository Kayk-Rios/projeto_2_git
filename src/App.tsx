import { useState } from "react";
import { Cabecalho } from "./components/Cabecalho";
import { FormularioBusca } from "./components/FormularioBusca";



interface GitHubUser {
  login: string;
  avatar_url: string;
  bio: string;
  name: string;
}
function App() {
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  

  
  
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center pt-10">
      <Cabecalho />

       <FormularioBusca
        username={username}
        isLoading={isLoading}
        onUsernameChange={setUsername}
        
      />


    </div>
  );
}

export default App;