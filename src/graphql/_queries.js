export const getRecipeByPostId = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
        chef {
          id
          username
          image_key
        }
      }
    }
  }
`;

export const getStashRecipes = /* GraphQL */ `
    query GetChef($id: ID!) {
        getChef(id: $id) {
            stashes {
                items {
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
                        chef {
                          id
                          username
                          image_key
                        }
                    }
                }
            }
        }
    }
`;

export const getPostByTipId = /* GraphQL */ `
  query GetTip($id: ID!) {
    getTip(id: $id) {
      remake_post {
        id
        title
        type
        caption
        image_key
        chef {
          id
          username
          image_key
        }
        comments {
            items{
                id
            }
        }
        likes {
            items{
                id
            }
        }
        tips {
            items{
                id
            }
        }
      }
    }
  }
`;

export const getPostsByChefId = /* GraphQL */ `
  query GetChef($id: ID!) {
    getChef(id: $id) {
      posts {
        items {
            id
            title
            type
            caption
            image_key
            chef {
              id
              username
              image_key
            }
            comments {
                items{
                    id
                }
            }
            likes {
                items{
                    id
                }
            }
            tips {
                items{
                    id
                }
            }
        }
      }
    }
  }
`;

export const getRemakePostsByRecipeId = /* GraphQL */ `
    query GetRecipe($id: ID!) {
        getRecipe(id: $id) {
            recipe_tips {
                items {
                    post {
                        id
                        title
                        type
                        caption
                        image_key
                        chef {
                        id
                        username
                        image_key
                        }
                        comments {
                            items{
                                id
                            }
                        }
                        likes {
                            items{
                                id
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const getChefById = /* GraphQL */ `
  query GetChef($id: ID!) {
    getChef(id: $id) {
      id
      username
      image_key
      biography
      posts {
        items {
          type
        }
      }
      following {
        items {
          id
        }
      }
      followers {
        items {
          id
        }
      }
    }
  }
`;

export const getChefByLikeId = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
      chef {
        id
        username
        image_key
        biography
        posts {
          items {
            type
          }
        }
        following {
          items {
            id
          }
        }
        followers {
          items {
            id
          }
        }
      }
    }
  }
`;

export const getChefByCommentId = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      chef {
        id
        username
        image_key
        biography
        posts {
          items {
            type
          }
        }
        following {
          items {
            id
          }
        }
        followers {
          items {
            id
          }
        }
      }
    }
  }
`;

export const getChefByTipId = /* GraphQL */ `
  query GetTip($id: ID!) {
    getTip(id: $id) {
      chef {
        id
        username
        image_key
        biography
        posts {
          items {
            type
          }
        }
        following {
          items {
            id
          }
        }
        followers {
          items {
            id
          }
        }
      }
    }
  }
`;

export const getChefByFollowerId = /* GraphQL */ `
  query GetFollow($id: ID!) {
    getFollow(id: $id) {
      follow_chef {
        id
        username
        image_key
        biography
        posts {
          items {
            type
          }
        }
        following {
          items {
            id
          }
        }
        followers {
          items {
            id
          }
        }
      }
    }
  }
`;

export const getChefByFollowingId = /* GraphQL */ `
  query GetFollow($id: ID!) {
    getFollow(id: $id) {
      chef_follow {
        id
        username
        image_key
        biography
        posts {
          items {
            type
          }
        }
        following {
          items {
            id
          }
        }
        followers {
          items {
            id
          }
        }
      }
    }
  }
`;

export const getChefByRecipeId = /* GraphQL */ `
  query GetRecipe($id: ID!) {
    getRecipe(id: $id) {
      chef {
        id
        username
        image_key
        biography
        posts {
          items {
            type
          }
        }
        following {
          items {
            id
          }
        }
        followers {
          items {
            id
          }
        }
      }
    }
  }
`;

export const getChefBypostId = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      chef {
        id
        username
        image_key
        biography
        posts {
          items {
            type
          }
        }
        following {
          items {
            id
          }
        }
        followers {
          items {
            id
          }
        }
      }
    }
  }
`;

export const getTipsByRecipeId = /* GraphQL */ `
  query GetRecipe($id: ID!) {
    getRecipe(id: $id) {
      recipe_tips {
        items {
          id
          text
          chef {
            id
            username
            image_key
          }
        }
      }
    }
  }
`;

export const getTipsByPostId = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      tips {
        items {
            id
            text
            chef {
                id
                username
                image_key
            }
        }
      }
    }
  }
`;

export const getCommentsByPostId = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      comments {
        items {
            id
            text
            chef {
                id
                username
                image_key
            }  
        }
      }
    }
  }
`;

export const getLikessByPostId = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      likes {
        items {
            id
            chef {
                id
                username
                image_key
            }  
        }
      }
    }
  }
`;

export const getFollowersByChefId = /* GraphQL */ `
  query GetChef($id: ID!) {
    getChef(id: $id) {
      followers {
        items {
            id
            follow_chef {
                id
                username
                image_key
            }  
        }
      }
    }
  }
`;

export const getFollowingByChefId = /* GraphQL */ `
  query GetChef($id: ID!) {
    getChef(id: $id) {
      following {
        items {
            id
            chef_follow {
                id
                username
                image_key
            }  
        }
      }
    }
  }
`;









/////