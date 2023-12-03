export function formatNumberToCurrency(number) {
// Formatea el número como moneda con separadores de miles
const formattedNumber = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'COP', // Cambia a tu moneda deseada
    minimumFractionDigits: 0,
}).format(number);

return formattedNumber;
}