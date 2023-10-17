import {
  Await,
  defer,
  json,
  redirect,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import { Suspense } from "react";
import EventsList from "../components/EventsList";

const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");
  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={data.eventData}>
          {(data) => <EventItem event={data} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={data.eventsData}>
          {(data) => <EventsList events={data} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventDetailPage;

async function loadEvent(id) {
  const response = await fetch(`http://localhost:8080/events/${id}`);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event" },
      {
        status: 500,
      }
    );
  } else {
    const data = await response.json();
    return data.event;
  }
}

async function loadEvents() {
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

export async function loader({ request, params }) {
  return defer({
    eventData: await loadEvent(params.eventId),
    eventsData: loadEvents(),
  });
}

export async function action({ request, params }) {
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`,
    {
      method: request.method,
    }
  );

  if (!response.ok) {
    throw json(
      { message: "Could not delete event" },
      {
        status: 500,
      }
    );
  }

  return redirect("/events");
}
