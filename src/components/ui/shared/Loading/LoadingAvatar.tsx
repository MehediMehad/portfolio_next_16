import { Avatar, AvatarFallback, AvatarImage } from "../../avatar";

export const LoadingAvatar = () => {
  return (
    <button className="focus:outline-none" aria-label="User menu">
      <Avatar className="cursor-pointer ring-2 ring-primary/80 transition mt-0.5">
        {/* Placeholder user image */}
        <AvatarImage src="https://i.sstatic.net/l60Hf.png" alt="Loading user" />

        {/* Default initials fallback */}
        <AvatarFallback>
          {"NN"
            .split(" ")
            .map((n) => n[0])
            .join("") || "NN"}
        </AvatarFallback>
      </Avatar>
    </button>
  );
};
