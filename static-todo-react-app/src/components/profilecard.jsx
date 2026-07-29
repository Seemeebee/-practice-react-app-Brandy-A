export default function ProfileCard() {
    return (
        <div className="profile-card">
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Bio: {bio}</p>
        </div>
    );
}