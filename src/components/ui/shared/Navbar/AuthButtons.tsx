import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "../../avatar";

export const AuthButtons = ({ onClick }: { onClick?: () => void }) => {
  const { data: session } = useSession();

  if (!session?.user) {
    return (
      <Link
        href="/join"
        className="px-4 py-2 text-sm rounded-sm font-medium border border-primary/50 text-primary hover:bg-primary/10 transition-colors"
        onClick={onClick}
      >
        Join My Circle
      </Link>
    );
  }
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src={session.user.image || ""} />
        <AvatarFallback>
          {session.user.name
            ?.split(" ")
            .map((n) => n[0])
            .join("") || "NN"}
        </AvatarFallback>
      </Avatar>
      <button
        onClick={() => {
          signOut();
          onClick?.();
        }}
        className="px-4 py-2 text-sm rounded-sm font-medium border border-primary/50 text-primary hover:bg-primary/10 transition-colors"
      >
        Sign Out
      </button>
    </div>
  );
};
