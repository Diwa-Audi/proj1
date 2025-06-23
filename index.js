require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

const githubdata = {
  login: "Diwa-Audi",
  id: 216323294,
  node_id: "U_kgDODOTU3g",
  avatar_url: "https://avatars.githubusercontent.com/u/216323294?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Diwa-Audi",
  html_url: "https://github.com/Diwa-Audi",
  followers_url: "https://api.github.com/users/Diwa-Audi/followers",
  following_url:
    "https://api.github.com/users/Diwa-Audi/following{/other_user}",
  gists_url: "https://api.github.com/users/Diwa-Audi/gists{/gist_id}",
  starred_url: "https://api.github.com/users/Diwa-Audi/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Diwa-Audi/subscriptions",
  organizations_url: "https://api.github.com/users/Diwa-Audi/orgs",
  repos_url: "https://api.github.com/users/Diwa-Audi/repos",
  events_url: "https://api.github.com/users/Diwa-Audi/events{/privacy}",
  received_events_url: "https://api.github.com/users/Diwa-Audi/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Diwa Audichya",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 1,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2025-06-14T16:31:29Z",
  updated_at: "2025-06-14T16:32:15Z",
};

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Home page");
});

app.get("/check", (req, res) => {
  res.send("i hope this is working properly");
});

app.get('/github' , (req , res)=> {
  res.json(githubdata);
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
