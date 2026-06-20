import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black py-16 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start">
            <Image 
              src="/images/logo-barber.png" 
              alt="Barber Silva Logo" 
              width={140} 
              height={140} 
              className="w-auto h-24 mb-6 opacity-80 hover:opacity-100 mix-blend-screen transition-all duration-500"
            />
            <p className="text-gray-500 text-sm">
              Muito além da barba, cabelo e bigode.<br/>
              A experiência premium que você merece.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Contato</h4>
            <a href="#" className="text-gray-400 hover:text-[#d97706] mb-2 transition-colors">
              (31) 3018-4311
            </a>
            <a href="#" className="text-gray-400 hover:text-[#d97706] transition-colors">
              contato@barbersilva.com.br
            </a>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Endereço</h4>
            <p className="text-gray-400">
              Av. Sagrada Família, 1000<br/>
              Belo Horizonte - MG<br/>
              CEP: 30000-000
            </p>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Barber Silva. Todos os direitos reservados.
          </p>
          <div className="text-gray-600 text-sm">
            Feito com excelência para homens exigentes.
          </div>
        </div>
      </div>
    </footer>
  );
}
