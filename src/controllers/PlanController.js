import * as Yup from 'yup';

import Plan from '../models/Plan';

class PlanController {
  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      duration: Yup.number()
        .positive()
        .required(),
      price: Yup.number()
        .positive()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { title, duration, price } = req.body;

    const plans = await Plan.create(req.body);

    return res.json(plans);
  }

  async index(req, res) {
    const plans = await Plan.findAll();

    return res.json(plans);
  }
}

export default new PlanController();