import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  function onAddMeetupHandler(enteredData) {
    console.log(enteredData);
  }

  return <NewMeetupForm onAddMeetup={onAddMeetupHandler} />;
}

export default NewMeetupPage;
