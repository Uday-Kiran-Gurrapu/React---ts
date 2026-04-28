import { useProfile } from "../context/ProfileContext";

type HeaderProps = {
  title: string;
  userName: string;
};

function Header({ title, userName }: HeaderProps) {
  const { savedProfile } = useProfile();
  const displayName = savedProfile?.name ?? userName;

  return (
    <div>
      <h1 className="text-2xl font-bold text-white tracking-tight">{title}</h1>
      <p className="text-sm text-gray-400 mt-0.5">
        Welcome back,{" "}
        <span className="text-indigo-400 font-medium">{displayName}</span>
      </p>
    </div>
  );
}

export default Header;
