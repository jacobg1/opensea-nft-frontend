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
        {nfts.map((n) => {
          return <h1 key={n.id}>{n.id}</h1>;
        })}
      </div>
    );
  }

  return null;
}

export default Display;
