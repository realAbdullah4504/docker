import Head from 'next/head';

const RepararCarpinteriaMetalica = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta reparar carpintería metálica? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la reparación de carpintería metálica y cómo planificar tu presupuesto para este tipo de trabajos."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/reparar-carpinteria-metalica`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta reparar carpintería metálica?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo Estimado: 200€ - 500€</p>
            <p>Incluye reparaciones básicas de carpintería metálica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo Detallado: 500€ - 1000€ o más</p>
            <p>Incluye reparaciones extensas o reemplazo de partes metálicas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Extensión del Daño: Reparaciones simples vs. reparaciones extensas o reemplazos.</li>
          <li>Material y Tipo: Tipo de metal utilizado y complejidad de las partes a reparar.</li>
          <li>Ubicación: Costos pueden variar dependiendo de la ubicación geográfica.</li>
          <li>Urgencia: Costos adicionales por reparaciones urgentes o fuera de horario laboral.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Reparación de Carpintería Metálica</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Costo Estimado</strong>: 200€ - 500€, incluyendo reparaciones básicas de carpintería metálica.
          </li>
          <li>
            <strong>Costo Detallado</strong>: 500€ - 1000€ o más, incluyendo reparaciones extensas o reemplazo de partes metálicas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Inspección y Evaluación</strong>: Determina el alcance de los daños y las reparaciones necesarias.</p>
        <p>2. <strong>Solicita Varios Presupuestos</strong>: Obtén cotizaciones detalladas de varios carpinteros metálicos para comparar precios y servicios.</p>
        <p>3. <strong>Calidad y Durabilidad</strong>: Considera la calidad de los materiales y la reputación del profesional para asegurar una reparación duradera.</p>
        <p>4. <strong>Programación de Reparaciones</strong>: Coordina el tiempo y la fecha de las reparaciones para minimizar las interrupciones.</p>
      </section>

      <section>
        <p className="text-lg">
          La reparación de carpintería metálica puede mejorar la funcionalidad y estética de tu espacio. Planifica cuidadosamente y considera todos los factores para asegurar una reparación exitosa y duradera.
        </p>
      </section>
    </div>
  );
};

export default RepararCarpinteriaMetalica;