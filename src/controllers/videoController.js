const fakeUser = {
  username: "Comographer",
  loggedIn: true,
};

export const trending = (req, res) =>
  res.render("home", { pageTitle: "Home", fakeUser });

export const see = (req, res) =>
  res.render("watch", { pageTitle: "Watch", videoNumber: `${req.params.id}` });

export const edit = (req, res) =>
  res.render("edit", { pageTitle: "Edit", videoNumber: `${req.params.id}` });

export const search = (req, res) => res.send("Search Video");

export const upload = (req, res) => res.send("Upload Video");

export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};
