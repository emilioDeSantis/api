import React from 'react';
import './App.css';

import * as functions from './functions.js'

import { withAuthenticator } from 'aws-amplify-react'



function App() {

  return (
    <div style={{ width: '130px' }}>
      {/* <button onClick={() => functions.add_chef({
        username: 'james',
        image_key: 'jytfkfkuyf',
        biography: 'jytfd iuyg uyfuyf iuyf'
      })}>add chef</button>

      <button onClick={() => functions.add_original({
        title: 'pizza', 
        image_key: 'jytdkuyfuyfkuy',
        serves: 2,
        cook_time: 30,
        ingredients: [],
        procedure: [],
        caption: 'jytd jytf uyf'
      })}>add original</button>

      <button onClick={() => functions.add_remake({
        title: 'pizza', 
        image_key: 'jytdkuyfuyfkuy',
        caption: 'jytd jytf uyf',
        text: 'khgcd kuyf kifuyuyf liug',
        postRecipeId: 'b1d8bfbb-8d27-4d24-a5df-ad1d6b3c058a'
      })}>add remake</button>

      <button onClick={() => functions.add_comment({
        text: 'iuyfiuyf uiyf uiyf', 
        commentPostId: '08e5af3b-a41d-4710-9265-a74e19a76153'
      })}>add comment</button>

      <button onClick={() => functions.add_like({
        likePostId: '08e5af3b-a41d-4710-9265-a74e19a76153'
      })}>add like</button>

      <button onClick={() => functions.add_follow({
        followChef_followId: '37ea7850-4102-4a6d-8f4f-20eebfd62bed'
      })}>add follow</button>

      <button onClick={() => functions.add_stash({
        stashRecipeId: 'b1d8bfbb-8d27-4d24-a5df-ad1d6b3c058a'
      })}>add stash</button> */}

      <button onClick={async () => console.log(await functions.get_recipe_by_post_id({
        id: '08e5af3b-a41d-4710-9265-a74e19a76153'
      }))}>get recipe by post id</button>

      <button onClick={async () => console.log(await functions.get_stash_recipes())}>get stash recipes</button>

      <button onClick={async () => console.log(await functions.get_post_by_tip_id({
        id: '3409cedb-6d72-4cdd-a2e8-759c2eb4fad2'
      }))}>get post by tip id</button>

      <button onClick={async () => console.log(await functions.get_posts_by_chef_id({
        id: '25d6adb2-8adc-4c9a-acd1-a10da9a22803'
      }))}>get posts by chef id</button>

      <button onClick={async () => console.log(await functions.get_remake_posts_by_recipe_id({
        id: 'b1d8bfbb-8d27-4d24-a5df-ad1d6b3c058a'
      }))}>get remake posts by recipe id</button>

      <button onClick={async () => console.log(await functions.get_chef_by_id({
        id: '25d6adb2-8adc-4c9a-acd1-a10da9a22803'
      }))}>get_chef_by_id</button>

      <button onClick={async () => console.log(await functions.get_chef_by_profile())}>get_chef_by_profile</button>

      <button onClick={async () => console.log(await functions.get_chef_by_like_id({
        id: '8b043c64-b2af-4eaa-a6b9-625ba28cb285'
      }))}>get_chef_by_like_id</button>

      <button onClick={async () => console.log(await functions.get_chef_by_comment_id({
        id: 'cafcc825-807f-4394-b829-f2252a562c05'
      }))}>get_chef_by_comment_id</button>

      <button onClick={async () => console.log(await functions.get_chef_by_tip_id({
        id: '3409cedb-6d72-4cdd-a2e8-759c2eb4fad2'
      }))}>get_chef_by_tip_id</button>

      <button onClick={async () => console.log(await functions.get_chef_by_follower_id({
        id: '7d5cc12d-61f5-4771-8751-9ae0c50cf0b4'
      }))}>get_chef_by_follower_id</button>

      <button onClick={async () => console.log(await functions.get_chef_by_following_id({
        id: '7d5cc12d-61f5-4771-8751-9ae0c50cf0b4'
      }))}>get_chef_by_following_id</button>

      <button onClick={async () => console.log(await functions.get_chef_by_recipe_id({
        id: 'b1d8bfbb-8d27-4d24-a5df-ad1d6b3c058a'
      }))}>get_chef_by_recipe_id</button>

      <button onClick={async () => console.log(await functions.get_chef_by_post_id({
        id: '7935340f-b70a-4fd3-9516-6433e31af59a'
      }))}>get_chef_by_post_id</button>

      <button onClick={async () => console.log(await functions.get_tips_by_recipe_id({
        id: 'b1d8bfbb-8d27-4d24-a5df-ad1d6b3c058a'
      }))}>get_tips_by_recipe_id</button>

      <button onClick={async () => console.log(await functions.get_tips_by_post_id({
        id: '08e5af3b-a41d-4710-9265-a74e19a76153'
      }))}>get_tips_by_post_id</button>

      <button onClick={async () => console.log(await functions.get_comments_by_post_id({
        id: '08e5af3b-a41d-4710-9265-a74e19a76153'
      }))}>get_comments_by_post_id</button>

      <button onClick={async () => console.log(await functions.get_likes_by_post_id({
        id: '08e5af3b-a41d-4710-9265-a74e19a76153'
      }))}>get_likes_by_post_id</button>

      <button onClick={async () => console.log(await functions.get_followers_by_profile())}>get_followers_by_profile</button>

      <button onClick={async () => console.log(await functions.get_following_by_profile())}>get_following_by_profile</button>

      <button onClick={async () => console.log(await functions.get_followers_by_chef_id({
        id: '25d6adb2-8adc-4c9a-acd1-a10da9a22803'
      }))}>get_followers_by_chef_id</button>

      <button onClick={async () => console.log(await functions.get_following_by_chef_id({
        id: '37ea7850-4102-4a6d-8f4f-20eebfd62bed'
      }))}>get_following_by_chef_id</button>


      {/* <button onClick={() => functions.get_chef({
        id: '25d6adb2-8adc-4c9a-acd1-a10da9a22803'
      })}>get chef</button> */}
    </div>
  );
}

export default withAuthenticator(App,{
  includeGreetings: true
})

















