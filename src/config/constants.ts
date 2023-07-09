import globals from "./globals.json";

export default Object.freeze({
  domain: globals.domain,
  basePath: globals.basePath,
  serviceCuriosity: globals.services.curiosity,
  serviceOpportunity: globals.services.opportunity,
  serviceSpirit: globals.services.spirit,
  mongo_uri: "",
  port: "" || 8080,
});
