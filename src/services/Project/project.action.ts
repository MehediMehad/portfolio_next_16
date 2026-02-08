import { request } from "../Meeting/meeting.action";
import { ProjectListResponse } from "@/types";



const getFeaturedProjectsAction = async () => {
    const { data } = await request<ProjectListResponse>("project/featured", { // /project/featured
        method: "GET",
        next: { tags: ["meetings"] },
    });

    return data;
}

export { getFeaturedProjectsAction }