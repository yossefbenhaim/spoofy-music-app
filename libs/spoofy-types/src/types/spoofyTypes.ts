export type Maybe<T> = T;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Cursor: { input: any; output: any };
  Datetime: { input: any; output: any };
  UUID: { input: any; output: any };
};

export type Artist = Node & {
  __typename?: 'Artist';
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads and enables pagination through a set of `Song`. */
  songsByArtistId: SongsConnection;
};

export type ArtistSongsByArtistIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<SongCondition>;
  filter?: InputMaybe<SongFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SongsOrderBy>>;
};

/** A condition to be used against `Artist` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ArtistCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `Artist` object types. All fields are combined with a logical ‘and.’ */
export type ArtistFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ArtistFilter>>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ArtistFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ArtistFilter>>;
  /** Filter by the object’s `songsByArtistId` relation. */
  songsByArtistId?: InputMaybe<ArtistToManySongFilter>;
  /** Some related `songsByArtistId` exist. */
  songsByArtistIdExist?: InputMaybe<Scalars['Boolean']['input']>;
};

/** An input for mutations affecting `Artist` */
export type ArtistInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  name: Scalars['String']['input'];
};

/** Represents an update to a `Artist`. Fields that are set will be updated. */
export type ArtistPatch = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against many `Song` object types. All fields are combined with a logical ‘and.’ */
export type ArtistToManySongFilter = {
  /** Every related `Song` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<SongFilter>;
  /** No related `Song` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<SongFilter>;
  /** Some related `Song` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<SongFilter>;
};

/** A connection to a list of `Artist` values. */
export type ArtistsConnection = {
  __typename?: 'ArtistsConnection';
  /** A list of edges which contains the `Artist` and cursor to aid in pagination. */
  edges: Array<ArtistsEdge>;
  /** A list of `Artist` objects. */
  nodes: Array<Maybe<Artist>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Artist` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Artist` edge in the connection. */
export type ArtistsEdge = {
  __typename?: 'ArtistsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Artist` at the end of the edge. */
  node?: Maybe<Artist>;
};

/** Methods to use when ordering `Artist`. */
export enum ArtistsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/** All input for the create `Artist` mutation. */
export type CreateArtistInput = {
  /** The `Artist` to be created by this mutation. */
  artist: ArtistInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our create `Artist` mutation. */
export type CreateArtistPayload = {
  __typename?: 'CreateArtistPayload';
  /** The `Artist` that was created by this mutation. */
  artist?: Maybe<Artist>;
  /** An edge for our `Artist`. May be used by Relay 1. */
  artistEdge?: Maybe<ArtistsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our create `Artist` mutation. */
export type CreateArtistPayloadArtistEdgeArgs = {
  orderBy?: InputMaybe<Array<ArtistsOrderBy>>;
};

/** All input for the create `Favorite` mutation. */
export type CreateFavoriteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Favorite` to be created by this mutation. */
  favorite: FavoriteInput;
};

/** The output of our create `Favorite` mutation. */
export type CreateFavoritePayload = {
  __typename?: 'CreateFavoritePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Favorite` that was created by this mutation. */
  favorite?: Maybe<Favorite>;
  /** An edge for our `Favorite`. May be used by Relay 1. */
  favoriteEdge?: Maybe<FavoritesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Song` that is related to this `Favorite`. */
  songBySongId?: Maybe<Song>;
  /** Reads a single `User` that is related to this `Favorite`. */
  userByUserId?: Maybe<User>;
};

/** The output of our create `Favorite` mutation. */
export type CreateFavoritePayloadFavoriteEdgeArgs = {
  orderBy?: InputMaybe<Array<FavoritesOrderBy>>;
};

/** All input for the create `Playlist` mutation. */
export type CreatePlaylistInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Playlist` to be created by this mutation. */
  playlist: PlaylistInput;
};

/** The output of our create `Playlist` mutation. */
export type CreatePlaylistPayload = {
  __typename?: 'CreatePlaylistPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Playlist` that was created by this mutation. */
  playlist?: Maybe<Playlist>;
  /** An edge for our `Playlist`. May be used by Relay 1. */
  playlistEdge?: Maybe<PlaylistsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Playlist`. */
  userByCreatorId?: Maybe<User>;
};

/** The output of our create `Playlist` mutation. */
export type CreatePlaylistPayloadPlaylistEdgeArgs = {
  orderBy?: InputMaybe<Array<PlaylistsOrderBy>>;
};

/** All input for the create `PlaylistSong` mutation. */
export type CreatePlaylistSongInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `PlaylistSong` to be created by this mutation. */
  playlistSong: PlaylistSongInput;
};

/** The output of our create `PlaylistSong` mutation. */
export type CreatePlaylistSongPayload = {
  __typename?: 'CreatePlaylistSongPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Playlist` that is related to this `PlaylistSong`. */
  playlistByPlaylistId?: Maybe<Playlist>;
  /** The `PlaylistSong` that was created by this mutation. */
  playlistSong?: Maybe<PlaylistSong>;
  /** An edge for our `PlaylistSong`. May be used by Relay 1. */
  playlistSongEdge?: Maybe<PlaylistSongsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Song` that is related to this `PlaylistSong`. */
  songBySongId?: Maybe<Song>;
};

/** The output of our create `PlaylistSong` mutation. */
export type CreatePlaylistSongPayloadPlaylistSongEdgeArgs = {
  orderBy?: InputMaybe<Array<PlaylistSongsOrderBy>>;
};

/** All input for the create `Song` mutation. */
export type CreateSongInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Song` to be created by this mutation. */
  song: SongInput;
};

/** The output of our create `Song` mutation. */
export type CreateSongPayload = {
  __typename?: 'CreateSongPayload';
  /** Reads a single `Artist` that is related to this `Song`. */
  artistByArtistId?: Maybe<Artist>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Song` that was created by this mutation. */
  song?: Maybe<Song>;
  /** An edge for our `Song`. May be used by Relay 1. */
  songEdge?: Maybe<SongsEdge>;
};

/** The output of our create `Song` mutation. */
export type CreateSongPayloadSongEdgeArgs = {
  orderBy?: InputMaybe<Array<SongsOrderBy>>;
};

/** All input for the create `User` mutation. */
export type CreateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `User` to be created by this mutation. */
  user: UserInput;
};

/** The output of our create `User` mutation. */
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was created by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};

/** The output of our create `User` mutation. */
export type CreateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** A filter to be used against Datetime fields. All fields are combined with a logical ‘and.’ */
export type DatetimeFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Datetime']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Datetime']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Datetime']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Datetime']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Datetime']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Datetime']['input']>>;
};

/** All input for the `deleteArtistById` mutation. */
export type DeleteArtistByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** All input for the `deleteArtist` mutation. */
export type DeleteArtistInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Artist` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** The output of our delete `Artist` mutation. */
export type DeleteArtistPayload = {
  __typename?: 'DeleteArtistPayload';
  /** The `Artist` that was deleted by this mutation. */
  artist?: Maybe<Artist>;
  /** An edge for our `Artist`. May be used by Relay 1. */
  artistEdge?: Maybe<ArtistsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedArtistId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our delete `Artist` mutation. */
export type DeleteArtistPayloadArtistEdgeArgs = {
  orderBy?: InputMaybe<Array<ArtistsOrderBy>>;
};

/** All input for the `deleteFavoriteByUserIdAndSongId` mutation. */
export type DeleteFavoriteByUserIdAndSongIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  songId: Scalars['UUID']['input'];
  userId: Scalars['UUID']['input'];
};

/** All input for the `deleteFavorite` mutation. */
export type DeleteFavoriteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Favorite` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** The output of our delete `Favorite` mutation. */
export type DeleteFavoritePayload = {
  __typename?: 'DeleteFavoritePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedFavoriteId?: Maybe<Scalars['ID']['output']>;
  /** The `Favorite` that was deleted by this mutation. */
  favorite?: Maybe<Favorite>;
  /** An edge for our `Favorite`. May be used by Relay 1. */
  favoriteEdge?: Maybe<FavoritesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Song` that is related to this `Favorite`. */
  songBySongId?: Maybe<Song>;
  /** Reads a single `User` that is related to this `Favorite`. */
  userByUserId?: Maybe<User>;
};

/** The output of our delete `Favorite` mutation. */
export type DeleteFavoritePayloadFavoriteEdgeArgs = {
  orderBy?: InputMaybe<Array<FavoritesOrderBy>>;
};

/** All input for the `deletePlaylistById` mutation. */
export type DeletePlaylistByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** All input for the `deletePlaylist` mutation. */
export type DeletePlaylistInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Playlist` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** The output of our delete `Playlist` mutation. */
export type DeletePlaylistPayload = {
  __typename?: 'DeletePlaylistPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedPlaylistId?: Maybe<Scalars['ID']['output']>;
  /** The `Playlist` that was deleted by this mutation. */
  playlist?: Maybe<Playlist>;
  /** An edge for our `Playlist`. May be used by Relay 1. */
  playlistEdge?: Maybe<PlaylistsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Playlist`. */
  userByCreatorId?: Maybe<User>;
};

/** The output of our delete `Playlist` mutation. */
export type DeletePlaylistPayloadPlaylistEdgeArgs = {
  orderBy?: InputMaybe<Array<PlaylistsOrderBy>>;
};

/** All input for the `deletePlaylistSongByPlaylistIdAndSongId` mutation. */
export type DeletePlaylistSongByPlaylistIdAndSongIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  playlistId: Scalars['UUID']['input'];
  songId: Scalars['UUID']['input'];
};

/** All input for the `deletePlaylistSong` mutation. */
export type DeletePlaylistSongInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `PlaylistSong` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** The output of our delete `PlaylistSong` mutation. */
export type DeletePlaylistSongPayload = {
  __typename?: 'DeletePlaylistSongPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedPlaylistSongId?: Maybe<Scalars['ID']['output']>;
  /** Reads a single `Playlist` that is related to this `PlaylistSong`. */
  playlistByPlaylistId?: Maybe<Playlist>;
  /** The `PlaylistSong` that was deleted by this mutation. */
  playlistSong?: Maybe<PlaylistSong>;
  /** An edge for our `PlaylistSong`. May be used by Relay 1. */
  playlistSongEdge?: Maybe<PlaylistSongsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Song` that is related to this `PlaylistSong`. */
  songBySongId?: Maybe<Song>;
};

/** The output of our delete `PlaylistSong` mutation. */
export type DeletePlaylistSongPayloadPlaylistSongEdgeArgs = {
  orderBy?: InputMaybe<Array<PlaylistSongsOrderBy>>;
};

/** All input for the `deleteSongById` mutation. */
export type DeleteSongByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** All input for the `deleteSong` mutation. */
export type DeleteSongInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Song` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** The output of our delete `Song` mutation. */
export type DeleteSongPayload = {
  __typename?: 'DeleteSongPayload';
  /** Reads a single `Artist` that is related to this `Song`. */
  artistByArtistId?: Maybe<Artist>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedSongId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Song` that was deleted by this mutation. */
  song?: Maybe<Song>;
  /** An edge for our `Song`. May be used by Relay 1. */
  songEdge?: Maybe<SongsEdge>;
};

/** The output of our delete `Song` mutation. */
export type DeleteSongPayloadSongEdgeArgs = {
  orderBy?: InputMaybe<Array<SongsOrderBy>>;
};

/** All input for the `deleteUserById` mutation. */
export type DeleteUserByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** All input for the `deleteUser` mutation. */
export type DeleteUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `User` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedUserId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was deleted by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

export type Favorite = Node & {
  __typename?: 'Favorite';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads a single `Song` that is related to this `Favorite`. */
  songBySongId?: Maybe<Song>;
  songId: Scalars['UUID']['output'];
  /** Reads a single `User` that is related to this `Favorite`. */
  userByUserId?: Maybe<User>;
  userId: Scalars['UUID']['output'];
};

/**
 * A condition to be used against `Favorite` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type FavoriteCondition = {
  /** Checks for equality with the object’s `songId` field. */
  songId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A filter to be used against `Favorite` object types. All fields are combined with a logical ‘and.’ */
export type FavoriteFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<FavoriteFilter>>;
  /** Negates the expression. */
  not?: InputMaybe<FavoriteFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<FavoriteFilter>>;
  /** Filter by the object’s `songBySongId` relation. */
  songBySongId?: InputMaybe<SongFilter>;
  /** Filter by the object’s `songId` field. */
  songId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `userByUserId` relation. */
  userByUserId?: InputMaybe<UserFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<UuidFilter>;
};

/** An input for mutations affecting `Favorite` */
export type FavoriteInput = {
  songId: Scalars['UUID']['input'];
  userId: Scalars['UUID']['input'];
};

/** Represents an update to a `Favorite`. Fields that are set will be updated. */
export type FavoritePatch = {
  songId?: InputMaybe<Scalars['UUID']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `Favorite` values. */
export type FavoritesConnection = {
  __typename?: 'FavoritesConnection';
  /** A list of edges which contains the `Favorite` and cursor to aid in pagination. */
  edges: Array<FavoritesEdge>;
  /** A list of `Favorite` objects. */
  nodes: Array<Maybe<Favorite>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Favorite` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Favorite` edge in the connection. */
export type FavoritesEdge = {
  __typename?: 'FavoritesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Favorite` at the end of the edge. */
  node?: Maybe<Favorite>;
};

/** Methods to use when ordering `Favorite`. */
export enum FavoritesOrderBy {
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SongIdAsc = 'SONG_ID_ASC',
  SongIdDesc = 'SONG_ID_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
}

/** A filter to be used against Float List fields. All fields are combined with a logical ‘and.’ */
export type FloatListFilter = {
  /** Any array item is equal to the specified value. */
  anyEqualTo?: InputMaybe<Scalars['Float']['input']>;
  /** Any array item is greater than the specified value. */
  anyGreaterThan?: InputMaybe<Scalars['Float']['input']>;
  /** Any array item is greater than or equal to the specified value. */
  anyGreaterThanOrEqualTo?: InputMaybe<Scalars['Float']['input']>;
  /** Any array item is less than the specified value. */
  anyLessThan?: InputMaybe<Scalars['Float']['input']>;
  /** Any array item is less than or equal to the specified value. */
  anyLessThanOrEqualTo?: InputMaybe<Scalars['Float']['input']>;
  /** Any array item is not equal to the specified value. */
  anyNotEqualTo?: InputMaybe<Scalars['Float']['input']>;
  /** Contained by the specified list of values. */
  containedBy?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** Contains the specified list of values. */
  contains?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<
    Array<InputMaybe<Scalars['Float']['input']>>
  >;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** Overlaps the specified list of values. */
  overlaps?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** A filter to be used against Int fields. All fields are combined with a logical ‘and.’ */
export type IntFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Int']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Int']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Int']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Int']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Int']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Int']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Int']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Int']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type ListenPayload = {
  __typename?: 'ListenPayload';
  /** Our root query field type. Allows us to run any query from our subscription payload. */
  query?: Maybe<Query>;
  relatedNode?: Maybe<Node>;
  relatedNodeId?: Maybe<Scalars['ID']['output']>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Artist`. */
  createArtist?: Maybe<CreateArtistPayload>;
  /** Creates a single `Favorite`. */
  createFavorite?: Maybe<CreateFavoritePayload>;
  /** Creates a single `Playlist`. */
  createPlaylist?: Maybe<CreatePlaylistPayload>;
  /** Creates a single `PlaylistSong`. */
  createPlaylistSong?: Maybe<CreatePlaylistSongPayload>;
  /** Creates a single `Song`. */
  createSong?: Maybe<CreateSongPayload>;
  /** Creates a single `User`. */
  createUser?: Maybe<CreateUserPayload>;
  /** Deletes a single `Artist` using its globally unique id. */
  deleteArtist?: Maybe<DeleteArtistPayload>;
  /** Deletes a single `Artist` using a unique key. */
  deleteArtistById?: Maybe<DeleteArtistPayload>;
  /** Deletes a single `Favorite` using its globally unique id. */
  deleteFavorite?: Maybe<DeleteFavoritePayload>;
  /** Deletes a single `Favorite` using a unique key. */
  deleteFavoriteByUserIdAndSongId?: Maybe<DeleteFavoritePayload>;
  /** Deletes a single `Playlist` using its globally unique id. */
  deletePlaylist?: Maybe<DeletePlaylistPayload>;
  /** Deletes a single `Playlist` using a unique key. */
  deletePlaylistById?: Maybe<DeletePlaylistPayload>;
  /** Deletes a single `PlaylistSong` using its globally unique id. */
  deletePlaylistSong?: Maybe<DeletePlaylistSongPayload>;
  /** Deletes a single `PlaylistSong` using a unique key. */
  deletePlaylistSongByPlaylistIdAndSongId?: Maybe<DeletePlaylistSongPayload>;
  /** Deletes a single `Song` using its globally unique id. */
  deleteSong?: Maybe<DeleteSongPayload>;
  /** Deletes a single `Song` using a unique key. */
  deleteSongById?: Maybe<DeleteSongPayload>;
  /** Deletes a single `User` using its globally unique id. */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUserById?: Maybe<DeleteUserPayload>;
  /** Updates a single `Artist` using its globally unique id and a patch. */
  updateArtist?: Maybe<UpdateArtistPayload>;
  /** Updates a single `Artist` using a unique key and a patch. */
  updateArtistById?: Maybe<UpdateArtistPayload>;
  /** Updates a single `Favorite` using its globally unique id and a patch. */
  updateFavorite?: Maybe<UpdateFavoritePayload>;
  /** Updates a single `Favorite` using a unique key and a patch. */
  updateFavoriteByUserIdAndSongId?: Maybe<UpdateFavoritePayload>;
  /** Updates a single `Playlist` using its globally unique id and a patch. */
  updatePlaylist?: Maybe<UpdatePlaylistPayload>;
  /** Updates a single `Playlist` using a unique key and a patch. */
  updatePlaylistById?: Maybe<UpdatePlaylistPayload>;
  /** Updates a single `PlaylistSong` using its globally unique id and a patch. */
  updatePlaylistSong?: Maybe<UpdatePlaylistSongPayload>;
  /** Updates a single `PlaylistSong` using a unique key and a patch. */
  updatePlaylistSongByPlaylistIdAndSongId?: Maybe<UpdatePlaylistSongPayload>;
  /** Updates a single `Song` using its globally unique id and a patch. */
  updateSong?: Maybe<UpdateSongPayload>;
  /** Updates a single `Song` using a unique key and a patch. */
  updateSongById?: Maybe<UpdateSongPayload>;
  /** Updates a single `User` using its globally unique id and a patch. */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUserById?: Maybe<UpdateUserPayload>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateArtistArgs = {
  input: CreateArtistInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateFavoriteArgs = {
  input: CreateFavoriteInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePlaylistArgs = {
  input: CreatePlaylistInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePlaylistSongArgs = {
  input: CreatePlaylistSongInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateSongArgs = {
  input: CreateSongInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteArtistArgs = {
  input: DeleteArtistInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteArtistByIdArgs = {
  input: DeleteArtistByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFavoriteArgs = {
  input: DeleteFavoriteInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFavoriteByUserIdAndSongIdArgs = {
  input: DeleteFavoriteByUserIdAndSongIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePlaylistArgs = {
  input: DeletePlaylistInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePlaylistByIdArgs = {
  input: DeletePlaylistByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePlaylistSongArgs = {
  input: DeletePlaylistSongInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePlaylistSongByPlaylistIdAndSongIdArgs = {
  input: DeletePlaylistSongByPlaylistIdAndSongIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSongArgs = {
  input: DeleteSongInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSongByIdArgs = {
  input: DeleteSongByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByIdArgs = {
  input: DeleteUserByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateArtistArgs = {
  input: UpdateArtistInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateArtistByIdArgs = {
  input: UpdateArtistByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFavoriteArgs = {
  input: UpdateFavoriteInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFavoriteByUserIdAndSongIdArgs = {
  input: UpdateFavoriteByUserIdAndSongIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePlaylistArgs = {
  input: UpdatePlaylistInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePlaylistByIdArgs = {
  input: UpdatePlaylistByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePlaylistSongArgs = {
  input: UpdatePlaylistSongInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePlaylistSongByPlaylistIdAndSongIdArgs = {
  input: UpdatePlaylistSongByPlaylistIdAndSongIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSongArgs = {
  input: UpdateSongInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSongByIdArgs = {
  input: UpdateSongByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByIdArgs = {
  input: UpdateUserByIdInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']['output']>;
};

export type Playlist = Node & {
  __typename?: 'Playlist';
  createdPlaylist: Scalars['Datetime']['output'];
  creatorId: Scalars['UUID']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads and enables pagination through a set of `PlaylistSong`. */
  playlistSongsByPlaylistId: PlaylistSongsConnection;
  /** Reads a single `User` that is related to this `Playlist`. */
  userByCreatorId?: Maybe<User>;
};

export type PlaylistPlaylistSongsByPlaylistIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<PlaylistSongCondition>;
  filter?: InputMaybe<PlaylistSongFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PlaylistSongsOrderBy>>;
};

/**
 * A condition to be used against `Playlist` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type PlaylistCondition = {
  /** Checks for equality with the object’s `createdPlaylist` field. */
  createdPlaylist?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `creatorId` field. */
  creatorId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `Playlist` object types. All fields are combined with a logical ‘and.’ */
export type PlaylistFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<PlaylistFilter>>;
  /** Filter by the object’s `createdPlaylist` field. */
  createdPlaylist?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `creatorId` field. */
  creatorId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<PlaylistFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<PlaylistFilter>>;
  /** Filter by the object’s `playlistSongsByPlaylistId` relation. */
  playlistSongsByPlaylistId?: InputMaybe<PlaylistToManyPlaylistSongFilter>;
  /** Some related `playlistSongsByPlaylistId` exist. */
  playlistSongsByPlaylistIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `userByCreatorId` relation. */
  userByCreatorId?: InputMaybe<UserFilter>;
};

/** An input for mutations affecting `Playlist` */
export type PlaylistInput = {
  createdPlaylist: Scalars['Datetime']['input'];
  creatorId: Scalars['UUID']['input'];
  id?: InputMaybe<Scalars['UUID']['input']>;
  name: Scalars['String']['input'];
};

/** Represents an update to a `Playlist`. Fields that are set will be updated. */
export type PlaylistPatch = {
  createdPlaylist?: InputMaybe<Scalars['Datetime']['input']>;
  creatorId?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type PlaylistSong = Node & {
  __typename?: 'PlaylistSong';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads a single `Playlist` that is related to this `PlaylistSong`. */
  playlistByPlaylistId?: Maybe<Playlist>;
  playlistId: Scalars['UUID']['output'];
  /** Reads a single `Song` that is related to this `PlaylistSong`. */
  songBySongId?: Maybe<Song>;
  songId: Scalars['UUID']['output'];
};

/**
 * A condition to be used against `PlaylistSong` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type PlaylistSongCondition = {
  /** Checks for equality with the object’s `playlistId` field. */
  playlistId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `songId` field. */
  songId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A filter to be used against `PlaylistSong` object types. All fields are combined with a logical ‘and.’ */
export type PlaylistSongFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<PlaylistSongFilter>>;
  /** Negates the expression. */
  not?: InputMaybe<PlaylistSongFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<PlaylistSongFilter>>;
  /** Filter by the object’s `playlistByPlaylistId` relation. */
  playlistByPlaylistId?: InputMaybe<PlaylistFilter>;
  /** Filter by the object’s `playlistId` field. */
  playlistId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `songBySongId` relation. */
  songBySongId?: InputMaybe<SongFilter>;
  /** Filter by the object’s `songId` field. */
  songId?: InputMaybe<UuidFilter>;
};

/** An input for mutations affecting `PlaylistSong` */
export type PlaylistSongInput = {
  playlistId: Scalars['UUID']['input'];
  songId: Scalars['UUID']['input'];
};

/** Represents an update to a `PlaylistSong`. Fields that are set will be updated. */
export type PlaylistSongPatch = {
  playlistId?: InputMaybe<Scalars['UUID']['input']>;
  songId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `PlaylistSong` values. */
export type PlaylistSongsConnection = {
  __typename?: 'PlaylistSongsConnection';
  /** A list of edges which contains the `PlaylistSong` and cursor to aid in pagination. */
  edges: Array<PlaylistSongsEdge>;
  /** A list of `PlaylistSong` objects. */
  nodes: Array<Maybe<PlaylistSong>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `PlaylistSong` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `PlaylistSong` edge in the connection. */
export type PlaylistSongsEdge = {
  __typename?: 'PlaylistSongsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `PlaylistSong` at the end of the edge. */
  node?: Maybe<PlaylistSong>;
};

/** Methods to use when ordering `PlaylistSong`. */
export enum PlaylistSongsOrderBy {
  Natural = 'NATURAL',
  PlaylistIdAsc = 'PLAYLIST_ID_ASC',
  PlaylistIdDesc = 'PLAYLIST_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SongIdAsc = 'SONG_ID_ASC',
  SongIdDesc = 'SONG_ID_DESC',
}

/** A filter to be used against many `PlaylistSong` object types. All fields are combined with a logical ‘and.’ */
export type PlaylistToManyPlaylistSongFilter = {
  /** Every related `PlaylistSong` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<PlaylistSongFilter>;
  /** No related `PlaylistSong` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<PlaylistSongFilter>;
  /** Some related `PlaylistSong` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<PlaylistSongFilter>;
};

/** A connection to a list of `Playlist` values. */
export type PlaylistsConnection = {
  __typename?: 'PlaylistsConnection';
  /** A list of edges which contains the `Playlist` and cursor to aid in pagination. */
  edges: Array<PlaylistsEdge>;
  /** A list of `Playlist` objects. */
  nodes: Array<Maybe<Playlist>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Playlist` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Playlist` edge in the connection. */
export type PlaylistsEdge = {
  __typename?: 'PlaylistsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Playlist` at the end of the edge. */
  node?: Maybe<Playlist>;
};

/** Methods to use when ordering `Playlist`. */
export enum PlaylistsOrderBy {
  CreatedPlaylistAsc = 'CREATED_PLAYLIST_ASC',
  CreatedPlaylistDesc = 'CREATED_PLAYLIST_DESC',
  CreatorIdAsc = 'CREATOR_ID_ASC',
  CreatorIdDesc = 'CREATOR_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /** Reads and enables pagination through a set of `Artist`. */
  allArtists?: Maybe<ArtistsConnection>;
  /** Reads and enables pagination through a set of `Favorite`. */
  allFavorites?: Maybe<FavoritesConnection>;
  /** Reads and enables pagination through a set of `PlaylistSong`. */
  allPlaylistSongs?: Maybe<PlaylistSongsConnection>;
  /** Reads and enables pagination through a set of `Playlist`. */
  allPlaylists?: Maybe<PlaylistsConnection>;
  /** Reads and enables pagination through a set of `Song`. */
  allSongs?: Maybe<SongsConnection>;
  /** Reads and enables pagination through a set of `User`. */
  allUsers?: Maybe<UsersConnection>;
  /** Reads a single `Artist` using its globally unique `ID`. */
  artist?: Maybe<Artist>;
  artistById?: Maybe<Artist>;
  /** Reads a single `Favorite` using its globally unique `ID`. */
  favorite?: Maybe<Favorite>;
  favoriteByUserIdAndSongId?: Maybe<Favorite>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID']['output'];
  /** Reads a single `Playlist` using its globally unique `ID`. */
  playlist?: Maybe<Playlist>;
  playlistById?: Maybe<Playlist>;
  /** Reads a single `PlaylistSong` using its globally unique `ID`. */
  playlistSong?: Maybe<PlaylistSong>;
  playlistSongByPlaylistIdAndSongId?: Maybe<PlaylistSong>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** Reads a single `Song` using its globally unique `ID`. */
  song?: Maybe<Song>;
  songById?: Maybe<Song>;
  /** Reads a single `User` using its globally unique `ID`. */
  user?: Maybe<User>;
  userById?: Maybe<User>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllArtistsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ArtistCondition>;
  filter?: InputMaybe<ArtistFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ArtistsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllFavoritesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<FavoriteCondition>;
  filter?: InputMaybe<FavoriteFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FavoritesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllPlaylistSongsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<PlaylistSongCondition>;
  filter?: InputMaybe<PlaylistSongFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PlaylistSongsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllPlaylistsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<PlaylistCondition>;
  filter?: InputMaybe<PlaylistFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PlaylistsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllSongsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<SongCondition>;
  filter?: InputMaybe<SongFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SongsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllUsersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserCondition>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryArtistArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryArtistByIdArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryFavoriteArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryFavoriteByUserIdAndSongIdArgs = {
  songId: Scalars['UUID']['input'];
  userId: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryPlaylistArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryPlaylistByIdArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryPlaylistSongArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryPlaylistSongByPlaylistIdAndSongIdArgs = {
  playlistId: Scalars['UUID']['input'];
  songId: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QuerySongArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QuerySongByIdArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserByIdArgs = {
  id: Scalars['UUID']['input'];
};

export type Song = Node & {
  __typename?: 'Song';
  /** Reads a single `Artist` that is related to this `Song`. */
  artistByArtistId?: Maybe<Artist>;
  artistId: Scalars['UUID']['output'];
  duration: Scalars['Int']['output'];
  /** Reads and enables pagination through a set of `Favorite`. */
  favoritesBySongId: FavoritesConnection;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads and enables pagination through a set of `PlaylistSong`. */
  playlistSongsBySongId: PlaylistSongsConnection;
};

export type SongFavoritesBySongIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<FavoriteCondition>;
  filter?: InputMaybe<FavoriteFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FavoritesOrderBy>>;
};

export type SongPlaylistSongsBySongIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<PlaylistSongCondition>;
  filter?: InputMaybe<PlaylistSongFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PlaylistSongsOrderBy>>;
};

/** A condition to be used against `Song` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type SongCondition = {
  /** Checks for equality with the object’s `artistId` field. */
  artistId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `duration` field. */
  duration?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `Song` object types. All fields are combined with a logical ‘and.’ */
export type SongFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<SongFilter>>;
  /** Filter by the object’s `artistByArtistId` relation. */
  artistByArtistId?: InputMaybe<ArtistFilter>;
  /** Filter by the object’s `artistId` field. */
  artistId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `duration` field. */
  duration?: InputMaybe<IntFilter>;
  /** Filter by the object’s `favoritesBySongId` relation. */
  favoritesBySongId?: InputMaybe<SongToManyFavoriteFilter>;
  /** Some related `favoritesBySongId` exist. */
  favoritesBySongIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<SongFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<SongFilter>>;
  /** Filter by the object’s `playlistSongsBySongId` relation. */
  playlistSongsBySongId?: InputMaybe<SongToManyPlaylistSongFilter>;
  /** Some related `playlistSongsBySongId` exist. */
  playlistSongsBySongIdExist?: InputMaybe<Scalars['Boolean']['input']>;
};

/** An input for mutations affecting `Song` */
export type SongInput = {
  artistId: Scalars['UUID']['input'];
  duration: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['UUID']['input']>;
  name: Scalars['String']['input'];
};

/** Represents an update to a `Song`. Fields that are set will be updated. */
export type SongPatch = {
  artistId?: InputMaybe<Scalars['UUID']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against many `Favorite` object types. All fields are combined with a logical ‘and.’ */
export type SongToManyFavoriteFilter = {
  /** Every related `Favorite` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<FavoriteFilter>;
  /** No related `Favorite` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<FavoriteFilter>;
  /** Some related `Favorite` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<FavoriteFilter>;
};

/** A filter to be used against many `PlaylistSong` object types. All fields are combined with a logical ‘and.’ */
export type SongToManyPlaylistSongFilter = {
  /** Every related `PlaylistSong` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<PlaylistSongFilter>;
  /** No related `PlaylistSong` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<PlaylistSongFilter>;
  /** Some related `PlaylistSong` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<PlaylistSongFilter>;
};

/** A connection to a list of `Song` values. */
export type SongsConnection = {
  __typename?: 'SongsConnection';
  /** A list of edges which contains the `Song` and cursor to aid in pagination. */
  edges: Array<SongsEdge>;
  /** A list of `Song` objects. */
  nodes: Array<Maybe<Song>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Song` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Song` edge in the connection. */
export type SongsEdge = {
  __typename?: 'SongsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Song` at the end of the edge. */
  node?: Maybe<Song>;
};

/** Methods to use when ordering `Song`. */
export enum SongsOrderBy {
  ArtistIdAsc = 'ARTIST_ID_ASC',
  ArtistIdDesc = 'ARTIST_ID_DESC',
  DurationAsc = 'DURATION_ASC',
  DurationDesc = 'DURATION_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
  distinctFromInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Ends with the specified string (case-sensitive). */
  endsWith?: InputMaybe<Scalars['String']['input']>;
  /** Ends with the specified string (case-insensitive). */
  endsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value (case-insensitive). */
  equalToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['String']['input']>;
  /** Greater than the specified value (case-insensitive). */
  greaterThanInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Greater than or equal to the specified value (case-insensitive). */
  greaterThanOrEqualToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Included in the specified list (case-insensitive). */
  inInsensitive?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Contains the specified string (case-sensitive). */
  includes?: InputMaybe<Scalars['String']['input']>;
  /** Contains the specified string (case-insensitive). */
  includesInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['String']['input']>;
  /** Less than the specified value (case-insensitive). */
  lessThanInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Less than or equal to the specified value (case-insensitive). */
  lessThanOrEqualToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Matches the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  like?: InputMaybe<Scalars['String']['input']>;
  /** Matches the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  likeInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
  notDistinctFromInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Does not end with the specified string (case-sensitive). */
  notEndsWith?: InputMaybe<Scalars['String']['input']>;
  /** Does not end with the specified string (case-insensitive). */
  notEndsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to the specified value (case-insensitive). */
  notEqualToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Not included in the specified list (case-insensitive). */
  notInInsensitive?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Does not contain the specified string (case-sensitive). */
  notIncludes?: InputMaybe<Scalars['String']['input']>;
  /** Does not contain the specified string (case-insensitive). */
  notIncludesInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Does not match the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLike?: InputMaybe<Scalars['String']['input']>;
  /** Does not match the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLikeInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Does not start with the specified string (case-sensitive). */
  notStartsWith?: InputMaybe<Scalars['String']['input']>;
  /** Does not start with the specified string (case-insensitive). */
  notStartsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Starts with the specified string (case-sensitive). */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** Starts with the specified string (case-insensitive). */
  startsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
};

/** The root subscription type: contains realtime events you can subscribe to with the `subscription` operation. */
export type Subscription = {
  __typename?: 'Subscription';
  listen: ListenPayload;
};

/** The root subscription type: contains realtime events you can subscribe to with the `subscription` operation. */
export type SubscriptionListenArgs = {
  topic: Scalars['String']['input'];
};

/** A filter to be used against UUID fields. All fields are combined with a logical ‘and.’ */
export type UuidFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['UUID']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['UUID']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['UUID']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['UUID']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['UUID']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['UUID']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['UUID']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['UUID']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['UUID']['input']>>;
};

/** All input for the `updateArtistById` mutation. */
export type UpdateArtistByIdInput = {
  /** An object where the defined keys will be set on the `Artist` being updated. */
  artistPatch: ArtistPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** All input for the `updateArtist` mutation. */
export type UpdateArtistInput = {
  /** An object where the defined keys will be set on the `Artist` being updated. */
  artistPatch: ArtistPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Artist` to be updated. */
  nodeId: Scalars['ID']['input'];
};

/** The output of our update `Artist` mutation. */
export type UpdateArtistPayload = {
  __typename?: 'UpdateArtistPayload';
  /** The `Artist` that was updated by this mutation. */
  artist?: Maybe<Artist>;
  /** An edge for our `Artist`. May be used by Relay 1. */
  artistEdge?: Maybe<ArtistsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our update `Artist` mutation. */
export type UpdateArtistPayloadArtistEdgeArgs = {
  orderBy?: InputMaybe<Array<ArtistsOrderBy>>;
};

/** All input for the `updateFavoriteByUserIdAndSongId` mutation. */
export type UpdateFavoriteByUserIdAndSongIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `Favorite` being updated. */
  favoritePatch: FavoritePatch;
  songId: Scalars['UUID']['input'];
  userId: Scalars['UUID']['input'];
};

/** All input for the `updateFavorite` mutation. */
export type UpdateFavoriteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `Favorite` being updated. */
  favoritePatch: FavoritePatch;
  /** The globally unique `ID` which will identify a single `Favorite` to be updated. */
  nodeId: Scalars['ID']['input'];
};

/** The output of our update `Favorite` mutation. */
export type UpdateFavoritePayload = {
  __typename?: 'UpdateFavoritePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Favorite` that was updated by this mutation. */
  favorite?: Maybe<Favorite>;
  /** An edge for our `Favorite`. May be used by Relay 1. */
  favoriteEdge?: Maybe<FavoritesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Song` that is related to this `Favorite`. */
  songBySongId?: Maybe<Song>;
  /** Reads a single `User` that is related to this `Favorite`. */
  userByUserId?: Maybe<User>;
};

/** The output of our update `Favorite` mutation. */
export type UpdateFavoritePayloadFavoriteEdgeArgs = {
  orderBy?: InputMaybe<Array<FavoritesOrderBy>>;
};

/** All input for the `updatePlaylistById` mutation. */
export type UpdatePlaylistByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Playlist` being updated. */
  playlistPatch: PlaylistPatch;
};

/** All input for the `updatePlaylist` mutation. */
export type UpdatePlaylistInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Playlist` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Playlist` being updated. */
  playlistPatch: PlaylistPatch;
};

/** The output of our update `Playlist` mutation. */
export type UpdatePlaylistPayload = {
  __typename?: 'UpdatePlaylistPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Playlist` that was updated by this mutation. */
  playlist?: Maybe<Playlist>;
  /** An edge for our `Playlist`. May be used by Relay 1. */
  playlistEdge?: Maybe<PlaylistsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Playlist`. */
  userByCreatorId?: Maybe<User>;
};

/** The output of our update `Playlist` mutation. */
export type UpdatePlaylistPayloadPlaylistEdgeArgs = {
  orderBy?: InputMaybe<Array<PlaylistsOrderBy>>;
};

/** All input for the `updatePlaylistSongByPlaylistIdAndSongId` mutation. */
export type UpdatePlaylistSongByPlaylistIdAndSongIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  playlistId: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `PlaylistSong` being updated. */
  playlistSongPatch: PlaylistSongPatch;
  songId: Scalars['UUID']['input'];
};

/** All input for the `updatePlaylistSong` mutation. */
export type UpdatePlaylistSongInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `PlaylistSong` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `PlaylistSong` being updated. */
  playlistSongPatch: PlaylistSongPatch;
};

/** The output of our update `PlaylistSong` mutation. */
export type UpdatePlaylistSongPayload = {
  __typename?: 'UpdatePlaylistSongPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Playlist` that is related to this `PlaylistSong`. */
  playlistByPlaylistId?: Maybe<Playlist>;
  /** The `PlaylistSong` that was updated by this mutation. */
  playlistSong?: Maybe<PlaylistSong>;
  /** An edge for our `PlaylistSong`. May be used by Relay 1. */
  playlistSongEdge?: Maybe<PlaylistSongsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Song` that is related to this `PlaylistSong`. */
  songBySongId?: Maybe<Song>;
};

/** The output of our update `PlaylistSong` mutation. */
export type UpdatePlaylistSongPayloadPlaylistSongEdgeArgs = {
  orderBy?: InputMaybe<Array<PlaylistSongsOrderBy>>;
};

/** All input for the `updateSongById` mutation. */
export type UpdateSongByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Song` being updated. */
  songPatch: SongPatch;
};

/** All input for the `updateSong` mutation. */
export type UpdateSongInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Song` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Song` being updated. */
  songPatch: SongPatch;
};

/** The output of our update `Song` mutation. */
export type UpdateSongPayload = {
  __typename?: 'UpdateSongPayload';
  /** Reads a single `Artist` that is related to this `Song`. */
  artistByArtistId?: Maybe<Artist>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Song` that was updated by this mutation. */
  song?: Maybe<Song>;
  /** An edge for our `Song`. May be used by Relay 1. */
  songEdge?: Maybe<SongsEdge>;
};

/** The output of our update `Song` mutation. */
export type UpdateSongPayloadSongEdgeArgs = {
  orderBy?: InputMaybe<Array<SongsOrderBy>>;
};

/** All input for the `updateUserById` mutation. */
export type UpdateUserByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
};

/** All input for the `updateUser` mutation. */
export type UpdateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `User` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
};

/** The output of our update `User` mutation. */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was updated by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};

/** The output of our update `User` mutation. */
export type UpdateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

export type User = Node & {
  __typename?: 'User';
  coordinates?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  email: Scalars['String']['output'];
  /** Reads and enables pagination through a set of `Favorite`. */
  favoritesByUserId: FavoritesConnection;
  id: Scalars['UUID']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  password: Scalars['String']['output'];
  /** Reads and enables pagination through a set of `Playlist`. */
  playlistsByCreatorId: PlaylistsConnection;
  userName: Scalars['String']['output'];
};

export type UserFavoritesByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<FavoriteCondition>;
  filter?: InputMaybe<FavoriteFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FavoritesOrderBy>>;
};

export type UserPlaylistsByCreatorIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<PlaylistCondition>;
  filter?: InputMaybe<PlaylistFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PlaylistsOrderBy>>;
};

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `coordinates` field. */
  coordinates?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** Checks for equality with the object’s `email` field. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `password` field. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `userName` field. */
  userName?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `User` object types. All fields are combined with a logical ‘and.’ */
export type UserFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<UserFilter>>;
  /** Filter by the object’s `coordinates` field. */
  coordinates?: InputMaybe<FloatListFilter>;
  /** Filter by the object’s `email` field. */
  email?: InputMaybe<StringFilter>;
  /** Filter by the object’s `favoritesByUserId` relation. */
  favoritesByUserId?: InputMaybe<UserToManyFavoriteFilter>;
  /** Some related `favoritesByUserId` exist. */
  favoritesByUserIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<UserFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<UserFilter>>;
  /** Filter by the object’s `password` field. */
  password?: InputMaybe<StringFilter>;
  /** Filter by the object’s `playlistsByCreatorId` relation. */
  playlistsByCreatorId?: InputMaybe<UserToManyPlaylistFilter>;
  /** Some related `playlistsByCreatorId` exist. */
  playlistsByCreatorIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `userName` field. */
  userName?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `User` */
export type UserInput = {
  coordinates?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['UUID']['input']>;
  password: Scalars['String']['input'];
  userName: Scalars['String']['input'];
};

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  coordinates?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against many `Favorite` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyFavoriteFilter = {
  /** Every related `Favorite` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<FavoriteFilter>;
  /** No related `Favorite` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<FavoriteFilter>;
  /** Some related `Favorite` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<FavoriteFilter>;
};

/** A filter to be used against many `Playlist` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyPlaylistFilter = {
  /** Every related `Playlist` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<PlaylistFilter>;
  /** No related `Playlist` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<PlaylistFilter>;
  /** Some related `Playlist` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<PlaylistFilter>;
};

/** A connection to a list of `User` values. */
export type UsersConnection = {
  __typename?: 'UsersConnection';
  /** A list of edges which contains the `User` and cursor to aid in pagination. */
  edges: Array<UsersEdge>;
  /** A list of `User` objects. */
  nodes: Array<Maybe<User>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `User` edge in the connection. */
export type UsersEdge = {
  __typename?: 'UsersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `User` at the end of the edge. */
  node?: Maybe<User>;
};

/** Methods to use when ordering `User`. */
export enum UsersOrderBy {
  CoordinatesAsc = 'COORDINATES_ASC',
  CoordinatesDesc = 'COORDINATES_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PasswordAsc = 'PASSWORD_ASC',
  PasswordDesc = 'PASSWORD_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UserNameAsc = 'USER_NAME_ASC',
  UserNameDesc = 'USER_NAME_DESC',
}
