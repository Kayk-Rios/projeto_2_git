interface PerfilUsuarioProps {
  user: {
    login: string;
    avatar_url: string;
    bio: string;
    name: string;
  };
}

export function PerfilUsuario({ user }: PerfilUsuarioProps) {
  return (
    <div className="bg-white rounded-lg p-6 max-w-xl w-full m-3">
      <div className="flex items-start gap-4">
        <img
          src={user.avatar_url}
          alt={user.name}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-bold text-blue-500 hover:underline">
            <a href={`https://github.com/${user.login}`} target="_blank" rel="noopener noreferrer">
              {user.name || user.login}
            </a>
          </h2>
          <p className="text-gray-500 mt-2">{user.bio || 'Sem biografia disponível'}</p>
        </div>
      </div>
    </div>
  );
}