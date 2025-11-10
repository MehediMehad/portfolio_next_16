import { AuthButtons } from "@/components/ui/modules/Join/AuthButtons";

export default function JoinPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-max border border-primary/30 rounded-xl p-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Join My Circle
          </h1>
          <p className="text-muted-foreground mt-2">
            Connect with your preferred platform to get started
          </p>
        </div>

        <AuthButtons />
      </div>
    </div>
  );
}
