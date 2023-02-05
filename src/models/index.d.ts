import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerTalk = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Talk, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly chatID: string;
  readonly User?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly talkUserId?: string | null;
}

type LazyTalk = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Talk, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly chatID: string;
  readonly User: AsyncItem<User | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly talkUserId?: string | null;
}

export declare type Talk = LazyLoading extends LazyLoadingDisabled ? EagerTalk : LazyTalk

export declare const Talk: (new (init: ModelInit<Talk>) => Talk) & {
  copyOf(source: Talk, mutator: (draft: MutableModel<Talk>) => MutableModel<Talk> | void): Talk;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly account: string;
  readonly name?: string | null;
  readonly profile?: string | null;
  readonly icon?: string | null;
  readonly chats?: (ChatUser | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly account: string;
  readonly name?: string | null;
  readonly profile?: string | null;
  readonly icon?: string | null;
  readonly chats: AsyncCollection<ChatUser>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerChat = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Chat, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly questioner?: User | null;
  readonly answerer?: User | null;
  readonly Talks?: (Talk | null)[] | null;
  readonly title?: string | null;
  readonly watchers?: (ChatUser | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatQuestionerId?: string | null;
  readonly chatAnswererId?: string | null;
}

type LazyChat = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Chat, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly questioner: AsyncItem<User | undefined>;
  readonly answerer: AsyncItem<User | undefined>;
  readonly Talks: AsyncCollection<Talk>;
  readonly title?: string | null;
  readonly watchers: AsyncCollection<ChatUser>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatQuestionerId?: string | null;
  readonly chatAnswererId?: string | null;
}

export declare type Chat = LazyLoading extends LazyLoadingDisabled ? EagerChat : LazyChat

export declare const Chat: (new (init: ModelInit<Chat>) => Chat) & {
  copyOf(source: Chat, mutator: (draft: MutableModel<Chat>) => MutableModel<Chat> | void): Chat;
}

type EagerChatUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly chatId?: string | null;
  readonly user: User;
  readonly chat: Chat;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChatUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly chatId?: string | null;
  readonly user: AsyncItem<User>;
  readonly chat: AsyncItem<Chat>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ChatUser = LazyLoading extends LazyLoadingDisabled ? EagerChatUser : LazyChatUser

export declare const ChatUser: (new (init: ModelInit<ChatUser>) => ChatUser) & {
  copyOf(source: ChatUser, mutator: (draft: MutableModel<ChatUser>) => MutableModel<ChatUser> | void): ChatUser;
}