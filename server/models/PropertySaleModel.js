const mongoose = require("mongoose");

const propertySaleSchema = new mongoose.Schema(
  {
    currentOwner: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    type: {
      type: String,
      enum: [
        "Penthouse",
        "Villa",
        "Garden Apartment",
        "Apartment",
        "Shared Apartment",
        "ground",
        "Caravan",
      ],
    },
    mainImage: {
      type: String,
      default:
        "https://img.freepik.com/free-vector/illustration-modern-house-sale_23-2148651685.jpg?w=740&t=st=1693306508~exp=1693307108~hmac=0c48babc190d6c0ffcfb16b7832b5c9b8019f39fbbd9438ecb7a9ec2fafc16a8",
    },

    location: String,
    squareMeters: Number,
    rooms: Number,
    bathrooms: Number,
    price: Number,
    images: [],
    description: String,
    phoneNumber: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("propertySale", propertySaleSchema);

exports.validatePropertySale = (_bodyData) => {
  const joiSchema = Joi.object({
    phoneNumber: Joi.string().min(4).max(20).required(),
    description: Joi.string().min(2).max(1000).required(),
    location: Joi.string().min(2).max(200).required(),
    price: Joi.number().min(1).max(90000000).required(),
    squareMeters: Joi.number().min(1).max(10000).required(),
    rooms: Joi.number().max(1000).required(),
    bathrooms: Joi.number().max(500).required(),
    mainImage: Joi.string().max(2800).allow(null, ""),
    images: Joi.array().max(2800).allow(null, ""),
    type: Joi.string()
      .valid(
        "Penthouse",
        "Villa",
        "Garden Apartment",
        "Apartment",
        "Shared Apartment",
        "ground",
        "Caravan"
      )
      .required(),
  });
  return joiSchema.validate(_bodyData);
};
