/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
export const createStash = /* GraphQL */ `
  mutation CreateStash(
    $input: CreateStashInput!
    $condition: ModelStashConditionInput
  ) {
    createStash(input: $input, condition: $condition) {
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
export const updateStash = /* GraphQL */ `
  mutation UpdateStash(
    $input: UpdateStashInput!
    $condition: ModelStashConditionInput
  ) {
    updateStash(input: $input, condition: $condition) {
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
export const deleteStash = /* GraphQL */ `
  mutation DeleteStash(
    $input: DeleteStashInput!
    $condition: ModelStashConditionInput
  ) {
    deleteStash(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createTip = /* GraphQL */ `
  mutation CreateTip(
    $input: CreateTipInput!
    $condition: ModelTipConditionInput
  ) {
    createTip(input: $input, condition: $condition) {
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
export const updateTip = /* GraphQL */ `
  mutation UpdateTip(
    $input: UpdateTipInput!
    $condition: ModelTipConditionInput
  ) {
    updateTip(input: $input, condition: $condition) {
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
export const deleteTip = /* GraphQL */ `
  mutation DeleteTip(
    $input: DeleteTipInput!
    $condition: ModelTipConditionInput
  ) {
    deleteTip(input: $input, condition: $condition) {
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
export const createFollow = /* GraphQL */ `
  mutation CreateFollow(
    $input: CreateFollowInput!
    $condition: ModelFollowConditionInput
  ) {
    createFollow(input: $input, condition: $condition) {
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
export const updateFollow = /* GraphQL */ `
  mutation UpdateFollow(
    $input: UpdateFollowInput!
    $condition: ModelFollowConditionInput
  ) {
    updateFollow(input: $input, condition: $condition) {
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
export const deleteFollow = /* GraphQL */ `
  mutation DeleteFollow(
    $input: DeleteFollowInput!
    $condition: ModelFollowConditionInput
  ) {
    deleteFollow(input: $input, condition: $condition) {
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
export const createRecipe = /* GraphQL */ `
  mutation CreateRecipe(
    $input: CreateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    createRecipe(input: $input, condition: $condition) {
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
export const updateRecipe = /* GraphQL */ `
  mutation UpdateRecipe(
    $input: UpdateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    updateRecipe(input: $input, condition: $condition) {
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
export const deleteRecipe = /* GraphQL */ `
  mutation DeleteRecipe(
    $input: DeleteRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    deleteRecipe(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createChef = /* GraphQL */ `
  mutation CreateChef(
    $input: CreateChefInput!
    $condition: ModelChefConditionInput
  ) {
    createChef(input: $input, condition: $condition) {
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
export const updateChef = /* GraphQL */ `
  mutation UpdateChef(
    $input: UpdateChefInput!
    $condition: ModelChefConditionInput
  ) {
    updateChef(input: $input, condition: $condition) {
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
export const deleteChef = /* GraphQL */ `
  mutation DeleteChef(
    $input: DeleteChefInput!
    $condition: ModelChefConditionInput
  ) {
    deleteChef(input: $input, condition: $condition) {
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
