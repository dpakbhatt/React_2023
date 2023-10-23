import MeetupDetail from "../../components/meetups/MeetupDetail";

function DetailsPage() {
  return (
    <MeetupDetail
      title="First Meetup"
      image="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D"
      description="This is first meetup"
      address="Address 1, Street No. 1, City 1"
    />
  );
}

export default DetailsPage;
