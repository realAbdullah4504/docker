import Head from 'next/head';

const ProyectoDeAgregacionCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta un proyecto de agregación? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la realización de un proyecto de agregación y cómo planificar tu presupuesto para esta tarea."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-proyecto-de-agregacion`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta un proyecto de agregación?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Proyecto Básico: 1000€ - 3000€</p>
            <p>Incluye diseño básico y planos de la agregación.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Proyecto Detallado: 3000€ - 10000€</p>
            <p>Incluye diseño detallado, planos técnicos y especificaciones adicionales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Complejidad: La extensión del proyecto de agregación y la complejidad de las modificaciones.</li>
          <li>Materiales y Acabados: Costos adicionales para materiales específicos y acabados detallados.</li>
          <li>Normativas y Permisos: Requisitos legales y permisos necesarios para realizar la agregación.</li>
          <li>Profesionales Involucrados: Honorarios de arquitectos, ingenieros u otros especialistas.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Proyectos de Agregación</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Proyecto Básico</strong>: 1000€ - 3000€, incluyendo diseño básico y planos.
          </li>
          <li>
            <strong>Proyecto Detallado</strong>: 3000€ - 10000€, incluyendo diseño detallado, planos técnicos y especificaciones adicionales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluar Necesidades y Requisitos</strong>: Determinar el tipo de agregación necesaria y los requisitos específicos.</p>
        <p>2. <strong>Obtener Cotizaciones</strong>: Solicitar presupuestos detallados de varios profesionales para comparar costos y servicios.</p>
        <p>3. <strong>Considerar Factores Adicionales</strong>: Incluir costos de materiales, permisos y honorarios profesionales en la planificación.</p>
        <p>4. <strong>Planificación Logística</strong>: Establecer un cronograma de trabajo y coordinar la ejecución del proyecto.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente un proyecto de agregación, puedes asegurar una ejecución eficiente y dentro del presupuesto previsto.
        </p>
      </section>
    </div>
  );
};

export default ProyectoDeAgregacionCoste;