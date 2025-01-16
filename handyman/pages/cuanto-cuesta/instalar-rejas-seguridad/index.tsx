import Head from 'next/head';

const InstalarRejasSeguridadPage = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar rejas de seguridad? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de rejas de seguridad en ventanas y puertas, y cómo planificar tu presupuesto para este tipo de proyectos."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/instalar-rejas-seguridad`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar rejas de seguridad?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Rejas Fijas: 100€ - 200€ por ventana/puerta</p>
            <p>Incluye materiales y mano de obra para la instalación de rejas de seguridad fijas.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Rejas Extensibles: 200€ - 400€ por ventana/puerta</p>
            <p>Incluye materiales y mano de obra para la instalación de rejas de seguridad extensibles.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Rejas: Fijas vs. extensibles con diferentes niveles de seguridad.</li>
          <li>Dimensiones: Tamaño de las ventanas o puertas donde se instalarán las rejas.</li>
          <li>Material y Acabado: Hierro, acero inoxidable, diseño ornamental, etc.</li>
          <li>Ubicación: Precios pueden variar según la ubicación geográfica y accesibilidad al sitio de instalación.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Instalación de Rejas de Seguridad</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Rejas Fijas</strong>: 100€ - 200€ por ventana/puerta, incluyendo materiales y mano de obra para la instalación de rejas de seguridad fijas.
          </li>
          <li>
            <strong>Rejas Extensibles</strong>: 200€ - 400€ por ventana/puerta, incluyendo materiales y mano de obra para la instalación de rejas de seguridad extensibles.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Medición y Diseño</strong>: Toma medidas precisas y define el tipo de rejas de seguridad que necesitas.</p>
        <p>2. <strong>Cotizaciones</strong>: Solicita múltiples cotizaciones de instaladores para comparar precios y opciones de diseño.</p>
        <p>3. <strong>Instalación y Mantenimiento</strong>: Considera los costos adicionales de instalación y programa mantenimientos regulares para mantener la seguridad de las rejas.</p>
      </section>

      <section>
        <p className="text-lg">
          Instalar rejas de seguridad puede aumentar la protección y tranquilidad en tu hogar o negocio. Asegúrate de planificar correctamente para obtener resultados seguros y duraderos.
        </p>
      </section>
    </div>
  );
};

export default InstalarRejasSeguridadPage;