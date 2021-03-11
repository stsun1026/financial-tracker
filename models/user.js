export const User = ({
  name,
  id,
  error = null,
}) => {
  return {
    name: name,
    id: id,
    error: error,
  };
}

export default User;
