// Asia and Europe in a single array using async and await.

async function asia_europe() {
  const data1 = await fetch("https://restcountries.eu/rest/v2/region/europe");
  const asia = await data1.json();

  const data2 = await fetch("https://restcountries.eu/rest/v2/region/asia");
  const europe = await data2.json();
  console.log(asia.concat(europe));
}

asia_europe();


// Spanish speaking countries in Europe using async and await

async function spanish() {
  const data3 = await fetch("https://restcountries.eu/rest/v2/lang/es");
  const countries = await data3.json();
  countries.filter((a) => {
    if (a.region == "Europe") {
      console.log(a.name);
    }
  })
}

spanish();
