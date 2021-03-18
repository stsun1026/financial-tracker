const Profile = ({
  province = null,
  lastLogin = null,
} = {}) => {
  return {
    province: province,
    lastLogin: lastLogin,
  };
}

export default Profile;
