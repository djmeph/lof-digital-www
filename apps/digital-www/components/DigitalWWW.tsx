import { useQuery } from "react-query";
import { DataCoalesce } from "../interfaces/coalesce";
import WwwEventComponent from "./WwwEvent";

export function DigitalWwwComponent() {
  const { isLoading, error, data } = useQuery<boolean, Error, DataCoalesce>('jsonFeed', async () => {
    const res = await fetch('/api/digital-www');
    return res.json();
  });

  if (isLoading) return (
    <div>Loading ...</div>
  );

  if (error) return (
    <div>An error has occured: {error.message}</div>
  )

  return (
    <>
      {data.coalesce.map((event) =>
        <WwwEventComponent event={event} key={event.event_id} />
      )}
    </>
  )
}

export default DigitalWwwComponent;
