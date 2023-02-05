// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Talk, User, Chat, ChatUser } = initSchema(schema);

export {
  Talk,
  User,
  Chat,
  ChatUser
};