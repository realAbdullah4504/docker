import Head from 'next/head';

const RepararAntenaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta reparar una antena? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la reparación de antenas y cómo planificar tu presupuesto para este servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-reparar-antena`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta reparar una antena?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Básica: 50€ - 100€</p>
            <p>Incluye diagnóstico y reparación estándar de antenas.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Avanzada: 100€ - 200€</p>
            <p>Incluye diagnóstico avanzado y reparación de problemas complejos.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Naturaleza del Problema: Costos varían según la gravedad y complejidad de la falla de la antena.</li>
          <li>Tipo de Antena: Costos pueden diferir dependiendo del tipo y tecnología de la antena.</li>
          <li>Acceso al Sitio: Costos adicionales pueden aplicarse si se necesita equipo especial o acceso complicado.</li>
          <li>Ubicación: Los precios pueden variar según la ubicación geográfica y las condiciones del mercado local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Reparar una Antena</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Reparación Básica</strong>: 50€ - 100€, incluyendo diagnóstico y reparación estándar de antenas.
          </li>
          <li>
            <strong>Reparación Avanzada</strong>: 100€ - 200€, incluyendo diagnóstico avanzado y reparación de problemas complejos.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de la Antena</strong>: Determina la naturaleza del problema y evalúa la condición general de la antena.</p>
        <p>2. <strong>Obtención de Presupuestos</strong>: Solicita presupuestos detallados de técnicos especializados en reparación de antenas.</p>
        <p>3. <strong>Consideraciones Adicionales</strong>: Verifica la garantía de los servicios ofrecidos y asegúrate de entender todos los costos asociados.</p>
        <p>4. <strong>Programación de Reparaciones</strong>: Coordina el horario y la fecha para la reparación según la disponibilidad del técnico y la urgencia del problema.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente y presupuestar la reparación de una antena, puedes mantener la conectividad de tu sistema de comunicación dentro de tus posibilidades financieras.
        </p>
      </section>
    </div>
  );
};

export default RepararAntenaCoste;