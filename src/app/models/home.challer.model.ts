export interface VideoOption {
  isPlay: boolean;
  isMuted: boolean;
}

export interface AbilitiesModel {
  abilityCode: string;
  challengeId: number;
  createDate: string;
  id: number;
  name: string;
  userId: number;
}

export interface HomeChallerModel {
  'idSeq': number;
  'challengeId': number;
  'nameChallenge': string;
  'nameVideo': string;
  'statusChallenge': string;
  'userprofileOwnerChallengeId': number;
  'userprofileInvitedChallengeId': number;
  'nameOwnerChallenge': string;
  'lastNameOwnerChallenge': string;
  'qtyLikes': number;
  'qtyComments': number;
  'userchallengeshowId': number;
  'showLikesComments': boolean;
  'imageCategoryUrl': string;
  'imageSelectedUrl': string;
  'imagePreviewUrl': string;
  'tutorialVideo': string;
  'invitedVideo': string; // null
  'imagePreviewTutorial': string;
  'imagePreviewInvited': string;
  'likedByMe': boolean;
  'imageUserCreator': string;
  'imageUserInvited': string;
  'timer': {
    'timeSystem': string;
    'timeEnd': string;
  };
  'finalDate': string;
  'votePublicFinalDate': string;
  'statusCode': string;
  'userNameInvited': string;
  'nicknameInvited': string;
  'nicknameOwner': string;
  'votedByMe': boolean;
  'qtyvotesOwnerChallenge': number;
  'qtyvotesInvitedChallenge': number;
  'showVotes': boolean;
  'videoOptions': VideoOption;
  'abilities': Array<AbilitiesModel>;
}
