interface MensagemErroProps {
  message: string;
}

export function MensagemErro({ message }: MensagemErroProps) {
  return (
    <div className="text-red-500 mb-4  bg-white p-[35px] border rounded-md" >{message}</div>
  );
}