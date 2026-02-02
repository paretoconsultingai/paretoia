import Link from "next/link";
import Image from "next/image";

export default function Privacidad() {
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
                    Política de <span className="neon-text">Privacidad</span>
                </h1>
                <p className="text-gray-400 mb-8">Última actualización: 30 de enero de 2026</p>

                <div className="prose prose-invert prose-lg max-w-none space-y-8 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-medium [&_h3]:text-gray-200 [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:text-gray-300 [&_p]:leading-relaxed [&_ul]:text-gray-300 [&_ul]:space-y-2 [&_li]:leading-relaxed [&_strong]:text-white [&_a]:text-[#00ff66] [&_a]:no-underline hover:[&_a]:underline">

                    <section>
                        <h2>Identidad del Responsable</h2>
                        <p><strong>Pareto AI</strong> es una marca comercial operada por:</p>
                        <ul className="list-none space-y-2 mt-4 p-4 bg-[#111] rounded-lg border border-[#222]">
                            <li><strong>Titular:</strong> Federico Michel Neumann Herrera</li>
                            <li><strong>RFC:</strong> NEHF9209169CA</li>
                            <li><strong>Correo electrónico:</strong> paretoconsultingai@gmail.com</li>
                        </ul>
                        <p className="mt-4">
                            En cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento, así como las políticas de privacidad de Meta Platforms, Inc., ponemos a su disposición el presente Aviso de Privacidad.
                        </p>
                    </section>

                    <section>
                        <h2>1. Datos Personales que Recopilamos</h2>

                        <h3>1.1 Datos que usted nos proporciona directamente</h3>
                        <ul className="list-disc list-inside mt-4">
                            <li><strong>Datos de identificación:</strong> Nombre completo, correo electrónico, número telefónico</li>
                            <li><strong>Datos de la empresa:</strong> Nombre comercial, giro, sitio web</li>
                            <li><strong>Datos de cuenta:</strong> Credenciales de acceso, preferencias de configuración</li>
                            <li><strong>Datos de facturación:</strong> Información fiscal para emisión de comprobantes</li>
                        </ul>

                        <h3>1.2 Datos recopilados automáticamente</h3>
                        <ul className="list-disc list-inside mt-4">
                            <li><strong>Datos de uso:</strong> Interacciones con la plataforma, funciones utilizadas, frecuencia de uso</li>
                            <li><strong>Datos técnicos:</strong> Dirección IP, tipo de navegador, sistema operativo, identificadores de dispositivo</li>
                            <li><strong>Cookies y tecnologías similares:</strong> Para mejorar su experiencia y analizar el tráfico</li>
                        </ul>

                        <h3>1.3 Datos obtenidos a través de integraciones con Meta (Facebook, Instagram, WhatsApp)</h3>
                        <p>Cuando usted conecta su cuenta de Pareto AI con servicios de Meta, podemos recibir:</p>
                        <ul className="list-disc list-inside mt-4">
                            <li><strong>Identificadores de usuario:</strong> ID de usuario de Facebook/Instagram, ID de página, ID de cuenta de WhatsApp Business</li>
                            <li><strong>Información de perfil:</strong> Nombre, foto de perfil (cuando el usuario lo autoriza)</li>
                            <li><strong>Mensajes y conversaciones:</strong> Contenido de mensajes recibidos a través de WhatsApp, Instagram Direct y Messenger para procesamiento por nuestros chatbots de IA</li>
                            <li><strong>Datos de interacción:</strong> Historial de conversaciones, timestamps, estado de mensajes</li>
                            <li><strong>Información de la página/cuenta empresarial:</strong> Nombre de la página, categoría, información de contacto público</li>
                        </ul>
                        <div className="p-4 bg-[#111] rounded-lg border border-[#00ff66]/30 mt-4">
                            <p className="text-[#00ff66]"><strong>Importante:</strong> Pareto AI actúa como procesador de datos en nombre de su empresa. Usted es el responsable del tratamiento de los datos de sus clientes finales.</p>
                        </div>
                    </section>

                    <section>
                        <h2>2. Finalidades del Tratamiento</h2>

                        <h3>2.1 Finalidades primarias (necesarias para el servicio)</h3>
                        <ul className="list-disc list-inside mt-4">
                            <li>Proveer los servicios de automatización y chatbots de inteligencia artificial</li>
                            <li>Procesar y responder mensajes a través de WhatsApp, Instagram y Messenger</li>
                            <li>Entrenar y mejorar los modelos de IA específicos para su negocio</li>
                            <li>Administrar su cuenta y procesar pagos</li>
                            <li>Brindar soporte técnico y atención al cliente</li>
                            <li>Cumplir con obligaciones legales y fiscales</li>
                        </ul>

                        <h3>2.2 Finalidades secundarias (opcionales)</h3>
                        <ul className="list-disc list-inside mt-4">
                            <li>Enviar comunicaciones sobre actualizaciones del servicio</li>
                            <li>Realizar análisis estadísticos y de uso agregado</li>
                            <li>Enviar información sobre nuevos productos o funcionalidades</li>
                            <li>Personalizar su experiencia en la plataforma</li>
                        </ul>
                        <p className="mt-4 text-sm">
                            Si no desea que sus datos sean tratados para finalidades secundarias, puede manifestarlo enviando un correo a paretoconsultingai@gmail.com con el asunto &quot;Finalidades secundarias - Opt out&quot;.
                        </p>
                    </section>

                    <section>
                        <h2>3. Uso de Inteligencia Artificial</h2>

                        <h3>3.1 Procesamiento de datos con IA</h3>
                        <p>Pareto AI utiliza modelos de inteligencia artificial para:</p>
                        <ul className="list-disc list-inside mt-4">
                            <li>Analizar y comprender mensajes de sus clientes</li>
                            <li>Generar respuestas automatizadas basadas en su base de conocimiento</li>
                            <li>Clasificar intenciones y sentimientos en las conversaciones</li>
                            <li>Sugerir respuestas a sus agentes humanos</li>
                            <li>Detectar gaps de conocimiento en su documentación</li>
                        </ul>

                        <h3>3.2 Transparencia en IA</h3>
                        <ul className="list-disc list-inside mt-4">
                            <li>Los modelos de IA utilizan proveedores como OpenAI (GPT-4) y pueden cambiar para mejorar el servicio</li>
                            <li>Las conversaciones procesadas por IA pueden ser revisadas para mejorar la precisión</li>
                            <li>Usted mantiene el control sobre las fuentes de conocimiento que alimentan la IA</li>
                            <li>Sus clientes finales tienen derecho a saber que están interactuando con un sistema automatizado</li>
                        </ul>

                        <h3>3.3 Limitaciones</h3>
                        <ul className="list-disc list-inside mt-4">
                            <li>La IA puede generar respuestas incorrectas; recomendamos supervisión humana</li>
                            <li>No utilizamos datos de un cliente para entrenar modelos que beneficien a otros clientes</li>
                            <li>Los datos de entrenamiento se mantienen aislados por organización</li>
                        </ul>
                    </section>

                    <section>
                        <h2>4. Compartición de Datos con Terceros</h2>

                        <h3>4.1 Proveedores de servicios esenciales</h3>
                        <p>Compartimos datos con terceros que nos ayudan a operar la plataforma:</p>
                        <div className="overflow-x-auto mt-4">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-[#333]">
                                        <th className="text-left py-3 px-4 text-gray-400">Proveedor</th>
                                        <th className="text-left py-3 px-4 text-gray-400">Propósito</th>
                                        <th className="text-left py-3 px-4 text-gray-400">Datos compartidos</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-[#222]">
                                        <td className="py-3 px-4"><strong>Meta Platforms</strong></td>
                                        <td className="py-3 px-4">Integración WhatsApp/Instagram/Messenger</td>
                                        <td className="py-3 px-4">Mensajes, IDs de usuario</td>
                                    </tr>
                                    <tr className="border-b border-[#222]">
                                        <td className="py-3 px-4"><strong>OpenAI</strong></td>
                                        <td className="py-3 px-4">Procesamiento de lenguaje natural</td>
                                        <td className="py-3 px-4">Texto de conversaciones (anonimizado)</td>
                                    </tr>
                                    <tr className="border-b border-[#222]">
                                        <td className="py-3 px-4"><strong>Supabase</strong></td>
                                        <td className="py-3 px-4">Almacenamiento de datos</td>
                                        <td className="py-3 px-4">Todos los datos de la plataforma</td>
                                    </tr>
                                    <tr className="border-b border-[#222]">
                                        <td className="py-3 px-4"><strong>Hetzner</strong></td>
                                        <td className="py-3 px-4">Hosting de la aplicación</td>
                                        <td className="py-3 px-4">Datos técnicos de conexión</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4"><strong>Stripe</strong></td>
                                        <td className="py-3 px-4">Procesamiento de pagos</td>
                                        <td className="py-3 px-4">Datos de facturación</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>4.2 Transferencias internacionales</h3>
                        <p>Sus datos pueden ser transferidos y almacenados en servidores ubicados fuera de México, incluyendo Estados Unidos. Al utilizar nuestros servicios, usted consiente esta transferencia, la cual se realiza con medidas de seguridad apropiadas.</p>

                        <h3>4.3 No vendemos sus datos</h3>
                        <p>Pareto AI no vende, alquila ni comercializa sus datos personales a terceros para fines de marketing.</p>
                    </section>

                    <section>
                        <h2>5. Integración con Meta (WhatsApp, Instagram, Messenger)</h2>

                        <h3>5.1 Datos que recibimos de Meta</h3>
                        <p>Cuando usted conecta sus cuentas de Meta con Pareto AI mediante el proceso de Embedded Signup:</p>
                        <ul className="list-disc list-inside mt-4">
                            <li>Recibimos tokens de acceso para enviar y recibir mensajes en su nombre</li>
                            <li>Accedemos a información de su WhatsApp Business Account (WABA)</li>
                            <li>Procesamos mensajes entrantes y salientes a través de las APIs de Meta</li>
                        </ul>

                        <h3>5.2 Uso de datos de Meta</h3>
                        <p>Los datos obtenidos de Meta se utilizan exclusivamente para:</p>
                        <ul className="list-disc list-inside mt-4">
                            <li>Procesar conversaciones con sus clientes</li>
                            <li>Entrenar la IA específica de su negocio</li>
                            <li>Generar análisis y métricas de rendimiento</li>
                            <li>Cumplir con las políticas de la Plataforma de Meta</li>
                        </ul>

                        <h3>5.3 Cumplimiento con políticas de Meta</h3>
                        <p>Pareto AI cumple con:</p>
                        <ul className="list-disc list-inside mt-4">
                            <li><a href="https://developers.facebook.com/terms/" target="_blank" rel="noopener noreferrer">Términos de la Plataforma de Meta</a></li>
                            <li><a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer">Política de Datos de Meta</a></li>
                            <li><a href="https://business.whatsapp.com/policy" target="_blank" rel="noopener noreferrer">Política de WhatsApp Business</a></li>
                            <li>Requisitos de eliminación de datos de usuarios</li>
                        </ul>

                        <h3>5.4 Retención de datos de Meta</h3>
                        <ul className="list-disc list-inside mt-4">
                            <li>Los mensajes y datos de conversación se retienen mientras su cuenta esté activa</li>
                            <li>Al desconectar la integración o eliminar su cuenta, los datos de Meta se eliminan en un plazo de 30 días</li>
                            <li>Puede solicitar la eliminación inmediata contactándonos</li>
                        </ul>
                    </section>

                    <section>
                        <h2>6. Seguridad de los Datos</h2>
                        <p>Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger sus datos:</p>
                        <ul className="list-disc list-inside mt-4">
                            <li><strong>Cifrado en tránsito:</strong> Todas las comunicaciones utilizan TLS/SSL</li>
                            <li><strong>Cifrado en reposo:</strong> Los datos almacenados están cifrados</li>
                            <li><strong>Control de acceso:</strong> Acceso restringido basado en roles</li>
                            <li><strong>Monitoreo:</strong> Detección de actividad sospechosa 24/7</li>
                            <li><strong>Backups:</strong> Respaldos regulares con cifrado</li>
                            <li><strong>Cumplimiento:</strong> Infraestructura que cumple con estándares de la industria</li>
                        </ul>
                    </section>

                    <section>
                        <h2>7. Derechos ARCO</h2>
                        <p>Conforme a la LFPDPPP, usted tiene derecho a:</p>
                        <ul className="list-disc list-inside mt-4">
                            <li><strong>Acceso:</strong> Conocer qué datos personales tenemos sobre usted</li>
                            <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos</li>
                            <li><strong>Cancelación:</strong> Solicitar la eliminación de sus datos</li>
                            <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos para ciertas finalidades</li>
                        </ul>

                        <h3>Cómo ejercer sus derechos</h3>
                        <p>Envíe su solicitud a <strong>paretoconsultingai@gmail.com</strong> incluyendo:</p>
                        <ol className="list-decimal list-inside mt-4">
                            <li>Nombre completo y correo electrónico asociado a su cuenta</li>
                            <li>Descripción clara del derecho que desea ejercer</li>
                            <li>Documentos que acrediten su identidad (copia de identificación oficial)</li>
                        </ol>
                        <p className="mt-4"><strong>Plazo de respuesta:</strong> 20 días hábiles para comunicar la determinación; 15 días hábiles adicionales para hacer efectivo el derecho.</p>
                    </section>

                    <section>
                        <h2>8. Eliminación de Datos de Meta</h2>
                        <p>Si usted es un usuario final que ha interactuado con un negocio que utiliza Pareto AI a través de WhatsApp, Instagram o Messenger, puede solicitar la eliminación de sus datos.</p>
                        <div className="p-4 bg-[#111] rounded-lg border border-[#00ff66]/30 mt-4">
                            <p><strong>Consulte nuestra página específica:</strong> <Link href="/eliminacion-datos" className="text-[#00ff66]">Eliminación de Datos</Link></p>
                        </div>
                        <p className="mt-4">O contacte directamente a: <strong>paretoconsultingai@gmail.com</strong> con el asunto &quot;Solicitud de eliminación de datos - Meta&quot;</p>
                    </section>

                    <section>
                        <h2>9. Cookies</h2>

                        <h3>9.1 Tipos de cookies que utilizamos</h3>
                        <ul className="list-disc list-inside mt-4">
                            <li><strong>Esenciales:</strong> Necesarias para el funcionamiento de la plataforma</li>
                            <li><strong>Analíticas:</strong> Para entender cómo utiliza nuestro servicio</li>
                            <li><strong>Funcionales:</strong> Para recordar sus preferencias</li>
                        </ul>

                        <h3>9.2 Control de cookies</h3>
                        <p>Puede configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del servicio.</p>
                    </section>

                    <section>
                        <h2>10. Retención de Datos</h2>
                        <div className="overflow-x-auto mt-4">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-[#333]">
                                        <th className="text-left py-3 px-4 text-gray-400">Tipo de dato</th>
                                        <th className="text-left py-3 px-4 text-gray-400">Período de retención</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-[#222]">
                                        <td className="py-3 px-4">Datos de cuenta</td>
                                        <td className="py-3 px-4">Mientras la cuenta esté activa + 5 años</td>
                                    </tr>
                                    <tr className="border-b border-[#222]">
                                        <td className="py-3 px-4">Conversaciones</td>
                                        <td className="py-3 px-4">2 años o según configuración del cliente</td>
                                    </tr>
                                    <tr className="border-b border-[#222]">
                                        <td className="py-3 px-4">Datos de facturación</td>
                                        <td className="py-3 px-4">5 años (obligación fiscal)</td>
                                    </tr>
                                    <tr className="border-b border-[#222]">
                                        <td className="py-3 px-4">Logs técnicos</td>
                                        <td className="py-3 px-4">90 días</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4">Datos de Meta</td>
                                        <td className="py-3 px-4">Hasta eliminación de cuenta o solicitud</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section>
                        <h2>11. Menores de Edad</h2>
                        <p>Pareto AI no está dirigido a menores de 18 años. No recopilamos intencionalmente datos de menores. Si detectamos que hemos recopilado datos de un menor, los eliminaremos inmediatamente.</p>
                    </section>

                    <section>
                        <h2>12. Cambios a esta Política</h2>
                        <p>Podemos actualizar esta política periódicamente. Los cambios significativos serán notificados mediante:</p>
                        <ul className="list-disc list-inside mt-4">
                            <li>Aviso en la plataforma</li>
                            <li>Correo electrónico a la dirección registrada</li>
                            <li>Publicación en esta página con fecha actualizada</li>
                        </ul>
                        <p className="mt-4">El uso continuado de nuestros servicios después de los cambios constituye su aceptación de la política actualizada.</p>
                    </section>

                    <section>
                        <h2>13. Autoridad de Protección de Datos</h2>
                        <p>Si considera que sus derechos han sido vulnerados, puede presentar una queja ante el Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI):</p>
                        <ul className="list-none space-y-2 mt-4 p-4 bg-[#111] rounded-lg border border-[#222]">
                            <li><strong>Sitio web:</strong> <a href="https://www.inai.org.mx" target="_blank" rel="noopener noreferrer">www.inai.org.mx</a></li>
                            <li><strong>Teléfono:</strong> 800 835 4324</li>
                        </ul>
                    </section>

                    <section>
                        <h2>14. Contacto</h2>
                        <p>Para cualquier consulta relacionada con esta Política de Privacidad:</p>
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
