import useTrailers from "../hooks/useTrailers";

interface GameTrailerProps {
  gameId: number;
}

const GameTrailer = ({ gameId }: GameTrailerProps) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;
  if (error) throw error;

  const base = data?.results[0];

  return base ? (
    <video src={base.data[480]} poster={base.preview} controls />
  ) : null;
};

export default GameTrailer;
