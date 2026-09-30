import Image from 'next/image';

const whatsappUrl = 'https://wa.me/5531984291818?text=Ol%C3%A1%2C%20vim%20do%20site%2C%20gostaria%20de%20agendar%20um%20horario.';

export default function FloatingWhatsapp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar horário pelo WhatsApp"
      className="group fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-5 z-40 h-14 w-14 transition-transform duration-300 ease-out hover:scale-105 focus-visible:scale-105 sm:right-7"
    >
      <span className="animate-whatsapp-pulse pointer-events-none absolute inset-0 z-0 rounded-full bg-[#25d366]/20" aria-hidden="true" />
      <Image
        src="/images/whatsapp-icon.png"
        alt=""
        width={906}
        height={906}
        className="relative z-10 h-full w-full object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.35)] transition-[filter,transform] duration-300 group-hover:brightness-110 group-hover:scale-105"
      />
    </a>
  );
}
