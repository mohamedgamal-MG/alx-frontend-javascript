function getCurrentYear() {
    const date = new Date;
    return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
    const buget = {
        [`income-${getCurrentYear()}`]: income,
        [`gdp-${getCurrentYear()}`]: gdp,
        [`capita-${getCurrentYear()}`]: capita
    };

    return buget;
}
