import z from "zod";

export const meetingSchema = z.object({
    date: z.string().datetime({ message: 'Invalid date format' }),

    startTime: z
        .string()
        .min(1, "Start time is required")
        .regex(/^\d{2}:\d{2}$/, "Start time must be in HH:MM format"),

    endTime: z
        .string()
        .min(1, "End time is required")
        .regex(/^\d{2}:\d{2}$/, "End time must be in HH:MM format"),

    title: z.string().min(2, "Title must be at least 2 characters long"),

    description: z
        .string()
        .max(500, "Description cannot exceed 500 characters"),

    platform: z.enum(["zoom", "google_meet"], {
        message: "Platform is required",
    }),

    agenda: z.enum(["Important", "Networking", "Casual", "Opportunity"], {
        message: "Meeting type is required",
    }),
})
    .refine(
        (data) => {
            // Compare start & end time
            const start = new Date(`2000-01-01T${data.startTime}:00`);
            const end = new Date(`2000-01-01T${data.endTime}:00`);
            return start < end;
        },
        {
            message: "End time must be later than start time",
            path: ["endTime"], // error attached to endTime field
        }
    );
