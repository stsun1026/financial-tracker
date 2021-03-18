const Income = ({
  regular = null,
  capitalGains = null,
  eligibleDividends = null,
  foreign = null,
  interest = null,
  regularLastUpdated = null,
} = {}) => {
  return {
    regular: regular,
    capitalGains: capitalGains,
    eligibleDividends: eligibleDividends,
    foreign: foreign,
    interest: interest,
    regularLastUpdated: regularLastUpdated
  };
}

export default Income;
