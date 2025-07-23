const {Session} = require('../models');
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
  static async getAllSessions(req, res, next) {
    try {
      const sessions = await Session.findAll();
      if (!sessions) {
        throw { name: "nodata", message: "No sessions found!" };
      }
      res.status(200).json(sessions);
    } catch (err) {
      next(err);
    }
  }
    static async getSessionById(req, res, next) {
        try {
            const session = await Session.findByPk(req.params.id);
            if (!session) {
                throw { name: "nodata", message: "No such session!" };
            }
            res.status(200).json(session);
        } catch (err) {
            next(err);
        }
    }
    static async updateSession(req, res, next) {
        try {
            const session = await Session.update(req.body, {
                where: { id: req.params.id }
            });
            if (!session) {
                throw { name: "nodata", message: "No such session!" };
            }
            res.status(200).json(session);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = SessionController;
