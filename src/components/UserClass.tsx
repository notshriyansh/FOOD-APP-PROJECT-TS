import React from "react";

interface UserClassState {
  userInfo: {
    name: string;
    location: string;
    avatar_url: string;
  };
}

class UserClass extends React.Component<{}, UserClassState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "ireland",
        avatar_url: "http://dummy-photo.com",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/notshriyansh");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} alt={name} />
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
      </div>
    );
  }
}

export default UserClass;
