import axios from "axios";

const digitalWww = async (req, res) => {
  if (req.method === 'GET') {
    const response = await axios.get('https://whatwherewhen.lakesoffire.org/events.json');
    return res.status(200).json(response.data);
  }
};

export default digitalWww;
