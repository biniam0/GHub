import usePlatforms from "./usePlatforms";

const usePlatform = (
  id?: number
) => {
const { data, error } = usePlatforms();
  const selectedPlatform = data?.results.find((p) => p.id === id);
  return {data, error, selectedPlatform}
};

export default usePlatform;
