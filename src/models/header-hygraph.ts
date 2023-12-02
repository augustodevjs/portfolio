export type ProfilePicture = {
  profile: {
    width: number;
    height: number;
    url: string;
    fileName: string;
  }
}

export type HeaderHygraph = {
  values: ProfilePicture;
}