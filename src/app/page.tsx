import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#222]">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Pareto Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold">Pareto Consulting Ai</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-400 hover:text-[#00ff66] transition-colors">
              Características
            </a>
            <a href="#pricing" className="text-gray-400 hover:text-[#00ff66] transition-colors">
              Precios
            </a>
            <a href="#faq" className="text-gray-400 hover:text-[#00ff66] transition-colors">
              FAQ
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Iniciar Sesión
            </a>
            <a href="#pricing" className="btn-primary text-sm">
              Comenzar
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 gradient-radial">
        <div className="max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#333] bg-[#111] mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse"></span>
            <span className="text-sm text-gray-400">Automatización Inteligente</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            El <span className="neon-text">20%</span> de esfuerzo.
            <br />
            El <span className="neon-text">80%</span> de resultados.
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10">
            Chatbots multicanal que automatizan tu atención al cliente.
            <br />
            WhatsApp, Instagram y más — todo en un solo lugar.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#pricing" className="btn-primary text-lg px-8 py-4">
              Comenzar Gratis
            </a>
            <a href="#features" className="btn-secondary text-lg px-8 py-4">
              Ver Demo
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            <div className="text-center">
              <div className="text-4xl font-bold neon-text">5x</div>
              <div className="text-gray-500 text-sm mt-1">Más rápido</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold neon-text">24/7</div>
              <div className="text-gray-500 text-sm mt-1">Disponible</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold neon-text">80%</div>
              <div className="text-gray-500 text-sm mt-1">Menos carga</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-[#333] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#00ff66] rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Integrations Ticker */}
      <section className="py-12 border-y border-[#222] bg-[#0a0a0a] overflow-hidden">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 px-8">
              <span className="text-2xl">💬 WhatsApp</span>
              <span className="text-2xl">📸 Instagram</span>
              <span className="text-2xl">💼 Facebook</span>
              <span className="text-2xl">🔗 n8n</span>
              <span className="text-2xl">🤖 AI Chatbot</span>
              <span className="text-2xl">📊 Analytics</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              El principio de <span className="neon-text">Pareto</span> aplicado
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Enfócate en lo que importa. Automatiza el resto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="card p-8">
              <div className="w-14 h-14 rounded-xl bg-[#00ff66]/10 flex items-center justify-center mb-6">
                <span className="text-3xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">WhatsApp Business</h3>
              <p className="text-gray-400">
                Conecta tu WhatsApp Business y responde automáticamente.
                Sin perder clientes por demoras.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card p-8">
              <div className="w-14 h-14 rounded-xl bg-[#00ff66]/10 flex items-center justify-center mb-6">
                <span className="text-3xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Multicanal</h3>
              <p className="text-gray-400">
                WhatsApp, Instagram, Facebook Messenger —
                todos tus canales en una sola bandeja.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card p-8">
              <div className="w-14 h-14 rounded-xl bg-[#00ff66]/10 flex items-center justify-center mb-6">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Chatbot Inteligente</h3>
              <p className="text-gray-400">
                IA que entiende a tus clientes y responde
                como lo harías tú, 24/7.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="card p-8">
              <div className="w-14 h-14 rounded-xl bg-[#00ff66]/10 flex items-center justify-center mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Automatización n8n</h3>
              <p className="text-gray-400">
                Flujos de trabajo automatizados.
                Integra con tu CRM, calendario, y más.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="card p-8">
              <div className="w-14 h-14 rounded-xl bg-[#00ff66]/10 flex items-center justify-center mb-6">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Métricas en Tiempo Real</h3>
              <p className="text-gray-400">
                Dashboards con las métricas que importan.
                Toma decisiones basadas en datos.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="card p-8">
              <div className="w-14 h-14 rounded-xl bg-[#00ff66]/10 flex items-center justify-center mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Listo en Minutos</h3>
              <p className="text-gray-400">
                Setup rápido y sin código.
                Conecta tus cuentas y comienza hoy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Planes simples, resultados <span className="neon-text">extraordinarios</span>
            </h2>
            <p className="text-xl text-gray-400">
              Sin sorpresas. Sin contratos. Cancela cuando quieras.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Plan Básico */}
            <div className="card p-8">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Básico</h3>
                <p className="text-gray-400 text-sm">Para emprendedores y negocios pequeños</p>
              </div>
              <div className="mb-6">
                <span className="text-5xl font-bold">$29</span>
                <span className="text-gray-400">/mes</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-[#00ff66]">✓</span>
                  <span>1 número de WhatsApp</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#00ff66]">✓</span>
                  <span>Chatbot básico</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#00ff66]">✓</span>
                  <span>1,000 mensajes/mes</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#00ff66]">✓</span>
                  <span>Soporte por email</span>
                </li>
              </ul>
              <button className="btn-secondary w-full">
                Comenzar
              </button>
            </div>

            {/* Plan Crecimiento - Destacado */}
            <div className="card-highlight p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#00ff66] text-black text-xs font-bold px-4 py-1 rounded-full">
                  MÁS POPULAR
                </span>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Crecimiento</h3>
                <p className="text-gray-400 text-sm">Para negocios en expansión</p>
              </div>
              <div className="mb-6">
                <span className="text-5xl font-bold neon-text">$79</span>
                <span className="text-gray-400">/mes</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-[#00ff66]">✓</span>
                  <span>WhatsApp + Instagram</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#00ff66]">✓</span>
                  <span>Chatbot con IA</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#00ff66]">✓</span>
                  <span>10,000 mensajes/mes</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#00ff66]">✓</span>
                  <span>Métricas básicas</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#00ff66]">✓</span>
                  <span>Soporte prioritario</span>
                </li>
              </ul>
              <button className="btn-primary w-full">
                Comenzar
              </button>
            </div>

            {/* Plan Escala */}
            <div className="card p-8">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Escala</h3>
                <p className="text-gray-400 text-sm">Para empresas que quieren escalar</p>
              </div>
              <div className="mb-6">
                <span className="text-5xl font-bold">$199</span>
                <span className="text-gray-400">/mes</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-[#00ff66]">✓</span>
                  <span>Todos los canales</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#00ff66]">✓</span>
                  <span>IA avanzada + n8n</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#00ff66]">✓</span>
                  <span>Mensajes ilimitados</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#00ff66]">✓</span>
                  <span>Métricas avanzadas</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#00ff66]">✓</span>
                  <span>Soporte dedicado 24/7</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#00ff66]">✓</span>
                  <span>Onboarding personalizado</span>
                </li>
              </ul>
              <button className="btn-secondary w-full">
                Contactar Ventas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Preguntas <span className="neon-text">Frecuentes</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "¿Qué es el principio de Pareto?",
                a: "El principio de Pareto (regla 80/20) establece que el 80% de los resultados provienen del 20% de los esfuerzos. Aplicamos esto a tu negocio: automatizamos las tareas repetitivas para que te enfoques en lo que realmente importa."
              },
              {
                q: "¿Cómo funciona la integración con WhatsApp?",
                a: "Conectamos tu WhatsApp Business API para que recibas y respondas mensajes automáticamente. El setup toma menos de 10 minutos y no necesitas conocimientos técnicos."
              },
              {
                q: "¿Puedo cancelar en cualquier momento?",
                a: "Sí, sin contratos ni penalizaciones. Cancela cuando quieras desde tu panel de control."
              },
              {
                q: "¿Qué pasa si supero el límite de mensajes?",
                a: "Te notificaremos antes de llegar al límite. Puedes subir de plan o comprar mensajes adicionales según necesites."
              },
              {
                q: "¿Incluye soporte en español?",
                a: "¡Claro! Todo nuestro equipo habla español y estamos en tu zona horaria."
              }
            ].map((faq, i) => (
              <details key={i} className="card p-6 group">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-semibold text-lg">{faq.q}</span>
                  <span className="text-[#00ff66] text-2xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-gray-400 mt-4 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[#0a0a0a] border-t border-[#222]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para el <span className="neon-text">80/20</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Únete a las empresas que ya optimizaron su atención al cliente.
          </p>
          <a href="#pricing" className="btn-primary text-lg px-10 py-5 inline-block">
            Comenzar Gratis
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#222]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-6 text-center">
            {/* Copyright */}
            <p className="text-sm text-gray-400">
              Copyright © 2026 Pareto AI | Todos los derechos reservados
            </p>

            {/* Links */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-400">
              <a href="/terminos" className="hover:text-white transition-colors">Términos y Condiciones</a>
              <span className="text-gray-600">|</span>
              <a href="/privacidad" className="hover:text-white transition-colors">Política de Privacidad</a>
              <span className="text-gray-600">|</span>
              <a href="/eliminacion-datos" className="hover:text-white transition-colors">Eliminación de Datos</a>
              <span className="text-gray-600">|</span>
              <a href="mailto:paretoconsultingai@gmail.com" className="hover:text-white transition-colors">Contacto</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
