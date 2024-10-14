/* eslint-disable */
/* prettier-ignore */

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * You may import it to create a `graphql()` tag function with `gql.tada`
 * by importing it and passing it to `initGraphQLTada<>()`.
 *
 * @example
 * ```
 * import { initGraphQLTada } from 'gql.tada';
 * import type { introspection } from './introspection';
 *
 * export const graphql = initGraphQLTada<{
 *   introspection: typeof introspection;
 *   scalars: {
 *     DateTime: string;
 *     Json: any;
 *   };
 * }>();
 * ```
 */
const introspection = {
  "__schema": {
    "queryType": {
      "name": "Query"
    },
    "mutationType": {
      "name": "Mutation"
    },
    "subscriptionType": {
      "name": "Subscription"
    },
    "types": [
      {
        "kind": "OBJECT",
        "name": "Artist",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UUID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "nodeId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "songsByArtistId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "SongsConnection"
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Cursor"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Cursor"
                }
              },
              {
                "name": "condition",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "SongCondition"
                }
              },
              {
                "name": "filter",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "SongFilter"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "SongsOrderBy"
                    }
                  }
                },
                "defaultValue": "[PRIMARY_KEY_ASC]"
              }
            ],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ArtistCondition",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "UUID"
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ArtistFilter",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UUIDFilter"
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter"
            }
          },
          {
            "name": "songsByArtistId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ArtistToManySongFilter"
            }
          },
          {
            "name": "songsByArtistIdExist",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ArtistFilter"
                }
              }
            }
          },
          {
            "name": "or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ArtistFilter"
                }
              }
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ArtistFilter"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ArtistInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "UUID"
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ArtistPatch",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "UUID"
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ArtistToManySongFilter",
        "inputFields": [
          {
            "name": "every",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SongFilter"
            }
          },
          {
            "name": "some",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SongFilter"
            }
          },
          {
            "name": "none",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SongFilter"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "ArtistsConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ArtistsEdge"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Artist"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "totalCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ArtistsEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "SCALAR",
              "name": "Cursor"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "node",
            "type": {
              "kind": "OBJECT",
              "name": "Artist"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "ArtistsOrderBy",
        "enumValues": [
          {
            "name": "NATURAL",
            "isDeprecated": false
          },
          {
            "name": "ID_ASC",
            "isDeprecated": false
          },
          {
            "name": "ID_DESC",
            "isDeprecated": false
          },
          {
            "name": "NAME_ASC",
            "isDeprecated": false
          },
          {
            "name": "NAME_DESC",
            "isDeprecated": false
          },
          {
            "name": "PRIMARY_KEY_ASC",
            "isDeprecated": false
          },
          {
            "name": "PRIMARY_KEY_DESC",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "Boolean"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CreateArtistInput",
        "inputFields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "artist",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ArtistInput"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "CreateArtistPayload",
        "fields": [
          {
            "name": "artist",
            "type": {
              "kind": "OBJECT",
              "name": "Artist"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "artistEdge",
            "type": {
              "kind": "OBJECT",
              "name": "ArtistsEdge"
            },
            "args": [
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "ArtistsOrderBy"
                    }
                  }
                },
                "defaultValue": "[PRIMARY_KEY_ASC]"
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "query",
            "type": {
              "kind": "OBJECT",
              "name": "Query"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CreateFavoriteInput",
        "inputFields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "favorite",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "FavoriteInput"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "CreateFavoritePayload",
        "fields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "favorite",
            "type": {
              "kind": "OBJECT",
              "name": "Favorite"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "favoriteEdge",
            "type": {
              "kind": "OBJECT",
              "name": "FavoritesEdge"
            },
            "args": [
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "FavoritesOrderBy"
                    }
                  }
                },
                "defaultValue": "[PRIMARY_KEY_ASC]"
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "query",
            "type": {
              "kind": "OBJECT",
              "name": "Query"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "songBySongId",
            "type": {
              "kind": "OBJECT",
              "name": "Song"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "userByUserId",
            "type": {
              "kind": "OBJECT",
              "name": "User"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CreatePlaylistInput",
        "inputFields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "playlist",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "PlaylistInput"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "CreatePlaylistPayload",
        "fields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "playlist",
            "type": {
              "kind": "OBJECT",
              "name": "Playlist"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "playlistEdge",
            "type": {
              "kind": "OBJECT",
              "name": "PlaylistsEdge"
            },
            "args": [
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "PlaylistsOrderBy"
                    }
                  }
                },
                "defaultValue": "[PRIMARY_KEY_ASC]"
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "query",
            "type": {
              "kind": "OBJECT",
              "name": "Query"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "userByCreatorId",
            "type": {
              "kind": "OBJECT",
              "name": "User"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CreatePlaylistSongInput",
        "inputFields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "playlistSong",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "PlaylistSongInput"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "CreatePlaylistSongPayload",
        "fields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "playlistByPlaylistId",
            "type": {
              "kind": "OBJECT",
              "name": "Playlist"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "playlistSong",
            "type": {
              "kind": "OBJECT",
              "name": "PlaylistSong"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "playlistSongEdge",
            "type": {
              "kind": "OBJECT",
              "name": "PlaylistSongsEdge"
            },
            "args": [
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "PlaylistSongsOrderBy"
                    }
                  }
                },
                "defaultValue": "[PRIMARY_KEY_ASC]"
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "query",
            "type": {
              "kind": "OBJECT",
              "name": "Query"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "songBySongId",
            "type": {
              "kind": "OBJECT",
              "name": "Song"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CreateSongInput",
        "inputFields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "song",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "SongInput"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "CreateSongPayload",
        "fields": [
          {
            "name": "artistByArtistId",
            "type": {
              "kind": "OBJECT",
              "name": "Artist"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "query",
            "type": {
              "kind": "OBJECT",
              "name": "Query"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "song",
            "type": {
              "kind": "OBJECT",
              "name": "Song"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "songEdge",
            "type": {
              "kind": "OBJECT",
              "name": "SongsEdge"
            },
            "args": [
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "SongsOrderBy"
                    }
                  }
                },
                "defaultValue": "[PRIMARY_KEY_ASC]"
              }
            ],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CreateUserInput",
        "inputFields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "user",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UserInput"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "CreateUserPayload",
        "fields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "query",
            "type": {
              "kind": "OBJECT",
              "name": "Query"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "user",
            "type": {
              "kind": "OBJECT",
              "name": "User"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "userEdge",
            "type": {
              "kind": "OBJECT",
              "name": "UsersEdge"
            },
            "args": [
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "UsersOrderBy"
                    }
                  }
                },
                "defaultValue": "[PRIMARY_KEY_ASC]"
              }
            ],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Cursor"
      },
      {
        "kind": "SCALAR",
        "name": "Datetime"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DatetimeFilter",
        "inputFields": [
          {
            "name": "isNull",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "equalTo",
            "type": {
              "kind": "SCALAR",
              "name": "Datetime"
            }
          },
          {
            "name": "notEqualTo",
            "type": {
              "kind": "SCALAR",
              "name": "Datetime"
            }
          },
          {
            "name": "distinctFrom",
            "type": {
              "kind": "SCALAR",
              "name": "Datetime"
            }
          },
          {
            "name": "notDistinctFrom",
            "type": {
              "kind": "SCALAR",
              "name": "Datetime"
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Datetime"
                }
              }
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Datetime"
                }
              }
            }
          },
          {
            "name": "lessThan",
            "type": {
              "kind": "SCALAR",
              "name": "Datetime"
            }
          },
          {
            "name": "lessThanOrEqualTo",
            "type": {
              "kind": "SCALAR",
              "name": "Datetime"
            }
          },
          {
            "name": "greaterThan",
            "type": {
              "kind": "SCALAR",
              "name": "Datetime"
            }
          },
          {
            "name": "greaterThanOrEqualTo",
            "type": {
              "kind": "SCALAR",
              "name": "Datetime"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DeleteArtistByIdInput",
        "inputFields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UUID"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DeleteArtistInput",
        "inputFields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "nodeId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "DeleteArtistPayload",
        "fields": [
          {
            "name": "artist",
            "type": {
              "kind": "OBJECT",
              "name": "Artist"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "artistEdge",
            "type": {
              "kind": "OBJECT",
              "name": "ArtistsEdge"
            },
            "args": [
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "ArtistsOrderBy"
                    }
                  }
                },
                "defaultValue": "[PRIMARY_KEY_ASC]"
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "deletedArtistId",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "query",
            "type": {
              "kind": "OBJECT",
              "name": "Query"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DeleteFavoriteByUserIdAndSongIdInput",
        "inputFields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "userId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UUID"
              }
            }
          },
          {
            "name": "songId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UUID"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DeleteFavoriteInput",
        "inputFields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "nodeId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "DeleteFavoritePayload",
        "fields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "deletedFavoriteId",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "favorite",
            "type": {
              "kind": "OBJECT",
              "name": "Favorite"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "favoriteEdge",
            "type": {
              "kind": "OBJECT",
              "name": "FavoritesEdge"
            },
            "args": [
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "FavoritesOrderBy"
                    }
                  }
                },
                "defaultValue": "[PRIMARY_KEY_ASC]"
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "query",
            "type": {
              "kind": "OBJECT",
              "name": "Query"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "songBySongId",
            "type": {
              "kind": "OBJECT",
              "name": "Song"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "userByUserId",
            "type": {
              "kind": "OBJECT",
              "name": "User"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DeletePlaylistByIdInput",
        "inputFields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UUID"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DeletePlaylistInput",
        "inputFields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "nodeId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "DeletePlaylistPayload",
        "fields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "deletedPlaylistId",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "playlist",
            "type": {
              "kind": "OBJECT",
              "name": "Playlist"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "playlistEdge",
            "type": {
              "kind": "OBJECT",
              "name": "PlaylistsEdge"
            },
            "args": [
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "PlaylistsOrderBy"
                    }
                  }
                },
                "defaultValue": "[PRIMARY_KEY_ASC]"
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "query",
            "type": {
              "kind": "OBJECT",
              "name": "Query"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "userByCreatorId",
            "type": {
              "kind": "OBJECT",
              "name": "User"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DeletePlaylistSongByPlaylistIdAndSongIdInput",
        "inputFields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "playlistId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UUID"
              }
            }
          },
          {
            "name": "songId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UUID"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DeletePlaylistSongInput",
        "inputFields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "nodeId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "DeletePlaylistSongPayload",
        "fields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "deletedPlaylistSongId",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "playlistByPlaylistId",
            "type": {
              "kind": "OBJECT",
              "name": "Playlist"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "playlistSong",
            "type": {
              "kind": "OBJECT",
              "name": "PlaylistSong"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "playlistSongEdge",
            "type": {
              "kind": "OBJECT",
              "name": "PlaylistSongsEdge"
            },
            "args": [
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "PlaylistSongsOrderBy"
                    }
                  }
                },
                "defaultValue": "[PRIMARY_KEY_ASC]"
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "query",
            "type": {
              "kind": "OBJECT",
              "name": "Query"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "songBySongId",
            "type": {
              "kind": "OBJECT",
              "name": "Song"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DeleteSongByIdInput",
        "inputFields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UUID"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DeleteSongInput",
        "inputFields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "nodeId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "DeleteSongPayload",
        "fields": [
          {
            "name": "artistByArtistId",
            "type": {
              "kind": "OBJECT",
              "name": "Artist"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "deletedSongId",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "query",
            "type": {
              "kind": "OBJECT",
              "name": "Query"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "song",
            "type": {
              "kind": "OBJECT",
              "name": "Song"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "songEdge",
            "type": {
              "kind": "OBJECT",
              "name": "SongsEdge"
            },
            "args": [
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "SongsOrderBy"
                    }
                  }
                },
                "defaultValue": "[PRIMARY_KEY_ASC]"
              }
            ],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DeleteUserByIdInput",
        "inputFields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UUID"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DeleteUserInput",
        "inputFields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "nodeId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "DeleteUserPayload",
        "fields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "deletedUserId",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "query",
            "type": {
              "kind": "OBJECT",
              "name": "Query"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "user",
            "type": {
              "kind": "OBJECT",
              "name": "User"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "userEdge",
            "type": {
              "kind": "OBJECT",
              "name": "UsersEdge"
            },
            "args": [
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "UsersOrderBy"
                    }
                  }
                },
                "defaultValue": "[PRIMARY_KEY_ASC]"
              }
            ],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Favorite",
        "fields": [
          {
            "name": "nodeId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "songBySongId",
            "type": {
              "kind": "OBJECT",
              "name": "Song"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "songId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UUID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "userByUserId",
            "type": {
              "kind": "OBJECT",
              "name": "User"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "userId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UUID"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "FavoriteCondition",
        "inputFields": [
          {
            "name": "userId",
            "type": {
              "kind": "SCALAR",
              "name": "UUID"
            }
          },
          {
            "name": "songId",
            "type": {
              "kind": "SCALAR",
              "name": "UUID"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "FavoriteFilter",
        "inputFields": [
          {
            "name": "userId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UUIDFilter"
            }
          },
          {
            "name": "songId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UUIDFilter"
            }
          },
          {
            "name": "userByUserId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserFilter"
            }
          },
          {
            "name": "songBySongId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SongFilter"
            }
          },
          {
            "name": "and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "FavoriteFilter"
                }
              }
            }
          },
          {
            "name": "or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "FavoriteFilter"
                }
              }
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "FavoriteFilter"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "FavoriteInput",
        "inputFields": [
          {
            "name": "userId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UUID"
              }
            }
          },
          {
            "name": "songId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UUID"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "FavoritePatch",
        "inputFields": [
          {
            "name": "userId",
            "type": {
              "kind": "SCALAR",
              "name": "UUID"
            }
          },
          {
            "name": "songId",
            "type": {
              "kind": "SCALAR",
              "name": "UUID"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "FavoritesConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "FavoritesEdge"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Favorite"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "totalCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "FavoritesEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "SCALAR",
              "name": "Cursor"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "node",
            "type": {
              "kind": "OBJECT",
              "name": "Favorite"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "FavoritesOrderBy",
        "enumValues": [
          {
            "name": "NATURAL",
            "isDeprecated": false
          },
          {
            "name": "USER_ID_ASC",
            "isDeprecated": false
          },
          {
            "name": "USER_ID_DESC",
            "isDeprecated": false
          },
          {
            "name": "SONG_ID_ASC",
            "isDeprecated": false
          },
          {
            "name": "SONG_ID_DESC",
            "isDeprecated": false
          },
          {
            "name": "PRIMARY_KEY_ASC",
            "isDeprecated": false
          },
          {
            "name": "PRIMARY_KEY_DESC",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "Float"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "FloatListFilter",
        "inputFields": [
          {
            "name": "isNull",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "equalTo",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float"
              }
            }
          },
          {
            "name": "notEqualTo",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float"
              }
            }
          },
          {
            "name": "distinctFrom",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float"
              }
            }
          },
          {
            "name": "notDistinctFrom",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float"
              }
            }
          },
          {
            "name": "lessThan",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float"
              }
            }
          },
          {
            "name": "lessThanOrEqualTo",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float"
              }
            }
          },
          {
            "name": "greaterThan",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float"
              }
            }
          },
          {
            "name": "greaterThanOrEqualTo",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float"
              }
            }
          },
          {
            "name": "contains",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float"
              }
            }
          },
          {
            "name": "containedBy",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float"
              }
            }
          },
          {
            "name": "overlaps",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float"
              }
            }
          },
          {
            "name": "anyEqualTo",
            "type": {
              "kind": "SCALAR",
              "name": "Float"
            }
          },
          {
            "name": "anyNotEqualTo",
            "type": {
              "kind": "SCALAR",
              "name": "Float"
            }
          },
          {
            "name": "anyLessThan",
            "type": {
              "kind": "SCALAR",
              "name": "Float"
            }
          },
          {
            "name": "anyLessThanOrEqualTo",
            "type": {
              "kind": "SCALAR",
              "name": "Float"
            }
          },
          {
            "name": "anyGreaterThan",
            "type": {
              "kind": "SCALAR",
              "name": "Float"
            }
          },
          {
            "name": "anyGreaterThanOrEqualTo",
            "type": {
              "kind": "SCALAR",
              "name": "Float"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "SCALAR",
        "name": "ID"
      },
      {
        "kind": "SCALAR",
        "name": "Int"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "IntFilter",
        "inputFields": [
          {
            "name": "isNull",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "equalTo",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "notEqualTo",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "distinctFrom",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "notDistinctFrom",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              }
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              }
            }
          },
          {
            "name": "lessThan",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "lessThanOrEqualTo",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "greaterThan",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "greaterThanOrEqualTo",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "ListenPayload",
        "fields": [
          {
            "name": "query",
            "type": {
              "kind": "OBJECT",
              "name": "Query"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "relatedNode",
            "type": {
              "kind": "INTERFACE",
              "name": "Node"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "relatedNodeId",
            "type": {
              "kind": "SCALAR",
              "name": "ID"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Mutation",
        "fields": [
          {
            "name": "createArtist",
            "type": {
              "kind": "OBJECT",
              "name": "CreateArtistPayload"
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateArtistInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "createFavorite",
            "type": {
              "kind": "OBJECT",
              "name": "CreateFavoritePayload"
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateFavoriteInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "createPlaylist",
            "type": {
              "kind": "OBJECT",
              "name": "CreatePlaylistPayload"
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreatePlaylistInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "createPlaylistSong",
            "type": {
              "kind": "OBJECT",
              "name": "CreatePlaylistSongPayload"
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreatePlaylistSongInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "createSong",
            "type": {
              "kind": "OBJECT",
              "name": "CreateSongPayload"
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateSongInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "createUser",
            "type": {
              "kind": "OBJECT",
              "name": "CreateUserPayload"
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateUserInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "deleteArtist",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteArtistPayload"
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeleteArtistInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "deleteArtistById",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteArtistPayload"
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeleteArtistByIdInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "deleteFavorite",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteFavoritePayload"
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeleteFavoriteInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "deleteFavoriteByUserIdAndSongId",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteFavoritePayload"
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeleteFavoriteByUserIdAndSongIdInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "deletePlaylist",
            "type": {
              "kind": "OBJECT",
              "name": "DeletePlaylistPayload"
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeletePlaylistInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "deletePlaylistById",
            "type": {
              "kind": "OBJECT",
              "name": "DeletePlaylistPayload"
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeletePlaylistByIdInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "deletePlaylistSong",
            "type": {
              "kind": "OBJECT",
              "name": "DeletePlaylistSongPayload"
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeletePlaylistSongInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "deletePlaylistSongByPlaylistIdAndSongId",
            "type": {
              "kind": "OBJECT",
              "name": "DeletePlaylistSongPayload"
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeletePlaylistSongByPlaylistIdAndSongIdInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "deleteSong",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteSongPayload"
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeleteSongInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "deleteSongById",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteSongPayload"
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeleteSongByIdInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "deleteUser",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteUserPayload"
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeleteUserInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "deleteUserById",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteUserPayload"
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeleteUserByIdInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updateArtist",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateArtistPayload"
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateArtistInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updateArtistById",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateArtistPayload"
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateArtistByIdInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updateFavorite",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateFavoritePayload"
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateFavoriteInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updateFavoriteByUserIdAndSongId",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateFavoritePayload"
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateFavoriteByUserIdAndSongIdInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updatePlaylist",
            "type": {
              "kind": "OBJECT",
              "name": "UpdatePlaylistPayload"
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdatePlaylistInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updatePlaylistById",
            "type": {
              "kind": "OBJECT",
              "name": "UpdatePlaylistPayload"
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdatePlaylistByIdInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updatePlaylistSong",
            "type": {
              "kind": "OBJECT",
              "name": "UpdatePlaylistSongPayload"
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdatePlaylistSongInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updatePlaylistSongByPlaylistIdAndSongId",
            "type": {
              "kind": "OBJECT",
              "name": "UpdatePlaylistSongPayload"
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdatePlaylistSongByPlaylistIdAndSongIdInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updateSong",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateSongPayload"
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateSongInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updateSongById",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateSongPayload"
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateSongByIdInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updateUser",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateUserPayload"
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateUserInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "updateUserById",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateUserPayload"
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateUserByIdInput"
                  }
                }
              }
            ],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INTERFACE",
        "name": "Node",
        "fields": [
          {
            "name": "nodeId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [],
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Artist"
          },
          {
            "kind": "OBJECT",
            "name": "Favorite"
          },
          {
            "kind": "OBJECT",
            "name": "Playlist"
          },
          {
            "kind": "OBJECT",
            "name": "PlaylistSong"
          },
          {
            "kind": "OBJECT",
            "name": "Query"
          },
          {
            "kind": "OBJECT",
            "name": "Song"
          },
          {
            "kind": "OBJECT",
            "name": "User"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "PageInfo",
        "fields": [
          {
            "name": "endCursor",
            "type": {
              "kind": "SCALAR",
              "name": "Cursor"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "hasNextPage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "hasPreviousPage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "startCursor",
            "type": {
              "kind": "SCALAR",
              "name": "Cursor"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Playlist",
        "fields": [
          {
            "name": "createdPlaylist",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Datetime"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "creatorId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UUID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UUID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "nodeId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "playlistSongsByPlaylistId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PlaylistSongsConnection"
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Cursor"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Cursor"
                }
              },
              {
                "name": "condition",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PlaylistSongCondition"
                }
              },
              {
                "name": "filter",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PlaylistSongFilter"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "PlaylistSongsOrderBy"
                    }
                  }
                },
                "defaultValue": "[PRIMARY_KEY_ASC]"
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "userByCreatorId",
            "type": {
              "kind": "OBJECT",
              "name": "User"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PlaylistCondition",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "UUID"
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "createdPlaylist",
            "type": {
              "kind": "SCALAR",
              "name": "Datetime"
            }
          },
          {
            "name": "creatorId",
            "type": {
              "kind": "SCALAR",
              "name": "UUID"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PlaylistFilter",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UUIDFilter"
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter"
            }
          },
          {
            "name": "createdPlaylist",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DatetimeFilter"
            }
          },
          {
            "name": "creatorId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UUIDFilter"
            }
          },
          {
            "name": "playlistSongsByPlaylistId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "PlaylistToManyPlaylistSongFilter"
            }
          },
          {
            "name": "playlistSongsByPlaylistIdExist",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "userByCreatorId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserFilter"
            }
          },
          {
            "name": "and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "PlaylistFilter"
                }
              }
            }
          },
          {
            "name": "or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "PlaylistFilter"
                }
              }
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "PlaylistFilter"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PlaylistInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "UUID"
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            }
          },
          {
            "name": "createdPlaylist",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Datetime"
              }
            }
          },
          {
            "name": "creatorId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UUID"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PlaylistPatch",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "UUID"
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "createdPlaylist",
            "type": {
              "kind": "SCALAR",
              "name": "Datetime"
            }
          },
          {
            "name": "creatorId",
            "type": {
              "kind": "SCALAR",
              "name": "UUID"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "PlaylistSong",
        "fields": [
          {
            "name": "nodeId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "playlistByPlaylistId",
            "type": {
              "kind": "OBJECT",
              "name": "Playlist"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "playlistId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UUID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "songBySongId",
            "type": {
              "kind": "OBJECT",
              "name": "Song"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "songId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UUID"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PlaylistSongCondition",
        "inputFields": [
          {
            "name": "playlistId",
            "type": {
              "kind": "SCALAR",
              "name": "UUID"
            }
          },
          {
            "name": "songId",
            "type": {
              "kind": "SCALAR",
              "name": "UUID"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PlaylistSongFilter",
        "inputFields": [
          {
            "name": "playlistId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UUIDFilter"
            }
          },
          {
            "name": "songId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UUIDFilter"
            }
          },
          {
            "name": "playlistByPlaylistId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "PlaylistFilter"
            }
          },
          {
            "name": "songBySongId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SongFilter"
            }
          },
          {
            "name": "and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "PlaylistSongFilter"
                }
              }
            }
          },
          {
            "name": "or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "PlaylistSongFilter"
                }
              }
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "PlaylistSongFilter"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PlaylistSongInput",
        "inputFields": [
          {
            "name": "playlistId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UUID"
              }
            }
          },
          {
            "name": "songId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UUID"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PlaylistSongPatch",
        "inputFields": [
          {
            "name": "playlistId",
            "type": {
              "kind": "SCALAR",
              "name": "UUID"
            }
          },
          {
            "name": "songId",
            "type": {
              "kind": "SCALAR",
              "name": "UUID"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "PlaylistSongsConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PlaylistSongsEdge"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PlaylistSong"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "totalCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PlaylistSongsEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "SCALAR",
              "name": "Cursor"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "node",
            "type": {
              "kind": "OBJECT",
              "name": "PlaylistSong"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "PlaylistSongsOrderBy",
        "enumValues": [
          {
            "name": "NATURAL",
            "isDeprecated": false
          },
          {
            "name": "PLAYLIST_ID_ASC",
            "isDeprecated": false
          },
          {
            "name": "PLAYLIST_ID_DESC",
            "isDeprecated": false
          },
          {
            "name": "SONG_ID_ASC",
            "isDeprecated": false
          },
          {
            "name": "SONG_ID_DESC",
            "isDeprecated": false
          },
          {
            "name": "PRIMARY_KEY_ASC",
            "isDeprecated": false
          },
          {
            "name": "PRIMARY_KEY_DESC",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PlaylistToManyPlaylistSongFilter",
        "inputFields": [
          {
            "name": "every",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "PlaylistSongFilter"
            }
          },
          {
            "name": "some",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "PlaylistSongFilter"
            }
          },
          {
            "name": "none",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "PlaylistSongFilter"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "PlaylistsConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PlaylistsEdge"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Playlist"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "totalCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PlaylistsEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "SCALAR",
              "name": "Cursor"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "node",
            "type": {
              "kind": "OBJECT",
              "name": "Playlist"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "PlaylistsOrderBy",
        "enumValues": [
          {
            "name": "NATURAL",
            "isDeprecated": false
          },
          {
            "name": "ID_ASC",
            "isDeprecated": false
          },
          {
            "name": "ID_DESC",
            "isDeprecated": false
          },
          {
            "name": "NAME_ASC",
            "isDeprecated": false
          },
          {
            "name": "NAME_DESC",
            "isDeprecated": false
          },
          {
            "name": "CREATED_PLAYLIST_ASC",
            "isDeprecated": false
          },
          {
            "name": "CREATED_PLAYLIST_DESC",
            "isDeprecated": false
          },
          {
            "name": "CREATOR_ID_ASC",
            "isDeprecated": false
          },
          {
            "name": "CREATOR_ID_DESC",
            "isDeprecated": false
          },
          {
            "name": "PRIMARY_KEY_ASC",
            "isDeprecated": false
          },
          {
            "name": "PRIMARY_KEY_DESC",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Query",
        "fields": [
          {
            "name": "allArtists",
            "type": {
              "kind": "OBJECT",
              "name": "ArtistsConnection"
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Cursor"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Cursor"
                }
              },
              {
                "name": "condition",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ArtistCondition"
                }
              },
              {
                "name": "filter",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ArtistFilter"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "ArtistsOrderBy"
                    }
                  }
                },
                "defaultValue": "[PRIMARY_KEY_ASC]"
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "allFavorites",
            "type": {
              "kind": "OBJECT",
              "name": "FavoritesConnection"
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Cursor"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Cursor"
                }
              },
              {
                "name": "condition",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "FavoriteCondition"
                }
              },
              {
                "name": "filter",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "FavoriteFilter"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "FavoritesOrderBy"
                    }
                  }
                },
                "defaultValue": "[PRIMARY_KEY_ASC]"
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "allPlaylistSongs",
            "type": {
              "kind": "OBJECT",
              "name": "PlaylistSongsConnection"
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Cursor"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Cursor"
                }
              },
              {
                "name": "condition",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PlaylistSongCondition"
                }
              },
              {
                "name": "filter",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PlaylistSongFilter"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "PlaylistSongsOrderBy"
                    }
                  }
                },
                "defaultValue": "[PRIMARY_KEY_ASC]"
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "allPlaylists",
            "type": {
              "kind": "OBJECT",
              "name": "PlaylistsConnection"
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Cursor"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Cursor"
                }
              },
              {
                "name": "condition",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PlaylistCondition"
                }
              },
              {
                "name": "filter",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PlaylistFilter"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "PlaylistsOrderBy"
                    }
                  }
                },
                "defaultValue": "[PRIMARY_KEY_ASC]"
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "allSongs",
            "type": {
              "kind": "OBJECT",
              "name": "SongsConnection"
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Cursor"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Cursor"
                }
              },
              {
                "name": "condition",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "SongCondition"
                }
              },
              {
                "name": "filter",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "SongFilter"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "SongsOrderBy"
                    }
                  }
                },
                "defaultValue": "[PRIMARY_KEY_ASC]"
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "allUsers",
            "type": {
              "kind": "OBJECT",
              "name": "UsersConnection"
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Cursor"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Cursor"
                }
              },
              {
                "name": "condition",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserCondition"
                }
              },
              {
                "name": "filter",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserFilter"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "UsersOrderBy"
                    }
                  }
                },
                "defaultValue": "[PRIMARY_KEY_ASC]"
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "artist",
            "type": {
              "kind": "OBJECT",
              "name": "Artist"
            },
            "args": [
              {
                "name": "nodeId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "artistById",
            "type": {
              "kind": "OBJECT",
              "name": "Artist"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "UUID"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "favorite",
            "type": {
              "kind": "OBJECT",
              "name": "Favorite"
            },
            "args": [
              {
                "name": "nodeId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "favoriteByUserIdAndSongId",
            "type": {
              "kind": "OBJECT",
              "name": "Favorite"
            },
            "args": [
              {
                "name": "songId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "UUID"
                  }
                }
              },
              {
                "name": "userId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "UUID"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "node",
            "type": {
              "kind": "INTERFACE",
              "name": "Node"
            },
            "args": [
              {
                "name": "nodeId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "nodeId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "playlist",
            "type": {
              "kind": "OBJECT",
              "name": "Playlist"
            },
            "args": [
              {
                "name": "nodeId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "playlistById",
            "type": {
              "kind": "OBJECT",
              "name": "Playlist"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "UUID"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "playlistSong",
            "type": {
              "kind": "OBJECT",
              "name": "PlaylistSong"
            },
            "args": [
              {
                "name": "nodeId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "playlistSongByPlaylistIdAndSongId",
            "type": {
              "kind": "OBJECT",
              "name": "PlaylistSong"
            },
            "args": [
              {
                "name": "playlistId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "UUID"
                  }
                }
              },
              {
                "name": "songId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "UUID"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "query",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Query"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "song",
            "type": {
              "kind": "OBJECT",
              "name": "Song"
            },
            "args": [
              {
                "name": "nodeId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "songById",
            "type": {
              "kind": "OBJECT",
              "name": "Song"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "UUID"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "user",
            "type": {
              "kind": "OBJECT",
              "name": "User"
            },
            "args": [
              {
                "name": "nodeId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "userById",
            "type": {
              "kind": "OBJECT",
              "name": "User"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "UUID"
                  }
                }
              }
            ],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Song",
        "fields": [
          {
            "name": "artistByArtistId",
            "type": {
              "kind": "OBJECT",
              "name": "Artist"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "artistId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UUID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "duration",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "favoritesBySongId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "FavoritesConnection"
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Cursor"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Cursor"
                }
              },
              {
                "name": "condition",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "FavoriteCondition"
                }
              },
              {
                "name": "filter",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "FavoriteFilter"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "FavoritesOrderBy"
                    }
                  }
                },
                "defaultValue": "[PRIMARY_KEY_ASC]"
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UUID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "nodeId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "playlistSongsBySongId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PlaylistSongsConnection"
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Cursor"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Cursor"
                }
              },
              {
                "name": "condition",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PlaylistSongCondition"
                }
              },
              {
                "name": "filter",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PlaylistSongFilter"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "PlaylistSongsOrderBy"
                    }
                  }
                },
                "defaultValue": "[PRIMARY_KEY_ASC]"
              }
            ],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SongCondition",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "UUID"
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "duration",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "artistId",
            "type": {
              "kind": "SCALAR",
              "name": "UUID"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SongFilter",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UUIDFilter"
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter"
            }
          },
          {
            "name": "duration",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IntFilter"
            }
          },
          {
            "name": "artistId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UUIDFilter"
            }
          },
          {
            "name": "favoritesBySongId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SongToManyFavoriteFilter"
            }
          },
          {
            "name": "favoritesBySongIdExist",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "playlistSongsBySongId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SongToManyPlaylistSongFilter"
            }
          },
          {
            "name": "playlistSongsBySongIdExist",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "artistByArtistId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ArtistFilter"
            }
          },
          {
            "name": "and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "SongFilter"
                }
              }
            }
          },
          {
            "name": "or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "SongFilter"
                }
              }
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SongFilter"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SongInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "UUID"
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            }
          },
          {
            "name": "duration",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            }
          },
          {
            "name": "artistId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UUID"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SongPatch",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "UUID"
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "duration",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "artistId",
            "type": {
              "kind": "SCALAR",
              "name": "UUID"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SongToManyFavoriteFilter",
        "inputFields": [
          {
            "name": "every",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "FavoriteFilter"
            }
          },
          {
            "name": "some",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "FavoriteFilter"
            }
          },
          {
            "name": "none",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "FavoriteFilter"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SongToManyPlaylistSongFilter",
        "inputFields": [
          {
            "name": "every",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "PlaylistSongFilter"
            }
          },
          {
            "name": "some",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "PlaylistSongFilter"
            }
          },
          {
            "name": "none",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "PlaylistSongFilter"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "SongsConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "SongsEdge"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Song"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "totalCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SongsEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "SCALAR",
              "name": "Cursor"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "node",
            "type": {
              "kind": "OBJECT",
              "name": "Song"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "SongsOrderBy",
        "enumValues": [
          {
            "name": "NATURAL",
            "isDeprecated": false
          },
          {
            "name": "ID_ASC",
            "isDeprecated": false
          },
          {
            "name": "ID_DESC",
            "isDeprecated": false
          },
          {
            "name": "NAME_ASC",
            "isDeprecated": false
          },
          {
            "name": "NAME_DESC",
            "isDeprecated": false
          },
          {
            "name": "DURATION_ASC",
            "isDeprecated": false
          },
          {
            "name": "DURATION_DESC",
            "isDeprecated": false
          },
          {
            "name": "ARTIST_ID_ASC",
            "isDeprecated": false
          },
          {
            "name": "ARTIST_ID_DESC",
            "isDeprecated": false
          },
          {
            "name": "PRIMARY_KEY_ASC",
            "isDeprecated": false
          },
          {
            "name": "PRIMARY_KEY_DESC",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "String"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "StringFilter",
        "inputFields": [
          {
            "name": "isNull",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "equalTo",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "notEqualTo",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "distinctFrom",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "notDistinctFrom",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String"
                }
              }
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String"
                }
              }
            }
          },
          {
            "name": "lessThan",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "lessThanOrEqualTo",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "greaterThan",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "greaterThanOrEqualTo",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "includes",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "notIncludes",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "includesInsensitive",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "notIncludesInsensitive",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "startsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "notStartsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "startsWithInsensitive",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "notStartsWithInsensitive",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "endsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "notEndsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "endsWithInsensitive",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "notEndsWithInsensitive",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "like",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "notLike",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "likeInsensitive",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "notLikeInsensitive",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "equalToInsensitive",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "notEqualToInsensitive",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "distinctFromInsensitive",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "notDistinctFromInsensitive",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "inInsensitive",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String"
                }
              }
            }
          },
          {
            "name": "notInInsensitive",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String"
                }
              }
            }
          },
          {
            "name": "lessThanInsensitive",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "lessThanOrEqualToInsensitive",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "greaterThanInsensitive",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "greaterThanOrEqualToInsensitive",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "Subscription",
        "fields": [
          {
            "name": "listen",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ListenPayload"
              }
            },
            "args": [
              {
                "name": "topic",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String"
                  }
                }
              }
            ],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "UUID"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UUIDFilter",
        "inputFields": [
          {
            "name": "isNull",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "equalTo",
            "type": {
              "kind": "SCALAR",
              "name": "UUID"
            }
          },
          {
            "name": "notEqualTo",
            "type": {
              "kind": "SCALAR",
              "name": "UUID"
            }
          },
          {
            "name": "distinctFrom",
            "type": {
              "kind": "SCALAR",
              "name": "UUID"
            }
          },
          {
            "name": "notDistinctFrom",
            "type": {
              "kind": "SCALAR",
              "name": "UUID"
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "UUID"
                }
              }
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "UUID"
                }
              }
            }
          },
          {
            "name": "lessThan",
            "type": {
              "kind": "SCALAR",
              "name": "UUID"
            }
          },
          {
            "name": "lessThanOrEqualTo",
            "type": {
              "kind": "SCALAR",
              "name": "UUID"
            }
          },
          {
            "name": "greaterThan",
            "type": {
              "kind": "SCALAR",
              "name": "UUID"
            }
          },
          {
            "name": "greaterThanOrEqualTo",
            "type": {
              "kind": "SCALAR",
              "name": "UUID"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdateArtistByIdInput",
        "inputFields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "artistPatch",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ArtistPatch"
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UUID"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdateArtistInput",
        "inputFields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "nodeId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          },
          {
            "name": "artistPatch",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ArtistPatch"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "UpdateArtistPayload",
        "fields": [
          {
            "name": "artist",
            "type": {
              "kind": "OBJECT",
              "name": "Artist"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "artistEdge",
            "type": {
              "kind": "OBJECT",
              "name": "ArtistsEdge"
            },
            "args": [
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "ArtistsOrderBy"
                    }
                  }
                },
                "defaultValue": "[PRIMARY_KEY_ASC]"
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "query",
            "type": {
              "kind": "OBJECT",
              "name": "Query"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdateFavoriteByUserIdAndSongIdInput",
        "inputFields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "favoritePatch",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "FavoritePatch"
              }
            }
          },
          {
            "name": "userId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UUID"
              }
            }
          },
          {
            "name": "songId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UUID"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdateFavoriteInput",
        "inputFields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "nodeId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          },
          {
            "name": "favoritePatch",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "FavoritePatch"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "UpdateFavoritePayload",
        "fields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "favorite",
            "type": {
              "kind": "OBJECT",
              "name": "Favorite"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "favoriteEdge",
            "type": {
              "kind": "OBJECT",
              "name": "FavoritesEdge"
            },
            "args": [
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "FavoritesOrderBy"
                    }
                  }
                },
                "defaultValue": "[PRIMARY_KEY_ASC]"
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "query",
            "type": {
              "kind": "OBJECT",
              "name": "Query"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "songBySongId",
            "type": {
              "kind": "OBJECT",
              "name": "Song"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "userByUserId",
            "type": {
              "kind": "OBJECT",
              "name": "User"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdatePlaylistByIdInput",
        "inputFields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "playlistPatch",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "PlaylistPatch"
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UUID"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdatePlaylistInput",
        "inputFields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "nodeId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          },
          {
            "name": "playlistPatch",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "PlaylistPatch"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "UpdatePlaylistPayload",
        "fields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "playlist",
            "type": {
              "kind": "OBJECT",
              "name": "Playlist"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "playlistEdge",
            "type": {
              "kind": "OBJECT",
              "name": "PlaylistsEdge"
            },
            "args": [
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "PlaylistsOrderBy"
                    }
                  }
                },
                "defaultValue": "[PRIMARY_KEY_ASC]"
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "query",
            "type": {
              "kind": "OBJECT",
              "name": "Query"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "userByCreatorId",
            "type": {
              "kind": "OBJECT",
              "name": "User"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdatePlaylistSongByPlaylistIdAndSongIdInput",
        "inputFields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "playlistSongPatch",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "PlaylistSongPatch"
              }
            }
          },
          {
            "name": "playlistId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UUID"
              }
            }
          },
          {
            "name": "songId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UUID"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdatePlaylistSongInput",
        "inputFields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "nodeId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          },
          {
            "name": "playlistSongPatch",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "PlaylistSongPatch"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "UpdatePlaylistSongPayload",
        "fields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "playlistByPlaylistId",
            "type": {
              "kind": "OBJECT",
              "name": "Playlist"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "playlistSong",
            "type": {
              "kind": "OBJECT",
              "name": "PlaylistSong"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "playlistSongEdge",
            "type": {
              "kind": "OBJECT",
              "name": "PlaylistSongsEdge"
            },
            "args": [
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "PlaylistSongsOrderBy"
                    }
                  }
                },
                "defaultValue": "[PRIMARY_KEY_ASC]"
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "query",
            "type": {
              "kind": "OBJECT",
              "name": "Query"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "songBySongId",
            "type": {
              "kind": "OBJECT",
              "name": "Song"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdateSongByIdInput",
        "inputFields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "songPatch",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "SongPatch"
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UUID"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdateSongInput",
        "inputFields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "nodeId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          },
          {
            "name": "songPatch",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "SongPatch"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "UpdateSongPayload",
        "fields": [
          {
            "name": "artistByArtistId",
            "type": {
              "kind": "OBJECT",
              "name": "Artist"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "query",
            "type": {
              "kind": "OBJECT",
              "name": "Query"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "song",
            "type": {
              "kind": "OBJECT",
              "name": "Song"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "songEdge",
            "type": {
              "kind": "OBJECT",
              "name": "SongsEdge"
            },
            "args": [
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "SongsOrderBy"
                    }
                  }
                },
                "defaultValue": "[PRIMARY_KEY_ASC]"
              }
            ],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdateUserByIdInput",
        "inputFields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "userPatch",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UserPatch"
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UUID"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdateUserInput",
        "inputFields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "nodeId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          },
          {
            "name": "userPatch",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UserPatch"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "UpdateUserPayload",
        "fields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "query",
            "type": {
              "kind": "OBJECT",
              "name": "Query"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "user",
            "type": {
              "kind": "OBJECT",
              "name": "User"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "userEdge",
            "type": {
              "kind": "OBJECT",
              "name": "UsersEdge"
            },
            "args": [
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "UsersOrderBy"
                    }
                  }
                },
                "defaultValue": "[PRIMARY_KEY_ASC]"
              }
            ],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "User",
        "fields": [
          {
            "name": "coordinates",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "email",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "favoritesByUserId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "FavoritesConnection"
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Cursor"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Cursor"
                }
              },
              {
                "name": "condition",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "FavoriteCondition"
                }
              },
              {
                "name": "filter",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "FavoriteFilter"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "FavoritesOrderBy"
                    }
                  }
                },
                "defaultValue": "[PRIMARY_KEY_ASC]"
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UUID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "nodeId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "password",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "playlistsByCreatorId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PlaylistsConnection"
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Cursor"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Cursor"
                }
              },
              {
                "name": "condition",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PlaylistCondition"
                }
              },
              {
                "name": "filter",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PlaylistFilter"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "PlaylistsOrderBy"
                    }
                  }
                },
                "defaultValue": "[PRIMARY_KEY_ASC]"
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "userName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserCondition",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "UUID"
            }
          },
          {
            "name": "userName",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "password",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "coordinates",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserFilter",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UUIDFilter"
            }
          },
          {
            "name": "userName",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter"
            }
          },
          {
            "name": "password",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter"
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter"
            }
          },
          {
            "name": "coordinates",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "FloatListFilter"
            }
          },
          {
            "name": "playlistsByCreatorId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserToManyPlaylistFilter"
            }
          },
          {
            "name": "playlistsByCreatorIdExist",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "favoritesByUserId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserToManyFavoriteFilter"
            }
          },
          {
            "name": "favoritesByUserIdExist",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserFilter"
                }
              }
            }
          },
          {
            "name": "or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserFilter"
                }
              }
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserFilter"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "UUID"
            }
          },
          {
            "name": "userName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            }
          },
          {
            "name": "password",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            }
          },
          {
            "name": "coordinates",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserPatch",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "UUID"
            }
          },
          {
            "name": "userName",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "password",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "coordinates",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserToManyFavoriteFilter",
        "inputFields": [
          {
            "name": "every",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "FavoriteFilter"
            }
          },
          {
            "name": "some",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "FavoriteFilter"
            }
          },
          {
            "name": "none",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "FavoriteFilter"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserToManyPlaylistFilter",
        "inputFields": [
          {
            "name": "every",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "PlaylistFilter"
            }
          },
          {
            "name": "some",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "PlaylistFilter"
            }
          },
          {
            "name": "none",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "PlaylistFilter"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "UsersConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UsersEdge"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User"
                }
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "totalCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UsersEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "SCALAR",
              "name": "Cursor"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "node",
            "type": {
              "kind": "OBJECT",
              "name": "User"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "UsersOrderBy",
        "enumValues": [
          {
            "name": "NATURAL",
            "isDeprecated": false
          },
          {
            "name": "ID_ASC",
            "isDeprecated": false
          },
          {
            "name": "ID_DESC",
            "isDeprecated": false
          },
          {
            "name": "USER_NAME_ASC",
            "isDeprecated": false
          },
          {
            "name": "USER_NAME_DESC",
            "isDeprecated": false
          },
          {
            "name": "PASSWORD_ASC",
            "isDeprecated": false
          },
          {
            "name": "PASSWORD_DESC",
            "isDeprecated": false
          },
          {
            "name": "EMAIL_ASC",
            "isDeprecated": false
          },
          {
            "name": "EMAIL_DESC",
            "isDeprecated": false
          },
          {
            "name": "COORDINATES_ASC",
            "isDeprecated": false
          },
          {
            "name": "COORDINATES_DESC",
            "isDeprecated": false
          },
          {
            "name": "PRIMARY_KEY_ASC",
            "isDeprecated": false
          },
          {
            "name": "PRIMARY_KEY_DESC",
            "isDeprecated": false
          }
        ]
      }
    ],
    "directives": []
  }
} as const;

export { introspection };