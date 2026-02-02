type HeaderProps = {
    title: string;
    userName: string;
};
function Header({title, userName}: HeaderProps) {
    return( 
    <div>
        <h1>{title}</h1>
        <h2>Welcome, {userName}</h2>
    </div>
);
}
export default Header;