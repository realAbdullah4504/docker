import Head from 'next/head';

const TratamientoDeAguas = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta el tratamiento de aguas? - Handyman</title>
        <meta
          name="description"
          content="Descubre cuánto cuesta el tratamiento de aguas, con información detallada sobre los precios y factores que influyen en el costo."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/tratamiento-de-aguas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta el tratamiento de aguas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Precio Promedio en España: 300€ - 1000€</p>
            <p>Precio estimado para el tratamiento de aguas en España.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Durchschnittlicher Preis in Deutschland: 500€ - 1500€</p>
            <p>Geschätzter Preis für die Wasserbehandlung in Deutschland.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Dimensiones del sistema de tratamiento.</li>
          <li>Complejidad del tratamiento requerido.</li>
          <li>Tecnologías y equipos utilizados.</li>
          <li>Ubicación geográfica y accesibilidad.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Tratamiento de Aguas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Precio en España</strong>: 300€ - 1000€, precio estimado para el tratamiento de aguas en España.
          </li>
          <li>
            <strong>Preis in Deutschland</strong>: 500€ - 1500€, geschätzter Preis für die Wasserbehandlung in Deutschland.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Consejos para el Tratamiento de Aguas</h2>
        <p>1. <strong>Análisis de Agua</strong>: Realiza un análisis de agua para determinar el tratamiento necesario.</p>
        <p>2. <strong>Consultar Expertos</strong>: Busca la orientación de profesionales para obtener el mejor tratamiento.</p>
        <p>3. <strong>Mantenimiento Regular</strong>: Programa mantenimientos regulares para prolongar la vida útil del sistema de tratamiento.</p>
      </section>

      <section>
        <p className="text-lg">
          El tratamiento de aguas es esencial para garantizar la calidad del agua potable y la sostenibilidad ambiental.
        </p>
      </section>
    </div>
  );
};

export default TratamientoDeAguas;