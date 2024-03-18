import { connection as db } from "../config/index.js";
import { hash, compare } from "bcrypt";
import { createToken } from "../middleware/UserAuthenticate.js";
class Users {
  fetchUsers(req, res) {
    const qry = `
     select
     userID, firstName, lastName,
     userAge, gender, emailAdd
     from
     Users;
     `;
    db.query(qry, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  fetchUser(req, res) {
    const qry = `
        SELECT userID, firstName, lastName,
        userAge, gender, emailAdd, userPwd
        FROM Users
        WHERE userID = ${req.params.id};
        `;
    db.query(qry, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result,
      });
    });
  }
  async createUser(req, res) {
    // payload
    let data = req.body;
    data.userPwd = await hash(data?.userPwd, 10);
    let user = {
      emailAdd: data.emailAdd,
      userPwd: data.userPwd,
    };
    const qry = `
      insert into Users (firstName,  lastName, userAge, gender, emailAdd, userPwd)
      set ?;
      `;
    db.query(qry, [data], (err) => {
      if (err) {
        res.json({
          status: res.statusCode,
          msg: "This email address already exists",
        });
      } else {
        // create a token
        let token = createToken(user);
        res.json({
          status: res.statusCode,
          token,
          msg: "You're registered",
        });
      }
    });
  }
  async updateUser(req, res) {
    const data = req.body;
    if (data?.userPwd) {
      data.userPwd = await hash(data.userPwd, 8);
    }
    const qry = `
              UPDATE Users
              SET ?
              WHERE userID = ?`;
    db.query(qry, [data, req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "The user information is updated",
      });
    });
  }
  async deleteUser(req, res) {
    const qry = `
              DELETE FROM Users
              WHERE userID = ?`;
    db.query(qry, [req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "User has been deleted",
      });
    });
  }
  login(req, res) {
    const { emailAdd, userPwd } = req.body;
    const qry = `
        SELECT userID, firstName, lastName,
        userAge, gender, emailAdd, userPwd
        FROM Users
        WHERE emailAdd = '${emailAdd}';
        `;
    db.query(qry, async (err, result) => {
      if (err) throw err;
      if (!result?.length) {
        res.json({
          status: statusCode,
          msg: "Wrong email address provided",
        });
      } else {
        const validPass = await compare(userPwd, result[0].userPwd);
        if (validPass) {
          const token = createToken({
            emailAdd,
            userPwd,
          });
          res.json({
            status: res.statusCode,
            msg: "you're logged in",
            token,
            result: result[0],
          });
        } else {
          res.json({
            status: res.statusCode,
            msg: "Please provide the correct password",
          });
        }
      }
    });
  }
}
export { Users };