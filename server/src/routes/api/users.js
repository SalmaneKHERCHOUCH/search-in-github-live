import { Router } from "express";

require('isomorphic-fetch');


const { PrismaClient } = require('@prisma/client');

const api = Router();
const prisma = new PrismaClient()

const token_git = process.env.TOKEN

api.get("/:username", async (request, response) => {


  const { username } = request.params;

  if (!request) {
    return response.status(400).json({
      status: 'error',
      error: 'request body cannot be empty',
    });
  }

    const requestGitApi = require('request');

    var options = {
      uri: `https://api.github.com/users/${username}`,
      method: 'GET',
      headers: {'user-agent': 'node.js','Authorization': `Bearer ` + token_git}
    };


    const searchUser = await prisma.user.findUnique({where: {login: username}});

   async function createNewGit(newUser) {
    const searchUser = await prisma.user.create({
      data: {
        idGit: newUser.id,
        login: newUser.login,
        node_id: newUser.node_id,
        avatar_url: newUser.avatar_url,
        gravatar_id: newUser.gravatar_id,
        url: newUser.url,
        html_url: newUser.html_url,
        followers_url: newUser.followers_url,
        following_url: newUser.followers_url,
        gists_url: newUser.gists_url,
        starred_url: newUser.starred_url,
        subscriptions_url: newUser.subscriptions_url,
        organizations_url: newUser.organizations_url,
        repos_url: newUser.repos_url,
        events_url: newUser.events_url,
        received_events_url: newUser.received_events_url,
        type: newUser.type,
        site_admin: newUser.site_admin,
        name: newUser.name,
        company: newUser.company,
        blog: newUser.blog,
        location: newUser.location,
        email: newUser.email,
        bio: newUser.bio,
        twitter_username: newUser.twitter_username,
        public_repos: newUser.public_repos,
        public_gists: newUser.public_gists,
        followers: newUser.followers,
        following: newUser.following,
        created_at: newUser.created_at,
        updated_at: newUser.updated_at
      },
    })
  }

  if(!searchUser) {
    requestGitApi(options,function (error,responseGitApi,body){
      body = JSON.parse(body)
      if(!error && responseGitApi.statusCode == 200){
          response.json({
            data: { body },
          });
         createNewGit(body);
         console.log("Insertion d'utilisateur");
      }else{
        response.json({
          data: {} ,
        });
      }
    })
  }

  else {
    console.log("Récupération des infos depuis la base")
   response.json({
     data: {searchUser}
   })

  }
  
});



export default api;
