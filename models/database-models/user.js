const User = ({
  isOnboarded = null,
  profile = null,
  income = null,
  tax = null,
} = {}) => {
  return {
    isOnboarded: isOnboarded,
    profile: profile,
    income: income,
    tax: tax,
  };
}

export default User;
