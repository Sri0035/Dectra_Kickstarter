const routes = require("next-routes")();

routes
  .add("/Campaigns/new", "/Campaigns/new")
  .add("/Campaigns/:address", "/Campaigns/show")
  .add("/Campaigns/:address/requests", "/Campaigns/requests/index")
  .add("/Campaigns/:address/requests/new", "/Campaigns/requests/new");
  
module.exports = routes;
