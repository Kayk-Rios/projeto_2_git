import logo from '../img/image 1.png'
export function Cabecalho() {
  return (
    <div className="flex items-center gap-2 mb-8">
      <img src={logo} alt="Logo"  className='w-[40px] h-[40px]'/>

      <h1 className="text-3xl">Perfil <span className='font-bold text-4xl'>GitHub</span></h1>
    </div>
  );
}