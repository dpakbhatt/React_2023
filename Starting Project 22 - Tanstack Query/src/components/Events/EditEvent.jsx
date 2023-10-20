import {
  Link,
  useNavigate,
  useParams,
  redirect,
  useSubmit,
  useNavigation,
} from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchEvent, queryClient, updateEvent } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
  const navigate = useNavigate();
  const params = useParams();
  const eventId = params.id;
  const submit = useSubmit();
  const { state } = useNavigation();

  const { data, isError, error } = useQuery({
    queryKey: ["events", { id: eventId }],
    queryFn: ({ signal }) => fetchEvent({ signal, id: eventId }),
    staleTime: 10000,
  });

  // const { mutate } = useMutation({
  //   mutationFn: updateEvent,
  //   onMutate: async (data) => {
  //     const newData = data.event;

  //     await queryClient.cancelQueries({
  //       queryKey: ["events", { id: eventId }],
  //     });

  //     const previousData = queryClient.getQueryData([
  //       "events",
  //       { id: eventId },
  //     ]);
  //     queryClient.setQueryData(["events", { id: eventId }], newData);
  //     return { previousData };
  //   },
  //   onError: (error, data, context) => {
  //     queryClient.setQueryData(
  //       ["events", { id: eventId }],
  //       context.previousData
  //     );
  //   },
  //   onSettled: () => {
  //     queryClient.invalidateQueries(["events", { id: eventId }]);
  //   },
  // });

  function handleSubmit(formData) {
    // mutate({ id: eventId, event: formData });
    // navigate("../");
    submit(formData, {
      method: "PUT",
    });
  }

  function handleClose() {
    navigate("../");
  }

  let content;

  if (isError) {
    content = (
      <>
        <ErrorBlock
          title="Failed to load event"
          message={error.info?.message || "Failed to fetch event details"}
        />
        <div className="form-actions">
          <Link to="../" className="button">
            Okay
          </Link>
        </div>
      </>
    );
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        {state === "submitting" ? (
          <p>Sending data...</p>
        ) : (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Update
            </button>
          </>
        )}
      </EventForm>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}

export function loader({ params }) {
  return queryClient.fetchQuery({
    queryKey: ["events", { id: params.id }],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updatedFormData = Object.fromEntries(formData);
  await updateEvent({ id: params.id, event: updatedFormData });
  await queryClient.invalidateQueries(["events"]);
  return redirect("../");
}
