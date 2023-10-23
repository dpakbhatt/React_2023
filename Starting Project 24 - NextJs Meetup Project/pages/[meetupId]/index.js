import MeetupDetail from "../../components/meetups/MeetupDetail";

function DetailsPage(props) {
  return (
    <MeetupDetail
      title={props.meetupData.title}
      image={props.meetupData.image}
      description={props.meetupData.description}
      address={props.meetupData.address}
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  // fetch data from an API
  return {
    props: {
      meetupData: {
        image:
          "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
        title: "First Meetup",
        description: "This is first meetup",
        address: "Address 1, Street No. 1, City 1",
      },
    },
    revalidate: 10, // Time in seconds
  };
}

export default DetailsPage;
