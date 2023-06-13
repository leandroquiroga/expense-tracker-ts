import * as Yup from 'yup';

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