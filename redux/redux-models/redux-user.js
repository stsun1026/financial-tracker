export const ReduxUser = ({
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

export default ReduxUser;
