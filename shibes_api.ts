export async function getShibes(): Promise<string> {
  const response = await fetch("http://shibe.online/api/shibes");
  const json = await response.json();
  return json[0];
}
