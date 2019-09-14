const header = require("../stateData/header");
const contact_form = require("../stateData/contactForm");
const nav = require("../stateData/nav");
const social = require("../stateData/social");
const contactInfo = require("../stateData/contactInfo");
const footer = require("../stateData/footer");
const home = require("../stateData/home");
const contact = require("../stateData/contact");
const faq = require("../stateData/faq");

function getStateData() {
  return {
    header,
    contact_form,
    nav,
    social,
    contactInfo,
    footer,
    home
  }
}

module.exports = {
  getStateData,
  contact,
  faq
}