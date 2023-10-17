import { useLoaderData, json, defer, Await } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
  const data = useLoaderData();
  const eventsList = data.eventsData;
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={eventsList}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadData() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
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
    eventsData: loadData(),
  });
}
