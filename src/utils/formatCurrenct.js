export const formotCurrency = (currency)=>{
    return new Intl.NumberFormat('en-IN').format(currency);
}