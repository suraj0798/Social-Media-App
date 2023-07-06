import React, {useContext} from 'react'
import { UserContext } from "../context";
import { useRouter } from 'next/router';
import moment from 'moment';

const PeopleComp = ({people}) => {
    const defaultImage = "https://cdn-icons-png.flaticon.com/512/149/149071.png"
    
  return (
    <div className="mt-4">
      <h5>Suggestions:</h5>
      {/* <div>{JSON.stringify(people, null, 4)}</div> */}
      {people.map((user) => (
        <div className="card m-1 p-3" key={user._id}>
          <div className="d-flex align-items-center justify-content-between">
            <img
              src={user.image && user.image.url ? user.image.url : defaultImage}
              alt={user.name}
              height={50}
              width={50}
              style={{ borderRadius: "50%" }}
            />
            <h6 className="mt-2" style={{ marginLeft: "-180px" }}>
              {user.name}
            </h6>
            <button className="btn btn-primary">Follow</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PeopleComp;