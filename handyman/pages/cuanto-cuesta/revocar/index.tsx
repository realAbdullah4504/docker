import Head from 'next/head';

const Revocar = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta revocar? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el revocado de paredes y cómo planificar tu presupuesto para este proyecto de construcción."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/revocar`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta revocar?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Revocado Básico: 15€ - 25€ por metro cuadrado</p>
            <p>Incluye mano de obra y materiales estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Revocado Decorativo: 30€ - 50€ por metro cuadrado</p>
            <p>Incluye revocados especiales y técnicas avanzadas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Revocado: Materiales y diseño.</li>
          <li>Área de Cobertura: Tamaño del área a revocar.</li>
          <li>Preparación del Sitio: Estado de las paredes y preparación de superficies.</li>
          <li>Ubicación: Accesibilidad y condiciones del sitio.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Revocar</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Revocado Básico</strong>: 15€ - 25€ por metro cuadrado, incluyendo mano de obra y materiales estándar.
          </li>
          <li>
            <strong>Revocado Decorativo</strong>: 30€ - 50€ por metro cuadrado, incluyendo revocados especiales y técnicas avanzadas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Diseño y Selección de Materiales</strong>: Elige el tipo y diseño de revocado adecuado para tu proyecto.</p>
        <p>2. <strong>Medición y Cálculo de Materiales</strong>: Determina la cantidad necesaria de materiales y costos asociados.</p>
        <p>3. <strong>Obtención de Cotizaciones</strong>: Solicita presupuestos detallados a varios contratistas.</p>
        <p>4. <strong>Consideración de Tiempo y Mano de Obra</strong>: Calcula el tiempo estimado y costos de mano de obra.</p>
      </section>

      <section>
        <p className="text-lg">
          El revocado puede mejorar la protección y estética de tus paredes exteriores e interiores. Planifica cuidadosamente para asegurar que el proyecto se ajuste a tu presupuesto y necesidades.
        </p>
      </section>
    </div>
  );
};

export default Revocar;
