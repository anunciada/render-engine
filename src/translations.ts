export const translations = {
  pt: {
    greeting: "Olá crianças!",
  },

  en: {
    greeting: "Hello kids!",
  },

  es: {
    greeting: "¡Hola niños!",
  },
};

export type Language =
  keyof typeof translations;