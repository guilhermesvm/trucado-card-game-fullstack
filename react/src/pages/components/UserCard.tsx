import { Button, Card } from "react-bootstrap";

interface User {
    id: number,
    name: string,
    email: string,
}

const UserCard: React.FC <{user: User}> = ({user}) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text><strong>Email:</strong>{user.email}</Card.Text>
                <Button variant="primary" color="black">Edit</Button>
            </Card.Body>
        </Card>
    );
}

export default UserCard;