const FetchAutoCompleteRequestModel = ({
  query,
  region,
}) => {
  return {
    q: query,
    region: region,
  };
}

export default FetchAutoCompleteRequestModel;
