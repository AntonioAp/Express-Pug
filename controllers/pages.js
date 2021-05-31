const pages = {
    home:(req, res) => {
        res.status(200).render('home');

      },
    about:(req, res) => {
        res.status(200).render("about");
      },
    contact:(req, res) => {
        res.status(200).render("contact");
      },
    mission:(req, res) => {
        res.status(200).render("mission");
       
    },
    location:(req, res) => {
        res.status(200).render("Location");
      }
}

module.exports = pages;