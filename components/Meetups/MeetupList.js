import MeetupItem from "./MeetupItem";

export default function MeetupList(props) {
    return (
        <ul>
            {props.meetups.map(item => <MeetupItem key={item.id} />)}
        </ul>
    )
}