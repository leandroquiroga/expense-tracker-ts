import * as Yup from 'yup';
import { DATE_UNITS_Interfaces, GetUnitAndValueDate } from '../interfaces';

export const arrayOptions = [
  "Seleccione una opcion",
  "Sueldo",
  "Gastos Extas",
  "Inversiones",
  "Facturas",
  "Alquiler",
  "Gastos Personales",
  "Alimentos",
  "Otros",
];


export const validationForm = {
  description: Yup.string()
    .min(3, 'La descripcion debe tener al menos 3 caracteres')
    .matches(/^[a-zA-ZñÑ\s]+$/, {
      excludeEmptyString: true,
      message: "La descripciones deben ser solo texto",
    })
    .required("La descripcion es obligatoria"),
  mount: Yup.number()
    .required("El monto es obligatorio")
    .not([0], 'No se puede ingresar el monto igual a 0'),
  options: Yup.string()
    .required('Por favor escoje un opcion')
    .not(["Seleccione una opcion"], 'Escoja una opcion valida'),
};

export const amountNegative = (amount: number): boolean => (amount < 0) ? true : false;

// Configuracion del tiempo desde que se actualizo el estado

export const DATE_UNITS: DATE_UNITS_Interfaces = {
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1,
};

// Calcula el numero de segundos que a pasado desde el timpo actualizado al momento actual
export const getSecondsDiff = (timestaps: number): number => (Date.now() - timestaps) / 1000;


// Dependiendo el numero de segundo calcula los dias, semanas, horas, segundos que a pasado
// donde la unidad por ejemplo si fueron 5 dias que han pasado devuelve en unit: dias y en el value: -5
export const getUnitAndValueDate = (
  secondsElapsed: number
): GetUnitAndValueDate => {
  for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS)) {
    if (secondsElapsed >= secondsInUnit || unit === "second") {
      const value = Math.floor(secondsElapsed / secondsInUnit) * -1;
      return { value, unit };
    }
  }
  throw new Error("No se encontró ningún valor adecuado."); // Lanzar un error si no se encuentra ninguna unidad adecuada
};

// Se encarga de formatear la fecha por ejemplo "Hace 5 dias"
export const getTimeAgo = (timestamp: any, locale: string): string => {
  const relativeTimeFormat = new Intl.RelativeTimeFormat(locale);

  const secondsElapsed = getSecondsDiff(timestamp);
  const { value, unit } = getUnitAndValueDate(secondsElapsed);
  return relativeTimeFormat.format(value, unit);
};

export const createSerialDataMap = (
  serialDataMap: Map<string, number>,
  options: string,
  amount: number
) => {
  let amountTotal: number;

  // Verificar si una propiedad se repite
  if (serialDataMap.has(options)) {
    // Si se repite - Verificar si el monto es negativo
    if (amount < 0) {
      // Sumar el monto negativo al total existente y asegurarse de que el valor final no sea menor que cero
      amountTotal = Math.max(serialDataMap.get(options)! + amount, 0);
      serialDataMap.set(options, amountTotal);
    } else {
      // Si es positivo, sumarlo al monto total
      amountTotal = serialDataMap.get(options)! + amount;
      serialDataMap.set(options, amountTotal);
    }
  } else {
    // Si no se repite la propiedad - Verificar si el monto es negativo
    if (amount < 0) {
      // Convertir el monto negativo en positivo y asignarlo al monto total
      amountTotal = Math.max(-amount, 0);
      serialDataMap.set(options, amountTotal);
    } else {
      // Si es positivo, asignarlo al monto total
      serialDataMap.set(options, amount);
    }
  }

  return serialDataMap;
};
