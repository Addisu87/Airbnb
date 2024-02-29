import countries from "world-countries";

const countriesData = countries.map((item) => ({
  value: item.cca2,
  label: item.name.common,
  flag: item.flag,
  latLang: item.latlng,
  region: item.region,
}));

export const useCountries = () => {
  const getAllCountries = () => countriesData;

  const getCountryByValue = (value: string) => {
    return countriesData.find((item) => item.value === value);
  };

  return {
    getAllCountries,
    getCountryByValue,
  };
};
