const Session = require('../models/session.js');
class SessionController {
  static async createSession(req,res,next){
    try {
      const { startDate, isRunning, endDate, RoomId, UserTenantId } = req.body;
      const session = await Session.create({ startDate, isRunning, endDate, RoomId, UserTenantId });
      res.status(201).json(session);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = SessionController;
