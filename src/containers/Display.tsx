import SingleNft from "../components/SingleNft";
import { useAppSelector } from "../redux/hooks";

function Display() {
  const artState = useAppSelector((state) => state.art);

  const { loading, nfts } = artState;

  if (loading) {
    return <div>LOADING</div>;
  }

  if (nfts.length) {
    return (
      <div>
        {nfts.map(({ id, ...rest }) => {
          return <SingleNft key={id.toString()} {...rest} />;
        })}
      </div>
    );
  }

  return null;
}

export default Display;
