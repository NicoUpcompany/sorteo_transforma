const dataSectores = JSON.parse(
  JSON.stringify([
    {
      "sector": "Academia",
      "category": "Educación",
      "subCategory": "Centro de Formación Técnica"
    },
    {
      "sector": "Academia",
      "category": "Educación",
      "subCategory": "Educación a distancia"
    },
    {
      "sector": "Academia",
      "category": "Educación",
      "subCategory": "Liceo Técnico"
    },
    {
      "sector": "Academia",
      "category": "Educación",
      "subCategory": "Universidad"
    },
    {
      "sector": "Academia",
      "category": "Servicios I+D",
      "subCategory": "Consorcio / Fundación"
    },
    {
      "sector": "Academia",
      "category": "Servicios I+D",
      "subCategory": "Laboratorio de Procesos"
    },
    {
      "sector": "Academia",
      "category": "Servicios I+D",
      "subCategory": "Planta Piloto"
    },
    {
      "sector": "Academia",
      "category": "Servicios I+D",
      "subCategory": "Universidad"
    },
    {
      "sector": "Internacional",
      "category": "Academia",
      "subCategory": "Educación"
    },
    {
      "sector": "Internacional",
      "category": "Academia",
      "subCategory": "Servicios I+D"
    },
    {
      "sector": "Internacional",
      "category": "Privado",
      "subCategory": "Agrícola"
    },
    {
      "sector": "Internacional",
      "category": "Privado",
      "subCategory": "Alimentos y Bebidas"
    },
    {
      "sector": "Internacional",
      "category": "Privado",
      "subCategory": "Asociación Gremial"
    },
    {
      "sector": "Internacional",
      "category": "Privado",
      "subCategory": "Financiera"
    },
    {
      "sector": "Internacional",
      "category": "Privado",
      "subCategory": "Foodservice"
    },
    {
      "sector": "Internacional",
      "category": "Privado",
      "subCategory": "Ingredientes"
    },
    {
      "sector": "Internacional",
      "category": "Privado",
      "subCategory": "Maquinaria y Equipamiento"
    },
    {
      "sector": "Internacional",
      "category": "Privado",
      "subCategory": "Media"
    },
    {
      "sector": "Internacional",
      "category": "Privado",
      "subCategory": "Otros"
    },
    {
      "sector": "Internacional",
      "category": "Privado",
      "subCategory": "Packaging"
    },
    {
      "sector": "Internacional",
      "category": "Privado",
      "subCategory": "Pecuario"
    },
    {
      "sector": "Internacional",
      "category": "Privado",
      "subCategory": "Pesca y Acuicultura"
    },
    {
      "sector": "Internacional",
      "category": "Privado",
      "subCategory": "Retail"
    },
    {
      "sector": "Internacional",
      "category": "Privado",
      "subCategory": "Servicios"
    },
    {
      "sector": "Internacional",
      "category": "Público",
      "subCategory": "Comercio"
    },
    {
      "sector": "Internacional",
      "category": "Público",
      "subCategory": "Gobierno"
    },
    {
      "sector": "Internacional",
      "category": "Sociedad",
      "subCategory": "Asociación de Consumidores"
    },
    {
      "sector": "Internacional",
      "category": "Sociedad",
      "subCategory": "ONG"
    },
    {
      "sector": "Privado",
      "category": "Agrícola",
      "subCategory": "Cereales"
    },
    {
      "sector": "Privado",
      "category": "Agrícola",
      "subCategory": "Cultivos industriales"
    },
    {
      "sector": "Privado",
      "category": "Agrícola",
      "subCategory": "Flores"
    },
    {
      "sector": "Privado",
      "category": "Agrícola",
      "subCategory": "Frutas frescas"
    },
    {
      "sector": "Privado",
      "category": "Agrícola",
      "subCategory": "Hortalizas frescas"
    },
    {
      "sector": "Privado",
      "category": "Agrícola",
      "subCategory": "Leguminosas"
    },
    {
      "sector": "Privado",
      "category": "Agrícola",
      "subCategory": "Papas"
    },
    {
      "sector": "Privado",
      "category": "Agrícola",
      "subCategory": "Semilleros - bulbos y viveros"
    },
    {
      "sector": "Privado",
      "category": "Alimentos y Bebidas",
      "subCategory": "Aceites Comestibles"
    },
    {
      "sector": "Privado",
      "category": "Alimentos y Bebidas",
      "subCategory": "Alimentos Infantiles"
    },
    {
      "sector": "Privado",
      "category": "Alimentos y Bebidas",
      "subCategory": "Bebidas alcohólicas"
    },
    {
      "sector": "Privado",
      "category": "Alimentos y Bebidas",
      "subCategory": "Cereales para el Desayuno"
    },
    {
      "sector": "Privado",
      "category": "Alimentos y Bebidas",
      "subCategory": "Chocolates y Confites"
    },
    {
      "sector": "Privado",
      "category": "Alimentos y Bebidas",
      "subCategory": "Jugos - Bebidas y Aguas"
    },
    {
      "sector": "Privado",
      "category": "Alimentos y Bebidas",
      "subCategory": "Lácteos y Derivados"
    },
    {
      "sector": "Privado",
      "category": "Alimentos y Bebidas",
      "subCategory": "Pastas y arroz"
    },
    {
      "sector": "Privado",
      "category": "Alimentos y Bebidas",
      "subCategory": "Platos Listos"
    },
    {
      "sector": "Privado",
      "category": "Alimentos y Bebidas",
      "subCategory": "Procesados - Carnes y Prod. del Mar"
    },
    {
      "sector": "Privado",
      "category": "Alimentos y Bebidas",
      "subCategory": "Procesados - Frutas y Hortalizas"
    },
    {
      "sector": "Privado",
      "category": "Alimentos y Bebidas",
      "subCategory": "Snacks y Productos Horneados"
    },
    {
      "sector": "Privado",
      "category": "Alimentos y Bebidas",
      "subCategory": "Sopas y Salsas"
    },
    {
      "sector": "Privado",
      "category": "Alimentos y Bebidas",
      "subCategory": "Suplementos"
    },
    {
      "sector": "Privado",
      "category": "Alimentos y Bebidas",
      "subCategory": "Sustitutos Cárnicos"
    },
    {
      "sector": "Privado",
      "category": "Asociación Gremial",
      "subCategory": "Agricultura"
    },
    {
      "sector": "Privado",
      "category": "Asociación Gremial",
      "subCategory": "Alimentos procesados"
    },
    {
      "sector": "Privado",
      "category": "Asociación Gremial",
      "subCategory": "Bebidas alcohólicas"
    },
    {
      "sector": "Privado",
      "category": "Asociación Gremial",
      "subCategory": "Bebidas no alcohólicas"
    },
    {
      "sector": "Privado",
      "category": "Asociación Gremial",
      "subCategory": "Comida fresca"
    },
    {
      "sector": "Privado",
      "category": "Asociación Gremial",
      "subCategory": "Cuidado de la salud"
    },
    {
      "sector": "Privado",
      "category": "Asociación Gremial",
      "subCategory": "Fabricación / Maquinaria"
    },
    {
      "sector": "Privado",
      "category": "Asociación Gremial",
      "subCategory": "Foodservice"
    },
    {
      "sector": "Privado",
      "category": "Asociación Gremial",
      "subCategory": "Gestión de residuos"
    },
    {
      "sector": "Privado",
      "category": "Asociación Gremial",
      "subCategory": "Logística"
    },
    {
      "sector": "Privado",
      "category": "Asociación Gremial",
      "subCategory": "Pesca y Acuicultura"
    },
    {
      "sector": "Privado",
      "category": "Asociación Gremial",
      "subCategory": "Publicidad"
    },
    {
      "sector": "Privado",
      "category": "Financiera",
      "subCategory": "Bancos"
    },
    {
      "sector": "Privado",
      "category": "Financiera",
      "subCategory": "Capital de Riesgo"
    },
    {
      "sector": "Privado",
      "category": "Financiera",
      "subCategory": "Capital Equity"
    },
    {
      "sector": "Privado",
      "category": "Financiera",
      "subCategory": "Corretaje"
    },
    {
      "sector": "Privado",
      "category": "Financiera",
      "subCategory": "Entidades Financieras"
    },
    {
      "sector": "Privado",
      "category": "Foodservice",
      "subCategory": "Franquicias"
    },
    {
      "sector": "Privado",
      "category": "Foodservice",
      "subCategory": "Operador"
    },
    {
      "sector": "Privado",
      "category": "Foodservice",
      "subCategory": "Proveedor"
    },
    {
      "sector": "Privado",
      "category": "Ingredientes",
      "subCategory": "Agroindustriales"
    },
    {
      "sector": "Privado",
      "category": "Ingredientes",
      "subCategory": "Otros"
    },
    {
      "sector": "Privado",
      "category": "Ingredientes",
      "subCategory": "Sabores y Aromas"
    },
    {
      "sector": "Privado",
      "category": "Ingredientes",
      "subCategory": "Proteínas"
    },
    {
      "sector": "Privado",
      "category": "Ingredientes",
      "subCategory": "Colorantes"
    },
    {
      "sector": "Privado",
      "category": "Ingredientes",
      "subCategory": "Enzimas"
    },
    {
      "sector": "Privado",
      "category": "Ingredientes",
      "subCategory": "Otros Biotech"
    },
    {
      "sector": "Privado",
      "category": "Maquinaria y Equipamiento",
      "subCategory": "Agrícola"
    },
    {
      "sector": "Privado",
      "category": "Maquinaria y Equipamiento",
      "subCategory": "Medición y Analítica"
    },
    {
      "sector": "Privado",
      "category": "Maquinaria y Equipamiento",
      "subCategory": "Otros"
    },
    {
      "sector": "Privado",
      "category": "Maquinaria y Equipamiento",
      "subCategory": "Procesamiento de Alimentos"
    },
    {
      "sector": "Privado",
      "category": "Media",
      "subCategory": "Otros medios"
    },
    {
      "sector": "Privado",
      "category": "Media",
      "subCategory": "Prensa / Radio / TV"
    },
    {
      "sector": "Privado",
      "category": "Media",
      "subCategory": "Productores de Eventos"
    },
    {
      "sector": "Privado",
      "category": "Media",
      "subCategory": "Productos Multimedia"
    },
    {
      "sector": "Privado",
      "category": "Media",
      "subCategory": "Revistas"
    },
    {
      "sector": "Privado",
      "category": "Otros",
      "subCategory": "Construcción"
    },
    {
      "sector": "Privado",
      "category": "Otros",
      "subCategory": "Energía"
    },
    {
      "sector": "Privado",
      "category": "Otros",
      "subCategory": "Forestal"
    },
    {
      "sector": "Privado",
      "category": "Otros",
      "subCategory": "Manufacura"
    },
    {
      "sector": "Privado",
      "category": "Otros",
      "subCategory": "Minería"
    },
    {
      "sector": "Privado",
      "category": "Otros",
      "subCategory": "Servicios"
    },
    {
      "sector": "Privado",
      "category": "Otros",
      "subCategory": "Turismo"
    },
    {
      "sector": "Privado",
      "category": "Otros",
      "subCategory": "Salud"
    },
    {
      "sector": "Privado",
      "category": "Packaging",
      "subCategory": "Fabricantes de Envases"
    },
    {
      "sector": "Privado",
      "category": "Packaging",
      "subCategory": "Insumos y Servicios"
    },
    {
      "sector": "Privado",
      "category": "Packaging",
      "subCategory": "Maquila de envasado"
    },
    {
      "sector": "Privado",
      "category": "Packaging",
      "subCategory": "Materias Primas"
    },
    {
      "sector": "Privado",
      "category": "Packaging",
      "subCategory": "Reciclaje"
    },
    {
      "sector": "Privado",
      "category": "Pecuario",
      "subCategory": "Apicultura"
    },
    {
      "sector": "Privado",
      "category": "Pecuario",
      "subCategory": "Carnes"
    },
    {
      "sector": "Privado",
      "category": "Pecuario",
      "subCategory": "Leche y derivados"
    },
    {
      "sector": "Privado",
      "category": "Pecuario",
      "subCategory": "Otros Insectos"
    },
    {
      "sector": "Privado",
      "category": "Pesca/Acuicultura",
      "subCategory": "Algas"
    },
    {
      "sector": "Privado",
      "category": "Pesca/Acuicultura",
      "subCategory": "Productos del mar"
    },
    {
      "sector": "Privado",
      "category": "Retail",
      "subCategory": "eCommerce"
    },
    {
      "sector": "Privado",
      "category": "Retail",
      "subCategory": "Farmacias"
    },
    {
      "sector": "Privado",
      "category": "Retail",
      "subCategory": "Otros Minoristas"
    },
    {
      "sector": "Privado",
      "category": "Retail",
      "subCategory": "Supermercados"
    },
    {
      "sector": "Privado",
      "category": "Retail",
      "subCategory": "Tiendas de Conveniencia"
    },
    {
      "sector": "Privado",
      "category": "Servicios",
      "subCategory": "Alimentación Animal"
    },
    {
      "sector": "Privado",
      "category": "Servicios",
      "subCategory": "Arriendos/Maquila"
    },
    {
      "sector": "Privado",
      "category": "Servicios",
      "subCategory": "Consultorías Estratégicas y de Negocios"
    },
    {
      "sector": "Privado",
      "category": "Servicios",
      "subCategory": "Gestión de residuos"
    },
    {
      "sector": "Privado",
      "category": "Servicios",
      "subCategory": "Investigación de Mercado"
    },
    {
      "sector": "Privado",
      "category": "Servicios",
      "subCategory": "IT"
    },
    {
      "sector": "Privado",
      "category": "Servicios",
      "subCategory": "Laboratorios y Analítica"
    },
    {
      "sector": "Privado",
      "category": "Servicios",
      "subCategory": "Marketing"
    },
    {
      "sector": "Privado",
      "category": "Servicios",
      "subCategory": "Servicios/Insumos Agrícolas"
    },
    {
      "sector": "Privado",
      "category": "Servicios",
      "subCategory": "Servicios I+D / Pilotaje"
    },
    {
      "sector": "Privado",
      "category": "Servicios",
      "subCategory": "Transporte y Logística"
    },
    {
      "sector": "Privado",
      "category": "Servicios",
      "subCategory": "Aseguramiento de Calidad"
    },
    {
      "sector": "Privado",
      "category": "Servicios",
      "subCategory": "Certificaciones"
    },
    {
      "sector": "Público",
      "category": "Comercio",
      "subCategory": "Atracción de Inversiones"
    },
    {
      "sector": "Público",
      "category": "Comercio",
      "subCategory": "Cámara de Comercio"
    },
    {
      "sector": "Público",
      "category": "Comercio",
      "subCategory": "Embajada"
    },
    {
      "sector": "Público",
      "category": "Comercio",
      "subCategory": "Organización intergubernamental"
    },
    {
      "sector": "Público",
      "category": "Comercio",
      "subCategory": "Promoción de exportaciones"
    },
    {
      "sector": "Público",
      "category": "Gobierno",
      "subCategory": "Agencias - Otras"
    },
    {
      "sector": "Público",
      "category": "Gobierno",
      "subCategory": "Agencias de Fomento"
    },
    {
      "sector": "Público",
      "category": "Gobierno",
      "subCategory": "Agricultura y alimentación"
    },
    {
      "sector": "Público",
      "category": "Gobierno",
      "subCategory": "Otros Ministerios"
    },
    {
      "sector": "Público",
      "category": "Gobierno",
      "subCategory": "Oficina de Estadísticas"
    },
    {
      "sector": "Sociedad",
      "category": "Asociación",
      "subCategory": "Consumidores"
    },
    {
      "sector": "Sociedad",
      "category": "Asociación",
      "subCategory": "ONG"
    }
  ])
)

const sectores = [...new Set(dataSectores.map(data => data.sector))]
const getCategoriesBySector = (sector) => [...new Set(dataSectores.filter(data => data.sector === sector).map(sect => sect.category))]
const getSubCategoriesByCategory = (category) => [...new Set(dataSectores.filter(data => data.category === category).map(cat => cat.subCategory))]

export { sectores, getCategoriesBySector , getSubCategoriesByCategory };