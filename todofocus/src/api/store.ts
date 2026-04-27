export interface UserProfileResponse {
  img: string | null;
  profileName: string
}

export const fechUserProfile = (): UserProfileResponse => {
  return {
    img: 'https://www.vecteezy.com/free-png/avatar',
    profileName:'Jordan Huaman'
  }
}