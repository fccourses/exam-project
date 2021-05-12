const {
  env: {
    SQUADHELP_BANK_NUMBER,
    SQUADHELP_BANK_NAME,
    SQUADHELP_BANK_CVC,
    SQUADHELP_BANK_EXPIRY,
    REFRESH_TOKEN_SECRET,
    ACCESS_TOKEN_SECRET,
    ACCESS_TOKEN_TIME,
    REFRESH_TOKEN_TIME,
  },
} = process;

module.exports = {
  REFRESH_TOKEN_SECRET,
  ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_TIME,
  REFRESH_TOKEN_TIME,

  MAX_DEVICES_AMOUNT: 3,
  SALT_ROUNDS: 5,

  SQUADHELP_BANK_NUMBER,
  SQUADHELP_BANK_NAME,
  SQUADHELP_BANK_CVC,
  SQUADHELP_BANK_EXPIRY,

  CUSTOMER: 'customer',
  CREATOR: 'creator',

  CREATOR_ENTRIES: 'creator_entries',

  CONTESTS_DEFAULT_DIR: 'public/contestFiles/',

  NAME_CONTEST: 'name',
  LOGO_CONTEST: 'logo',
  TAGLINE_CONTEST: 'tagline',

  CONTEST_STATUS_ACTIVE: 'active',
  CONTEST_STATUS_FINISHED: 'finished',
  CONTEST_STATUS_PENDING: 'pending',

  OFFER_STATUS_PENDING: 'pending',
  OFFER_STATUS_REJECTED: 'rejected',
  OFFER_STATUS_WON: 'won',

  FILES_PATH: 'public/',
  SOCKET_CONNECTION: 'connection',
  SOCKET_SUBSCRIBE: 'subscribe',
  SOCKET_UNSUBSCRIBE: 'unsubscribe',
  NOTIFICATION_ENTRY_CREATED: 'onEntryCreated',
  NOTIFICATION_CHANGE_MARK: 'changeMark',
  NOTIFICATION_CHANGE_OFFER_STATUS: 'changeOfferStatus',
  NEW_MESSAGE: 'newMessage',
  CHANGE_BLOCK_STATUS: 'CHANGE_BLOCK_STATUS',
  MESSAGE_NOTIFICATION:"messageNotification",
};
