import { useProfile } from "../context/ProfileContext";
type HeaderProps = {
    title: string;
    userName: string;
};
function Header({title, userName}: HeaderProps) {
    const{savedProfile} = useProfile();
    const displayName = savedProfile ?.name ?? userName;
    return( 
    <div>
        <h1>{title}</h1>
        <h2>Welcome, {displayName}</h2>
    </div>
);
}
export default Header;