import Head from 'next/head';

const InstalarRejas = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar rejas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de rejas y cómo planificar tu presupuesto para este proyecto de seguridad."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/instalar-rejas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar rejas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Rejas Estándar: 50€ - 100€ por metro cuadrado</p>
            <p>Incluye rejas estándar de metal y la instalación básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Rejas Personalizadas: 100€ - 200€ o más por metro cuadrado</p>
            <p>Incluye rejas metálicas personalizadas con diseño especial y técnicas de instalación avanzadas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Diseño: Rejas estándar vs. rejas personalizadas con diseños complejos.</li>
          <li>Materiales: Calidad y tipo de metal utilizado para las rejas.</li>
          <li>Instalación: Complejidad de la instalación y preparación del sitio.</li>
          <li>Ubicación: Costos pueden variar según la ubicación geográfica y acceso al sitio.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Instalación de Rejas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Rejas Estándar</strong>: 50€ - 100€ por metro cuadrado, incluyendo rejas estándar de metal y la instalación básica.
          </li>
          <li>
            <strong>Rejas Personalizadas</strong>: 100€ - 200€ o más por metro cuadrado, incluyendo rejas metálicas personalizadas con diseño especial y técnicas de instalación avanzadas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Selección de Rejas</strong>: Elige entre rejas estándar y personalizadas según tus necesidades y presupuesto.</p>
        <p>2. <strong>Consulta con Profesionales</strong>: Obtén varias cotizaciones de instaladores de rejas para comparar precios y servicios.</p>
        <p>3. <strong>Considera la Calidad</strong>: La durabilidad y el mantenimiento de las rejas deben ser consideraciones importantes para el valor a largo plazo.</p>
        <p>4. <strong>Programación de la Instalación</strong>: Coordina el tiempo y la fecha de la instalación para minimizar las interrupciones y asegurar la finalización a tiempo.</p>
      </section>

      <section>
        <p className="text-lg">
          La instalación de rejas puede mejorar la seguridad y estética de tu propiedad. Planifica cuidadosamente y considera todos los factores para asegurar una instalación exitosa y duradera.
        </p>
      </section>
    </div>
  );
};

export default InstalarRejas;