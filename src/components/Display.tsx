import { useAppDispatch, useAppSelector } from "../redux/hooks";

function Display() {
  const getNfts = useAppSelector((state) => state.art.nfts);

  const nfts = getNfts.length
    ? getNfts.map((n) => {
        return <h1 key={n.id}>{n.id}</h1>;
      })
    : null;

  return <div>{nfts}</div>;
}

export default Display;
