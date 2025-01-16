import Head from 'next/head';

const ObraSecaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la obra seca? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la obra seca y cómo presupuestar para proyectos de construcción interior sin necesidad de utilizar agua."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-obra-seca`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la obra seca?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Obra Seca Básica: €1,000 - €5,000</p>
            <p>Incluye paredes divisorias y acabados básicos sin obras húmedas.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Obra Seca Completa: €5,000 - €10,000</p>
            <p>Incluye instalación de techos, suelos y paredes con técnicas de construcción seca avanzadas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Área y volumen: Tamaño del espacio a renovar y complejidad del diseño arquitectónico.</li>
          <li>Materiales y acabados: Uso de materiales estándar vs. premium para la construcción seca.</li>
          <li>Mano de obra especializada: Costos asociados con la contratación de técnicos especializados en obra seca.</li>
          <li>Ubicación y accesibilidad: Localización del proyecto y facilidad de acceso al sitio de trabajo.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para obra seca</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Obra Seca Básica</strong>: €1,000 - €5,000, incluyendo paredes divisorias y acabados básicos sin obras húmedas.
          </li>
          <li>
            <strong>Obra Seca Completa</strong>: €5,000 - €10,000, incluyendo instalación de techos, suelos y paredes con técnicas de construcción seca avanzadas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Planificación detallada</strong>: Definir claramente los requisitos del proyecto y objetivos de diseño.</p>
        <p>2. <strong>Selección de materiales</strong>: Elegir materiales y acabados que se ajusten al presupuesto y estética deseada.</p>
        <p>3. <strong>Contratación de profesionales</strong>: Buscar a contratistas con experiencia en construcción seca y referencias sólidas.</p>
        <p>4. <strong>Supervisión y gestión</strong>: Mantener una supervisión continua para garantizar la calidad y cumplimiento de plazos.</p>
      </section>

      <section>
        <p className="text-lg">
          Al entender los factores que afectan los costos de la obra seca y planificar adecuadamente, puedes llevar a cabo proyectos de construcción interior de manera efectiva y dentro del presupuesto establecido.
        </p>
      </section>
    </div>
  );
};

export default ObraSecaCoste;
