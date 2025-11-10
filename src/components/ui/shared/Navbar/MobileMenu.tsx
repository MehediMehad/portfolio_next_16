import { useSession } from "next-auth/react";
interface MobileMenuProps {}
export const MobileMenu = ({}: MobileMenuProps) => {
  const { data: session } = useSession();

  return <></>;
};
