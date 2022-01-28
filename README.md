# WeTube - YouTube Clone

# The Layout

## Routers

> The WeTube consist of 3 Routers.
> rootRouter, videoRouter and userRouter.
> As the names suggest, they are categorized by their respective function.

### rootRouter

> rootRouter handles global tasks

- Inside of rootRouter, there are 4 routes.
- `"/"`, `home` controller
- `"/join"`, `getJoin` & `postJoin` controllers
- `"/login"`, `getLogin` & `postLogin` controllers
- `"/search"`, `search` controller

### userRouter

> userRouter handles tasks related to the user

- Inside of `/users`, userRouter, there are 6 routes.
- `/logout`, `logout` controller
- `/edit`, `getEdit` & `postEdit` controllers
- `/change-password`, `getChangePassword` & `postChangePassword` controllers
- `/github/start`, `startGithubLogin` controller
- `/github/finish`, `finishGithubLogin` controller
- `/:id`, `see` controller

### videoRouter

> videoRouter handles tasks related to the video

- Inside of `/videos`, videoRouter, there are 4 routes.
- `/:id`, `watch` controller
- `/:id/edit`, `getEdit` & `postEdit` controllers
- `/:id/delete`, `deleteVideo` controller
- `/upload`, `getUplaod` & `postUpload` controllers

<!-- To add controllers explanation -->
