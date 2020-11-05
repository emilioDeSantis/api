/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike {
    onCreateLike {
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
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike {
    onUpdateLike {
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
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike {
    onDeleteLike {
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
export const onCreateStash = /* GraphQL */ `
  subscription OnCreateStash {
    onCreateStash {
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
export const onUpdateStash = /* GraphQL */ `
  subscription OnUpdateStash {
    onUpdateStash {
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
export const onDeleteStash = /* GraphQL */ `
  subscription OnDeleteStash {
    onDeleteStash {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateTip = /* GraphQL */ `
  subscription OnCreateTip {
    onCreateTip {
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
export const onUpdateTip = /* GraphQL */ `
  subscription OnUpdateTip {
    onUpdateTip {
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
export const onDeleteTip = /* GraphQL */ `
  subscription OnDeleteTip {
    onDeleteTip {
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
export const onCreateFollow = /* GraphQL */ `
  subscription OnCreateFollow {
    onCreateFollow {
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
export const onUpdateFollow = /* GraphQL */ `
  subscription OnUpdateFollow {
    onUpdateFollow {
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
export const onDeleteFollow = /* GraphQL */ `
  subscription OnDeleteFollow {
    onDeleteFollow {
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
export const onCreateRecipe = /* GraphQL */ `
  subscription OnCreateRecipe {
    onCreateRecipe {
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
export const onUpdateRecipe = /* GraphQL */ `
  subscription OnUpdateRecipe {
    onUpdateRecipe {
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
export const onDeleteRecipe = /* GraphQL */ `
  subscription OnDeleteRecipe {
    onDeleteRecipe {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateChef = /* GraphQL */ `
  subscription OnCreateChef {
    onCreateChef {
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
export const onUpdateChef = /* GraphQL */ `
  subscription OnUpdateChef {
    onUpdateChef {
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
export const onDeleteChef = /* GraphQL */ `
  subscription OnDeleteChef {
    onDeleteChef {
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
