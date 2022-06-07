import axios from 'axios';

const digitalWww = async (req, res) => {
  if (req.method === 'GET') {
    const response = await axios.get(
      'https://1lm2f7u6sg.execute-api.us-east-1.amazonaws.com/prod/'
    );
    return res.status(200).json(response.data);
  }
};

export default digitalWww;
