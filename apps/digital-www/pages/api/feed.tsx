export default async function handler(req, res) {
  const data = await fetch('https://whatwherewhen.lakesoffire.org/events.json');
  const json = await data.json();
  res.json(json.coalesce);
}
