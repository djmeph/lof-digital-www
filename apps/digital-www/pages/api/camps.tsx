import axios from 'axios';

const digitalWww = async (req, res) => {
  if (req.method === 'GET') {
    const response = await axios.get(
      'http://lakesoffire.org/wp-content/uploads/2022/06/2022-camps.txt'
    );
    return res.status(200).json(response.data);
  }
};

export default digitalWww;
