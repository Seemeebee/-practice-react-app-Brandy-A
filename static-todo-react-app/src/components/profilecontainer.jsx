import ProfileCard from "./profilecard";

export default function ProfileContainer() {
    return (
        <div>
            <h1>User Profiles</h1>

            <ProfileCard
                name="Lexy"
                age="36"
                bio="Graphic Designer"
            />

            <ProfileCard
                name="Shawn"
                age="30"
                bio="A passionate developer."
                
            />
              <ProfileCard
                name="Ayla"
                age="19"
                bio="A Computer Science Student."
            />
        </div>
    );
}