import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    address: "Address 1, Street No. 1, City 1",
    description: "This is first meetup",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    address: "Address 2, Street No. 2, City 2",
    description: "This is second meetup",
  },
  {
    id: "m3",
    title: "Third Meetup",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    address: "Address 3, Street No. 3, City 3",
    description: "This is third meetup",
  },
  {
    id: "m4",
    title: "Fourth Meetup",
    image:
      "https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNpdHl8ZW58MHx8MHx8fDA%3D",
    address: "Address 4, Street No. 4, City 4",
    description: "This is fourth meetup",
  },
];
function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
