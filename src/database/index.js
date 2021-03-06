import Sequelize from 'sequelize';
import User from '../models/User';
import Student from '../models/Student';
import Plan from '../models/Plan';
import Registration from '../models/Registration';
import Checkin from '../models/Checkin';
import HelpOrder from '../models/HelpOrder';

import databaseConfig from '../config/database';

const models = [User, Student, Plan, Registration, Checkin, HelpOrder];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
