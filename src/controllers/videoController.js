let videos = [
  {
    title: "Video #1",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 1,
  },
  {
    title: "Video #2",
    rating: 2,
    comments: 21,
    createdAt: "5 minutes ago",
    views: 540,
    id: 2,
  },
  {
    title: "Video #3",
    rating: 4,
    comments: 24,
    createdAt: "3 minutes ago",
    views: 700,
    id: 3,
  },
];

export const trending = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};

export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};

export const edit = (req, res) =>
  res.render("edit", { pageTitle: "Edit", videoNumber: `${req.params.id}` });

export const search = (req, res) => res.send("Search Video");

export const upload = (req, res) => res.send("Upload Video");

export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};
