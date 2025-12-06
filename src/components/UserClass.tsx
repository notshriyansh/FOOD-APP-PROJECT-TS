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
      <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg p-6 mt-8 text-center hover:scale-105 transition-transform duration-300">
        <img
          className="w-32 h-32 rounded-full mx-auto shadow-md object-cover"
          src={avatar_url}
          alt={name}
        />
        <h1 className="text-2xl font-bold text-brand-primary mt-4">
          Name: {name}
        </h1>
        <h2 className="text-gray-500 mt-2">Location: {location}</h2>
      </div>
    );
  }
}

export default UserClass;
