const loadCountries = () => {

    fetch("https://restcountries.com/v3.1/all")
    .then(resp => resp.json())
    .then(data => displayCountries(data));
}


const displayCountries = countries => {
console.log(countries);
const allCountriesHTML = countries.map(country => getCountryHTML(country) );
const container = document.getElementById('countries');
container.innerHTML = allCountriesHTML.join('');

}

const getCountryHTML = ({name, flags, area, region}) => {
    // option 2
    return `
    <div class="country">
        <h2> ${name.common} </h2>
        <p> Area: ${area} </p>
        <p> Contient: ${region} </p>
        <img src="${flags.png}">
    </div>
    `
}




// const getCountryHTML = country => {
//     // original
//     return `
//     <div class="country">
//         <h2> ${country.name.common} </h2>
//         <img src="${country.flags.png}">
//     </div>
//     `
// }



// const getCountryHTML = country => {
//     // option 1
//     const {name, flags} = country;
//     return `
//     <div class="country">
//         <h2> ${name.common} </h2>
//         <img src="${flags.png}">
//     </div>
//     `
// }

loadCountries()
