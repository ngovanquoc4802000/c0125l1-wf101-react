interface ExampleTs {
    firstName: string;
    lastName: string;
}

const user: ExampleTs = {
    firstName: 'Nhan',
    lastName: 'Nguyen',
}
function Example2() {
    function greeting(user: ExampleTs | null) {
        if (user) {
            return <h1>Xin chào {formatName(user)}</h1>
        } else {
            return <h1>Xin chào người lạ!</h1>
        }
    }
    const user1 = greeting(user);
    const user2 = greeting(null);
    function formatName(user: { firstName: string; lastName: string; }) {
        return `${user.firstName} ${user.lastName}`;
    }
    return (
        <>
            User name: {formatName(user)};
            {user1}
            {user2}
        </>
    )
}
export default Example2;