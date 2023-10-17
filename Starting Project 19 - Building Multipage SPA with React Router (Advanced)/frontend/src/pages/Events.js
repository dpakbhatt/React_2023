import { useLoaderData, json, defer, Await } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
  const data = useLoaderData();
  const eventsData = data.events;
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={eventsData}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadData() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
    //   status: 500,
    // });
    json(
      { message: "Could not fetch events" },
      {
        status: 500,
      }
    );
  } else {
    const data = await response.json();
    return data.events;
  }
}

export function loader() {
  return defer({
    events: loadData(),
  });
}
