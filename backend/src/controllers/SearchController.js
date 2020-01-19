const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/ParseStringAsArray');

class SearchController {
  async index(req, res) {
    const { latitude, longitude, techs } = req.query;

    const techsArray = parseStringAsArray(techs);

    const devs = await Dev.find({
      techs: {
        //operadores logicos do mongoDB: $eq, $gt, $gte, $in, $lt, $lte, $ne, $nin
        $in: techsArray,
      },
      location: {
        $near: {
          //perto da geometria
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000, //em 10 metros de distancia máxima
        },
      },
    });

    return res.json({ devs });
  }
}

module.exports = new SearchController();
