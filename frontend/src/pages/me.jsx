//halaman user pribadi
import Navbar2 from '../components/navbar';
// ada profile

export default function Me(properties){
    return (
        <div>
        <Navbar2/>
            <div className="m10">
                <h1>User Profile</h1>
                <div>
                    <p><strong>Username:</strong> {properties.user?.username}</p>
                    <p><strong>Email:</strong> {properties.user?.email}</p>
                    <p><strong>Full Name:</strong> {properties.user?.fullName}</p>
                </div>
            </div>
        </div>
    )
}

