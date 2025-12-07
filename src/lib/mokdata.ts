export type MeetingType = "Important" | "Networking" | "Project Plan" | "Opportunity"

export interface Booking {
    id: string
    title: string
    description: string
    date: string // YYYY-MM-DD format
    time: string
    platform: "google-meet" | "zoom"
    type: MeetingType // Added meeting type field
}

const mockBookings: Booking[] = [
    {
        id: "1",
        title: "Team Standup",
        description: "Daily team sync",
        date: new Date().toISOString().split("T")[0],
        time: "09:00",
        platform: "google-meet",
        type: "Networking", // Added type
    },
    {
        id: "2",
        title: "Client Call",
        description: "Quarterly review",
        date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
        time: "14:00",
        platform: "zoom",
        type: "Important", // Added type
    },
]

export function getMockBookings() {
    return mockBookings
}

export function addMockBooking(booking: Booking) {
    mockBookings.push(booking)
}

export { mockBookings }
