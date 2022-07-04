import { Fragment } from "react"
import Navbar from "../../components/Layout/Navbar"
import NewMeetupForm from "../../components/Meetups/NewMeetupForm"

export default function NewMeetup() {
    return (
        <Fragment>
            <Navbar />
            <NewMeetupForm />
        </Fragment>
    )
}