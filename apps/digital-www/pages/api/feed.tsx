export default async function handler(req, res) {
  // const data = await fetch('https://whatwherewhen.lakesoffire.org/events.json');
  const data = await fetch('http://localhost:4200/events.json');
  const json = await data.json();
  res.json(json.coalesce);
}
