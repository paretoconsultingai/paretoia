import Link from "next/link";
import Image from "next/image";

export default function EliminacionDatos() {
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
                    Eliminación de <span className="neon-text">Datos</span>
                </h1>
                <p className="text-gray-400 mb-8">Última actualización: 30 de enero de 2026</p>

                <div className="prose prose-invert prose-lg max-w-none space-y-8 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-medium [&_h3]:text-gray-200 [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:text-gray-300 [&_p]:leading-relaxed [&_ul]:text-gray-300 [&_ul]:space-y-2 [&_li]:leading-relaxed [&_strong]:text-white [&_a]:text-[#00ff66] [&_a]:no-underline hover:[&_a]:underline">

                    <section>
                        <h2>Información General</h2>
                        <p>
                            En <strong>Pareto AI</strong> respetamos tu privacidad y te damos control sobre los datos que recopilamos a través de Meta (Facebook, Instagram y WhatsApp).
                        </p>
                        <p>
                            Esta página cumple con los requisitos de Meta para aplicaciones que acceden a datos de usuarios y te proporciona instrucciones claras sobre cómo solicitar la eliminación de tus datos.
                        </p>
                    </section>

                    <section>
                        <h2>¿Quién puede solicitar la eliminación de datos?</h2>

                        <h3>Usuarios finales</h3>
                        <p>
                            Si has interactuado con un negocio a través de WhatsApp, Instagram o Messenger que utiliza Pareto AI como plataforma de atención al cliente, puedes solicitar la eliminación de tus datos de conversación.
                        </p>

                        <h3>Clientes de Pareto AI</h3>
                        <p>
                            Si tienes una cuenta en Pareto AI y deseas eliminar tu cuenta y todos los datos asociados.
                        </p>
                    </section>

                    <section>
                        <h2>Cómo solicitar la eliminación de tus datos</h2>

                        <div className="p-6 bg-[#111] rounded-lg border border-[#00ff66]/30 mt-4">
                            <h3 className="text-[#00ff66] mt-0">Opción 1: Solicitud por correo electrónico</h3>
                            <ol className="list-decimal list-inside mt-4">
                                <li>Envía un correo a <strong>paretoconsultingai@gmail.com</strong></li>
                                <li>Usa el asunto: <strong>&quot;Solicitud de eliminación de datos - Meta&quot;</strong></li>
                                <li>Incluye en tu mensaje:
                                    <ul className="list-disc list-inside ml-6 mt-2">
                                        <li>Tu nombre completo</li>
                                        <li>Tu correo electrónico (si tienes cuenta en Pareto AI)</li>
                                        <li>Tu ID de usuario de Facebook/Instagram (opcional, pero acelera el proceso)</li>
                                        <li>Una breve descripción de los datos que deseas eliminar</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>

                        <h3>Opción 2: Desde tu configuración de Facebook</h3>
                        <ol className="list-decimal list-inside mt-4">
                            <li>Ve a tu cuenta de Facebook</li>
                            <li>Navega a <strong>Configuración y privacidad</strong> → <strong>Configuración</strong></li>
                            <li>Selecciona <strong>Apps y sitios web</strong></li>
                            <li>Busca la aplicación asociada al negocio con el que interactuaste</li>
                            <li>Haz clic en <strong>Eliminar</strong> para revocar el acceso y solicitar la eliminación</li>
                        </ol>

                        <h3>Opción 3: Desde tu configuración de Instagram</h3>
                        <ol className="list-decimal list-inside mt-4">
                            <li>Ve a tu cuenta de Instagram</li>
                            <li>Navega a <strong>Configuración</strong> → <strong>Seguridad</strong></li>
                            <li>Selecciona <strong>Apps y sitios web</strong></li>
                            <li>Busca y elimina la aplicación correspondiente</li>
                        </ol>
                    </section>

                    <section>
                        <h2>Datos que eliminamos</h2>
                        <p>Cuando procesamos tu solicitud de eliminación, eliminamos:</p>
                        <div className="overflow-x-auto mt-4">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-[#333]">
                                        <th className="text-left py-3 px-4 text-gray-400">Tipo de dato</th>
                                        <th className="text-left py-3 px-4 text-gray-400">Descripción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-[#222]">
                                        <td className="py-3 px-4"><strong>Identificadores</strong></td>
                                        <td className="py-3 px-4">Tu ID de usuario de Facebook/Instagram/WhatsApp asociado a conversaciones</td>
                                    </tr>
                                    <tr className="border-b border-[#222]">
                                        <td className="py-3 px-4"><strong>Mensajes</strong></td>
                                        <td className="py-3 px-4">Historial de conversaciones procesadas a través de nuestra plataforma</td>
                                    </tr>
                                    <tr className="border-b border-[#222]">
                                        <td className="py-3 px-4"><strong>Datos de perfil</strong></td>
                                        <td className="py-3 px-4">Nombre y foto de perfil obtenidos de Meta (si aplica)</td>
                                    </tr>
                                    <tr className="border-b border-[#222]">
                                        <td className="py-3 px-4"><strong>Metadatos</strong></td>
                                        <td className="py-3 px-4">Timestamps, estado de mensajes y datos de interacción</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4"><strong>Tokens de acceso</strong></td>
                                        <td className="py-3 px-4">Cualquier token de autenticación almacenado</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section>
                        <h2>Datos que NO podemos eliminar</h2>
                        <p>Pareto AI solo puede eliminar los datos almacenados en nuestra plataforma. <strong>No podemos eliminar:</strong></p>
                        <ul className="list-disc list-inside mt-4">
                            <li>Datos almacenados directamente por Meta (Facebook, Instagram, WhatsApp)</li>
                            <li>Datos almacenados por el negocio con el que interactuaste fuera de nuestra plataforma</li>
                            <li>Conversaciones que hayas tenido directamente en WhatsApp/Instagram (estas se almacenan en los servidores de Meta)</li>
                        </ul>
                        <p className="mt-4">Para eliminar datos almacenados por Meta, visita:</p>
                        <ul className="list-disc list-inside mt-2">
                            <li><a href="https://www.facebook.com/privacy/center/" target="_blank" rel="noopener noreferrer">Centro de privacidad de Facebook</a></li>
                            <li><a href="https://help.instagram.com/519522125107875" target="_blank" rel="noopener noreferrer">Centro de privacidad de Instagram</a></li>
                            <li><a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Privacidad de WhatsApp</a></li>
                        </ul>
                    </section>

                    <section>
                        <h2>Plazo de procesamiento</h2>
                        <div className="overflow-x-auto mt-4">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-[#333]">
                                        <th className="text-left py-3 px-4 text-gray-400">Tipo de solicitud</th>
                                        <th className="text-left py-3 px-4 text-gray-400">Tiempo estimado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-[#222]">
                                        <td className="py-3 px-4">Verificación de identidad</td>
                                        <td className="py-3 px-4">1-2 días hábiles</td>
                                    </tr>
                                    <tr className="border-b border-[#222]">
                                        <td className="py-3 px-4">Eliminación de datos</td>
                                        <td className="py-3 px-4">7 días hábiles</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4">Confirmación por correo</td>
                                        <td className="py-3 px-4">Inmediata tras completar</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-4"><strong>Plazo máximo total:</strong> 10 días hábiles desde la recepción de una solicitud válida.</p>
                    </section>

                    <section>
                        <h2>Confirmación de eliminación</h2>
                        <p>Una vez procesada tu solicitud, recibirás:</p>
                        <ol className="list-decimal list-inside mt-4">
                            <li><strong>Correo de confirmación</strong> indicando que tus datos han sido eliminados</li>
                            <li><strong>Código de confirmación</strong> único para tu referencia</li>
                            <li><strong>URL de estado</strong> donde puedes verificar el estado de tu solicitud</li>
                        </ol>

                        <div className="p-4 bg-[#0a0a0a] rounded-lg border border-[#333] mt-6">
                            <p className="text-sm text-gray-400 mb-2">Ejemplo de respuesta:</p>
                            <pre className="text-sm text-gray-300 whitespace-pre-wrap">
                                {`Estimado/a [Nombre],

Confirmamos que tu solicitud de eliminación de datos ha sido procesada exitosamente.

- Código de confirmación: PARETO-DEL-2026-XXXXX
- Fecha de eliminación: [Fecha]
- Datos eliminados: Mensajes, identificadores, metadatos

Si tienes alguna pregunta, no dudes en contactarnos.

Atentamente,
Equipo de Pareto AI`}
                            </pre>
                        </div>
                    </section>

                    <section>
                        <h2>Para clientes de Pareto AI (eliminación de cuenta completa)</h2>
                        <p>Si eres cliente de Pareto AI y deseas eliminar tu cuenta completamente:</p>

                        <h3>Qué se eliminará:</h3>
                        <ul className="list-disc list-inside mt-4">
                            <li>Tu cuenta y credenciales de acceso</li>
                            <li>Todas las fuentes de conocimiento (documentos, FAQs, configuraciones)</li>
                            <li>Historial de conversaciones de tus clientes</li>
                            <li>Integraciones y conexiones con Meta</li>
                            <li>Datos de facturación (excepto lo requerido por ley fiscal)</li>
                            <li>Analytics e historial de métricas</li>
                        </ul>

                        <h3>Cómo proceder:</h3>
                        <ol className="list-decimal list-inside mt-4">
                            <li>Inicia sesión en tu cuenta de Pareto AI</li>
                            <li>Ve a <strong>Configuración</strong> → <strong>Cuenta</strong> → <strong>Eliminar cuenta</strong></li>
                            <li>Confirma la eliminación</li>
                            <li>Recibirás un correo de confirmación</li>
                        </ol>

                        <div className="p-4 bg-[#111] rounded-lg border border-yellow-500/30 mt-4">
                            <p className="text-yellow-400"><strong>Nota:</strong> Esta acción es irreversible. Te recomendamos exportar tus datos antes de eliminar tu cuenta.</p>
                        </div>
                    </section>

                    <section>
                        <h2>Datos que retenemos por obligación legal</h2>
                        <p>Conforme a la legislación fiscal mexicana, estamos obligados a retener ciertos datos por 5 años:</p>
                        <ul className="list-disc list-inside mt-4">
                            <li>Facturas emitidas</li>
                            <li>Registros de transacciones</li>
                            <li>Información fiscal básica</li>
                        </ul>
                        <p className="mt-4">Estos datos se mantienen de forma segura y se utilizan exclusivamente para cumplimiento legal.</p>
                    </section>

                    <section>
                        <h2>Preguntas frecuentes</h2>

                        <div className="space-y-6 mt-6">
                            <div className="p-4 bg-[#111] rounded-lg border border-[#222]">
                                <h3 className="text-white mt-0 mb-2">¿Cuánto tiempo tardan en eliminar mis datos?</h3>
                                <p className="text-gray-400 mb-0">Procesamos todas las solicitudes en un máximo de 10 días hábiles.</p>
                            </div>

                            <div className="p-4 bg-[#111] rounded-lg border border-[#222]">
                                <h3 className="text-white mt-0 mb-2">¿Cómo sé que mis datos fueron eliminados?</h3>
                                <p className="text-gray-400 mb-0">Recibirás un correo de confirmación con un código único una vez que el proceso haya finalizado.</p>
                            </div>

                            <div className="p-4 bg-[#111] rounded-lg border border-[#222]">
                                <h3 className="text-white mt-0 mb-2">¿Puedo recuperar mis datos después de eliminarlos?</h3>
                                <p className="text-gray-400 mb-0">No. La eliminación es permanente e irreversible.</p>
                            </div>

                            <div className="p-4 bg-[#111] rounded-lg border border-[#222]">
                                <h3 className="text-white mt-0 mb-2">¿Qué pasa si el negocio con el que interactué también tiene mis datos?</h3>
                                <p className="text-gray-400 mb-0">Debes contactar directamente al negocio para solicitar la eliminación de datos que ellos hayan almacenado fuera de Pareto AI.</p>
                            </div>

                            <div className="p-4 bg-[#111] rounded-lg border border-[#222]">
                                <h3 className="text-white mt-0 mb-2">¿Necesito crear una cuenta para solicitar la eliminación?</h3>
                                <p className="text-gray-400 mb-0">No. Puedes enviar tu solicitud por correo electrónico sin necesidad de tener cuenta.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2>Información técnica para desarrolladores</h2>
                        <p>Si eres desarrollador y necesitas implementar el callback de eliminación de datos de Meta, este es el formato de respuesta que utilizamos:</p>
                        <div className="p-4 bg-[#0a0a0a] rounded-lg border border-[#333] mt-4">
                            <pre className="text-sm text-gray-300">
                                {`{
  "url": "https://paretoia.com/eliminacion-datos/estado?code=PARETO-DEL-2026-XXXXX",
  "confirmation_code": "PARETO-DEL-2026-XXXXX"
}`}
                            </pre>
                        </div>
                        <p className="mt-4">Para más información sobre la implementación técnica, consulta la <a href="https://developers.facebook.com/docs/development/create-an-app/app-dashboard/data-deletion-callback" target="_blank" rel="noopener noreferrer">documentación de Meta sobre Data Deletion Callback</a>.</p>
                    </section>

                    <section>
                        <h2>Contacto</h2>
                        <p>Si tienes preguntas sobre la eliminación de tus datos o necesitas asistencia:</p>
                        <ul className="list-none space-y-2 mt-4 p-4 bg-[#111] rounded-lg border border-[#222]">
                            <li><strong>Correo electrónico:</strong> <a href="mailto:paretoconsultingai@gmail.com">paretoconsultingai@gmail.com</a></li>
                            <li><strong>Asunto sugerido:</strong> &quot;Solicitud de eliminación de datos - Meta&quot;</li>
                        </ul>
                    </section>

                    <section>
                        <div className="p-4 bg-[#111] rounded-lg border border-[#00ff66]/30 mt-8">
                            <h2 className="text-[#00ff66] mt-0">Aviso importante</h2>
                            <p className="mb-0">
                                Esta página se proporciona como la <strong>URL de instrucciones de eliminación de datos</strong> requerida por Meta para la revisión de aplicaciones (App Review). Pareto AI se compromete a procesar todas las solicitudes de eliminación de datos de manera oportuna y conforme a las políticas de Meta y las leyes aplicables de protección de datos.
                            </p>
                        </div>
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
