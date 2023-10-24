import Head from "next/head";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  async function onAddMeetupHandler(enteredData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
  }

  return (
    <>
      <Head>
        <title>Add New Meetup</title>
        <meta name="description" content="Create your own meetups" />
      </Head>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </>
  );
}

export default NewMeetupPage;
