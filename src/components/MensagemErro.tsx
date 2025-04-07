interface MensagemErroProps {
  message: string;
}

export function MensagemErro({ message }: MensagemErroProps) {
  return (
    <div className="text-red-500 mb-4">{message}</div>
  );
}