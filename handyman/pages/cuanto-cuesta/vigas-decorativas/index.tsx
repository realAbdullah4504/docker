import Head from 'next/head';

const VigasDecorativas = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuestan las vigas decorativas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de vigas decorativas y cómo planificar tu presupuesto para este proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/vigas-decorativas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuestan las vigas decorativas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Vigas de Imitación: 100€ - 300€ por viga</p>
            <p>Incluye materiales y mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Vigas de Madera Real: 500€ - 1,500€ por viga</p>
            <p>Incluye madera auténtica y instalación personalizada.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Material: Imitación, madera auténtica, poliuretano, etc.</li>
          <li>Longitud y Dimensiones: Tamaño y cantidad de vigas requeridas.</li>
          <li>Instalación: Complejidad de la instalación y ubicación dentro del hogar.</li>
          <li>Personalización: Diseños especiales o acabados personalizados.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Instalación de Vigas Decorativas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Vigas de Imitación</strong>: 100€ - 300€ por viga, incluyendo materiales y mano de obra básica.
          </li>
          <li>
            <strong>Vigas de Madera Real</strong>: 500€ - 1,500€ por viga, incluyendo madera auténtica y instalación personalizada.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Selección del Tipo de Vigas</strong>: Decide entre vigas de imitación o madera real según tu estilo y presupuesto.</p>
        <p>2. <strong>Solicitar Cotizaciones</strong>: Obtén presupuestos detallados de varios proveedores para comparar precios y servicios.</p>
        <p>3. <strong>Considerar la Calidad</strong>: Elige materiales de alta calidad que se adapten al diseño y durabilidad de tu hogar.</p>
        <p>4. <strong>Programar la Instalación</strong>: Coordina la instalación de las vigas con otros trabajos de remodelación o construcción en tu hogar.</p>
      </section>

      <section>
        <p className="text-lg">
          Las vigas decorativas pueden mejorar significativamente el aspecto de tu hogar. Planifica cuidadosamente y considera todos los factores para asegurar que tu proyecto se ajuste a tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default VigasDecorativas;
