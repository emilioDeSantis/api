/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
      id
      post {
        id
        title
        type
        caption
        image_key
        recipe {
          id
          title
          image_key
          serves
          cook_time
          createdAt
          updatedAt
        }
        chef {
          id
          username
          image_key
          biography
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        remake_tip {
          id
          text
          createdAt
          updatedAt
        }
        tips {
          nextToken
        }
        createdAt
        updatedAt
      }
      chef {
        id
        username
        image_key
        biography
        posts {
          nextToken
        }
        recipes {
          nextToken
        }
        following {
          nextToken
        }
        followers {
          nextToken
        }
        tips {
          nextToken
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        stashes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        post {
          id
          title
          type
          caption
          image_key
          createdAt
          updatedAt
        }
        chef {
          id
          username
          image_key
          biography
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStash = /* GraphQL */ `
  query GetStash($id: ID!) {
    getStash(id: $id) {
      id
      recipe {
        id
        title
        image_key
        serves
        cook_time
        ingredients {
          type
          quantity
        }
        procedure {
          step
        }
        post {
          id
          title
          type
          caption
          image_key
          createdAt
          updatedAt
        }
        chef {
          id
          username
          image_key
          biography
          createdAt
          updatedAt
        }
        recipe_tips {
          nextToken
        }
        stashes {
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      chef {
        id
        username
        image_key
        biography
        posts {
          nextToken
        }
        recipes {
          nextToken
        }
        following {
          nextToken
        }
        followers {
          nextToken
        }
        tips {
          nextToken
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        stashes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listStashs = /* GraphQL */ `
  query ListStashs(
    $filter: ModelStashFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStashs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        recipe {
          id
          title
          image_key
          serves
          cook_time
          createdAt
          updatedAt
        }
        chef {
          id
          username
          image_key
          biography
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      text
      post {
        id
        title
        type
        caption
        image_key
        recipe {
          id
          title
          image_key
          serves
          cook_time
          createdAt
          updatedAt
        }
        chef {
          id
          username
          image_key
          biography
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        remake_tip {
          id
          text
          createdAt
          updatedAt
        }
        tips {
          nextToken
        }
        createdAt
        updatedAt
      }
      chef {
        id
        username
        image_key
        biography
        posts {
          nextToken
        }
        recipes {
          nextToken
        }
        following {
          nextToken
        }
        followers {
          nextToken
        }
        tips {
          nextToken
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        stashes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        post {
          id
          title
          type
          caption
          image_key
          createdAt
          updatedAt
        }
        chef {
          id
          username
          image_key
          biography
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTip = /* GraphQL */ `
  query GetTip($id: ID!) {
    getTip(id: $id) {
      id
      text
      remake_post {
        id
        title
        type
        caption
        image_key
        recipe {
          id
          title
          image_key
          serves
          cook_time
          createdAt
          updatedAt
        }
        chef {
          id
          username
          image_key
          biography
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        remake_tip {
          id
          text
          createdAt
          updatedAt
        }
        tips {
          nextToken
        }
        createdAt
        updatedAt
      }
      post {
        id
        title
        type
        caption
        image_key
        recipe {
          id
          title
          image_key
          serves
          cook_time
          createdAt
          updatedAt
        }
        chef {
          id
          username
          image_key
          biography
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        remake_tip {
          id
          text
          createdAt
          updatedAt
        }
        tips {
          nextToken
        }
        createdAt
        updatedAt
      }
      recipe {
        id
        title
        image_key
        serves
        cook_time
        ingredients {
          type
          quantity
        }
        procedure {
          step
        }
        post {
          id
          title
          type
          caption
          image_key
          createdAt
          updatedAt
        }
        chef {
          id
          username
          image_key
          biography
          createdAt
          updatedAt
        }
        recipe_tips {
          nextToken
        }
        stashes {
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      chef {
        id
        username
        image_key
        biography
        posts {
          nextToken
        }
        recipes {
          nextToken
        }
        following {
          nextToken
        }
        followers {
          nextToken
        }
        tips {
          nextToken
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        stashes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTips = /* GraphQL */ `
  query ListTips(
    $filter: ModelTipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTips(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        remake_post {
          id
          title
          type
          caption
          image_key
          createdAt
          updatedAt
        }
        post {
          id
          title
          type
          caption
          image_key
          createdAt
          updatedAt
        }
        recipe {
          id
          title
          image_key
          serves
          cook_time
          createdAt
          updatedAt
        }
        chef {
          id
          username
          image_key
          biography
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFollow = /* GraphQL */ `
  query GetFollow($id: ID!) {
    getFollow(id: $id) {
      id
      chef_follow {
        id
        username
        image_key
        biography
        posts {
          nextToken
        }
        recipes {
          nextToken
        }
        following {
          nextToken
        }
        followers {
          nextToken
        }
        tips {
          nextToken
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        stashes {
          nextToken
        }
        createdAt
        updatedAt
      }
      follow_chef {
        id
        username
        image_key
        biography
        posts {
          nextToken
        }
        recipes {
          nextToken
        }
        following {
          nextToken
        }
        followers {
          nextToken
        }
        tips {
          nextToken
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        stashes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listFollows = /* GraphQL */ `
  query ListFollows(
    $filter: ModelFollowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollows(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        chef_follow {
          id
          username
          image_key
          biography
          createdAt
          updatedAt
        }
        follow_chef {
          id
          username
          image_key
          biography
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRecipe = /* GraphQL */ `
  query GetRecipe($id: ID!) {
    getRecipe(id: $id) {
      id
      title
      image_key
      serves
      cook_time
      ingredients {
        type
        quantity
      }
      procedure {
        step
      }
      post {
        id
        title
        type
        caption
        image_key
        recipe {
          id
          title
          image_key
          serves
          cook_time
          createdAt
          updatedAt
        }
        chef {
          id
          username
          image_key
          biography
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        remake_tip {
          id
          text
          createdAt
          updatedAt
        }
        tips {
          nextToken
        }
        createdAt
        updatedAt
      }
      chef {
        id
        username
        image_key
        biography
        posts {
          nextToken
        }
        recipes {
          nextToken
        }
        following {
          nextToken
        }
        followers {
          nextToken
        }
        tips {
          nextToken
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        stashes {
          nextToken
        }
        createdAt
        updatedAt
      }
      recipe_tips {
        items {
          id
          text
          createdAt
          updatedAt
        }
        nextToken
      }
      stashes {
        id
        recipe {
          id
          title
          image_key
          serves
          cook_time
          createdAt
          updatedAt
        }
        chef {
          id
          username
          image_key
          biography
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listRecipes = /* GraphQL */ `
  query ListRecipes(
    $filter: ModelRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        image_key
        serves
        cook_time
        ingredients {
          type
          quantity
        }
        procedure {
          step
        }
        post {
          id
          title
          type
          caption
          image_key
          createdAt
          updatedAt
        }
        chef {
          id
          username
          image_key
          biography
          createdAt
          updatedAt
        }
        recipe_tips {
          nextToken
        }
        stashes {
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      type
      caption
      image_key
      recipe {
        id
        title
        image_key
        serves
        cook_time
        ingredients {
          type
          quantity
        }
        procedure {
          step
        }
        post {
          id
          title
          type
          caption
          image_key
          createdAt
          updatedAt
        }
        chef {
          id
          username
          image_key
          biography
          createdAt
          updatedAt
        }
        recipe_tips {
          nextToken
        }
        stashes {
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      chef {
        id
        username
        image_key
        biography
        posts {
          nextToken
        }
        recipes {
          nextToken
        }
        following {
          nextToken
        }
        followers {
          nextToken
        }
        tips {
          nextToken
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        stashes {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          text
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      remake_tip {
        id
        text
        remake_post {
          id
          title
          type
          caption
          image_key
          createdAt
          updatedAt
        }
        post {
          id
          title
          type
          caption
          image_key
          createdAt
          updatedAt
        }
        recipe {
          id
          title
          image_key
          serves
          cook_time
          createdAt
          updatedAt
        }
        chef {
          id
          username
          image_key
          biography
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      tips {
        items {
          id
          text
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        type
        caption
        image_key
        recipe {
          id
          title
          image_key
          serves
          cook_time
          createdAt
          updatedAt
        }
        chef {
          id
          username
          image_key
          biography
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        remake_tip {
          id
          text
          createdAt
          updatedAt
        }
        tips {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChef = /* GraphQL */ `
  query GetChef($id: ID!) {
    getChef(id: $id) {
      id
      username
      image_key
      biography
      posts {
        items {
          id
          title
          type
          caption
          image_key
          createdAt
          updatedAt
        }
        nextToken
      }
      recipes {
        items {
          id
          title
          image_key
          serves
          cook_time
          createdAt
          updatedAt
        }
        nextToken
      }
      following {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      followers {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      tips {
        items {
          id
          text
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          text
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      stashes {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listChefs = /* GraphQL */ `
  query ListChefs(
    $filter: ModelChefFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChefs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        image_key
        biography
        posts {
          nextToken
        }
        recipes {
          nextToken
        }
        following {
          nextToken
        }
        followers {
          nextToken
        }
        tips {
          nextToken
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        stashes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const postsByType = /* GraphQL */ `
  query PostsByType(
    $type: String
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByType(
      type: $type
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        type
        caption
        image_key
        recipe {
          id
          title
          image_key
          serves
          cook_time
          createdAt
          updatedAt
        }
        chef {
          id
          username
          image_key
          biography
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        remake_tip {
          id
          text
          createdAt
          updatedAt
        }
        tips {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
