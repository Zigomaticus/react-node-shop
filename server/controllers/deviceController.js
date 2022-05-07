const { Device } = require("../models/models");
const ApiError = require("../error/ApiError");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

class DeviceController {
  async create(req, res, next) {
    try {
      const { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files;
      let fileName = uuidv4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        img: fileName,
      });
      return res.json();
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getAll(req, res) {}
  async getOne(req, res) {
    const devices = await Device.findAll();
    return res.json(devices);
  }
}

module.exports = new DeviceController();
