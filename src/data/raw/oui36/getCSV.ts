const path = "/data/oui36/oui36.csv";

export async function getCSV() {
  const res = await fetch(path);
  const text = await res.text();
  return text;
}
