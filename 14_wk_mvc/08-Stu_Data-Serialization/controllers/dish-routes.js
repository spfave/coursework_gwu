const router = require("express").Router();
const sequelize = require("../config/connection");
const Dish = require("../models/Dish");

router.get("/", async (req, res) => {
  // TODO: Build out this route so that it serializes all of the dish objects that it receives. See the 'get' route below for a hint.
  try {
    const dishData = await Dish.findAll();

    if (!dishData) {
      res.status(404).json({ message: `No dishes in the database` });
      return;
    }

    const dishes = dishData.map(({ dataValues }) => dataValues);
    res.render("all", { dishes });
  } catch (error) {
    res.status(500).json(error);
  }
});

// route to get one dish
router.get("/dish/:id", async (req, res) => {
  try {
    const dishData = await Dish.findByPk(req.params.id);
    if (!dishData) {
      res.status(404).json({ message: "No dish with this id!" });
      return;
    }
    const dish = dishData.get({ plain: true });
    res.render("dish", dish);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
