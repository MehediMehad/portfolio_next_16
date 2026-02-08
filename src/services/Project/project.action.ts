import { request } from "../Meeting/meeting.action";
import { ProjectDetailsResponse, ProjectListResponse } from "@/types";



const getFeaturedProjectsAction = async () => {
    const { data } = await request<ProjectListResponse>("project/featured", { // /project/featured
        method: "GET",
        next: { tags: ["meetings"] },
    });

    return data;
}

const getProjectDetailsByIdAction = async (id: string) => {
    const { data } = await request<ProjectDetailsResponse>(`project/details/${id}`, {
        method: "GET",
        next: { tags: ["meetings"] },
    });

    return data;
}

export { getFeaturedProjectsAction, getProjectDetailsByIdAction }