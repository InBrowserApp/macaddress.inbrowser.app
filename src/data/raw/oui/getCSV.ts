const path = "/data/oui/oui.csv";

export async function getCSV() {
  const res = await fetch(path);
  const text = await res.text();
  return text;
}
