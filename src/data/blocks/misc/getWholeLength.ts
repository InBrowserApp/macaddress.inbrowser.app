import { dataProviders } from "../dataProviders";

export async function getWholeLength() {
  const countPromises = Object.values(dataProviders).map((provider) =>
    provider.getLength()
  );
  const counts = await Promise.all(countPromises);
  return counts.reduce((a, b) => a + b, 0);
}
