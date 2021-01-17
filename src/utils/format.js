// format utils
const prepareDateValue = (val) => (val <= 9 ? `0${val}` : val);

const fDate = (d) => `${d.getFullYear()}/${prepareDateValue(d.getMonth())}/${prepareDateValue(d.getDate())}`;

export function formatDate(date) {
  return fDate(new Date(date));
}

export function formatDateTime(date) {
  const d = new Date(date);
  return `${fDate(d)} ${prepareDateValue(d.getHours())}:${prepareDateValue(d.getMinutes())}`;
}
