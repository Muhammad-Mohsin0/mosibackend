require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
const githubData = {
    "login": "Muhammad-Mohsin0",
    "id": 154534482,
    "node_id": "U_kgDOCTYCUg",
    "avatar_url": "https://avatars.githubusercontent.com/u/154534482?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Muhammad-Mohsin0",
    "html_url": "https://github.com/Muhammad-Mohsin0",
    "followers_url": "https://api.github.com/users/Muhammad-Mohsin0/followers",
    "following_url": "https://api.github.com/users/Muhammad-Mohsin0/following{/other_user}",
    "gists_url": "https://api.github.com/users/Muhammad-Mohsin0/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Muhammad-Mohsin0/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Muhammad-Mohsin0/subscriptions",
    "organizations_url": "https://api.github.com/users/Muhammad-Mohsin0/orgs",
    "repos_url": "https://api.github.com/users/Muhammad-Mohsin0/repos",
    "events_url": "https://api.github.com/users/Muhammad-Mohsin0/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Muhammad-Mohsin0/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 12,
    "public_gists": 0,
    "followers": 3,
    "following": 5,
    "created_at": "2023-12-21T14:51:09Z",
    "updated_at": "2025-04-14T04:54:42Z"
  }
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter',(req, res) => {
    res.send('NewsAccount')
})

app.get('/login',(req,res) => {
    res.send('<h1>Please Login throug Gmail<h1/>')
})

app.get('/youtube', (req,res) =>{
    res.send('<h2>Mouhsina Vlog <h2/>')
})

app.get('/github', (req ,res) =>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
