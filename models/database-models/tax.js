const Tax = ({
  marginalAmount = null,
  marginalRate = null,
  foreignAmount = null,
  foreignRate = null,
  eligibleAmount = null,
  eligibleRate = null,
  nonEligibleAmount = null,
  nonEligibleRate = null,
  interestAmount = null,
  interestRate = null,
} = {}) => {
  return {
    marginalAmount: marginalAmount,
    marginalRate: marginalRate,
    foreignAmount: foreignAmount,
    foreignRate: foreignRate,
    eligibleAmount: eligibleAmount,
    eligibleRate: eligibleRate,
    nonEligibleAmount: nonEligibleAmount,
    nonEligibleRate: nonEligibleRate,
    interestAmount: interestAmount,
    interestRate: interestRate,
  };
}

export default Tax;
