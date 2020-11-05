import * as mutations from './graphql/_mutations.js'
import * as queries from './graphql/_queries.js'

import Amplify, { API } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

const user_id = '25d6adb2-8adc-4c9a-acd1-a10da9a22803'

export const add_chef = async (input) => {
    const chef = await API.graphql({query: mutations.createChef, variables: {input: input}})
    console.log(chef);
}

export const add_original = async (input) => {
    const recipe_input = {
        title: input.title, 
        image_key: input.image_key, 
        serves: input.serves, 
        cook_time: input.cook_time, 
        recipeChefId: user_id,
        ingredients: input.ingredients,
        procedure: input.procedure
    }

    const recipe = await API.graphql({query: mutations.createRecipe, variables: {input: recipe_input}})
    console.log(recipe);

    const post_input = {
        title: input.title, 
        type: 'original',
        caption: input.caption,
        image_key: input.image_key, 
        postRecipeId: recipe.data.createRecipe.id,
        postChefId: user_id
    }

    const post = await API.graphql({query: mutations.createPost, variables: {input: post_input}})
    console.log(post);

    const recipe_update = {
        id: recipe.data.createRecipe.id,
        recipePostId: post.data.createPost.id
    }

    API.graphql({query: mutations.updateRecipe, variables: {input: recipe_update}})
}

export const add_remake = async (input) => {

    const post_input = {
        title: input.title, 
        type: 'remake',
        caption: input.caption,
        image_key: input.image_key, 
        postRecipeId: input.postRecipeId,
        postChefId: user_id
    }

    const post = await API.graphql({query: mutations.createPost, variables: {input: post_input}})
    console.log(post);

    const tip_input = {
        text: input.text,
        tipRemake_postId: post.data.createPost.id,
        tipPostId: post.data.createPost.recipe.post.id,
        tipRecipeId: input.postRecipeId,
        tipChefId: user_id
    }

    const tip = await API.graphql({query: mutations.createTip, variables: {input: tip_input}})
    console.log(tip);

    const post_update = {
        id: post.data.createPost.id,
        postRemake_tipId: tip.data.createTip.id
    }

    API.graphql({query: mutations.updatePost, variables: {input: post_update}})
}

export const add_comment = async (input) => {

    input.commentChefId = user_id

    const comment = await API.graphql({query: mutations.createComment, variables: {input: input}})
    console.log(comment);
}

export const add_like = async (input) => {

    input.likeChefId = user_id

    const like = await API.graphql({query: mutations.createLike, variables: {input: input}})
    console.log(like);
}

export const add_follow = async (input) => {

    input.followFollow_chefId = user_id

    const follow = await API.graphql({query: mutations.createFollow, variables: {input: input}})
    console.log(follow);
}

export const add_stash = async (input) => {

    input.stashChefId = user_id

    const stash = await API.graphql({query: mutations.createStash, variables: {input: input}})
    console.log(stash);
}

////////////////////////////////////////////
 
export const get_recipe_by_post_id = async (id) => {
    
    try {
        const res = await API.graphql({query: queries.getRecipeByPostId, variables: id})
        // console.log(res);
        const recipe = res.data.getPost.recipe
        try {
            // recipe.image_link = await Storage.get(recipe.image_key, {
            //     contentType: 'image/jpeg'
            // })
            delete recipe.image_key
            try {
                // recipe.chef.image_link = await Storage.get(recipe.chef.image_key, {
                //     contentType: 'image/jpeg'
                // })
                delete recipe.chef.image_key
                return recipe
            } catch (err) {
                console.log(err)
            }
        } catch (err) {
            console.log(err)
        }
    } catch (err) {
        console.log(err)
    }
}

export const get_stash_recipes = async () => {

    try {
        const id = user_id

        const format = async (item) => {
            const recipe = item.recipe
            try {
                // recipe.image_link = await Storage.get(recipe.image_key, {
                //     contentType: 'image/jpeg'
                // })
                delete recipe.image_key
                try {
                    // recipe.chef.image_link = await Storage.get(recipe.chef.image_key, {
                    //     contentType: 'image/jpeg'
                    // })
                    delete recipe.chef.image_key
                    return recipe
                } catch (err) {
                    console.log(err)
                }
            } catch (err) {
                console.log(err)
            }
        }

        const res = await API.graphql({query: queries.getStashRecipes, variables: {id: id}})
        // console.log(res);
        let recipes = []
        await Promise.all(res.data.getChef.stashes.items.map(item => format(item))).then(data => {
            recipes = data
        })
        return recipes
    } catch (err) {
        console.log(err)
    }
}

export const get_post_by_tip_id = async (id) => {

    try {
        const res = await API.graphql({query: queries.getPostByTipId, variables: id})
        // console.log(res);
        const post = res.data.getTip.remake_post
        try {
            // post.image_link = await Storage.get(post.image_key, {
            //     contentType: 'image/jpeg'
            // })
            delete post.image_key
            try {
                // post.chef.image_link = await Storage.get(post.chef.image_key, {
                //     contentType: 'image/jpeg'
                // })
                delete post.chef.image_key
                post.comments = post.comments.items.length
                post.likes = post.likes.items.length
                post.tips = post.tips.items.length
                return post
            } catch (err) {
                console.log(err)
            }
        } catch (err) {
            console.log(err)
        }
    } catch (err) {
        console.log(err)
    }
}

export const get_posts_by_chef_id = async (id) => {

    try {

        const format = async (post) => {
            // const post = item.post
            try {
                // post.image_link = await Storage.get(post.image_key, {
                //     contentType: 'image/jpeg'
                // })
                delete post.image_key
                try {
                    // post.chef.image_link = await Storage.get(post.chef.image_key, {
                    //     contentType: 'image/jpeg'
                    // })
                    delete post.chef.image_key
                    post.comments = post.comments.items.length
                    post.likes = post.likes.items.length
                    post.tips = post.tips.items.length
                    return post
                } catch (err) {
                    console.log(err)
                }
            } catch (err) {
                console.log(err)
            }
        }

        const res = await API.graphql({query: queries.getPostsByChefId, variables: id})
        // console.log(res);
        let posts = []
        await Promise.all(res.data.getChef.posts.items.map(item => format(item))).then(data => {
            posts = data
        })
        return posts
    } catch (err) {
        console.log(err)
    }
}

export const get_remake_posts_by_recipe_id = async (id) => {

    try {

        const format = async (item) => {
            const post = item.post
            // const post = item.post
            try {
                // post.image_link = await Storage.get(post.image_key, {
                //     contentType: 'image/jpeg'
                // })
                delete post.image_key
                try {
                    // post.chef.image_link = await Storage.get(post.chef.image_key, {
                    //     contentType: 'image/jpeg'
                    // })
                    delete post.chef.image_key
                    post.comments = post.comments.items.length
                    post.likes = post.likes.items.length
                    return post
                } catch (err) {
                    console.log(err)
                }
            } catch (err) {
                console.log(err)
            }
        }

        const res = await API.graphql({query: queries.getRemakePostsByRecipeId, variables: id})
        // console.log(res);
        let posts = []
        await Promise.all(res.data.getRecipe.recipe_tips.items.map(item => format(item))).then(data => {
            posts = data
        })
        return posts
    } catch (err) {
        console.log(err)
    }


}

export const get_chef_by_id = async (id) => {
    
    try {
        const res = await API.graphql({query: queries.getChefById, variables: id})
        // console.log(res);
        const chef = res.data.getChef
        try {
            // chef.image_link = await Storage.get(chef.image_key, {
            //     contentType: 'image/jpeg'
            // })
            delete chef.image_key

            chef.followers = chef.followers.items.length
            chef.following = chef.following.items.length

            let remakes = 0

            function get_posts(item){
                if (item.type === "remake"){
                    remakes++
                }
            }

            chef.posts.items.forEach(item => get_posts(item))

            chef.remakes = remakes

            delete chef.posts

            return chef
        } catch (err) {
            console.log(err)
        }
    } catch (err) {
        console.log(err)
    }
}

export const get_chef_by_profile = async () => {

    const id = user_id

    try {
        const res = await API.graphql({query: queries.getChefById, variables: { id: id }})
        // console.log(res);
        const chef = res.data.getChef
        try {
            // chef.image_link = await Storage.get(chef.image_key, {
            //     contentType: 'image/jpeg'
            // })
            delete chef.image_key

            chef.followers = chef.followers.items.length
            chef.following = chef.following.items.length

            let remakes = 0

            function get_posts(item){
                if (item.type === "remake"){
                    remakes++
                }
            }

            chef.posts.items.forEach(item => get_posts(item))

            chef.remakes = remakes

            delete chef.posts

            return chef
        } catch (err) {
            console.log(err)
        }
    } catch (err) {
        console.log(err)
    }
}

export const get_chef_by_like_id = async (id) => {
    
    try {
        const res = await API.graphql({query: queries.getChefByLikeId, variables: id})
        // console.log(res);
        const chef = res.data.getLike.chef
        try {
            // chef.image_link = await Storage.get(chef.image_key, {
            //     contentType: 'image/jpeg'
            // })
            delete chef.image_key

            chef.followers = chef.followers.items.length
            chef.following = chef.following.items.length

            let remakes = 0

            function get_posts(item){
                if (item.type === "remake"){
                    remakes++
                }
            }

            chef.posts.items.forEach(item => get_posts(item))

            chef.remakes = remakes

            delete chef.posts

            return chef
        } catch (err) {
            console.log(err)
        }
    } catch (err) {
        console.log(err)
    }
}

export const get_chef_by_comment_id = async (id) => {

    try {
        const res = await API.graphql({query: queries.getChefByCommentId, variables: id})
        // console.log(res);
        const chef = res.data.getComment.chef
        try {
            // chef.image_link = await Storage.get(chef.image_key, {
            //     contentType: 'image/jpeg'
            // })
            delete chef.image_key

            chef.followers = chef.followers.items.length
            chef.following = chef.following.items.length

            let remakes = 0

            function get_posts(item){
                if (item.type === "remake"){
                    remakes++
                }
            }

            chef.posts.items.forEach(item => get_posts(item))

            chef.remakes = remakes

            delete chef.posts

            return chef
        } catch (err) {
            console.log(err)
        }
    } catch (err) {
        console.log(err)
    }
}

export const get_chef_by_tip_id = async (id) => {

    try {
        const res = await API.graphql({query: queries.getChefByTipId, variables: id})
        // console.log(res);
        const chef = res.data.getTip.chef
        try {
            // chef.image_link = await Storage.get(chef.image_key, {
            //     contentType: 'image/jpeg'
            // })
            delete chef.image_key

            chef.followers = chef.followers.items.length
            chef.following = chef.following.items.length

            let remakes = 0

            function get_posts(item){
                if (item.type === "remake"){
                    remakes++
                }
            }

            chef.posts.items.forEach(item => get_posts(item))

            chef.remakes = remakes

            delete chef.posts

            return chef
        } catch (err) {
            console.log(err)
        }
    } catch (err) {
        console.log(err)
    }
}

export const get_chef_by_follower_id = async (id) => {
    
    try {
        const res = await API.graphql({query: queries.getChefByFollowerId, variables: id})
        // console.log(res);
        const chef = res.data.getFollow.follow_chef
        try {
            // chef.image_link = await Storage.get(chef.image_key, {
            //     contentType: 'image/jpeg'
            // })
            delete chef.image_key

            chef.followers = chef.followers.items.length
            chef.following = chef.following.items.length

            let remakes = 0

            function get_posts(item){
                if (item.type === "remake"){
                    remakes++
                }
            }

            chef.posts.items.forEach(item => get_posts(item))

            chef.remakes = remakes

            delete chef.posts

            return chef
        } catch (err) {
            console.log(err)
        }
    } catch (err) {
        console.log(err)
    }
}

export const get_chef_by_following_id = async (id) => {
    
    try {
        const res = await API.graphql({query: queries.getChefByFollowingId, variables: id})
        // console.log(res);
        const chef = res.data.getFollow.chef_follow
        try {
            // chef.image_link = await Storage.get(chef.image_key, {
            //     contentType: 'image/jpeg'
            // })
            delete chef.image_key

            chef.followers = chef.followers.items.length
            chef.following = chef.following.items.length

            let remakes = 0

            function get_posts(item){
                if (item.type === "remake"){
                    remakes++
                }
            }

            chef.posts.items.forEach(item => get_posts(item))

            chef.remakes = remakes

            delete chef.posts

            return chef
        } catch (err) {
            console.log(err)
        }
    } catch (err) {
        console.log(err)
    }
}

export const get_chef_by_recipe_id = async (id) => {
    
    try {
        const res = await API.graphql({query: queries.getChefByRecipeId, variables: id})
        // console.log(res);
        const chef = res.data.getRecipe.chef
        try {
            // chef.image_link = await Storage.get(chef.image_key, {
            //     contentType: 'image/jpeg'
            // })
            delete chef.image_key

            chef.followers = chef.followers.items.length
            chef.following = chef.following.items.length

            let remakes = 0

            function get_posts(item){
                if (item.type === "remake"){
                    remakes++
                }
            }

            chef.posts.items.forEach(item => get_posts(item))

            chef.remakes = remakes

            delete chef.posts

            return chef
        } catch (err) {
            console.log(err)
        }
    } catch (err) {
        console.log(err)
    }
}

export const get_chef_by_post_id = async (id) => {

    try {
        const res = await API.graphql({query: queries.getChefBypostId, variables: id})
        // console.log(res);
        const chef = res.data.getPost.chef
        try {
            // chef.image_link = await Storage.get(chef.image_key, {
            //     contentType: 'image/jpeg'
            // })
            delete chef.image_key

            chef.followers = chef.followers.items.length
            chef.following = chef.following.items.length

            let remakes = 0

            function get_posts(item){
                if (item.type === "remake"){
                    remakes++
                }
            }

            chef.posts.items.forEach(item => get_posts(item))

            chef.remakes = remakes

            delete chef.posts

            return chef
        } catch (err) {
            console.log(err)
        }
    } catch (err) {
        console.log(err)
    }
}

export const get_tips_by_recipe_id = async (id) => {

    try {

        const format = async (tip) => {

            try {
                // tip.chef.image_link = await Storage.get(tip.chef.image_key, {
                //     contentType: 'image/jpeg'
                // })
                delete tip.chef.image_key
                return tip
            } catch (err) {
                console.log(err)
            }
        }

        const res = await API.graphql({query: queries.getTipsByRecipeId, variables: id})
        // console.log(res);
        let tips = []
        await Promise.all(res.data.getRecipe.recipe_tips.items.map(item => format(item))).then(data => {
            tips = data
        })
        return tips
    } catch (err) {
        console.log(err)
    }

}

export const get_tips_by_post_id = async (id) => {

    try {
        const format = async (tip) => {

            try {
                // tip.chef.image_link = await Storage.get(tip.chef.image_key, {
                //     contentType: 'image/jpeg'
                // })
                delete tip.chef.image_key
                return tip
            } catch (err) {
                console.log(err)
            }
        }

        const res = await API.graphql({query: queries.getTipsByPostId, variables: id})
        // console.log(res);
        let tips = []
        await Promise.all(res.data.getPost.tips.items.map(item => format(item))).then(data => {
            tips = data
        })
        return tips
    } catch (err) {
        console.log(err)
    }
}

export const get_comments_by_post_id = async (id) => {

    try {
        const format = async (comment) => {

            try {
                // comment.chef.image_link = await Storage.get(comment.chef.image_key, {
                //     contentType: 'image/jpeg'
                // })
                delete comment.chef.image_key
                return comment
            } catch (err) {
                console.log(err)
            }
        }

        const res = await API.graphql({query: queries.getCommentsByPostId, variables: id})
        // console.log(res);
        let comments = []
        await Promise.all(res.data.getPost.comments.items.map(item => format(item))).then(data => {
            comments = data
        })
        return comments
    } catch (err) {
        console.log(err)
    }
}

export const get_likes_by_post_id = async (id) => {

    try {
        const format = async (like) => {

            try {
                // like.chef.image_link = await Storage.get(like.chef.image_key, {
                //     contentType: 'image/jpeg'
                // })
                delete like.chef.image_key
                return like
            } catch (err) {
                console.log(err)
            }
        }

        const res = await API.graphql({query: queries.getLikessByPostId, variables: id})
        // console.log(res);
        let likes = []
        await Promise.all(res.data.getPost.likes.items.map(item => format(item))).then(data => {
            likes = data
        })
        return likes
    } catch (err) {
        console.log(err)
    }
}

export const get_followers_by_profile = async () => {

    const id = user_id

    try {
        const format = async (follower) => {

            follower.chef = follower.follow_chef 
            delete follower.follow_chef

            try {
                // follower.chef.image_link = await Storage.get(follower.chef.image_key, {
                //     contentType: 'image/jpeg'
                // })
                delete follower.chef.image_key
                return follower
            } catch (err) {
                console.log(err)
            }
        }

        const res = await API.graphql({query: queries.getFollowersByChefId, variables: { id: id }})
        // console.log(res);
        let followers = []
        await Promise.all(res.data.getChef.followers.items.map(item => format(item))).then(data => {
            followers = data
        })
        return followers
    } catch (err) {
        console.log(err)
    }
}

export const get_following_by_profile = async () => {

    const id = user_id

    try {
        const format = async (following) => {

            following.chef = following.chef_follow 
            delete following.chef_follow

            try {
                // following.chef.image_link = await Storage.get(following.chef.image_key, {
                //     contentType: 'image/jpeg'
                // })
                delete following.chef.image_key
                return following
            } catch (err) {
                console.log(err)
            }
        }

        const res = await API.graphql({query: queries.getFollowingByChefId, variables: { id: id }})
        // console.log(res);
        let followings = []
        await Promise.all(res.data.getChef.following.items.map(item => format(item))).then(data => {
            followings = data
        })
        return followings
    } catch (err) {
        console.log(err)
    }
}

export const get_followers_by_chef_id = async (id) => {

    try {
        const format = async (follower) => {

            follower.chef = follower.follow_chef 
            delete follower.follow_chef

            try {
                // follower.chef.image_link = await Storage.get(follower.chef.image_key, {
                //     contentType: 'image/jpeg'
                // })
                delete follower.chef.image_key
                return follower
            } catch (err) {
                console.log(err)
            }
        }

        const res = await API.graphql({query: queries.getFollowersByChefId, variables: id})
        // console.log(res);
        let followers = []
        await Promise.all(res.data.getChef.followers.items.map(item => format(item))).then(data => {
            followers = data
        })
        return followers
    } catch (err) {
        console.log(err)
    }
}

export const get_following_by_chef_id = async (id) => {

    try {
        const format = async (following) => {

            following.chef = following.chef_follow 
            delete following.chef_follow

            try {
                // following.chef.image_link = await Storage.get(following.chef.image_key, {
                //     contentType: 'image/jpeg'
                // })
                delete following.chef.image_key
                return following
            } catch (err) {
                console.log(err)
            }
        }

        const res = await API.graphql({query: queries.getFollowingByChefId, variables: id})
        // console.log(res);
        let followings = []
        await Promise.all(res.data.getChef.following.items.map(item => format(item))).then(data => {
            followings = data
        })
        return followings
    } catch (err) {
        console.log(err)
    }
}




//
