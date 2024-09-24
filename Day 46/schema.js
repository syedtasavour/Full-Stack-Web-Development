const Joi = require('joi');
module.exports.listingSchema = Joi.object({
    listing:Joi.object({
        title:Joi.string().required(),
        description:Joi.string().required(),
        image:Joi.string().allow("",null),
        price:Joi.number().required(),
        country:Joi.string().required().min(1),
        location:Joi.string().required(),
    }).required()
});