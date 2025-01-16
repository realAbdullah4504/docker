import Head from "next/head";

const Fencing = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>
					¿Cuánto cuesta vallar un terreno? - Handyman
				</title>
				<meta
					name="description"
					content="Descubre los costos asociados con vallar un terreno y cómo presupuestar para asegurar y delimitar tu propiedad."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/vallar-terreno`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta vallar un terreno?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Valla Básica: €15 - €30 por metro lineal
						</p>
						<p>Valla simple de alambre o madera.</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Valla Decorativa o de Seguridad: €30 - €100+ por
							metro lineal
						</p>
						<p>
							Vallas de hierro forjado, PVC, o con diseño
							decorativo y funciones de seguridad.
						</p>
					</div>
				</div>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Factores que Afectan los Costos
				</h2>
				<ul className="list-disc list-inside">
					<li>
						Tipo de Material: Alambre, madera, hierro forjado, PVC,
						etc.
					</li>
					<li>
						Altura y Diseño: Vallas estándar vs. decorativas o de
						seguridad.
					</li>
					<li>
						Longitud del Terreno: Total de metros lineales que
						necesitas vallar.
					</li>
					<li>
						Condición del Terreno: Terreno plano vs. con pendiente,
						accesibilidad, etc.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Vallar un Terreno
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Valla Básica</strong>: €15 - €30 por metro
						lineal, vallas simples de alambre o madera.
					</li>
					<li>
						<strong>Valla Decorativa o de Seguridad</strong>: €30 -
						€100+ por metro lineal, vallas de hierro forjado, PVC o
						con diseño decorativo.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación del Presupuesto
				</h2>
				<p>
					1. <strong>Medición del Terreno</strong>: Calcula la
					longitud total de la valla necesaria y considera la
					topografía del terreno.
				</p>
				<p>
					2. <strong>Selección de Material y Diseño</strong>: Elige el
					tipo de valla que se ajuste a tus necesidades de seguridad y
					estética.
				</p>
				<p>
					3. <strong>Solicitud de Presupuestos</strong>: Obtén
					múltiples presupuestos de contratistas especializados en
					vallado para comparar precios y servicios.
				</p>
				<p>
					4. <strong>Consideraciones Adicionales</strong>: Incluye
					costos de mantenimiento y reparaciones futuras en tu
					presupuesto.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Al planificar y presupuestar la instalación de una valla
					para tu terreno, puedes asegurar la seguridad y privacidad
					de tu propiedad de manera efectiva y dentro de tu
					presupuesto.
				</p>
			</section>
		</div>
	);
};

export default Fencing;
