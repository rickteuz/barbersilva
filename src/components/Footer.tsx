import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black py-16 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start">
            <Image 
              src="/images/fortuna/logo-stacked.png" 
              alt="Fortuna Barbearia" 
              width={220} 
              height={220} 
              className="w-auto h-28 mb-6 opacity-90 hover:opacity-100 transition-opacity duration-200"
            />
            <p className="text-gray-500 text-sm">
              Estilo de homens fortes.<br/>
              Uma experiência autoral de cuidado masculino.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Contato</h4>
            <a href="https://wa.me/5531984291818" className="text-gray-400 hover:text-[#7b896f] mb-2 transition-colors">
              (31) 98429-1818
            </a>
            <a href="mailto:contato@fortunabarbearia.com.br" className="text-gray-400 hover:text-[#7b896f] transition-colors">
              contato@fortunabarbearia.com.br
            </a>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Endereço</h4>
            <p className="text-gray-400">
              Rua Rio Congo, 181<br/>
              Novo Riacho · Contagem - MG
            </p>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Fortuna Barbearia. Todos os direitos reservados.
          </p>
          <div className="text-gray-600 text-sm">
            Desenvolvido por{" "}
            <a
              href="https://www.instagram.com/mateusdevv/"
              target="_blank"
              rel="noreferrer"
              className="text-[#7b896f] hover:text-[#fff8f3] transition-colors"
            >
              Mateus
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
