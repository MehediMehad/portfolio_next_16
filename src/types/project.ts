interface TUserRoleFeature {
    role: string;
    features: string[];
}

interface TProjectHighlight {
    title: string;
    description: string;
}

export interface TProject {
    id: string;

    title: string;
    subtitle: string;
    description: string;
    overview: string;

    type:
    | "personal"
    | "team"
    | "open_source"
    | "commercial"
    | "large_scale"
    | "ai"
    | "machine_learning"
    | "deep_learning"
    | "data_science"
    | "computer_vision"
    | "generative_ai"
    | "automation"
    | "research"
    | "prototype";

    category: "full_stack" | "frontend" | "backend" | "mobile";

    status: "IN_PROGRESS" | "COMPLETED";

    technologies: string[];
    features: string[];

    rolesFeatures: TUserRoleFeature[];
    highlights: TProjectHighlight[];

    image: string;
    liveUrl: string;
    frontendGitHubUrl: string;
    backendGitHubUrl: string;

    isDeleted: boolean;
    isFeatured: boolean;

    createdAt: string; // ISO Date string
    updatedAt: string; // ISO Date string
}

export interface ProjectListResponse {
    success: boolean;
    statusCode: number;
    message: string;
    data: TProject[];
}

export interface ProjectDetailsResponse {
    success: boolean;
    statusCode: number;
    message: string;
    data: TProject;
}