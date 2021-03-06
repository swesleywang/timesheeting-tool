/**
 * AccountController
 *
 * @description :: Server-side logic for managing Accounts in our system
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /** GET /api/accounts/ **/
    // find: function (req, res, next) {
        //TODO. Find all accounts
    // },

    /** GET /api/accounts/:id **/
    // findOne: function (req, res, next) {
        //TODO. Find an account
    // },


    /** POST /api/accounts/ **/
    create: function (req, res, next) {
        sails.services.passport.protocols.local.register(req.body, function (err, account) {
          if (err) return res.negotiate(err);

          console.log("created: " + account);

          res.ok(account);
        });
      },

    /** PUT /api/accounts/:id **/
    // update: function (req, res, next) {
        //TODO. Update an account
    // },

    /** DEL /api/accounts/:id **/
    // destroy: function (req, res, next) {
        //TODO. Delete an account. 
    // },

};

