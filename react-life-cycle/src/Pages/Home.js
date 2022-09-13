import UserOptions from "../Components/UserOptions";
import UserList from "../Components/UserList";

const Home = () => {

    return (
        <div className="card">
            <div className="flex flex-column card-container pt-3 pb-3">
                <div className="flex align-items-center justify-content-center py-4">
                    <UserOptions />
                </div>
                <div className="flex align-items-center justify-content-center py-4">
                    <UserList />
                </div>
            </div>
        </div>
    );
}

export default Home;