const path = "/data/iab/iab.csv";

export async function getCSV() {
  const res = await fetch(path);
  const text = await res.text();
  return text;
}
