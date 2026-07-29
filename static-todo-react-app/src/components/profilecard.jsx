export default function ProfileCard({ name, age, bio }) {
    return (
        <div className="profile-card">
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Bio: {bio}</p>
        </div>
    );
}