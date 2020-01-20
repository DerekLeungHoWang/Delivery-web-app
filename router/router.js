const passport = require("passport");

module.exports = express => {
	const router = express.Router();
	function isLoggedIn(req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		}
		res.redirect("/login"); // or redirect to '/signup'
	}

  router.get("/secret", isLoggedIn, (req, res) => {
    res.send("Here you go, a secret");
  });

  router.get("/login", (req, res) => {
    res.render("logSign");
  });

  router.get("/signup", (req, res) => {
    res.render("signup");
  });

	router.post(
		"/signedin",
		passport.authenticate("local-login", {
			successRedirect: "/",
			failureRedirect: "/error"
		})
	);

  //   router.get("/signup", (req, res) => {
  //     res.sendFile(__dirname + "/html/signup.html");
  //   });

	router.post(
		"/signup",
		passport.authenticate("local-signup", {
			successRedirect: "/",
			failureRedirect: "/error"
		})
	);

	router.get("/error", (req, res) => {
		res.send("You are not logged in!");
	});

  router.get('/logout', (req, res)=>{
    req.logout();
    res.redirect('/');
    console.log('logged out')
  });


  router.get(
    "/auth/facebook",
    passport.authenticate("facebook", {
      scope: ["email", "user_gender", "user_link"]
    })
  );

	router.get(
		"/auth/facebook/callback",
		passport.authenticate("facebook", {
			successRedirect: "/",

      failureRedirect: "/contact"
    })
  );

  router.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["https://www.googleapis.com/auth/plus.login"]
    })
  );

  router.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/login" }),
    function(req, res) {
      res.redirect("/");
    }
  );
  return router;
};

//google
