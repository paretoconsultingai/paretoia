import Link from "next/link";
import Image from "next/image";

export default function Terminos() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#222]">
                <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/logo.jpg"
                            alt="Pareto Logo"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <span className="text-xl font-bold">Pareto Consulting Ai</span>
                    </Link>
                    <Link href="/" className="text-gray-400 hover:text-[#00ff66] transition-colors">
                        ← Volver al inicio
                    </Link>
                </nav>
            </header>

            {/* Content */}
            <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
                <h1 className="text-4xl font-bold mb-4">
                    Términos y <span className="neon-text">Condiciones</span>
                </h1>
                <p className="text-gray-400 mb-8">Última actualización: 30 de enero de 2026</p>

                <div className="prose prose-invert prose-lg max-w-none space-y-8 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-medium [&_h3]:text-gray-200 [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:text-gray-300 [&_p]:leading-relaxed [&_ul]:text-gray-300 [&_ul]:space-y-2 [&_li]:leading-relaxed [&_strong]:text-white [&_a]:text-[#00ff66] [&_a]:no-underline hover:[&_a]:underline">

                    <section>
                        <h2>1. Información General</h2>
                        <p>
                            Los presentes Términos y Condiciones (en adelante, &quot;Términos&quot;) regulan el acceso y uso de la plataforma <strong>Pareto AI</strong> (en adelante, &quot;la Plataforma&quot;), operada por:
                        </p>
                        <ul className="list-none space-y-2 mt-4 p-4 bg-[#111] rounded-lg border border-[#222]">
                            <li><strong>Titular:</strong> Federico Michel Neumann Herrera</li>
                            <li><strong>RFC:</strong> NEHF9209169CA</li>
                            <li><strong>Correo electrónico:</strong> paretoconsultingai@gmail.com</li>
                        </ul>
                        <p className="mt-4">
                            Al acceder, registrarse o utilizar Pareto AI, usted acepta estos Términos en su totalidad. Si no está de acuerdo con alguna disposición, no utilice nuestros servicios.
                        </p>
                    </section>

                    <section>
                        <h2>2. Descripción del Servicio</h2>
                        <p>Pareto AI es una plataforma de automatización de atención al cliente que utiliza inteligencia artificial para:</p>

                        <h3>2.1 Funcionalidades principales</h3>
                        <ul className="list-disc list-inside mt-4">
                            <li><strong>Inbox Omnicanal:</strong> Centralización de conversaciones de WhatsApp, Instagram, Messenger, correo electrónico y otros canales</li>
                            <li><strong>AI Agent:</strong> Chatbot automatizado que responde consultas basándose en su base de conocimiento</li>
                            <li><strong>AI Copilot:</strong> Asistente de IA para agentes humanos que sugiere respuestas</li>
                            <li><strong>AI Training Hub:</strong> Sistema para entrenar la IA con múltiples fuentes de conocimiento</li>
                            <li><strong>Analytics:</strong> Métricas de rendimiento, costos y detección de gaps de conocimiento</li>
                        </ul>

                        <h3>2.2 Integraciones con terceros</h3>
                        <p>La Plataforma se integra con servicios de terceros, incluyendo pero no limitado a:</p>
                        <ul className="list-disc list-inside mt-4">
                            <li>Meta Platforms (WhatsApp Business API, Instagram Messaging API, Messenger Platform)</li>
                            <li>OpenAI (procesamiento de lenguaje natural)</li>
                            <li>Proveedores de hosting y bases de datos</li>
                        </ul>
                        <p className="mt-4">El uso de estas integraciones está sujeto a los términos de dichos terceros.</p>
                    </section>

                    <section>
                        <h2>3. Registro y Cuenta</h2>

                        <h3>3.1 Elegibilidad</h3>
                        <p>Para utilizar Pareto AI, usted debe:</p>
                        <ul className="list-disc list-inside mt-4">
                            <li>Ser mayor de 18 años</li>
                            <li>Tener capacidad legal para celebrar contratos vinculantes</li>
                            <li>Proporcionar información veraz y completa durante el registro</li>
                            <li>No haber sido suspendido o eliminado previamente de la Plataforma</li>
                        </ul>

                        <h3>3.2 Responsabilidad de la cuenta</h3>
                        <p>Usted es responsable de:</p>
                        <ul className="list-disc list-inside mt-4">
                            <li>Mantener la confidencialidad de sus credenciales de acceso</li>
                            <li>Todas las actividades que ocurran bajo su cuenta</li>
                            <li>Notificarnos inmediatamente de cualquier uso no autorizado</li>
                            <li>Mantener actualizada su información de contacto</li>
                        </ul>

                        <h3>3.3 Una cuenta por organización</h3>
                        <p>Cada organización debe tener una única cuenta. Está prohibido crear múltiples cuentas para evadir límites o restricciones.</p>
                    </section>

                    <section>
                        <h2>4. Uso de Inteligencia Artificial</h2>

                        <h3>4.1 Naturaleza del servicio de IA</h3>
                        <p>Al utilizar las funcionalidades de IA de Pareto AI, usted comprende y acepta que:</p>
                        <ul className="list-disc list-inside mt-4">
                            <li><strong>La IA no es infalible:</strong> Los modelos de IA pueden generar respuestas incorrectas, incompletas o inapropiadas</li>
                            <li><strong>Supervisión recomendada:</strong> Se recomienda supervisión humana, especialmente en consultas críticas</li>
                            <li><strong>Sin garantía de precisión:</strong> No garantizamos que las respuestas de la IA sean precisas al 100%</li>
                            <li><strong>Mejora continua:</strong> Los modelos pueden cambiar y actualizarse para mejorar el rendimiento</li>
                        </ul>

                        <h3>4.2 Responsabilidad sobre respuestas de IA</h3>
                        <ul className="list-disc list-inside mt-4">
                            <li>Usted es responsable de revisar y aprobar el contenido que la IA genera en nombre de su negocio</li>
                            <li>Usted es responsable de configurar correctamente las fuentes de conocimiento</li>
                            <li>Usted es responsable de establecer reglas de escalamiento apropiadas</li>
                            <li>Pareto AI no es responsable de respuestas que causen daño a sus clientes o terceros</li>
                        </ul>

                        <h3>4.3 Entrenamiento y datos</h3>
                        <ul className="list-disc list-inside mt-4">
                            <li>La IA se entrena exclusivamente con las fuentes de conocimiento que usted proporciona</li>
                            <li>No utilizamos sus datos para entrenar modelos que beneficien a otros clientes</li>
                            <li>Los datos de entrenamiento permanecen aislados por organización</li>
                        </ul>

                        <h3>4.4 Transparencia con usuarios finales</h3>
                        <p>Usted se compromete a informar a sus usuarios finales que pueden estar interactuando con un sistema automatizado cuando corresponda, conforme a las leyes aplicables.</p>
                    </section>

                    <section>
                        <h2>5. Uso de Integraciones con Meta (WhatsApp, Instagram, Messenger)</h2>

                        <h3>5.1 Cumplimiento obligatorio</h3>
                        <p>Al utilizar las integraciones con Meta, usted acepta cumplir con:</p>
                        <ul className="list-disc list-inside mt-4">
                            <li><a href="https://business.whatsapp.com/policy" target="_blank" rel="noopener noreferrer">Política de WhatsApp Business</a></li>
                            <li><a href="https://developers.facebook.com/terms/" target="_blank" rel="noopener noreferrer">Términos de la Plataforma de Meta</a></li>
                            <li><a href="https://developers.facebook.com/docs/messenger-platform/policy/" target="_blank" rel="noopener noreferrer">Política de la Plataforma de Messenger</a></li>
                            <li><a href="https://developers.facebook.com/docs/instagram-api/overview#policies" target="_blank" rel="noopener noreferrer">Política de la API de Instagram</a></li>
                            <li>Todas las leyes aplicables sobre mensajería y protección de datos</li>
                        </ul>

                        <h3>5.2 Requisitos de opt-in para WhatsApp</h3>
                        <p>Antes de enviar mensajes a través de WhatsApp, usted debe:</p>
                        <ul className="list-disc list-inside mt-4">
                            <li>Obtener consentimiento explícito (opt-in) de los usuarios para recibir mensajes</li>
                            <li>Informar claramente qué tipo de mensajes recibirán y con qué frecuencia</li>
                            <li>Proporcionar una manera fácil de cancelar la suscripción (opt-out)</li>
                            <li>No utilizar opt-ins pre-marcados o consentimientos implícitos</li>
                        </ul>

                        <h3>5.3 Uso prohibido de chatbots</h3>
                        <p>Conforme a las políticas de Meta vigentes, está <strong>PROHIBIDO</strong> utilizar la Plataforma para:</p>
                        <ul className="list-disc list-inside mt-4">
                            <li>Crear chatbots de propósito general tipo &quot;ChatGPT&quot; que no estén relacionados con su negocio</li>
                            <li>Proporcionar asesoramiento médico, legal o financiero automatizado sin supervisión profesional</li>
                            <li>Enviar spam o mensajes no solicitados</li>
                            <li>Suplantar la identidad de personas o entidades</li>
                            <li>Distribuir contenido que viole las políticas de Meta</li>
                        </ul>

                        <h3>5.4 Usos permitidos</h3>
                        <p>Está <strong>PERMITIDO</strong> utilizar la Plataforma para:</p>
                        <ul className="list-disc list-inside mt-4">
                            <li>Soporte al cliente automatizado relacionado con su negocio</li>
                            <li>Notificaciones transaccionales (confirmaciones, actualizaciones de pedidos)</li>
                            <li>Calificación de leads y recopilación de información comercial</li>
                            <li>Reservaciones y programación de citas</li>
                            <li>Responder preguntas frecuentes sobre sus productos o servicios</li>
                        </ul>

                        <h3>5.5 Templates de mensajes</h3>
                        <ul className="list-disc list-inside mt-4">
                            <li>Los mensajes iniciados por su empresa deben utilizar templates aprobados por Meta</li>
                            <li>Usted es responsable de crear templates que cumplan con las políticas</li>
                            <li>Meta puede rechazar o revocar templates que violen sus políticas</li>
                            <li>Los costos de mensajería con Meta corren por su cuenta</li>
                        </ul>

                        <h3>5.6 Calidad de mensajería</h3>
                        <ul className="list-disc list-inside mt-4">
                            <li>Debe mantener una calidad de mensajería aceptable según Meta</li>
                            <li>Altas tasas de reportes o bloqueos pueden resultar en restricciones</li>
                            <li>Pareto AI no es responsable si Meta restringe o cancela su cuenta por violaciones</li>
                        </ul>
                    </section>

                    <section>
                        <h2>6. Uso Aceptable</h2>

                        <h3>6.1 Usted se compromete a:</h3>
                        <ul className="list-disc list-inside mt-4">
                            <li>Utilizar la Plataforma solo para fines lícitos</li>
                            <li>No interferir con el funcionamiento de la Plataforma</li>
                            <li>No intentar acceder a cuentas o datos de otros usuarios</li>
                            <li>No realizar ingeniería inversa del software</li>
                            <li>Respetar los límites de uso de su plan</li>
                            <li>No revender o sublicenciar el servicio sin autorización</li>
                        </ul>

                        <h3>6.2 Contenido prohibido</h3>
                        <p>Está prohibido utilizar la Plataforma para transmitir:</p>
                        <ul className="list-disc list-inside mt-4">
                            <li>Contenido ilegal, difamatorio o fraudulento</li>
                            <li>Spam o mensajes comerciales no solicitados</li>
                            <li>Material que infrinja derechos de propiedad intelectual</li>
                            <li>Contenido que incite al odio, violencia o discriminación</li>
                            <li>Información falsa o engañosa</li>
                            <li>Malware o código malicioso</li>
                            <li>Contenido para adultos o inapropiado para menores</li>
                            <li>Contenido relacionado con actividades ilegales</li>
                        </ul>

                        <h3>6.3 Consecuencias del incumplimiento</h3>
                        <p>El incumplimiento de estas disposiciones puede resultar en:</p>
                        <ul className="list-disc list-inside mt-4">
                            <li>Suspensión temporal del servicio</li>
                            <li>Terminación de la cuenta sin reembolso</li>
                            <li>Acciones legales cuando corresponda</li>
                            <li>Reporte a las autoridades competentes</li>
                        </ul>
                    </section>

                    <section>
                        <h2>7. Planes y Precios</h2>

                        <h3>7.1 Planes disponibles</h3>
                        <p>La Plataforma ofrece diferentes planes con distintos niveles de funcionalidad y límites de uso. Los detalles actualizados de precios están disponibles en nuestro sitio web.</p>

                        <h3>7.2 Facturación</h3>
                        <ul className="list-disc list-inside mt-4">
                            <li>Los planes de suscripción se facturan mensualmente por adelantado</li>
                            <li>Los cargos adicionales por exceso de uso se facturan al final del período</li>
                            <li>Los precios están expresados en la moneda indicada y pueden no incluir impuestos</li>
                            <li>Emitimos facturas fiscales conforme a la legislación mexicana</li>
                        </ul>

                        <h3>7.3 Cambios de precio</h3>
                        <p>Nos reservamos el derecho de modificar los precios con previo aviso de 30 días. Los cambios aplicarán al siguiente período de facturación.</p>

                        <h3>7.4 Costos de terceros</h3>
                        <p>Los costos de mensajería de WhatsApp, Instagram y otros servicios de Meta son adicionales y se facturan según el uso. Consulte la estructura de precios de Meta para detalles.</p>
                    </section>

                    <section>
                        <h2>8. Política de Cancelación y Reembolsos</h2>

                        <h3>8.1 Cancelación por el cliente</h3>
                        <ul className="list-disc list-inside mt-4">
                            <li>Puede cancelar su suscripción en cualquier momento desde su panel de control</li>
                            <li>La cancelación será efectiva al final del período de facturación actual</li>
                            <li>No hay reembolsos por períodos parciales no utilizados</li>
                        </ul>

                        <h3>8.2 Cancelación por Pareto AI</h3>
                        <p>Podemos cancelar su cuenta si:</p>
                        <ul className="list-disc list-inside mt-4">
                            <li>Viola estos Términos o las políticas de Meta</li>
                            <li>No paga las facturas pendientes después de 15 días de vencimiento</li>
                            <li>Utiliza la Plataforma de manera que cause daño a terceros</li>
                            <li>Incurre en actividades fraudulentas</li>
                        </ul>

                        <h3>8.3 Efecto de la cancelación</h3>
                        <p>Al cancelar su cuenta:</p>
                        <ul className="list-disc list-inside mt-4">
                            <li>Perderá acceso a la Plataforma inmediatamente o al final del período pagado</li>
                            <li>Sus datos serán eliminados conforme a nuestra Política de Privacidad</li>
                            <li>Las integraciones con Meta serán desconectadas</li>
                            <li>No tendrá acceso al historial de conversaciones</li>
                        </ul>
                    </section>

                    <section>
                        <h2>9. Propiedad Intelectual</h2>

                        <h3>9.1 Propiedad de Pareto AI</h3>
                        <p>La Plataforma, incluyendo su software, diseño, logos, y documentación, es propiedad de Pareto AI o sus licenciantes. Usted recibe una licencia limitada, no exclusiva, no transferible para usar la Plataforma conforme a estos Términos.</p>

                        <h3>9.2 Su contenido</h3>
                        <p>Usted mantiene la propiedad de:</p>
                        <ul className="list-disc list-inside mt-4">
                            <li>El contenido que sube a la Plataforma (documentos, FAQs, bases de conocimiento)</li>
                            <li>Las conversaciones con sus clientes</li>
                            <li>Sus datos empresariales</li>
                        </ul>

                        <h3>9.3 Licencia sobre su contenido</h3>
                        <p>Al subir contenido a la Plataforma, nos otorga una licencia para:</p>
                        <ul className="list-disc list-inside mt-4">
                            <li>Almacenar y procesar el contenido para proveer el servicio</li>
                            <li>Generar embeddings y entrenar la IA de su organización</li>
                            <li>Crear respuestas basadas en su contenido</li>
                        </ul>
                        <p className="mt-4">Esta licencia termina cuando elimina el contenido o cancela su cuenta.</p>
                    </section>

                    <section>
                        <h2>10. Privacidad y Protección de Datos</h2>

                        <h3>10.1 Política de Privacidad</h3>
                        <p>El tratamiento de datos personales se rige por nuestra <Link href="/privacidad" className="text-[#00ff66]">Política de Privacidad</Link>, que forma parte integral de estos Términos.</p>

                        <h3>10.2 Procesador de datos</h3>
                        <p>En relación con los datos de sus clientes finales, usted actúa como responsable del tratamiento y Pareto AI actúa como encargado del tratamiento. Usted es responsable de:</p>
                        <ul className="list-disc list-inside mt-4">
                            <li>Obtener los consentimientos necesarios de sus clientes</li>
                            <li>Cumplir con las leyes de protección de datos aplicables</li>
                            <li>Informar a sus clientes sobre cómo se procesan sus datos</li>
                        </ul>

                        <h3>10.3 Eliminación de datos</h3>
                        <p>Los usuarios pueden solicitar la eliminación de sus datos conforme a nuestra página de <Link href="/eliminacion-datos" className="text-[#00ff66]">Eliminación de Datos</Link>.</p>
                    </section>

                    <section>
                        <h2>11. Disponibilidad y Soporte</h2>

                        <h3>11.1 Disponibilidad</h3>
                        <ul className="list-disc list-inside mt-4">
                            <li>Nos esforzamos por mantener la Plataforma disponible 24/7</li>
                            <li>No garantizamos disponibilidad ininterrumpida</li>
                            <li>Pueden ocurrir interrupciones por mantenimiento, actualizaciones o causas fuera de nuestro control</li>
                        </ul>

                        <h3>11.2 Soporte técnico</h3>
                        <ul className="list-disc list-inside mt-4">
                            <li>Ofrecemos soporte por correo electrónico en horario laboral (Lunes a Viernes, 9:00-18:00 CST)</li>
                            <li>Los planes empresariales pueden incluir SLAs específicos</li>
                            <li>El tiempo de respuesta depende del plan contratado</li>
                        </ul>
                    </section>

                    <section>
                        <h2>12. Limitación de Responsabilidad</h2>

                        <div className="p-4 bg-[#111] rounded-lg border border-[#333] mt-4">
                            <h3>12.1 Exclusión de garantías</h3>
                            <p className="text-sm">
                                LA PLATAFORMA SE PROPORCIONA &quot;TAL CUAL&quot; Y &quot;SEGÚN DISPONIBILIDAD&quot;. EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY, EXCLUIMOS TODAS LAS GARANTÍAS, EXPRESAS O IMPLÍCITAS, INCLUYENDO GARANTÍAS DE COMERCIABILIDAD, IDONEIDAD PARA UN FIN PARTICULAR Y NO INFRACCIÓN.
                            </p>

                            <h3 className="mt-4">12.2 Limitación de daños</h3>
                            <p className="text-sm">
                                EN NINGÚN CASO PARETO AI SERÁ RESPONSABLE POR: Daños indirectos, incidentales, especiales, consecuentes o punitivos; Pérdida de beneficios, datos, uso o buena voluntad; Interrupciones del negocio.
                            </p>

                            <h3 className="mt-4">12.3 Límite máximo</h3>
                            <p className="text-sm">
                                NUESTRA RESPONSABILIDAD TOTAL MÁXIMA BAJO ESTOS TÉRMINOS ESTARÁ LIMITADA AL MONTO PAGADO POR USTED EN LOS 12 MESES ANTERIORES AL EVENTO QUE DIO ORIGEN AL RECLAMO.
                            </p>
                        </div>

                        <h3>12.4 Exclusiones específicas</h3>
                        <p>No somos responsables por:</p>
                        <ul className="list-disc list-inside mt-4">
                            <li>Acciones tomadas por Meta (suspensiones, restricciones de cuenta)</li>
                            <li>Respuestas incorrectas generadas por la IA</li>
                            <li>Pérdida de mensajes debido a fallas de terceros</li>
                            <li>Incumplimiento de políticas de Meta por parte del cliente</li>
                        </ul>
                    </section>

                    <section>
                        <h2>13. Indemnización</h2>
                        <p>Usted acepta indemnizar y mantener indemne a Pareto AI, sus directivos, empleados y agentes de cualquier reclamo, daño, pérdida o gasto (incluyendo honorarios legales) que surja de:</p>
                        <ul className="list-disc list-inside mt-4">
                            <li>Su uso de la Plataforma</li>
                            <li>Su violación de estos Términos</li>
                            <li>Su violación de las políticas de Meta</li>
                            <li>Su violación de derechos de terceros</li>
                            <li>El contenido que transmita a través de la Plataforma</li>
                        </ul>
                    </section>

                    <section>
                        <h2>14. Modificaciones</h2>

                        <h3>14.1 Cambios a los Términos</h3>
                        <p>Podemos modificar estos Términos en cualquier momento. Los cambios significativos serán notificados con al menos 30 días de anticipación mediante:</p>
                        <ul className="list-disc list-inside mt-4">
                            <li>Correo electrónico a la dirección registrada</li>
                            <li>Aviso en la Plataforma</li>
                            <li>Publicación en nuestro sitio web</li>
                        </ul>

                        <h3>14.2 Aceptación de cambios</h3>
                        <p>El uso continuado de la Plataforma después de la fecha efectiva de los cambios constituye su aceptación. Si no está de acuerdo, debe cancelar su cuenta antes de la fecha efectiva.</p>
                    </section>

                    <section>
                        <h2>15. Disposiciones Generales</h2>

                        <h3>15.1 Ley aplicable</h3>
                        <p>Estos Términos se rigen por las leyes de los Estados Unidos Mexicanos, sin consideración a sus principios de conflicto de leyes.</p>

                        <h3>15.2 Jurisdicción</h3>
                        <p>Para cualquier controversia derivada de estos Términos, las partes se someten a la jurisdicción de los tribunales competentes de la ciudad de Mérida, Yucatán, México, renunciando a cualquier otro fuero que pudiera corresponderles.</p>

                        <h3>15.3 Divisibilidad</h3>
                        <p>Si alguna disposición de estos Términos se considera inválida o inaplicable, las demás disposiciones permanecerán en pleno vigor y efecto.</p>

                        <h3>15.4 No renuncia</h3>
                        <p>El hecho de que no ejerzamos algún derecho bajo estos Términos no constituye una renuncia a dicho derecho.</p>

                        <h3>15.5 Cesión</h3>
                        <p>Usted no puede ceder estos Términos sin nuestro consentimiento previo por escrito. Nosotros podemos ceder estos Términos en caso de fusión, adquisición o venta de activos.</p>

                        <h3>15.6 Acuerdo completo</h3>
                        <p>Estos Términos, junto con la Política de Privacidad y cualquier acuerdo adicional que celebre con nosotros, constituyen el acuerdo completo entre las partes.</p>
                    </section>

                    <section>
                        <h2>16. Contacto</h2>
                        <p>Para cualquier consulta relacionada con estos Términos:</p>
                        <ul className="list-none space-y-2 mt-4 p-4 bg-[#111] rounded-lg border border-[#222]">
                            <li><strong>Correo electrónico:</strong> <a href="mailto:paretoconsultingai@gmail.com">paretoconsultingai@gmail.com</a></li>
                        </ul>
                    </section>

                </div>
            </main>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-[#222]">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-sm text-gray-500">
                        © 2026 Pareto AI. Todos los derechos reservados.
                    </p>
                </div>
            </footer>
        </div>
    );
}
