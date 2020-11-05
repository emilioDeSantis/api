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
      shopping_list {
        type
        quantity
      }
      posts {
        items {
          id
          title
          is_original
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
      is_original
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
          is_original
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
        createdAt
        updatedAt
      }
      chef {
        id
        username
        image_key
        biography
        shopping_list {
          type
          quantity
        }
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
          is_original
          caption
          image_key
          createdAt
          updatedAt
        }
        post {
          id
          title
          is_original
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
        is_original
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
        shopping_list {
          type
          quantity
        }
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
        is_original
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
        is_original
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
          is_original
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
        createdAt
        updatedAt
      }
      chef {
        id
        username
        image_key
        biography
        shopping_list {
          type
          quantity
        }
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
        is_original
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
        shopping_list {
          type
          quantity
        }
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
      is_original
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
          is_original
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
        createdAt
        updatedAt
      }
      chef {
        id
        username
        image_key
        biography
        shopping_list {
          type
          quantity
        }
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
          is_original
          caption
          image_key
          createdAt
          updatedAt
        }
        post {
          id
          title
          is_original
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
        is_original
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
        shopping_list {
          type
          quantity
        }
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;

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
        is_original
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
        shopping_list {
          type
          quantity
        }
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
        shopping_list {
          type
          quantity
        }
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
        createdAt
        updatedAt
      }
      follow_chef {
        id
        username
        image_key
        biography
        shopping_list {
          type
          quantity
        }
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
          is_original
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
        shopping_list {
          type
          quantity
        }
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





/////////


