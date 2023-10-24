import { MongoClient, ObjectId } from "mongodb";
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
  const client = await MongoClient.connect(
    "mongodb+srv://deepak:bholenath1atlaslatest@reactcluster.oivma2q.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection
    .find({})
    .project({ _id: 1 })
    .toArray();
  client.close();

  return {
    fallback: true,
    paths: meetups.map((item) => {
      return {
        params: {
          meetupId: item._id.toString(),
        },
      };
    }),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://deepak:bholenath1atlaslatest@reactcluster.oivma2q.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });
  client.close();

  return {
    props: {
      meetupData: {
        id: meetup._id,
        image: meetup.image,
        title: meetup.title,
        description: meetup.description,
        address: meetup.address,
      },
    },
    revalidate: 10, // Time in seconds
  };
}

export default DetailsPage;
