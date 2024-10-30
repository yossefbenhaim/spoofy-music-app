export const findAddressByCoordinates = (
  coordinates: number[]
): Promise<string> => {
  if (coordinates === null) return Promise.resolve('');
  const URL = `https://nominatim.openstreetmap.org/reverse?format=json&lon=${coordinates[0]}&lat=${coordinates[1]}`;
  return fetch(URL)
    .then((r) => r.json())
    .then((data) => {
      console.log({ data });
      const town = data.address.town ? data.address.town : '';
      const roadTown = data.address.road ? data.address.road : '';

      const city = data.address.city ? data.address.city : '';
      const roadCity = data.address.road ? data.address.road : '';

      return town ? town + ' - ' + roadTown : city + ' - ' + roadCity;
    })
    .catch((e) => e.message);
};
