interface UserProps {
  name: string;
}

const User = ({ name }: UserProps) => {
  return (
    <div className="contact-container">
      <h2>{name}</h2>
      <h3>Made with React</h3>
    </div>
  );
};

export default User;
