const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/ParseStringAsArray');

//index, show, store, update, destroy

class DevController {
  async index(req, res) {
    const devs = await Dev.find();
    return res.json(devs);
  }

  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      const apiResponse = await axios.get(
        `https://api.github.com/users/${github_username}`
      );

      const { name = login, avatar_url, bio } = apiResponse.data;

      const techsArray = parseStringAsArray(techs);

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };

      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location,
      });
    }

    return res.json(dev);
  }
  async update(req, res) {
    const { id } = req.params;

    if (!id) {
      return res
        .status(400)
        .json({ error: 'Id do usuário deve ser informado' });
    }

    let dev = await Dev.findById(id);

    const {
      latitude = dev.location.coordinates[1],
      longitude = dev.location.coordinates[0],
      techs,
    } = req.body;

    if (dev) {
      const apiResponse = await axios.get(
        `https://api.github.com/users/${dev.github_username}`
      );

      const { name = login, avatar_url, bio } = apiResponse.data;

      const techsArray = parseStringAsArray(techs);

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };

      dev = await dev.update({
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location,
      });
      return res.json({ message: 'Dev atualizado com sucesso!' });
    } else {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
  }

  async destroy(req, res) {
    const { id } = req.params;

    const devDeleted = await Dev.findByIdAndDelete(id);

    if (devDeleted) {
      res.send();
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  }
}

module.exports = new DevController();
